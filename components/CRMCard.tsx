import { Card, CardHeader } from "./ui/Card";

type Row = { k: string; v: string; highlight?: boolean };

/**
 * Mock CRM destination record (Salesforce / HubSpot style) — recognizable
 * CRM patterns without copying any product UI pixel-for-pixel.
 */
export default function CRMCard({
  system,
  accent,
  rows,
}: {
  system: string;
  accent: "purple" | "green";
  rows: Row[];
}) {
  return (
    <Card accent="ink" className="w-full">
      <CardHeader accent={accent}>
        <span className="font-display text-[15px] font-extrabold">
          {system}
        </span>
        <span className="rounded-md border-2 border-ink bg-card px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wide text-ink">
          Record
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
                r.highlight
                  ? accent === "green"
                    ? "text-green"
                    : "text-purple"
                  : "text-ink"
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
