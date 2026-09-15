import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Mail, MapPin, Phone, X } from "lucide-react";
import {
  capabilities,
  company,
  ecosystem,
  leadership,
  partners,
} from "@/data/site";
import { machines } from "@/data/machines";
import { projects, type Project } from "@/data/projects";
import { BtnLink, Kicker, ParallaxMedia, Reveal, StatusBadge } from "@/components/site/ui";
import { ContactForm } from "@/components/site/contact-form";
import { HashLink } from "@/components/site/hash-link";
import { GeoField, GeoPaper } from "@/components/site/geo-field";
import { GeoIcon } from "@/components/site/icons";
import { CadExplode } from "@/components/home/cad-explode";
import { PlantReel } from "@/components/home/plant-reel";
import { cn } from "@/lib/utils";

const film = [
  { src: "/images/hd/cockpit-int.jpg", alt: "Aircraft cockpit mock-up interior" },
  { src: "/images/hd/laser.jpg", alt: "Precision laser processing" },
  { src: "/images/hd/cnc.jpg", alt: "CNC machining of aerospace metal" },
  { src: "/images/hd/cockpit-ext.jpg", alt: "Cockpit shell on the shop floor" },
  { src: "/images/hd/gantry.jpg", alt: "Double-column machining centre" },
  { src: "/images/hd/composites.jpg", alt: "Composite / CFRP inspection" },
  { src: "/images/hd/hull.jpg", alt: "Hull structure fabrication" },
  { src: "/images/hd/intake.jpg", alt: "Precision-machined intake duct" },
  { src: "/images/hd/defence.jpg", alt: "Defence vehicle engineering" },
  { src: "/images/hd/aircraft.jpg", alt: "Aerospace platform" },
  { src: "/images/hd/hangar.jpg", alt: "Aerospace structure in hangar" },
];

export function HomePage() {
  const [open, setOpen] = useState<Project | null>(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ block: "start" });
      });
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <Hero />
      <CadExplode />
      <Filmstrip />
      <About />
      <Sectors />
      <PlantReel
        alt="High-precision laser processing"
        kicker="Plant"
        caption="High-precision sheet-metal processing on the shop floor."
      />
      <Capabilities />
      <Infrastructure />
      <BleedPhoto
        src="/images/hd/cockpit-ext.jpg"
        alt="Aircraft cockpit mock-up shell"
        kicker="Programme work"
        caption="Cockpit mock-ups and replica shells for aerospace simulation programmes."
      />
      <Projects onOpen={setOpen} />
      <Trust />
      <Contact />
      {open ? <ProjectOverlay project={open} onClose={() => setOpen(null)} /> : null}
    </>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[78svh] overflow-hidden bg-[#04366f] text-navy-fg md:min-h-[100svh]">
      <img
        src="/images/hd/hero.jpg"
        alt="Aerospace aircraft and defence vehicle — engineering visualisation"
        className="absolute inset-0 size-full object-cover object-[72%_center]"
        fetchPriority="high"
      />
      <GeoField variant="hero" className="opacity-45" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#042a5c]/92 via-[#042a5c]/55 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#042a5c]/50 via-transparent to-[#042a5c]/25" />

      <div className="relative flex min-h-[78svh] flex-col md:min-h-[100svh]">
        <div className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-center px-5 pt-20 pb-16 md:px-8 md:pt-24 md:pb-28 nav:pb-16">
          <p className="hero-rise kicker text-white/70" style={{ animationDelay: "80ms" }}>
            Aerospace / Defence / Advanced manufacturing
          </p>
          <h1 className="hero-rise mt-4 max-w-xl font-display text-[2.15rem] leading-[1.08] normal-case tracking-[-0.04em] text-white sm:text-display md:mt-5" style={{ animationDelay: "180ms" }}>
            Engineering precision
            <span className="block">across aerospace & defence</span>
          </h1>
          <p
            className="hero-rise mt-4 max-w-md text-[0.98rem] leading-relaxed text-white/85 md:mt-6 md:text-lead"
            style={{ animationDelay: "420ms" }}
          >
            Engineering, manufacturing and integration solutions — built on precision, reliability
            and manufacturing expertise.
          </p>
          <div className="hero-rise mt-8" style={{ animationDelay: "580ms" }}>
            <BtnLink href="#capabilities" variant="paper" className="h-12 rounded-full px-7">
              Know more <ArrowRight className="size-4" />
            </BtnLink>
          </div>
        </div>
      </div>

      <HashLink
        href="#about"
        className="scroll-cue absolute bottom-20 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-sans text-[11px] font-semibold tracking-[0.2em] text-white/70 uppercase md:inline-flex nav:bottom-10 nav:left-auto nav:right-10 nav:translate-x-0"
      >
        Scroll <ArrowDown className="size-3.5" />
      </HashLink>
    </section>
  );
}

