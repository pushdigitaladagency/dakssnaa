import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/site/ui";
import { drawCover } from "@/lib/canvas";

const FRAME_COUNT = 250;
const frameUrl = (i: number) => `/plant-frames/frame_${String(i).padStart(3, "0")}.jpg`;

/**
 * Shop-floor footage scrubbed by scroll position, from a still-frame
 * sequence — same pin-and-scrub technique as the CAD explode section: once
 * the reel enters the viewport it locks in place and the page only keeps
 * scrolling once every frame has played through. Desktop/tablet only: on
 * small screens we just show the static poster frame, unpinned, to avoid
 * pulling the full sequence over a mobile connection.
 */
export function PlantReel({
  kicker,
  caption,
  alt,
}: {
  kicker: string;
  caption: string;
  alt: string;
}) {
  const pinRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [compact, setCompact] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setCompact(!mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (compact) return;
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
      if (target === null || target === lastDrawn) return;
      const img = images[target];
      if (!img) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = stage.getBoundingClientRect();
      const w = Math.max(1, Math.round(rect.width * dpr));
      const h = Math.max(1, Math.round(rect.height * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      drawCover(ctx, img, w, h);
      lastDrawn = target;
      if (target !== i && images[i] === undefined) void loadFrame(i);
    };

    if (reduce) {
      pin.style.height = "";
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
      };
    }

    const apply = () => {
      const vh = window.innerHeight;
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
      stage.style.height = "max(72vh, 420px)";

      const idx = Math.min(FRAME_COUNT, Math.max(1, Math.round(p * (FRAME_COUNT - 1)) + 1));
      drawFrame(idx);
      void loadFrame(idx);
    };

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(apply);
    };

    loadFrame(1).then(() => {
      if (!cancelled) apply();
    });

    // Warm the rest of the sequence in the background so scrubbing doesn't
    // stall waiting on network once it reaches an unseen frame.
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
    };
  }, [compact]);

  const overlay = (
    <>
      <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/15 to-transparent" />
      <figcaption className="absolute inset-x-0 bottom-0 px-5 py-8 md:px-8 md:py-10">
        <div className="mx-auto max-w-[1160px]">
          <Reveal from="left">
            <p className="kicker text-navy-subtle">{kicker}</p>
            <p className="mt-2 max-w-2xl font-display text-xl text-navy-fg uppercase md:mt-3 md:text-4xl">
              {caption}
            </p>
          </Reveal>
        </div>
      </figcaption>
    </>
  );

  if (compact) {
    return (
      <figure className="relative h-[36vh] min-h-[200px] overflow-hidden bg-navy">
        <img src="/images/hd/laser.jpg" alt={alt} className="absolute inset-0 size-full object-cover" loading="lazy" />
        {overlay}
      </figure>
    );
  }

  return (
    <section ref={pinRef} className="relative bg-navy md:h-[280vh]" aria-label={alt}>
      <div
        ref={stageRef}
        className="relative h-[36vh] min-h-[200px] overflow-hidden md:absolute md:inset-x-0 md:top-0 md:h-[72vh] md:min-h-[420px]"
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 size-full"
          style={{
            backgroundImage: "url(/images/hd/laser.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          role="img"
          aria-label={alt}
        />
        {overlay}
      </div>
    </section>
  );
}
