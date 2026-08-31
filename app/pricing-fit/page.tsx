import type { Metadata } from "next";
import Breadcrumbs from "@/components/subpage/Breadcrumbs";
import OfferHero from "@/components/subpage/OfferHero";
import PageSection from "@/components/subpage/PageSection";
import ListCard from "@/components/subpage/ListCard";
import SubpageCTA from "@/components/subpage/SubpageCTA";
import { Card, CardHeader } from "@/components/ui/Card";
import { IconArrowRight } from "@/components/icons";
import { accentBg, type Accent } from "@/components/subpage/accents";

export const metadata: Metadata = {
  title: "Pricing & Fit | ClarityRev",
  description:
    "Starting prices for bounded ClarityRev engagements, plus how to tell whether the problem is worth solving and whether ClarityRev is the right fit.",
};

type Offer = {
  title: string;
  href: string;
  accent: Accent;
  bestFor: string;
  duration: string;
  price: string;
};

const OFFERS: Offer[] = [
  {
    title: "ICP-to-Pipeline",
    href: "/icp-to-pipeline",
    accent: "purple",
    bestFor: "Build a repeatable new-business motion.",
    duration: "8 weeks",
    price: "From €4,750 excl. VAT",
  },
  {
    title: "Signal-to-Pipeline",
    href: "/signal-to-pipeline",
    accent: "purple",
    bestFor: "Prioritize fit accounts on timing and context.",
    duration: "7 weeks",
    price: "From €4,250 excl. VAT",
  },
  {
    title: "Deal-to-Decision",
    href: "/deal-to-decision",
    accent: "yellow",
    bestFor: "Bring clarity and action to valuable active deals.",
    duration: "8 weeks",
    price: "From €5,000 excl. VAT",
  },
  {
    title: "Revenue Workflow Build",
    href: "/revenue-workflow-build",
    accent: "green",
    bestFor: "Improve one recurring commercial workflow.",
    duration: "4 to 9 weeks",
    price: "From €2,500 excl. VAT",
  },
];

const FACTORS = [
  "Scope",
  "Workflow complexity",
  "Number of systems",
  "Context / data availability",
  "Integrations",
  "Activation requirements",
  "Measurement requirements",
  "ClarityRev operational involvement",
];

const HeroVisual = (
  <Card accent="green" className="mx-auto w-full max-w-[360px]">
    <CardHeader accent="green">
      <span className="font-display text-[15px] font-extrabold text-ink">
        Starting prices
      </span>
      <span className="rounded-md border-2 border-ink bg-card px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wide text-ink">
        excl. VAT
      </span>
    </CardHeader>
    <dl className="divide-y-2 divide-line/10 px-4 py-1">
      {OFFERS.map((o) => (
        <div key={o.title} className="flex items-center justify-between gap-3 py-2.5">
          <dt className="text-[12px] font-medium uppercase tracking-wide text-faint">
            {o.title}
          </dt>
          <dd className="text-right font-display text-[13px] font-extrabold text-ink">
            {o.price.replace(" excl. VAT", "")}
          </dd>
        </div>
      ))}
    </dl>
  </Card>
);

function PriceChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border-2 border-ink bg-card px-2 py-0.5 font-mono text-[11px] font-bold uppercase tracking-wide text-ink">
      {children}
    </span>
  );
}

