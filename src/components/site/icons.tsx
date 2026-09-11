import { cn } from "@/lib/utils";

const base = "size-full";

export function GeoIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const cls = cn(base, className);
  switch (name) {
    case "layers":
      return (
        <svg viewBox="0 0 48 48" className={cls} fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M24 8 42 18 24 28 6 18Z" />
          <path d="M8 24 24 33 40 24" />
          <path d="M8 30 24 39 40 30" />
        </svg>
      );
    case "combine":
      return (
        <svg viewBox="0 0 48 48" className={cls} fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="6" y="8" width="16" height="16" rx="2" />
          <rect x="26" y="8" width="16" height="16" rx="2" />
          <path d="M14 24v6h20v-6M24 30v10" />
          <circle cx="24" cy="40" r="3" />
        </svg>
      );
    case "paint":
      return (
        <svg viewBox="0 0 48 48" className={cls} fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M16 8h16l4 12H12Z" />
          <path d="M18 20v8a6 6 0 0 0 12 0v-8" />
          <circle cx="24" cy="14" r="2" fill="currentColor" stroke="none" />
        </svg>
      );
    case "flame":
      return (
        <svg viewBox="0 0 48 48" className={cls} fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M10 18h28v18H10Z" />
          <path d="M16 18V12h16v6" />
          <path d="M14 28h6M28 28h6M20 36v4h8v-4" />
        </svg>
      );
    case "ruler":
      return (
        <svg viewBox="0 0 48 48" className={cls} fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="24" cy="24" r="16" />
          <circle cx="24" cy="24" r="4" />
          <path d="M24 8v6M24 34v6M8 24h6M34 24h6M13 13l4 4M31 31l4 4M13 35l4-4M31 17l4-4" />
        </svg>
      );
    case "circuit":
      return (
        <svg viewBox="0 0 48 48" className={cls} fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="16" y="16" width="16" height="16" rx="2" />
          <path d="M24 8v8M24 32v8M8 24h8M32 24h8" />
          <circle cx="24" cy="8" r="2.2" fill="currentColor" stroke="none" />
          <circle cx="24" cy="40" r="2.2" fill="currentColor" stroke="none" />
          <circle cx="8" cy="24" r="2.2" fill="currentColor" stroke="none" />
          <circle cx="40" cy="24" r="2.2" fill="currentColor" stroke="none" />
        </svg>
      );
    case "clipboard":
      return (
        <svg viewBox="0 0 48 48" className={cls} fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M14 12h20v28H14Z" />
          <path d="M18 12V8h12v4" />
          <path d="M20 22h8M20 28h8M20 34h5" />
        </svg>
      );
    case "target":
      return (
        <svg viewBox="0 0 48 48" className={cls} fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="24" cy="24" r="14" />
          <circle cx="24" cy="24" r="6" />
          <path d="M24 6v6M24 36v6M6 24h6M36 24h6" />
        </svg>
      );
    case "compass":
      return (
        <svg viewBox="0 0 48 48" className={cls} fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="24" cy="24" r="16" />
          <path d="M24 10v4M24 34v4M10 24h4M34 24h4" />
          <path d="M24 18 30 30 24 27 18 30Z" fill="currentColor" stroke="none" />
        </svg>
      );
    case "rail":
      return (
        <svg viewBox="0 0 48 48" className={cls} fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M8 18h32v12H8Z" />
          <path d="M14 18V14h20v4M12 30v4M36 30v4M8 24h32" />
        </svg>
      );
    case "aero":
      return (
        <svg viewBox="0 0 48 48" className={cls} fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M8 26 40 22 28 26l8 8-10-4-10 8 4-10-12-2Z" />
        </svg>
      );
    case "defence":
      return (
        <svg viewBox="0 0 48 48" className={cls} fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M24 6 40 12v12c0 10-7 16-16 20C15 40 8 34 8 24V12Z" />
          <path d="M24 16v16M16 24h16" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 48 48" className={cls} fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="24" cy="24" r="8" />
          <path d="M24 8v6M24 34v6M8 24h6M34 24h6" />
          <circle cx="24" cy="24" r="16" />
        </svg>
      );
  }
}
