import { cn } from "@/lib/utils";

export function GeoField({
  variant = "hero",
  className,
}: {
  variant?: "hero" | "light" | "dark";
  className?: string;
}) {
  const isLight = variant === "light";
  const stroke = isLight ? "rgba(15,32,72,0.07)" : "rgba(243,239,230,0.12)";
  const faint = isLight ? "rgba(15,32,72,0.045)" : "rgba(243,239,230,0.07)";

  return (
    <svg
      className={cn("pointer-events-none absolute inset-0 size-full", className)}
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      {/* Left dotted column — matches the stationery reference */}
      <g fill={faint}>
        {Array.from({ length: 22 }).map((_, col) =>
          Array.from({ length: 28 }).map((_, row) => (
            <circle
              key={`${col}-${row}`}
              cx={48 + col * 14}
              cy={36 + row * 30}
              r={col < 2 ? 1.7 : 1.15}
              opacity={col > 4 ? 0 : 1 - col * 0.16}
            />
          )),
        )}
      </g>

      {/* Aircraft three-quarter line drawing */}
      <g
        className="geo-draw"
        fill="none"
        stroke={stroke}
        strokeWidth="1.15"
        strokeLinejoin="round"
        strokeLinecap="round"
        transform="translate(1080 70)"
      >
        <path d="M320 210c-18-70-70-128-148-150-18-5-36-6-54-2l-22 8c-20 12-28 38-22 62 4 14 14 26 28 32l18 6c22 8 28 22 26 42-4 28-22 48-52 58l-90 28c-20 6-32 22-32 42v18l210-24c48-6 78-22 96-52 12-20 22-48 22-68z" />
        <path d="M170 92c28 8 48 26 58 52" />
        <ellipse cx="198" cy="128" rx="42" ry="28" transform="rotate(-18 198 128)" />
        <path d="M188 118c8 2 16 10 18 20" />
        <path d="M96 248c40 4 88-6 128-28" />
        <path d="M40 290h86l18 22M40 308h70" />
        <circle cx="58" cy="318" r="16" />
        <circle cx="58" cy="318" r="7" />
        <path d="M250 200 310 188" />
        <path d="M142 210h48" />
      </g>

      {/* Bottom-right technical rose */}
      <g
        className="geo-spin"
        fill="none"
        stroke={stroke}
        strokeWidth="1"
        style={{ transformOrigin: "1380px 720px" }}
      >
        <circle cx="1380" cy="720" r="168" />
        <circle cx="1380" cy="720" r="128" />
        <circle cx="1380" cy="720" r="86" />
        <circle cx="1380" cy="720" r="46" />
        <circle cx="1380" cy="720" r="18" />
        {Array.from({ length: 36 }).map((_, i) => {
          const a = (i / 36) * Math.PI * 2;
          const inner = i % 3 === 0 ? 148 : 158;
          const x1 = 1380 + Math.cos(a) * inner;
          const y1 = 720 + Math.sin(a) * inner;
          const x2 = 1380 + Math.cos(a) * 168;
          const y2 = 720 + Math.sin(a) * 168;
          return <path key={i} d={`M${x1.toFixed(1)} ${y1.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)}`} />;
        })}
        <path d="M1380 552 V888 M1212 720 H1548" />
        <path
          d="M1380 720 m-86 0 a86 86 0 0 1 50-78"
          strokeWidth="6"
          strokeLinecap="butt"
        />
        <path
          d="M1380 720 m86 0 a86 86 0 0 1 -30 80"
          strokeWidth="6"
          strokeLinecap="butt"
        />
      </g>

      {/* Defence shield hex — small, upper mid */}
      <g fill="none" stroke={faint} strokeWidth="1" transform="translate(620 70)">
        <polygon points="40,0 80,22 80,66 40,88 0,66 0,22" />
      </g>
    </svg>
  );
}

export function GeoPaper({ className }: { className?: string }) {
  return (
    <img
      src="/images/hd/geo-paper.jpg"
      alt=""
      className={cn(
        "pointer-events-none absolute inset-0 size-full object-cover object-right opacity-[0.16]",
        className,
      )}
      aria-hidden
    />
  );
}
