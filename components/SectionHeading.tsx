import type { ReactNode } from "react";
import Eyebrow from "./Eyebrow";

type Tone = "purple" | "yellow" | "green" | "ink" | "onDark";

/**
 * Eyebrow chip + large display headline + optional supporting copy.
 * Shared by every top-of-section header on the page.
 */
export default function SectionHeading({
  eyebrow,
  eyebrowTone = "ink",
  title,
  children,
  dark = false,
  className = "",
}: {
  eyebrow?: string;
  eyebrowTone?: Tone;
  title: ReactNode;
  children?: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow && (
        <Eyebrow tone={dark ? "onDark" : eyebrowTone}>{eyebrow}</Eyebrow>
      )}
      <h2
        className={`mt-5 font-display text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-[1.02] tracking-[-0.02em] ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {children && (
        <div
          className={`mt-5 max-w-2xl text-[17px] leading-relaxed ${
            dark ? "text-white/70" : "text-muted"
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
