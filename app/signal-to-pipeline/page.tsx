import type { Metadata } from "next";
import Breadcrumbs from "@/components/subpage/Breadcrumbs";
import OfferHero from "@/components/subpage/OfferHero";
import PageSection from "@/components/subpage/PageSection";
import ListCard from "@/components/subpage/ListCard";
import StepChips from "@/components/subpage/StepChips";
import FitAndCta from "@/components/subpage/FitAndCta";
import SignalCard from "@/components/SignalCard";
import WorkflowFlow, { type FlowStep } from "@/components/WorkflowFlow";
import { IconArrowRight, IconCheck, IconDatabase, IconChart, IconBolt, IconPhone } from "@/components/icons";

export const metadata: Metadata = {
  title: "Signal-to-Pipeline | ClarityRev",
  description:
    "Know which target accounts deserve attention now, and why. Combine account changes with fit, history and context to turn signals into justified sales action.",
};

const CHAIN: FlowStep[] = [
  { icon: <IconCheck s={16} />, label: "Validate", sub: "Is the signal real?", accent: "purple" },
  { icon: <IconDatabase s={16} />, label: "Contextualize", sub: "Fit + history" },
  { icon: <IconChart s={16} />, label: "Prioritize", sub: "High / low", accent: "yellow" },
  { icon: <IconBolt s={16} />, label: "Trigger", sub: "Rule fires" },
  { icon: <IconPhone s={16} />, label: "Action", sub: "Intro call" },
  { icon: <IconCheck s={16} />, label: "Outcome", sub: "Meeting booked", accent: "green" },
];

const EXAMPLE = (
  <SignalCard
    company="Acme Corp."
    priority="High"
    rows={[
      { k: "Signal", v: "Funding raised", highlight: true },
      { k: "ICP fit", v: "92%" },
      { k: "Existing relationship", v: "Yes" },
      { k: "Relevant buyer", v: "VP Operations" },
      { k: "Buying reason", v: "Expansion" },
      { k: "Recommended action", v: "Intro call" },
      { k: "CRM task", v: "Created" },
    ]}
  />
);

export default function Page() {
  return (
    <main>
      <Breadcrumbs current="Signal-to-Pipeline" />

      <OfferHero
        accent="purple"
        eyebrow="Signal-to-Pipeline"
        headline="Know which target accounts deserve attention now, and why."
        supporting="ClarityRev combines meaningful account changes with fit, history and commercial context to turn signals into justified sales action."
        secondaryLabel="See the workflow"
        visual={EXAMPLE}
      />

      {/* Problem + distinction, combined */}
      <PageSection
        eyebrow="The problem"
        eyebrowTone="purple"
        title="Fit and timing are two different questions."
        supporting="Your team already knows which accounts fit. The problem is that prioritization is static, so attention lands on the wrong accounts at the wrong time."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border-[3px] border-ink bg-card p-7 shadow-brutal-lg">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-faint">
              ICP-to-Pipeline
            </p>
            <p className="mt-3 font-display text-[clamp(1.3rem,2.6vw,1.7rem)] font-extrabold leading-tight text-ink">
              Who is fundamentally fit?
            </p>
          </div>
          <div className="rounded-2xl border-[3px] border-ink bg-purple-tint p-7 shadow-brutal-purple">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-purple">
              Signal-to-Pipeline
            </p>
            <p className="mt-3 font-display text-[clamp(1.3rem,2.6vw,1.7rem)] font-extrabold leading-tight text-ink">
              Given that they fit, is there a reason to act now?
            </p>
          </div>
        </div>

        <div className="mt-6">
          <ListCard
            title="Sales can't consistently answer"
            headerTone="plain"
            cardAccent="ink"
            mark="cross"
            items={[
              "Which account matters now?",
              "Why now?",
              "Is this signal actually relevant?",
              "What should we do next?",
            ]}
          />
        </div>
      </PageSection>

      {/* Workflow centerpiece (folds in "a prioritization system, not a signal feed") */}
      <PageSection
        id="how-it-works"
        eyebrow="The workflow"
        eyebrowTone="purple"
        title="A prioritization system, not a signal feed."
        supporting="A meaningful account change is validated, put in context and prioritized before it ever becomes a task, so the action is justified rather than noise."
      >
        <div className="rounded-2xl border-[3px] border-ink bg-paper p-5 shadow-brutal-lg md:p-8">
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center">
            {EXAMPLE}
            <div className="hidden shrink-0 text-ink lg:block">
              <IconArrowRight s={28} />
            </div>
            <div className="w-full min-w-0 flex-1">
              <WorkflowFlow steps={CHAIN} />
            </div>
          </div>
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
            title="Setup"
            headerTone="purple"
            cardAccent="purple"
            mark="check"
            markAccent="purple"
            items={[
              "Signal definition",
              "Source selection",
              "Signal validation",
              "Account matching",
            ]}
          />
          <ListCard
            title="Logic"
            headerTone="purple"
            cardAccent="purple"
            mark="check"
            markAccent="purple"
            items={[
              "Client-specific relevance logic",
              "Account history / context",
              "Priority logic",
              "Action rules",
            ]}
          />
          <ListCard
            title="Delivery"
            headerTone="purple"
            cardAccent="purple"
            mark="check"
            markAccent="purple"
            items={["CRM delivery", "Measurement", "Learning loop"]}
          />
        </div>

        <div className="mt-8 rounded-2xl border-[3px] border-ink bg-paper p-5 shadow-brutal-lg md:p-6">
          <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-faint">
            What you can measure
          </p>
          <StepChips
            steps={[
              "Observed changes",
              "Relevant changes",
              "Actions",
              "Conversations",
              "Qualified opportunities",
            ]}
          />
        </div>
      </PageSection>

      <FitAndCta
        accent="purple"
        title="Best when a base motion already exists."
        fit={[
          "A defined ICP / account universe",
          "An existing CRM and a functioning base motion",
          "Enough account volume for prioritization to matter",
          "Meaningful commercial events or account changes",
        ]}
        notFit={[
          "You still need basic ICP / target-market definition",
          "Existing software already solves this sufficiently",
          "Account context is unavailable",
        ]}
        related={[
          {
            title: "ICP-to-Pipeline",
            href: "/icp-to-pipeline",
            accent: "purple",
          },
        ]}
      />
    </main>
  );
}
