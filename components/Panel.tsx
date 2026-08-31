import type { ReactNode } from "react";

type Accent = "ink" | "purple" | "yellow" | "green";

const shadowFor: Record<Accent, string> = {
  ink: "shadow-brutal-lg",
  purple: "shadow-brutal-purple",
  yellow: "shadow-brutal-yellow",
  green: "shadow-brutal-green",
};

/**
 * Heavy-outlined card with an offset colored shadow — the core neo-brutalist
 * surface reused across every section.
 */
export default function Panel({
  children,
  accent = "ink",
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  accent?: Accent;
  className?: string;
  as?: "div" | "article" | "section" | "li";
}) {
  return (
    <Tag
      className={`rounded-2xl border-[3px] border-ink bg-card ${shadowFor[accent]} ${className}`}
    >
      {children}
    </Tag>
  );
}
