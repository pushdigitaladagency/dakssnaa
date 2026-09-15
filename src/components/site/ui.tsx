import { useEffect, useRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { HashLink } from "./hash-link";

type BtnVariant = "amber" | "navy" | "paper" | "outline" | "outlineLight" | "ghost";

const btnClass: Record<BtnVariant, string> = {
  amber: "bg-navy text-navy-fg hover:bg-navy-2",
  navy: "bg-navy text-navy-fg hover:bg-navy-2",
  paper: "bg-paper text-navy hover:bg-paper-2",
  outline:
    "bg-transparent text-navy shadow-[inset_0_0_0_1px] shadow-navy/25 hover:shadow-navy/50",
  outlineLight:
    "bg-transparent text-navy-fg shadow-[inset_0_0_0_1px] shadow-navy-fg/30 hover:shadow-navy-fg/70",
  ghost: "bg-transparent text-current hover:text-navy",
};

export function Btn({
  variant = "amber",
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: BtnVariant }) {
  return (
    <button
      className={cn(
        "cta-label inline-flex h-11 items-center justify-center gap-2 rounded-xl px-5 transition-colors duration-200 active:scale-[0.96]",
        btnClass[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function BtnLink({
  to,
  href,
  variant = "amber",
  className,
  children,
  download,
  target,
  rel,
}: {
  to?: string;
  href?: string;
  variant?: BtnVariant;
  className?: string;
  children: ReactNode;
  download?: boolean | string;
  target?: string;
  rel?: string;
}) {
  const cls = cn(
    "cta-label inline-flex h-11 items-center justify-center gap-2 rounded-xl px-5 transition-colors duration-200 active:scale-[0.96]",
    btnClass[variant],
    className,
  );
  if (to) {
    return (
      <Link to={to as "/"} className={cls}>
        {children}
      </Link>
    );
  }
  if (href && (href.startsWith("#") || href.startsWith("/#"))) {
    return (
      <HashLink href={href} className={cls}>
        {children}
      </HashLink>
    );
  }
  return (
    <a href={href} className={cls} download={download} target={target} rel={rel}>
      {children}
    </a>
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
  from = "up",
  once = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: "up" | "left" | "right" | "scale";
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-in");
          if (once) io.disconnect();
        } else if (!once) {
          el.classList.remove("is-in");
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={cn(
        "reveal",
        from === "left" && "reveal-left",
        from === "right" && "reveal-right",
        from === "scale" && "reveal-scale",
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function ParallaxMedia({
  children,
  className,
  strength = 32,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const p = (r.top + r.height / 2 - vh / 2) / vh;
      el.style.setProperty("--para", `${(p * strength).toFixed(1)}px`);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [strength]);

  return (
    <div ref={ref} className={cn("parallax-media overflow-hidden", className)}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
  innerClassName,
  id,
  dark,
  wide,
}: {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  id?: string;
  dark?: boolean;
  wide?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-16 md:py-24 lg:py-28",
        dark ? "bg-navy text-navy-fg" : "bg-paper text-ink",
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto px-5 md:px-8",
          wide ? "max-w-[1280px]" : "max-w-[1160px]",
          innerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}

export function Kicker({
  children,
  className,
  onDark,
}: {
  children: ReactNode;
  className?: string;
  onDark?: boolean;
}) {
  return (
    <p className={cn("kicker", onDark ? "text-navy-subtle" : "text-ink-subtle", className)}>{children}</p>
  );
}

export function SectionHead({
  kicker,
  title,
  copy,
  onDark,
  action,
}: {
  kicker: string;
  title: string;
  copy?: string;
  onDark?: boolean;
  action?: ReactNode;
}) {
  return (
    <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <Kicker onDark={onDark}>{kicker}</Kicker>
        <h2 className="mt-3 font-display text-title tracking-tight">{title}</h2>
        {copy ? (
          <p
            className={cn(
              "mt-4 max-w-xl text-[0.98rem] leading-relaxed normal-case",
              onDark ? "text-navy-muted" : "text-ink-muted",
            )}
          >
            {copy}
          </p>
        ) : null}
      </div>
      {action}
    </div>
  );
}

export function Frame({
  children,
  className,
  onDark,
}: {
  children: ReactNode;
  className?: string;
  onDark?: boolean;
}) {
  const tick = onDark ? "border-navy-fg/50" : "border-navy";
  return (
    <div className={cn("relative", className)}>
      <span className={cn("pointer-events-none absolute top-0 left-0 z-10 h-4 w-4 border-t border-l", tick)} />
      <span className={cn("pointer-events-none absolute top-0 right-0 z-10 h-4 w-4 border-t border-r", tick)} />
      <span className={cn("pointer-events-none absolute bottom-0 left-0 z-10 h-4 w-4 border-b border-l", tick)} />
      <span className={cn("pointer-events-none absolute bottom-0 right-0 z-10 h-4 w-4 border-b border-r", tick)} />
      {children}
    </div>
  );
}

export function StatusBadge({ status }: { status: "operational" | "enhancement" }) {
  const isOp = status === "operational";
  return (
    <span
      className={cn(
        "kicker inline-flex items-center gap-2 rounded-full px-2.5 py-1",
        isOp ? "bg-navy text-navy-fg" : "bg-paper text-navy",
      )}
    >
      <span className={cn("size-1.5 rounded-full", isOp ? "bg-paper" : "bg-navy")} />
      {isOp ? "In operation" : "Capability enhancement"}
    </span>
  );
}

export function PageHero({
  kicker,
  title,
  copy,
  image,
  imageAlt,
  imageFit = "cover",
}: {
  kicker: string;
  title: string;
  copy: string;
  image?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
}) {
  return (
    <header className="relative isolate overflow-hidden bg-navy pt-24 text-navy-fg md:pt-28">
      <div
        className={cn(
          "relative mx-auto grid max-w-[1280px] items-stretch",
          image ? "lg:grid-cols-12" : "",
        )}
      >
        <div className={cn("px-5 py-12 md:px-8 md:py-16", image ? "lg:col-span-7" : "")}>
          <Kicker onDark>{kicker}</Kicker>
          <h1 className="mt-4 max-w-3xl font-display text-display tracking-tight">{title}</h1>
          <p className="mt-5 max-w-xl text-lead text-navy-muted normal-case">{copy}</p>
        </div>
        {image ? (
          <div className="relative min-h-56 lg:col-span-5 lg:min-h-full">
            <img
              src={image}
              alt={imageAlt ?? ""}
              className={cn(
                "size-full",
                imageFit === "contain" ? "object-contain bg-navy-2 p-4" : "object-cover",
              )}
            />
          </div>
        ) : null}
      </div>
    </header>
  );
}

export function EnquiryBand({
  title = "Discuss your requirement",
  copy = "Talk to the engineering team about aerospace, defence or advanced manufacturing work.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <Section dark className="py-14 md:py-16">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="max-w-xl">
          <Kicker onDark>Engineering enquiry</Kicker>
          <h2 className="mt-3 font-display text-section">{title}</h2>
          <p className="mt-3 text-navy-muted normal-case">{copy}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <BtnLink href="/#contact" variant="paper">
            Start a conversation <ArrowRight className="size-4" />
          </BtnLink>
          <BtnLink href="/#capabilities" variant="outlineLight">
            Explore capabilities
          </BtnLink>
        </div>
      </div>
    </Section>
  );
}

export function SpecTable({ specs }: { specs: { label: string; value: string }[] }) {
  return (
    <dl className="divide-y divide-line">
      {specs.map((s) => (
        <div key={s.label} className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-12 sm:gap-4">
          <dt className="kicker min-w-0 text-ink-subtle sm:col-span-5">{s.label}</dt>
          <dd className="spec-num min-w-0 break-words text-sm text-ink sm:col-span-7">{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}
