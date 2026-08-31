/* The three brand accent colors used across subpages (no ink here — ink is a
   card/header option, not an accent). Card/NumberBadge accept a superset that
   also includes "ink", and these three values are assignable to it. */
export type Accent = "purple" | "yellow" | "green";

export const accentBg: Record<Accent, string> = {
  purple: "bg-purple",
  yellow: "bg-yellow",
  green: "bg-green",
};

export const accentTint: Record<Accent, string> = {
  purple: "bg-purple-tint",
  yellow: "bg-yellow-tint",
  green: "bg-green-tint",
};

export const accentShadow: Record<Accent, string> = {
  purple: "shadow-brutal-purple",
  yellow: "shadow-brutal-yellow",
  green: "shadow-brutal-green",
};
