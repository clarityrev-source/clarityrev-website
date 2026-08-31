import { Card, CardHeader } from "./ui/Card";
import { IconSignal } from "./icons";

type Row = { k: string; v: string; highlight?: boolean };

/**
 * A realistic account/signal record — the kind of intelligence ClarityRev
 * assembles per account. Used in the Signal-to-Pipeline visual.
 */
export default function SignalCard({
  company = "Acme Corp.",
  rows,
  priority = "High",
}: {
  company?: string;
  rows: Row[];
  priority?: string;
}) {
  return (
    <Card accent="purple" className="w-full max-w-[300px]">
      <CardHeader accent="purple">
        <div className="flex items-center gap-2 text-white">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border-2 border-ink bg-card text-ink">
            <IconSignal s={16} />
          </span>
          <span className="font-display text-[16px] font-extrabold">
            {company}
          </span>
        </div>
        <span className="rounded-md border-2 border-ink bg-yellow px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wide text-ink">
          {priority}
        </span>
      </CardHeader>
      <dl className="divide-y-2 divide-line/10 px-4 py-1">
        {rows.map((r) => (
          <div key={r.k} className="flex items-center justify-between gap-3 py-2">
            <dt className="text-[12px] font-medium uppercase tracking-wide text-faint">
              {r.k}
            </dt>
            <dd
              className={`text-right font-display text-[13px] font-bold ${
                r.highlight ? "text-purple" : "text-ink"
              }`}
            >
              {r.v}
            </dd>
          </div>
        ))}
      </dl>
    </Card>
  );
}
