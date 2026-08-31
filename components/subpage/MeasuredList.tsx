import { IconChart } from "../icons";
import { accentBg, type Accent } from "./accents";

/** Grid of measurement signals — what the engagement tracks. */
export default function MeasuredList({
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
          className="flex items-center gap-3 rounded-xl border-[3px] border-ink bg-card p-3.5 shadow-brutal"
        >
          <span
            className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border-2 border-ink ${accentBg[accent]} text-ink`}
          >
            <IconChart s={16} />
          </span>
          <span className="text-[14px] font-bold leading-snug text-ink">
            {it}
          </span>
        </div>
      ))}
    </div>
  );
}
