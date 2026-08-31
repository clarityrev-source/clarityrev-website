import NumberBadge from "../ui/NumberBadge";
import type { Accent } from "./accents";

/** Numbered explanation cards (Context/Decision/Action/Measurement, etc.). */
export default function ModelCards({
  items,
  accent,
}: {
  items: { title: string; desc: string }[];
  accent: Accent;
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((it, i) => (
        <div
          key={it.title}
          className="rounded-2xl border-[3px] border-ink bg-card p-6 text-ink shadow-brutal-lg"
        >
          <NumberBadge accent={accent} size="sm">
            {i + 1}
          </NumberBadge>
          <h3 className="mt-4 font-display text-[19px] font-extrabold leading-tight text-ink">
            {it.title}
          </h3>
          <p className="mt-1.5 text-[14px] leading-relaxed text-muted">
            {it.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