function Filmstrip() {
  const loop = [...film, ...film];
  return (
    <section aria-label="Workshop and programme photography" className="overflow-hidden bg-navy py-3 md:py-5">
      <div className="marquee-track flex gap-3 pr-3 md:gap-4 md:pr-4">
        {loop.map((img, i) => (
          <figure key={`${img.src}-${i}`} className="w-[150px] shrink-0 overflow-hidden rounded-xl md:w-[300px] md:rounded-2xl">
            <img
              src={img.src}
              alt={i < film.length ? img.alt : ""}
              className="aspect-[5/4] w-full object-cover"
              loading="lazy"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-paper py-12 md:py-20 lg:py-28">
      <GeoPaper className="opacity-[0.12]" />
      <GeoField variant="light" className="opacity-20" />
      <div className="relative z-[1] mx-auto max-w-[1160px] px-5 md:px-8">
        <Reveal once className="max-w-3xl">
          <Kicker>01 — About us</Kicker>
          <h2 className="mt-4 font-display text-title">Engineering for aerospace & defence</h2>
        </Reveal>

        <div className="mt-8 grid items-start gap-8 lg:mt-16 lg:grid-cols-12 lg:gap-16">
          <Reveal once from="left" className="lg:col-span-5">
            <div className="img-zoom">
              <img
                src="/images/hd/cockpit-ext.jpg"
                alt="Aircraft cockpit mock-up shell"
                className="aspect-[16/10] w-full object-cover lg:aspect-[4/5]"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal once from="right" delay={80} className="lg:col-span-7">
            <p className="text-lead text-ink">{company.intro}</p>
            <p className="mt-5 text-[1.02rem] leading-relaxed text-ink-muted">
              Our capabilities span design, development, fabrication, precision machining, welding,
              assembly and turnkey manufacturing of metal and non-metal products.
            </p>
            <p className="mt-5 text-[1.02rem] leading-relaxed text-ink-muted">
              {company.parentExpertise}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["Established", company.established],
                ["Base", "Sriperumbudur, TN"],
                ["Group", company.parentCover],
                ["Focus", "Aerospace & Defence"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-2xl bg-card px-4 py-4 hairline">
                  <p className="kicker text-ink-subtle">{k}</p>
                  <p className="mt-2 font-sans text-[13px] font-semibold leading-snug tracking-tight text-ink">
                    {v}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 md:mt-14 md:gap-8">
              {leadership.map((person, i) => (
                <Reveal key={person.name} once from="up" delay={i * 120}>
                  <article className="card-lift h-full rounded-2xl bg-navy p-8 text-navy-fg hairline-navy md:p-10">
                    <p className="kicker text-navy-subtle">{person.role}</p>
                    <h3 className="mt-3 font-display text-2xl tracking-tight text-navy-fg md:text-3xl">
                      {person.name}
                    </h3>
                    <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-navy-muted md:mt-4 md:text-base md:line-clamp-none">
                      {person.bio}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-8 border-t border-line pt-8 lg:mt-16 lg:grid-cols-2 lg:gap-16 lg:pt-10">
          <Reveal once from="left">
            <div className="icon-well bg-navy/8 text-navy">
              <GeoIcon name="target" className="size-5" />
            </div>
            <Kicker className="mt-6 text-navy">Mission</Kicker>
            <blockquote className="mt-4 font-display text-section tracking-tight text-ink">
              “{company.mission}”
            </blockquote>
          </Reveal>
          <Reveal once from="right" delay={120}>
            <div className="icon-well bg-navy/8 text-navy">
              <GeoIcon name="compass" className="size-5" />
            </div>
            <Kicker className="mt-6 text-navy">Vision</Kicker>
            <blockquote className="mt-4 font-display text-section tracking-tight text-ink">
              “{company.vision}”
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Sectors() {
  const items = [
    {
      name: "Railways",
      copy: "Through the Airfloa group, rail structures and wagon integration sit alongside aerospace work.",
      image: "/images/hd/train.jpg",
      icon: "rail",
    },
    {
      name: "Aerospace",
      copy: "Cockpit mock-ups, trainer shells, intake ducts and composite aerospace hardware.",
      image: "/images/hd/aircraft.jpg",
      icon: "aero",
    },
    {
      name: "Defence",
      copy: "Hull, turret and mechanical assemblies for land systems, plus armour-grade composites.",
      image: "/images/hd/defence.jpg",
      icon: "defence",
    },
  ] as const;

  return (
    <section className="relative overflow-hidden bg-paper py-12 md:py-20 lg:py-28">
      <GeoPaper className="opacity-[0.12]" />
      <GeoField variant="light" className="opacity-15" />
      <div className="relative mx-auto max-w-[1160px] px-5 md:px-8">
        <Reveal once className="mx-auto max-w-2xl text-center">
          <Kicker>Sectors</Kicker>
          <h2 className="mt-3 font-display text-title md:mt-4">Where precision is applied</h2>
        </Reveal>

        <div className="snap-row mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:mt-16 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0">
          {items.map((item, i) => (
            <Reveal once key={item.name} delay={i * 90} from="scale" className="min-w-[78%] snap-start md:min-w-0">
              <article className="card-lift rounded-2xl bg-card p-6 text-center hairline">
                <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-navy text-navy-fg">
                  <GeoIcon name={item.icon} className="size-7" />
                </span>
                <div className="mt-5 overflow-hidden rounded-xl">
                  <img src={item.image} alt="" className="aspect-[16/10] w-full object-cover" loading="lazy" />
                </div>
                <h3 className="mt-5 font-display text-xl tracking-tight">{item.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BleedPhoto({
  src,
  alt,
  kicker,
  caption,
}: {
  src: string;
  alt: string;
  kicker: string;
  caption: string;
}) {
  return (
    <figure className="relative h-[36vh] min-h-[200px] overflow-hidden bg-navy md:h-[72vh] md:min-h-[420px]">
      <ParallaxMedia className="absolute inset-0 size-full" strength={40}>
        <img src={src} alt={alt} className="absolute inset-0 size-full object-cover" loading="lazy" />
      </ParallaxMedia>
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
    </figure>
  );
}

function Capabilities() {
  return (
    <section id="capabilities" className="relative overflow-hidden bg-paper-2 py-12 md:py-20 lg:py-28">
      <GeoField variant="light" className="opacity-20" />
      <div className="relative z-[1] mx-auto max-w-[1160px] px-5 md:px-8">
        <Reveal once className="max-w-3xl">
          <Kicker>02 — Core capabilities</Kicker>
          <h2 className="mt-3 font-display text-title md:mt-4">From engineering to execution</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted md:mt-5 md:text-base">
            Eight documented capability areas spanning machining, composites, fabrication, assembly,
            coatings, additive manufacturing, quality & R&D and project management.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-x-8 sm:gap-y-10 md:mt-14 md:gap-x-10 md:gap-y-14">
          {capabilities.map((cap, i) => (
            <Reveal once key={cap.id} delay={(i % 2) * 80}>
              <article>
                <div className="img-zoom bg-navy">
                  <img
                    src={cap.image}
                    alt=""
                    className="aspect-[16/9] w-full object-cover md:aspect-[16/10]"
                    loading="lazy"
                  />
                </div>
                <div className="mt-3 flex items-center gap-2 md:mt-5 md:gap-3">
                  <span className="grid size-8 place-items-center rounded-lg bg-navy text-navy-fg md:size-11 md:rounded-xl">
                    <GeoIcon name={cap.icon} className="size-4 md:size-5" />
                  </span>
                  <p className="kicker text-[0.6rem] text-navy md:text-[0.68rem]">{cap.number}</p>
                </div>
                <h3 className="mt-2 font-display text-[1.05rem] leading-tight tracking-tight md:mt-3 md:text-section">{cap.title}</h3>
                <p className="mt-2 hidden text-[0.98rem] leading-relaxed text-ink-muted sm:block">{cap.short}</p>
                <ul className="mt-3 hidden space-y-2 sm:block">
                  {cap.applications.slice(0, 2).map((a) => (
                    <li key={a} className="flex gap-3 text-sm text-ink">
                      <span className="mt-2 size-1.5 shrink-0 bg-navy" />
                      {a}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Infrastructure() {
  const loop = [...machines, ...machines];
  return (
    <section id="infrastructure" className="bg-navy py-12 text-navy-fg md:py-20 lg:py-28">
      <div className="relative z-[1] mx-auto max-w-[1160px] px-5 md:px-8">
        <Reveal once className="max-w-3xl">
          <Kicker onDark>03 — Manufacturing infrastructure</Kicker>
          <h2 className="mt-3 font-display text-title md:mt-4">Built for complex engineering</h2>
          <p className="mt-4 text-sm leading-relaxed text-navy-muted md:mt-5 md:text-base">
            Laser processing, CNC and double-column machining, punching and welding, and additive
            manufacturing for titanium, aluminium, superalloys, stainless steel and other advanced
            materials. A new 44,000 sq. ft FRP facility is planned for future expansion.
          </p>
        </Reveal>
      </div>
      <div className="mt-8 overflow-hidden md:mt-12">
        <div className="infra-track flex gap-4 pr-4 md:gap-5 md:pr-5">
          {loop.map((m, i) => (
            <article
              key={`${m.id}-${i}`}
              className="w-[min(78vw,300px)] shrink-0 overflow-hidden rounded-2xl bg-navy-2 hairline-navy md:w-[min(82vw,340px)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-navy">
                <img
                  src={m.image}
                  alt={m.name}
                  className={cn(
                    "size-full",
                    m.imageFit === "contain" ? "object-contain bg-navy p-4" : "object-cover",
                  )}
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <StatusBadge status={m.status} />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg tracking-tight">{m.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-navy-subtle">{m.application}</p>
                <dl className="mt-4 space-y-2">
                  {m.selected.slice(0, 3).map((s) => (
                    <div key={s.label} className="flex justify-between gap-3 text-xs">
                      <dt className="text-navy-subtle">{s.label}</dt>
                      <dd className="spec-num text-navy-fg">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-10 grid max-w-[1160px] items-center gap-8 px-5 md:mt-16 md:grid-cols-12 md:gap-10 md:px-8">
        <Reveal once className="md:col-span-5" from="left">
          <div className="overflow-hidden rounded-2xl bg-navy-2 p-3">
            <img
              src="/images/facilities/frp-layout.jpg"
              alt="FRP factory layout plan for Unit-7"
              className="w-full rounded-xl object-contain"
              loading="lazy"
            />
          </div>
        </Reveal>
        <Reveal once className="md:col-span-7" from="right" delay={80}>
          <Kicker onDark>Expansion</Kicker>
          <h3 className="mt-3 font-display text-section">{company.expansion.title}</h3>
          <p className="mt-2 kicker text-navy-subtle">{company.expansion.framing}</p>
          <p className="mt-4 leading-relaxed text-navy-muted">{company.expansion.intent}</p>
          <ul className="mt-6 space-y-3">
            {company.expansion.applications.map((a) => (
              <li key={a} className="flex gap-3 text-sm leading-relaxed">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-navy-fg" />
                {a}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function Projects({ onOpen }: { onOpen: (p: Project) => void }) {
  return (
    <section id="projects" className="bg-paper py-12 md:py-16 lg:py-24">
      <div className="relative z-[1] mx-auto max-w-[1160px] px-5 md:px-8">
        <div className="mb-8 max-w-2xl md:mb-14">
          <Reveal>
            <Kicker>04 — Featured projects</Kicker>
            <h2 className="mt-3 font-display text-title">Engineering in action</h2>
            <p className="mt-4 text-ink-muted">
              Programme work spanning aerospace cockpits and trainers, defence structures and rail
              integration — as documented in the company profile.
            </p>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-4">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 70} from="scale" className={cn("h-full", i === 0 && "md:col-span-2")}>
            <button
              type="button"
              onClick={() => onOpen(p)}
              className="card-lift group relative flex h-full flex-col overflow-hidden rounded-2xl bg-navy text-left text-navy-fg"
            >
              <div className={cn("relative overflow-hidden bg-navy-2 aspect-[16/10]", i === 0 && "md:aspect-[16/8]")}>
                <img
                  src={p.image}
                  alt={p.title}
                  className={cn(
                    "size-full transition-transform duration-700 group-hover:scale-[1.04]",
                    p.imageFit === "contain" ? "object-contain p-4" : "object-cover",
                  )}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/10 to-transparent opacity-80" />
                <span className="kicker absolute top-4 left-4 rounded-full bg-navy/80 px-2.5 py-1 text-navy-fg">
                  {p.industry}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-3 md:p-5">
                <p className="font-sans text-[10px] font-semibold tracking-[0.14em] text-navy-subtle uppercase md:text-[11px]">
                  {p.customer}
                </p>
                <h3 className="mt-1.5 font-display text-[0.95rem] leading-snug tracking-tight md:mt-2 md:text-xl">
                  {p.title}
                </h3>
                <span className="cta-label mt-auto hidden items-center gap-2 pt-5 text-navy-fg md:inline-flex">
                  View project
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectOverlay({ project, onClose }: { project: Project; onClose: () => void }) {
  const [active, setActive] = useState(0);
  const img = project.gallery[active] ?? project.gallery[0];

  return (
    <div
      className="fixed inset-0 z-overlay flex items-end justify-center bg-navy/70 p-0 md:items-center md:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-title"
      onClick={onClose}
    >
      <div
        className="max-h-[92svh] w-full max-w-4xl overflow-y-auto overscroll-contain rounded-t-3xl bg-paper pb-[env(safe-area-inset-bottom)] text-ink md:rounded-3xl md:pb-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-[38vh] min-h-52 bg-navy md:h-[46vh]">
          <img
            src={img.src}
            alt={img.alt}
            className={cn(
              "size-full",
              img.fit === "contain" || project.imageFit === "contain"
                ? "object-contain p-4"
                : "object-cover",
            )}
          />
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3 right-3 inline-flex size-11 items-center justify-center rounded-xl bg-navy/80 text-navy-fg"
            aria-label="Close project"
          >
            <X className="size-5" />
          </button>
        </div>
        {project.gallery.length > 1 ? (
          <div className="flex gap-2 overflow-x-auto bg-navy p-3">
            {project.gallery.map((g, i) => (
              <button
                key={g.src}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`View image ${i + 1}: ${g.alt}`}
                aria-pressed={i === active}
                className={cn(
                  "h-16 w-24 shrink-0 overflow-hidden rounded-lg",
                  i === active ? "ring-2 ring-navy-fg" : "opacity-70",
                )}
              >
                <img src={g.src} alt="" className="size-full object-cover" />
              </button>
            ))}
          </div>
        ) : null}
        <div className="p-6 md:p-8">
          <p className="kicker text-navy">{project.industry}</p>
          <h2 id="project-title" className="mt-3 font-display text-title">
            {project.title}
          </h2>
          <p className="mt-2 font-sans text-xs font-semibold tracking-[0.14em] text-ink-subtle uppercase">
            {project.customer}
          </p>
          <p className="mt-5 text-ink-muted">{project.summary}</p>
          <ul className="mt-5 space-y-2">
            {project.details.map((d) => (
              <li key={d} className="flex gap-3 text-sm">
                <span className="mt-2 size-1.5 shrink-0 bg-navy" />
                {d}
              </li>
            ))}
          </ul>
          <HashLink
            href="#contact"
            className="cta-label mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-navy px-5 text-navy-fg"
            onClick={onClose}
          >
            Discuss a similar programme <ArrowRight className="size-4" />
          </HashLink>
        </div>
      </div>
    </div>
  );
}

function Trust() {
  const loop = [...ecosystem, ...ecosystem];
  const loopRev = [...ecosystem].reverse();
  const loopRev2 = [...loopRev, ...loopRev];

  return (
    <section id="partners" className="overflow-hidden bg-paper-2 py-12 md:py-20 lg:py-28">
      <div className="relative z-[1] mx-auto max-w-[1160px] px-5 md:px-8">
        <Reveal once className="max-w-3xl">
          <Kicker>05 — Partners</Kicker>
          <h2 className="mt-3 font-display text-title md:mt-4">Supporting leading organisations</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted md:mt-5 md:text-base">
            Logos appear as presented in the company profile and represent the customers / industry
            ecosystem — HAL, ADA, DRDO, BEML, Indian Railways, RITES, Alstom, Bombardier and AVANI.
          </p>
        </Reveal>
      </div>

      <div className="mt-8 space-y-4 md:mt-12">
        <div className="overflow-hidden">
          <div className="marquee-track flex gap-4 pr-4">
            {loop.map((org, i) => (
              <div
                key={`${org.name}-a-${i}`}
                className="flex h-20 w-[200px] shrink-0 items-center justify-center rounded-2xl bg-card px-6 hairline md:h-32 md:w-[280px] md:px-8"
              >
                <img
                  src={org.image}
                  alt={i < ecosystem.length ? org.alt : ""}
                  className="h-14 w-auto max-w-[200px] object-contain md:h-16"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="hidden overflow-hidden md:block">
          <div className="marquee-track-rev flex gap-4 pr-4">
            {loopRev2.map((org, i) => (
              <div
                key={`${org.name}-b-${i}`}
                className="flex h-20 w-[200px] shrink-0 items-center justify-center rounded-2xl bg-card px-6 hairline md:h-32 md:w-[280px] md:px-8"
              >
                <img
                  src={org.image}
                  alt=""
                  className="h-14 w-auto max-w-[200px] object-contain md:h-16"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[1160px] px-5 md:mt-16 md:px-8">
        <Kicker>Global technology partnerships</Kicker>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {partners.map((p, i) => (
            <Reveal once key={p.name} delay={i * 90} from={i % 2 ? "right" : "left"} className="h-full">
              <article className="card-lift flex h-full flex-col items-center gap-6 rounded-2xl bg-card p-6 hairline sm:flex-row md:flex-col md:p-8 lg:flex-row">
                <img
                  src={p.image}
                  alt={`${p.name} logo`}
                  className="h-20 w-28 shrink-0 object-contain md:h-24 md:w-36"
                  loading="lazy"
                />
                <div className="min-w-0 w-full sm:w-auto">
                  <p className="kicker text-navy">{p.region}</p>
                  <h3 className="mt-2 font-display text-xl tracking-tight md:text-2xl">{p.name}</h3>
                  <p className="mt-2 text-sm text-ink-muted">{p.focus}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-paper py-12 md:py-20 lg:py-28">
      <GeoPaper className="opacity-[0.10]" />
      <GeoField variant="light" className="opacity-15" />
      <div className="relative z-[1] mx-auto max-w-[1160px] px-5 md:px-8">
        <Reveal once className="max-w-2xl">
          <Kicker>06 — Contact</Kicker>
          <h2 className="mt-3 font-display text-title md:mt-4">Let’s engineer what’s next.</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-muted md:mt-5 md:text-base">
            Connect with Sree Dakssnaa Aerospace & Defence for engineering, manufacturing and
            project collaboration opportunities.
          </p>
        </Reveal>

        <div className="mt-8 grid items-start gap-4 lg:mt-12 lg:grid-cols-12 lg:gap-10">
          <div className="grid gap-4 lg:col-span-5">
            <Reveal once from="left">
              <a
                href={`tel:${company.phoneTel}`}
                className="card-lift flex gap-4 rounded-2xl bg-card p-6 hairline"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-navy text-navy-fg">
                  <Phone className="size-5" />
                </span>
                <span>
                  <p className="kicker text-ink-subtle">Call us</p>
                  <p className="mt-2 text-lg font-medium tracking-tight text-ink">{company.phoneDisplay}</p>
                  <p className="mt-1 text-sm text-ink-muted">{company.landlineDisplay}</p>
                </span>
              </a>
            </Reveal>
            <Reveal once from="left" delay={80}>
              <a
                href={`mailto:${company.email}`}
                className="card-lift flex gap-4 rounded-2xl bg-card p-6 hairline"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-navy text-navy-fg">
                  <Mail className="size-5" />
                </span>
                <span>
                  <p className="kicker text-ink-subtle">Email</p>
                  <p className="mt-2 break-all text-[15px] font-medium tracking-tight text-ink">
                    {company.email}
                  </p>
                </span>
              </a>
            </Reveal>
            <Reveal once from="left" delay={140}>
              <div className="card-lift flex gap-4 rounded-2xl bg-card p-6 hairline">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-navy text-navy-fg">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <p className="kicker text-ink-subtle">Works</p>
                  <address className="mt-2 not-italic leading-relaxed text-ink-muted">
                    {company.addressLines.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                  </address>
                  <a
                    href={company.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="cta-label mt-4 inline-flex items-center gap-1 text-navy"
                  >
                    Open map <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal once className="lg:col-span-7" from="right" delay={80}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
