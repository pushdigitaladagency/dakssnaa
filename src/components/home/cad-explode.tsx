import { useEffect, useRef } from "react";
import { Kicker } from "@/components/site/ui";
import { drawCover } from "@/lib/canvas";

const FRAME_COUNT = 50;
const frameUrl = (i: number) => `/cad-frames/frame_${String(i).padStart(3, "0")}.jpg`;

export function CadExplode() {
  const pinRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);

  // All screen sizes: pin the section and scrub through a still-frame sequence as the
  // user scrolls. Frames are plain cacheable image fetches — unlike a video
  // seek, there's no partial-content/Range-request dependency, so a host
  // that mishandles Range headers (as this one does) can't stall it.
  useEffect(() => {
    const pin = pinRef.current;
    const stage = stageRef.current;
    const canvas = canvasRef.current;
    if (!pin || !stage || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const images: (HTMLImageElement | undefined)[] = new Array(FRAME_COUNT + 1);
    const pending = new Map<number, Promise<void>>();
    let cancelled = false;

    const loadFrame = (i: number): Promise<void> => {
      if (images[i]) return Promise.resolve();
      const cached = pending.get(i);
      if (cached) return cached;
      const img = new Image();
      const p = new Promise<void>((resolve) => {
        img.onload = () => {
          images[i] = img;
          resolve();
        };
        img.onerror = () => resolve();
      });
      img.decoding = "async";
      img.src = frameUrl(i);
      pending.set(i, p);
      return p;
    };

    const nearestLoaded = (i: number): number | null => {
      for (let d = 0; d <= FRAME_COUNT; d++) {
        if (images[i - d]) return i - d;
        if (images[i + d]) return i + d;
      }
      return null;
    };

    let lastDrawn = -1;
    const drawFrame = (i: number) => {
      const target = images[i] ? i : nearestLoaded(i);
      if (target === null) return;
      const img = images[target];
      if (!img) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = stage.getBoundingClientRect();
      const w = Math.max(1, Math.round(rect.width * dpr));
      const h = Math.max(1, Math.round(rect.height * dpr));
      if (target === lastDrawn && canvas.width === w && canvas.height === h) return;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      drawCover(ctx, img, w, h);
      lastDrawn = target;
      if (target !== i && images[i] === undefined) void loadFrame(i);
    };

    if (reduce) {
      pin.style.height = "100svh";
      stage.style.position = "";
      stage.style.top = "";
      stage.style.bottom = "";
      stage.style.left = "";
      stage.style.right = "";
      stage.style.height = "";
      loadFrame(1).then(() => {
        if (!cancelled) drawFrame(1);
      });
      return () => {
        cancelled = true;
        pin.style.height = "";
      };
    }

    const apply = () => {
      const vh = stage.getBoundingClientRect().height;
      const range = Math.max(1, pin.offsetHeight - vh);
      const top = pin.getBoundingClientRect().top;
      const p = Math.min(1, Math.max(0, -top / range));

      if (top > 0) {
        stage.style.position = "absolute";
        stage.style.top = "0";
        stage.style.bottom = "auto";
      } else if (top <= -range) {
        stage.style.position = "absolute";
        stage.style.top = "auto";
        stage.style.bottom = "0";
      } else {
        stage.style.position = "fixed";
        stage.style.top = "0";
        stage.style.bottom = "auto";
      }
      stage.style.left = "0";
      stage.style.right = "0";
      stage.style.height = "100svh";

      const idx = Math.min(FRAME_COUNT, Math.max(1, Math.round(p * (FRAME_COUNT - 1)) + 1));
      drawFrame(idx);
      void loadFrame(idx);

      if (barRef.current) barRef.current.style.width = `${(p * 100).toFixed(1)}%`;
      if (labelRef.current) {
        labelRef.current.textContent =
          p >= 0.97 ? "Assembled" : p < 0.06 ? "Exploded view" : "Assembling";
      }
    };

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(apply);
    };

    loadFrame(1).then(() => {
      if (!cancelled) apply();
    });

    // Warm the rest of the sequence in the background so later frames are
    // already cached by the time the user scrolls to them.
    (async () => {
      const CONCURRENCY = 4;
      let next = 2;
      const worker = async () => {
        while (!cancelled) {
          const i = next++;
          if (i > FRAME_COUNT) return;
          await loadFrame(i);
        }
      };
      await Promise.all(Array.from({ length: CONCURRENCY }, worker));
    })();

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      // Release imperative positioning when the component unmounts.
      for (const property of ["position", "top", "bottom", "left", "right", "height"]) {
        stage.style.removeProperty(property);
      }
    };
  }, []);

  return (
    <section
      ref={pinRef}
      id="cad"
      className="relative h-[360svh] bg-[#1b222b] md:h-[360vh]"
      aria-label="Defence vehicle CAD explode view"
    >
      <div
        ref={stageRef}
        className="absolute inset-x-0 top-0 h-[100svh] overflow-hidden"
      >
          <canvas
            ref={canvasRef}
            className="absolute inset-0 size-full"
            style={{
              backgroundImage: "url(/videos/cad-poster.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            role="img"
            aria-label="CAD visualisation of a land-system vehicle — hull, turret and mechanical assemblies"
          />

        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 px-5 pt-16 md:px-8 md:pt-24">
          <div className="mx-auto flex max-w-[1200px] items-end justify-between gap-6">
            <div>
              <Kicker onDark>Defence systems</Kicker>
              <h2 className="mt-1 font-display text-xl normal-case tracking-tight text-navy-fg md:mt-2 md:text-3xl">
                Land-system CAD
              </h2>
            </div>
            <p
              ref={labelRef}
              className="hidden font-display text-sm tracking-wide text-white/80 uppercase md:block"
            >
              Exploded view
            </p>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 px-5 pb-[calc(5.5rem+env(safe-area-inset-bottom))] md:px-8 nav:pb-8">
          <div className="mx-auto flex max-w-[1200px] items-center gap-4">
            <span className="kicker text-white/55">Exploded</span>
            <div className="relative h-[3px] flex-1 rounded-full bg-white/15">
              <span
                ref={barRef}
                className="absolute inset-y-0 left-0 rounded-full bg-white/80"
                style={{ width: "0%" }}
              />
            </div>
            <span className="kicker text-white/55">Assembled</span>
          </div>
        </div>
      </div>
    </section>
  );
}
