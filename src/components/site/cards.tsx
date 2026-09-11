import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Machine } from "@/data/machines";
import type { Project } from "@/data/projects";
import { Btn, Frame, SpecTable, StatusBadge } from "./ui";

export function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-navy text-navy-fg"
    >
      <Frame onDark className="relative aspect-[4/3] overflow-hidden bg-navy-2">
        <img
          src={project.image}
          alt={project.title}
          className={cn(
            "size-full transition-transform duration-700 group-hover:scale-[1.04]",
            project.imageFit === "contain" ? "object-contain p-4" : "object-cover",
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/10 to-transparent opacity-80" />
        <span className="kicker absolute top-4 left-4 bg-navy/80 px-2 py-1 text-navy-fg">
          {project.industry}
        </span>
      </Frame>
      <div className={cn("flex flex-1 flex-col p-5", featured && "md:p-7")}>
        <p className="font-sans text-[11px] font-semibold tracking-[0.14em] text-navy-subtle uppercase">
          {project.customer}
        </p>
        <h3 className="mt-2 font-display text-lg leading-snug tracking-tight md:text-xl">
          {project.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm text-navy-muted">{project.summary}</p>
        <span className="cta-label mt-auto inline-flex items-center gap-2 pt-5 text-navy-fg">
          View project
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export function MachineCard({ machine }: { machine: Machine }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="flex h-full flex-col bg-card hairline">
      <div className="relative aspect-[16/10] overflow-hidden bg-paper-2">
        <img
          src={machine.image}
          alt={machine.name}
          className={cn(
            "size-full",
            machine.imageFit === "contain" ? "object-contain p-4" : "object-cover",
          )}
        />
        <div className="absolute top-3 left-3">
          <StatusBadge status={machine.status} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="kicker text-tech">{machine.application}</p>
        <h3 className="mt-2 font-display text-xl tracking-tight">{machine.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">{machine.summary}</p>
        <dl className="mt-5 space-y-2">
          {machine.selected.map((s) => (
            <div key={s.label} className="flex justify-between gap-4 border-t border-line pt-2 text-sm">
              <dt className="text-ink-subtle">{s.label}</dt>
              <dd className="spec-num text-right text-ink">{s.value}</dd>
            </div>
          ))}
        </dl>
        <Btn
          type="button"
          variant="outline"
          className="mt-6 h-10 w-full"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Hide specifications" : "View specifications"}
          <ChevronDown className={cn("size-4 transition-transform", open && "rotate-180")} />
        </Btn>
        {open ? (
          <div className="mt-4">
            <SpecTable specs={machine.specs} />
            {machine.features?.length ? (
              <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                {machine.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 bg-navy" />
                    {f}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