export default function Page() {
  return (
    <main>
      <Breadcrumbs current="Pricing & Fit" />

      <OfferHero
        accent="green"
        eyebrow="Pricing & Fit"
        headline="See whether the problem is worth solving, and whether ClarityRev is the right fit."
        supporting="You do not need to know which offer fits before speaking with us. Start with the commercial problem and the outcome that needs to change."
        secondaryLabel="See the offers"
        secondaryHref="#offers"
        visual={HeroVisual}
      />

      {/* Offers + pricing */}
      <PageSection
        id="offers"
        eyebrow="Offers"
        eyebrowTone="green"
        title="Bounded engagements with clear starting prices."
      >
        <div className="grid gap-6 sm:grid-cols-2">
          {OFFERS.map((o) => (
            <a
              key={o.title}
              href={o.href}
              className="brutal-press group flex flex-col rounded-2xl border-[3px] border-ink bg-card p-6 shadow-brutal-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex items-center gap-2.5">
                  <span
                    className={`inline-block h-4 w-4 shrink-0 rounded-[4px] border-2 border-ink ${accentBg[o.accent]}`}
                  />
                  <span className="font-display text-[19px] font-extrabold text-ink">
                    {o.title}
                  </span>
                </span>
                <span className="mt-1 shrink-0 text-ink transition-transform group-hover:translate-x-1">
                  <IconArrowRight s={22} />
                </span>
              </div>
              <p className="mt-2 text-[14px] leading-snug text-muted">
                {o.bestFor}
              </p>
              <div className="mt-4 flex items-center gap-3 border-t-2 border-line/15 pt-4">
                <PriceChip>{o.duration}</PriceChip>
                <span className="font-display text-[15px] font-extrabold text-ink">
                  {o.price}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Combined option, subordinate to the four offers */}
        <div className="mt-6 rounded-2xl border-[3px] border-ink bg-purple-tint p-6 shadow-brutal md:p-7">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-purple">
            Combined option
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-[18px] font-extrabold text-ink">
                Pipeline Generation System
              </p>
              <p className="mt-1 text-[14px] text-muted">
                ICP-to-Pipeline + Signal-to-Pipeline
              </p>
            </div>
            <div className="flex items-center gap-3">
              <PriceChip>10 weeks</PriceChip>
              <span className="font-display text-[15px] font-extrabold text-ink">
                From €7,500 excl. VAT
              </span>
            </div>
          </div>
        </div>
      </PageSection>

      {/* What determines investment, compact */}
      <PageSection
        eyebrow="Investment"
        eyebrowTone="green"
        title="What determines the investment."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {FACTORS.map((f) => (
            <div
              key={f}
              className="rounded-xl border-[3px] border-ink bg-card p-4 shadow-brutal"
            >
              <span className="font-display text-[14px] font-bold leading-snug text-ink">
                {f}
              </span>
            </div>
          ))}
        </div>
      </PageSection>

      {/* Fit / not fit */}
      <PageSection
        eyebrow="Is it a fit?"
        eyebrowTone="green"
        title="Strong fit, and when another route is better."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <ListCard
            title="Strong fit when"
            headerTone="green"
            cardAccent="green"
            mark="check"
            markAccent="green"
            items={[
              "The commercial problem is meaningful",
              "The state change is measurable",
              "Required systems / data can be accessed",
              "The team is willing to change the process",
              "There is a clear accountable owner",
            ]}
          />
          <ListCard
            title="Another route may be better when"
            headerTone="ink"
            cardAccent="ink"
            mark="cross"
            items={[
              "There's no viable proposition or business impact",
              "Simple native software can already solve it",
              "You want unlimited outsourced execution",
              "There's no measurable outcome",
            ]}
          />
        </div>
      </PageSection>

      {/* Fit Call explained once + optional design phase */}
      <PageSection
        eyebrow="The Fit Call"
        eyebrowTone="green"
        title="One short qualification conversation."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <ListCard
            title="On the call we"
            headerTone="green"
            cardAccent="green"
            mark="check"
            markAccent="green"
            items={[
              "Understand the current state",
              "Understand the desired outcome",
              "Assess economics and readiness",
              "Decide the sensible next step, together",
            ]}
          />
          <div className="rounded-2xl border-[3px] border-ink bg-card p-7 shadow-brutal-lg">
            <p className="font-display text-[18px] font-extrabold text-ink">
              When is a design phase needed?
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              For complex builds where material uncertainty prevents responsible
              scoping, a paid design phase may be used first to define the state
              change, baseline, required systems and build scope. It is not
              required for every engagement.
            </p>
          </div>
        </div>
      </PageSection>

      <SubpageCTA
        related={[]}
        includePricing={false}
        heading="Start with a Fit Call."
        supporting="Bring the commercial problem and the outcome that needs to change. We'll tell you honestly whether ClarityRev is the right fit."
      />
    </main>
  );
}
