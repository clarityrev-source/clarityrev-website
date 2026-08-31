import type { ReactNode } from "react";

/* ── Shared card tokens ──────────────────────────────────────────
   One source of truth for the neo-brutalist shell: 3px ink border,
   16px radius (rounded-2xl), 8px offset colored shadow. Every card on
   the site (hero, workflow, CRM, outcome, CTA, methodology) composes
   from these so border weight, radius and shadow stay identical. */

export type Accent = "ink" | "purple" | "yellow" | "green";

export const CARD_SHELL =
  "rounded-2xl border-[3px] border-ink bg-card";

export const cardShadow: Record<Accent, string> = {
  ink: "shadow-brutal-lg",
  purple: "shadow-brutal-purple",
  yellow: "shadow-brutal-yellow",
  green: "shadow-brutal-green",
};

const headerBg: Record<Accent | "plain", string> = {
  purple: "bg-purple text-white",
  yellow: "bg-yellow text-ink",
  green: "bg-green text-ink",
  ink: "bg-ink text-paper",
  plain: "bg-card text-ink",
};

/**
 * Outer card shell. `overflow-hidden` clips a colored header to the
 * card radius so the header is part of the same shell — no doubled or
 * misaligned corner lines. The offset shadow sits outside and is kept.
 */
export function Card({
  accent = "ink",
  className = "",
  children,
}: {
  accent?: Accent;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`overflow-hidden ${CARD_SHELL} ${cardShadow[accent]} ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * Colored header inside a Card. Only a bottom divider — the Card border
 * surrounds the whole component, so no independent header border.
 */
export function CardHeader({
  accent = "plain",
  className = "",
  children,
}: {
  accent?: Accent | "plain";
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`flex items-center justify-between gap-3 border-b-[3px] border-ink px-4 py-2.5 ${headerBg[accent]} ${className}`}
    >
      {children}
    </div>
  );
}
