import { CheckMark } from "./Mark";
import type { Accent } from "./accents";

/** Customer-readable checklist grid of what an engagement includes. */
export default function IncludedGrid({
  items,
  accent,
}: {
  items: string[];
  accent: Accent;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => (
        <div
          key={it}
          className="flex items-start gap-2.5 rounded-xl border-[3px] border-ink bg-card p-3.5 shadow-brutal"
        >
          <CheckMark accent={accent} />
          <span className="text-[14px] font-semibold leading-snug text-ink">
            {it}
          </span>
        </div>
      ))}
    </div>
  );
}
