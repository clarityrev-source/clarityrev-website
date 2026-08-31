import type { Metadata } from "next";
import Breadcrumbs from "@/components/subpage/Breadcrumbs";
import OfferHero from "@/components/subpage/OfferHero";
import PageSection from "@/components/subpage/PageSection";
import ListCard from "@/components/subpage/ListCard";
import StepChips from "@/components/subpage/StepChips";
import FitAndCta from "@/components/subpage/FitAndCta";
import DealExecutionVisual from "@/components/visuals/DealExecutionVisual";
import { Card, CardHeader } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Deal-to-Decision | ClarityRev",
  description:
    "Move valuable active deals out of limbo. Bring fragmented deal context together, make the real commercial state clear, and turn it into explicit next actions, ownership and decisions.",
};

const HERO_ROWS: { k: string; v: string; highlight?: boolean }[] = [
  { k: "CRM stage", v: "Proposal" },
  { k: "Real state", v: "Waiting for CFO approval", highlight: true },
  { k: "Missing", v: "Economic buyer confirmation", highlight: true },
  { k: "Next action", v: "Schedule CFO alignment" },
  { k: "Owner", v: "AE" },
];

const HeroVisual = (
  <Card accent="yellow" className="mx-auto w-full max-w-[360px]">
    <CardHeader accent="yellow">
      <span className="font-display text-[16px] font-extrabold text-ink">
        Acme Corp.
      </span>
      <span className="rounded-md border-2 border-ink bg-card px-2 py-0.5 font-mono text-[11px] font-bold uppercase tracking-wide text-ink">
        €120K
      </span>
    </CardHeader>
    <dl className="divide-y-2 divide-line/10 px-4 py-1">
      {HERO_ROWS.map((r) => (
        <div key={r.k} className="flex items-center justify-between gap-3 py-2.5">
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
    <div className="flex items-center justify-between border-t-[3px] border-ink bg-green px-4 py-2.5">
      <span className="font-display text-[13px] font-extrabold text-ink">
        Status
      </span>
      <span className="font-display text-[13px] font-extrabold text-ink">
        Action required
      </span>
    </div>
  </Card>
);

export default function Page() {
  return (
    <main>
      <Breadcrumbs current="Deal-to-Decision" />

      <OfferHero
        accent="yellow"
        eyebrow="Deal-to-Decision"
        headline="Move valuable active deals out of limbo."
        supporting="ClarityRev brings fragmented deal context together, makes the real commercial state clear, and turns it into explicit next actions, ownership and decisions."
        secondaryLabel="See how it works"
        visual={HeroVisual}
      />

      {/* Problem + transformation, combined */}
      <PageSection
        eyebrow="The problem"
        eyebrowTone="yellow"
        title="The CRM stage isn't what's actually happening."
        supporting="Relevant deal information is scattered across CRM, calls, email, proposals, meetings and people's memory, so sellers and managers reconstruct the deal from memory."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <ListCard
            title="Before"
            headerTone="plain"
            cardAccent="ink"
            mark="cross"
            items={[
              "Fragmented deal picture",
              "Unclear blockers",
              "Ambiguous ownership",
              "Stale CRM state",
              "Overstated pipeline",
              "Deals sitting in limbo",
            ]}
          />
          <ListCard
            title="After"
            headerTone="yellow"
            cardAccent="yellow"
            mark="check"
            markAccent="yellow"
            items={[
              "Reconstructed deal state",
              "Missing information visible",
              "Explicit next action and owner",
              "Updated CRM state",
              "A valid decision: progress, defer, disqualify or lose",
            ]}
          />
        </div>
      </PageSection>

      {/* Workflow centerpiece + embedded "clean decision" callout */}
      <PageSection
        id="how-it-works"
        eyebrow="How it works"
        eyebrowTone="yellow"
        title="Fragmented context becomes an explicit next action."
        supporting="The deal is reconstructed from every source into one context, the real state and blocker become visible, and it resolves into an owner and a next action written back to the CRM."
      >
        <div className="rounded-2xl border-[3px] border-ink bg-paper p-5 shadow-brutal-lg md:p-8">
          <DealExecutionVisual />
        </div>

        <div className="mt-6 rounded-2xl border-[3px] border-ink bg-yellow-tint p-6 shadow-brutal">
          <p className="font-display text-[clamp(1.15rem,2.4vw,1.5rem)] font-extrabold leading-tight text-ink">
            A clean decision is progress.
          </p>
          <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted">
            Progress can mean a meaningful next step, Won, Lost, Disqualified or
            properly Deferred with a valid reactivation date.
          </p>
        </div>
      </PageSection>

      {/* What you get + measurement, combined */}
      <PageSection
        eyebrow="What you get"
        eyebrowTone="yellow"
        title="What we implement, and what you can see."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <ListCard
            title="Definition"
            headerTone="yellow"
            cardAccent="yellow"
            mark="check"
            markAccent="yellow"
            items={[
              "Deal-state definition",
              "Context sources",
              "Blocker / gap logic",
            ]}
          />
          <ListCard
            title="Execution"
            headerTone="yellow"
            cardAccent="yellow"
            mark="check"
            markAccent="yellow"
            items={["Next-action logic", "Ownership rules", "CRM write-back"]}
          />
          <ListCard
            title="Visibility"
            headerTone="yellow"
            cardAccent="yellow"
            mark="check"
            markAccent="yellow"
            items={["Manager visibility", "Measurement of progression"]}
          />
        </div>

        <div className="mt-8 rounded-2xl border-[3px] border-ink bg-paper p-5 shadow-brutal-lg md:p-6">
          <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-faint">
            What you can measure
          </p>
          <StepChips
            steps={[
              "Eligible deals",
              "Verified next state",
              "Time to state",
              "Outcome distribution",
            ]}
          />
        </div>
      </PageSection>

      <FitAndCta
        accent="yellow"
        title="Best when deals are valuable and complex."
        fit={[
          "Valuable active opportunities",
          "Meaningful deal complexity and multiple stakeholders",
          "Fragmented commercial context",
          "Enough deal value for better execution to matter",
        ]}
        notFit={[
          "Good CRM discipline already solves this",
          "Deals are low-value or simple",
          "There's insufficient digital deal context",
        ]}
        related={[
          { title: "How we work", href: "/how-we-work", accent: "yellow" },
        ]}
      />
    </main>
  );
}
