import type { ReactNode } from "react";
import Eyebrow from "../Eyebrow";
import { accentTint, type Accent } from "./accents";

/** Strong accent-tinted statement block for the key message on a page. */
export default function Callout({
  accent,
  kicker,
  title,
  children,
}: {
  accent: Accent;
  kicker?: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div
      className={`rounded-2xl border-[3px] border-ink ${accentTint[accent]} p-7 shadow-brutal-lg md:p-9`}
    >
      {kicker && <Eyebrow tone={accent}>{kicker}</Eyebrow>}
      <p
        className={`font-display text-[clamp(1.4rem,3vw,2rem)] font-extrabold leading-tight tracking-[-0.01em] text-ink ${
          kicker ? "mt-4" : ""
        }`}
      >
        {title}
      </p>
      {children && (
        <div className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
          {children}
        </div>
      )}
    </div>
  );
}
