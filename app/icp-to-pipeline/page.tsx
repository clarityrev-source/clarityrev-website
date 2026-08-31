import type { Metadata } from "next";
import Breadcrumbs from "@/components/subpage/Breadcrumbs";
import OfferHero from "@/components/subpage/OfferHero";
import PageSection from "@/components/subpage/PageSection";
import ListCard from "@/components/subpage/ListCard";
import StepChips from "@/components/subpage/StepChips";
import FitAndCta from "@/components/subpage/FitAndCta";
import SignalCard from "@/components/SignalCard";
import WorkflowFlow, { type FlowStep } from "@/components/WorkflowFlow";
import {
  IconChart,
  IconTarget,
  IconBuilding,
  IconUser,
  IconDatabase,
  IconMail,
  IconSync,
  IconCheck,
  IconBrain,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "ICP-to-Pipeline | ClarityRev",
  description:
    "Turn a proven market into repeatable qualified pipeline. The ICP is an input, not the deliverable.",
};

const FLOW: FlowStep[] = [
  { icon: <IconChart s={16} />, label: "Commercial evidence", sub: "Won / lost + market", accent: "purple" },
  { icon: <IconTarget s={16} />, label: "ICP / market model", sub: "Benelux B2B SaaS", accent: "purple" },
  { icon: <IconBuilding s={16} />, label: "Target accounts", sub: "186 accounts" },
  { icon: <IconUser s={16} />, label: "Buying roles", sub: "CRO / VP Sales" },
  { icon: <IconDatabase s={16} />, label: "Enrichment", sub: "Firmographic + tech" },
  { icon: <IconMail s={16} />, label: "Activation", sub: "Email + LinkedIn" },
  { icon: <IconSync s={16} />, label: "CRM", sub: "Commercial state" },
  { icon: <IconCheck s={16} />, label: "Qualified opportunity", sub: "Qualified", accent: "green" },
  { icon: <IconBrain s={16} />, label: "Learning", sub: "Improve targeting", accent: "purple" },
];

export default function Page() {
  return (
    <main>
      <Breadcrumbs current="ICP-to-Pipeline" />

      <OfferHero
        accent="purple"
        eyebrow="ICP-to-Pipeline"
        headline="Turn a proven market into repeatable qualified pipeline."
        supporting="ClarityRev turns commercial evidence, target-market knowledge and account data into a measurable new-business system. The ICP is an input, not the deliverable."
        visual={
          <SignalCard
            company="Benelux B2B SaaS"
            priority="Qualified"
            rows={[
              { k: "ICP fit", v: "89%", highlight: true },
              { k: "Target accounts", v: "186" },
              { k: "Buyer", v: "CRO / VP Sales" },
              { k: "Activation", v: "Email + LinkedIn" },
              { k: "Opportunity", v: "Qualified" },
            ]}
          />
        }
      />

      {/* Problem + transformation, combined */}
      <PageSection
        eyebrow="The problem"
        eyebrowTone="purple"
        title="Market knowledge hasn't become a repeatable motion yet."
        supporting="The offer already sells. Turning a target market into qualified opportunities is still inconsistent, hard to repeat and hard to learn from."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <ListCard
            title="Before"
            headerTone="plain"
            cardAccent="ink"
            mark="cross"
            items={[
              "Commercial knowledge in people's heads",
              "Inconsistent target-account selection",
              "Unclear buyer roles",
              "Scattered data and ad-hoc activation",
              "Weak measurement",
            ]}
          />
          <ListCard
            title="After"
            headerTone="purple"
            cardAccent="purple"
            mark="check"
            markAccent="purple"
            items={[
              "Operational market model",
              "Maintainable target-account universe",
              "Clear buying roles and enriched context",
              "Live activation path and CRM state",
              "Measurable qualified pipeline",
            ]}
          />
        </div>
      </PageSection>

      {/* Core workflow: the centerpiece */}
      <PageSection
        id="how-it-works"
        eyebrow="How the system works"
        eyebrowTone="purple"
        title="Commercial evidence becomes qualified pipeline."
        supporting="Each step is real work connected to the next, not a slide. The ICP feeds a maintainable account universe, activation and CRM state you can learn from."
      >
        <div className="rounded-2xl border-[3px] border-ink bg-paper p-5 shadow-brutal-lg md:p-8">
          <WorkflowFlow steps={FLOW} />
        </div>
      </PageSection>

      {/* What you get + measurement, combined */}
      <PageSection
        eyebrow="What you get"
        eyebrowTone="purple"
        title="What we implement, and what you can see."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <ListCard
            title="Market foundation"
            headerTone="purple"
            cardAccent="purple"
            mark="check"
            markAccent="purple"
            items={[
              "Commercial evidence review",
              "ICP / market model",
              "Target-account universe",
              "Buying roles",
            ]}
          />
          <ListCard
            title="Activation"
            headerTone="purple"
            cardAccent="purple"
            mark="check"
            markAccent="purple"
            items={[
              "Account sourcing",
              "Enrichment",
              "Account context",
              "Messaging / activation",
            ]}
          />
          <ListCard
            title="System"
            headerTone="purple"
            cardAccent="purple"
            mark="check"
            markAccent="purple"
            items={[
              "CRM commercial state",
              "Measurement",
              "Initial live launch",
              "Learning loop and handover",
            ]}
          />
        </div>

        <div className="mt-8 rounded-2xl border-[3px] border-ink bg-paper p-5 shadow-brutal-lg md:p-6">
          <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-faint">
            What you can measure
          </p>
          <StepChips
            steps={[
              "Defined accounts",
              "Reached",
              "Conversations",
              "Qualified opportunities",
              "Qualified pipeline",
            ]}
          />
        </div>
      </PageSection>

      <FitAndCta
        accent="purple"
        title="Best when the proposition already sells."
        fit={[
          "The proposition already has commercial evidence",
          "Acquisition is inconsistent or too founder-dependent",
          "A defined market exists",
          "You want a measurable new-business motion",
        ]}
        notFit={[
          "You still don't know what you should sell",
          "There's no evidence buyers will purchase it yet",
          "You want fully outsourced SDR staffing",
        ]}
        related={[
          {
            title: "Signal-to-Pipeline",
            href: "/signal-to-pipeline",
            accent: "purple",
          },
        ]}
      />
    </main>
  );
}
