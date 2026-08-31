import { Card, CardHeader } from "../ui/Card";
import { IconArrowRight, IconBolt } from "../icons";

const INPUTS = ["CRM", "Calls", "Email", "Proposal", "Meeting notes"];

const STATE: { k: string; v: string; highlight?: boolean }[] = [
  { k: "Opportunity", v: "€120K" },
  { k: "CRM stage", v: "Proposal" },
  { k: "Real state", v: "Waiting for CFO approval", highlight: true },
  { k: "Missing", v: "Economic buyer confirmation", highlight: true },
];

function Connector() {
  return (
    <div className="flex shrink-0 items-center justify-center self-center text-ink">
      <span className="rotate-90 lg:rotate-0">
        <IconArrowRight s={26} />
      </span>
    </div>
  );
}

export default function DealExecutionVisual() {
  return (
    <div className="flex flex-col items-stretch gap-4 lg:flex-row lg:items-center lg:gap-3">
      {/* fragmented inputs */}
      <div className="grid shrink-0 grid-cols-2 gap-2 sm:grid-cols-3 lg:w-[168px] lg:grid-cols-1">
        {INPUTS.map((i) => (
          <span
            key={i}
            className="rounded-lg border-[3px] border-ink bg-card px-3 py-2 text-center font-display text-[13px] font-bold text-ink shadow-brutal"
          >
            {i}
          </span>
        ))}
      </div>

      <Connector />

      {/* unified deal context */}
      <Card accent="yellow" className="w-full max-w-[340px] lg:flex-1">
        <CardHeader accent="yellow">
          <span className="font-display text-[14px] font-extrabold text-ink">
            Unified deal context
          </span>
        </CardHeader>
        <dl className="divide-y-2 divide-line/10 px-4 py-1">
          {STATE.map((r) => (
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

      <Connector />

      {/* explicit commercial outcome */}
      <Card accent="green" className="w-full max-w-[340px] lg:flex-1">
        <CardHeader accent="green">
          <span className="flex items-center gap-2 font-display text-[14px] font-extrabold text-ink">
            <IconBolt s={16} /> Action required
          </span>
        </CardHeader>
        <dl className="px-4 py-1">
          <div className="border-b-2 border-line/10 py-2.5">
            <dt className="text-[11px] font-medium uppercase tracking-wide text-faint">
              Next action
            </dt>
            <dd className="mt-0.5 font-display text-[15px] font-extrabold text-ink">
              Schedule CFO alignment
            </dd>
          </div>
          <div className="py-2.5">
            <dt className="text-[11px] font-medium uppercase tracking-wide text-faint">
              Owner
            </dt>
            <dd className="mt-0.5 font-display text-[15px] font-extrabold text-ink">
              AE
            </dd>
          </div>
        </dl>
      </Card>
    </div>
  );
}
