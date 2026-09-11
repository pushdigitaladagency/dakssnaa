import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function HashLink({
  href,
  className,
  children,
  onClick,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
}) {
  function go(e: MouseEvent<HTMLAnchorElement>) {
    const hash = href.startsWith("/#") ? href.slice(1) : href;
    if (!hash.startsWith("#")) {
      onClick?.(e);
      return;
    }
    const el = document.getElementById(hash.slice(1));
    if (!el) {
      onClick?.(e);
      return;
    }
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", hash);
    onClick?.(e);
  }

  return (
    <a href={href} className={cn(className)} onClick={go} {...rest}>
      {children}
    </a>
  );
}
