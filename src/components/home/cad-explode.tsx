import { useEffect, useRef, useState } from "react";
import { Kicker } from "@/components/site/ui";

export function CadExplode() {
  const pinRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const sync = () => setCompact(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const pin = pinRef.current;
    const stage = stageRef.current;
    const video = videoRef.current;
    if (!pin || !stage || !video) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (compact || reduce) {
      pin.style.height = "";
      stage.style.position = "";
      stage.style.top = "";
      stage.style.bottom = "";
      stage.style.left = "";
      stage.style.right = "";
      stage.style.height = "";
      if (reduce) {
        video.pause();
        video.currentTime = 0;
        return;
      }
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) video.play().catch(() => {});
          else video.pause();
        },
        { threshold: 0.35 },
      );
      io.observe(pin);
      return () => io.disconnect();
    }

    video.pause();

    // The production host doesn't honor Range requests — every request,
    // partial or not, returns the full file from byte 0. So a seek into
    // unbuffered video aborts the in-progress download and restarts it from
    // scratch, and the video can never finish loading if scrolling keeps
    // seeking ahead of the buffer (invisible locally, where the whole file
    // is already on disk). Let the initial plain GET finish uninterrupted —
    // don't touch `currentTime` until the whole file is buffered, after
    // which every seek is served from memory and this can't happen again.
    let fullyBuffered = false;
    const checkBuffered = () => {
      if (fullyBuffered) return;
      const d = video.duration;
      if (!d || !Number.isFinite(d)) return;
      const buf = video.buffered;
      if (buf.length && buf.end(buf.length - 1) >= d - 0.5) {
        fullyBuffered = true;
        apply();
      }
    };
    video.addEventListener("progress", checkBuffered);
    video.addEventListener("loadedmetadata", checkBuffered);

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
      stage.style.height = "100svh";

      const d = video.duration;
      if (fullyBuffered && d && Number.isFinite(d)) {
        const t = p * Math.max(0, d - 0.04);
        if (Math.abs(video.currentTime - t) > 1 / 48) video.currentTime = t;
      }
      if (barRef.current) barRef.current.style.width = `${(p * 100).toFixed(1)}%`;
      if (labelRef.current) {
        labelRef.current.textContent =
          p >= 0.97 ? "Exploded view" : p < 0.06 ? "Assembled" : "Exploding";
      }
    };

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(apply);
    };

    video.addEventListener("loadedmetadata", apply);
    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      video.removeEventListener("loadedmetadata", apply);
      video.removeEventListener("progress", checkBuffered);
      video.removeEventListener("loadedmetadata", checkBuffered);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [compact]);

  return (
    <section
      ref={pinRef}
      id="cad"
      className="relative bg-[#1b222b] md:h-[360vh]"
      aria-label="Defence vehicle CAD explode view"
    >
      <div
        ref={stageRef}
        className="relative h-[58svh] min-h-[320px] overflow-hidden md:absolute md:inset-x-0 md:top-0 md:h-[100svh] md:min-h-0"
      >
        <video
          ref={videoRef}
          className="absolute inset-0 size-full object-cover object-center"
          src={compact ? "/videos/cad-explode.mp4" : "/videos/cad-scrub.mp4"}
          poster="/videos/cad-poster.jpg"
          muted
          loop={compact}
          playsInline
          preload="auto"
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
              Assembled
            </p>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden px-5 pb-8 md:block md:px-8">
          <div className="mx-auto flex max-w-[1200px] items-center gap-4">
            <span className="kicker text-white/55">Assembled</span>
            <div className="relative h-[3px] flex-1 rounded-full bg-white/15">
              <span
                ref={barRef}
                className="absolute inset-y-0 left-0 rounded-full bg-white/80"
                style={{ width: "0%" }}
              />
            </div>
            <span className="kicker text-white/55">Exploded</span>
          </div>
        </div>
      </div>
    </section>
  );
}
