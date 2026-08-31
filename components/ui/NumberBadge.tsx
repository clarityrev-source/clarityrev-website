import type { ReactNode } from "react";
import type { Accent } from "./Card";

const bg: Record<Accent, string> = {
  ink: "bg-ink text-paper",
  purple: "bg-purple text-white",
  yellow: "bg-yellow text-ink",
  green: "bg-green text-ink",
};

const sizes = {
  sm: "h-8 w-8 text-[14px]",
  md: "h-11 w-11 text-[18px]",
};

/**
 * Square numbered badge (01 / 02 / 03) — shared geometry across the hero
 * and service sections. Variants differ only by color.
 */
export default function NumberBadge({
  children,
  accent = "purple",
  size = "md",
  className = "",
}: {
  children: ReactNode;
  accent?: Accent;
  size?: keyof typeof sizes;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-lg border-[3px] border-ink font-display font-black ${sizes[size]} ${bg[accent]} ${className}`}
    >
      {children}
    </span>
  );
}
