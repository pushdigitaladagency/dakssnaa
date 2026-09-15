import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { company, nav } from "@/data/site";
import { Logo } from "./logo";
import { BtnLink } from "./ui";
import { HashLink } from "./hash-link";

export function SiteShell() {
  const isHome = useRouterState({ select: (s) => s.location.pathname === "/" });
  return (
    <div className={cn("flex min-h-svh flex-col bg-paper text-ink", isHome && "pb-[calc(3.5rem+env(safe-area-inset-bottom))] nav:pb-0")}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-overlay focus:bg-navy focus:px-4 focus:py-2 focus:text-navy-fg"
      >
        Skip to content
      </a>
      <ProgressBar />
      <Header />
      <main id="main" className="min-w-0 flex-1">
        <Outlet />
      </main>
      <Footer />
      <MobileCta />
    </div>
  );
}

function ProgressBar() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setP(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent">
      <div className="h-full bg-navy" style={{ width: `${p * 100}%` }} />
    </div>
  );
}

function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("#about");
  const lastY = useRef(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const isHome = pathname === "/";

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key !== "Tab") return;
      const links = menuRef.current?.querySelectorAll<HTMLElement>("a[href], button");
      const first = links?.[0];
      const last = links?.[links.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 70rem)");
    const onResize = () => { if (desktop.matches) setOpen(false); };
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
      previousFocus?.focus({ preventScroll: true });
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      const goingDown = y > lastY.current + 6;
      const goingUp = y < lastY.current - 6;
      if (open) {
        setHidden(false);
      } else if (goingDown && y > 96) {
        setHidden(true);
      } else if (goingUp) {
        setHidden(false);
      }
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    if (!isHome) return;
    const ids = nav.map((n) => n.href.slice(1));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [isHome]);

  const overHero = isHome && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-nav border-b transition-[transform,background-color,border-color,color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          hidden && !open ? "-translate-y-full" : "translate-y-0",
          overHero
            ? "border-transparent bg-navy/30 text-navy-fg backdrop-blur-md"
            : "border-line bg-paper/95 text-ink backdrop-blur-md",
        )}
      >
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-6 px-5 md:h-[4.5rem] md:px-8">
          <Logo onDark={overHero} />
          <nav className="hidden items-center gap-6 nav:flex" aria-label="Primary">
            {nav.map((item) => {
              const current = isHome && active === item.href;
              return (
                <HashLink
                  key={item.href}
                  href={`/${item.href}`}
                  className={cn(
                    "relative whitespace-nowrap py-2 font-sans text-[12px] font-semibold tracking-[0.14em] uppercase transition-colors",
                    overHero
                      ? current
                        ? "text-navy-fg"
                        : "text-navy-fg/70 hover:text-navy-fg"
                      : current
                        ? "text-navy"
                        : "text-ink-muted hover:text-navy",
                  )}
                >
                  {item.label}
                  {current ? (
                    <span className={cn("absolute inset-x-0 -bottom-0.5 h-px", overHero ? "bg-navy-fg" : "bg-navy")} />
                  ) : null}
                </HashLink>
              );
            })}
          </nav>
          <div className="flex items-center gap-3">
            <BtnLink
              href="/#contact"
              variant={overHero ? "paper" : "navy"}
              className="hidden h-9 px-4 sm:inline-flex"
            >
              Enquire
            </BtnLink>
            <button
              type="button"
              className={cn(
                "inline-flex size-11 items-center justify-center nav:hidden",
                overHero ? "text-navy-fg" : "text-navy",
              )}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </header>

      <div
        ref={menuRef}
        id="mobile-nav"
        className={cn(
          "fixed inset-0 z-overlay flex flex-col bg-paper text-ink transition-transform duration-300 nav:hidden",
          open ? "translate-y-0" : "-translate-y-full",
        )}
        hidden={!open}
        aria-hidden={!open}
        role="dialog"
        aria-modal={open || undefined}
        aria-label="Navigation menu"
        onClick={(event) => { if ((event.target as HTMLElement).closest("a")) setOpen(false); }}
      >
        <div className="flex h-16 shrink-0 items-center justify-between px-5">
          <Logo />
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <X className="size-6" />
          </button>
        </div>
        <nav aria-label="Mobile" className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto overscroll-contain px-6 pt-4 pb-[max(2.5rem,env(safe-area-inset-bottom))]">
          <div className="my-auto flex shrink-0 flex-col gap-1">
          {nav.map((item) => (
            <HashLink
              key={item.href}
              href={`/${item.href}`}
              className="flex min-h-11 items-center font-sans text-3xl font-semibold tracking-tight text-navy"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </HashLink>
          ))}
          <HashLink
            href="/#contact"
            className="mt-8 inline-flex min-h-11 w-fit items-center gap-2 bg-navy px-5 py-3 font-sans text-xs font-semibold tracking-[0.14em] text-navy-fg uppercase"
            onClick={() => setOpen(false)}
          >
            Enquire with us <ArrowUpRight className="size-4" />
          </HashLink>
          <a
            href={`tel:${company.phoneTel}`}
            className="mt-6 inline-flex min-h-11 items-center font-sans text-sm text-ink-muted"
          >
            {company.phoneDisplay}
          </a>
          </div>
        </nav>
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-navy text-navy-fg">
      <div className="mx-auto grid max-w-[1160px] gap-8 px-5 py-10 md:grid-cols-2 md:px-8 md:py-16 nav:grid-cols-12 nav:gap-12">
        <div className="min-w-0 nav:col-span-5">
          <Logo full onDark />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-muted">
            Engineering, manufacturing and integration solutions for the Aerospace
            & Defence sectors — built on precision, reliability and manufacturing
            expertise.
          </p>
          <p className="mt-4 font-sans text-[11px] tracking-[0.16em] text-navy-subtle uppercase">
            Established {company.established}
          </p>
        </div>
        <div className="min-w-0 nav:col-span-2">
          <p className="kicker text-navy-subtle">On this page</p>
          <ul className="mt-4 space-y-2 text-sm text-navy-muted">
            {nav.map((item) => (
              <li key={item.href}>
                <HashLink href={`/${item.href}`} className="hover:text-navy-fg">
                  {item.label}
                </HashLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="min-w-0 nav:col-span-2">
          <p className="kicker text-navy-subtle">Capabilities</p>
          <ul className="mt-4 space-y-2 text-sm text-navy-muted">
            <li>
              <HashLink href="/#capabilities" className="hover:text-navy-fg">
                Precision machining
              </HashLink>
            </li>
            <li>
              <HashLink href="/#capabilities" className="hover:text-navy-fg">
                Composite manufacturing
              </HashLink>
            </li>
            <li>
              <HashLink href="/#infrastructure" className="hover:text-navy-fg">
                Fabrication & welding
              </HashLink>
            </li>
            <li>
              <HashLink href="/#infrastructure" className="hover:text-navy-fg">
                Additive manufacturing
              </HashLink>
            </li>
          </ul>
        </div>
        <div className="min-w-0 nav:col-span-3">
          <p className="kicker text-navy-subtle">Contact</p>
          <address className="mt-4 not-italic text-sm leading-relaxed text-navy-muted">
            {company.addressLines.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </address>
          <a
            href={`tel:${company.phoneTel}`}
            className="mt-3 block text-sm text-navy-fg hover:text-paper"
          >
            {company.phoneDisplay}
          </a>
          <a
            href={`mailto:${company.email}`}
            className="mt-1 block text-sm text-navy-fg hover:text-paper"
          >
            {company.email}
          </a>
          <a
            href={company.profilePdf}
            className="mt-4 inline-flex items-center gap-1 text-xs tracking-[0.12em] text-navy-fg uppercase"
            download
          >
            Download company profile <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </div>
      <div className="border-t border-navy-line">
        <div className="mx-auto flex max-w-[1160px] flex-col gap-3 px-5 py-5 text-xs text-navy-subtle md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
          <div className="legal-links flex gap-5">
            <Link to="/privacy" className="hover:text-navy-fg">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-navy-fg">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function MobileCta() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname !== "/") return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 text-ink backdrop-blur-md nav:hidden">
      <div className="grid grid-cols-2">
        <a
          href={`tel:${company.phoneTel}`}
          className="inline-flex h-14 items-center justify-center gap-2 pb-[env(safe-area-inset-bottom)] font-sans text-xs font-semibold tracking-[0.14em] uppercase"
        >
          <Phone className="size-4 text-navy" /> Call us
        </a>
        <HashLink
          href="#contact"
          className="inline-flex h-14 items-center justify-center bg-navy pb-[env(safe-area-inset-bottom)] font-sans text-xs font-semibold tracking-[0.14em] text-navy-fg uppercase"
        >
          Enquire
        </HashLink>
      </div>
    </div>
  );
}

export function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-paper px-6 pt-28 text-center text-ink">
      <p className="kicker text-navy">404</p>
      <h1 className="mt-4 font-display text-title">Page not found</h1>
      <p className="mt-3 max-w-md text-ink-muted">
        The page you requested is not in this site. Return home or start an engineering enquiry.
      </p>
      <div className="mt-8 flex gap-3">
        <BtnLink href="/#top" variant="amber">
          Home
        </BtnLink>
        <BtnLink href="/#contact" variant="outline">
          Contact
        </BtnLink>
      </div>
    </div>
  );
}
