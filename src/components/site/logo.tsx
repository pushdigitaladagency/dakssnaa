import { cn } from "@/lib/utils";
import { HashLink } from "./hash-link";

export function Logo({
  onDark = false,
  compact = false,
  full = false,
}: {
  onDark?: boolean;
  compact?: boolean;
  full?: boolean;
}) {
  if (full) {
    return (
      <HashLink href="/#top" className="inline-block" aria-label="Sree Dakssnaa — home">
        <span className={cn("inline-block", onDark && "bg-paper px-5 py-4")}>
          <img
            src="/images/brand/logo.png"
            alt="Sree Dakssnaa Aerospace and Defence India Pvt. Ltd."
            className="h-[60px] w-auto"
          />
        </span>
      </HashLink>
    );
  }

  return (
    <HashLink
      href="/#top"
      className="group flex items-center gap-3"
      aria-label="Sree Dakssnaa Aerospace & Defence — home"
    >
      <img
        src="/images/brand/mark.png"
        alt=""
        className={cn(
          "h-[60px] w-auto shrink-0",
          onDark && "rounded-lg bg-paper p-1",
        )}
      />
      <span className="hidden min-w-0 flex-col leading-none min-[360px]:flex">
        <span
          className={cn(
            "font-sans text-[13px] font-semibold tracking-[0.08em] uppercase",
            onDark ? "text-navy-fg" : "text-navy",
          )}
        >
          Sree Dakssnaa
        </span>
        {!compact ? (
          <span
            className={cn(
              "mt-1 hidden font-sans text-[0.5625rem] font-medium tracking-[0.16em] uppercase sm:block",
              onDark ? "text-navy-subtle" : "text-ink-subtle",
            )}
          >
            Aerospace & Defence
          </span>
        ) : null}
      </span>
    </HashLink>
  );
}
