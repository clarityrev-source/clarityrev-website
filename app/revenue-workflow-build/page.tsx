import type { Metadata } from "next";
import Breadcrumbs from "@/components/subpage/Breadcrumbs";
import OfferHero from "@/components/subpage/OfferHero";
import PageSection from "@/components/subpage/PageSection";
import ListCard from "@/components/subpage/ListCard";
import StepChips from "@/components/subpage/StepChips";
import FitAndCta from "@/components/subpage/FitAndCta";
import WorkflowFlow, { type FlowStep } from "@/components/WorkflowFlow";
import { Card, CardHeader } from "@/components/ui/Card";
import {
  IconBolt,
  IconDatabase,
  IconBuilding,
  IconCalendar,
  IconUser,
  IconMail,
  IconSync,
  IconChart,
  IconArrowDown,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Revenue Workflow Build | ClarityRev",
  description:
    "Turn recurring revenue work into a better system. Redesign one bounded recurring commercial workflow to reduce manual work, delay, rework and coordination.",
};

const FLOW: FlowStep[] = [
  { icon: <IconBolt s={16} />, label: "Proposal created", sub: "Trigger", accent: "green" },
  { icon: <IconDatabase s={16} />, label: "Context gathered", sub: "CRM + deal" },
  { icon: <IconBuilding s={16} />, label: "Account context", sub: "Firmographic" },
  { icon: <IconCalendar s={16} />, label: "Timing decided", sub: "Follow-up" },
  { icon: <IconUser s={16} />, label: "Human review", sub: "When it matters", accent: "yellow" },
  { icon: <IconMail s={16} />, label: "Action created", sub: "Task / email" },
  { icon: <IconSync s={16} />, label: "CRM updated", sub: "Written back" },
  { icon: <IconChart s={16} />, label: "Outcome measured", sub: "Did it change?", accent: "green" },
];

const EXAMPLES = [
  "Meeting follow-up",
  "Proposal follow-up",
  "Lead qualification",
  "Lead routing",
  "Sales research",
  "CRM updates",
  "Account review",
  "Renewal preparation",
  "Customer handoff",
];

const HeroVisual = (
  <Card accent="green" className="mx-auto w-full max-w-[360px]">
    <CardHeader accent="green">
      <span className="font-display text-[15px] font-extrabold text-ink">
        One recurring workflow
      </span>
    </CardHeader>
    <div className="flex flex-col items-stretch gap-2 p-5">
      {[
        "Recurring manual work",
        "Better-designed workflow",
        "More capacity, speed, quality or reliability",
      ].map((t, i) => (
        <div key={t} className="flex flex-col items-stretch">
          <div
            className={`rounded-lg border-[3px] border-ink px-4 py-2.5 font-display text-[14px] font-bold text-ink shadow-brutal ${
              i === 2 ? "bg-green" : "bg-card"
            }`}
          >
            {t}
          </div>
          {i < 2 && (
            <span className="flex justify-center py-1 text-ink">
              <IconArrowDown s={18} />
            </span>
          )}
        </div>
      ))}
    </div>
  </Card>
);

export default function Page() {
  return (
    <main>
      <Breadcrumbs current="Revenue Workflow Build" />

      <OfferHero
        accent="green"
        eyebrow="Revenue Workflow Build"
        headline="Turn recurring revenue work into a better system."
        supporting="ClarityRev redesigns one bounded recurring commercial workflow to reduce manual work, delay, rework and coordination. We remove unnecessary work and build only what it actually needs."
        secondaryLabel="See how it works"
        visual={HeroVisual}
      />

      {/* Problem + principle, combined (no branded sequence) */}
      <PageSection
        eyebrow="The problem"
        eyebrowTone="green"
        title="Start with the workflow, not the technology."
        supporting="Fix the work first. Then use only the capability the workflow actually needs."
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-stretch">
          <ListCard
            title="People keep having to"
            headerTone="plain"
            cardAccent="ink"
            mark="cross"
            items={[
              "Gather context and move data",
              "Check status",
              "Make routine decisions",
              "Coordinate handoffs",
              "Remember next steps",
              "Update multiple tools",
            ]}
          />
          <div className="rounded-2xl border-[3px] border-ink bg-green-tint p-7 shadow-brutal-lg">
            <p className="font-display text-[clamp(1.3rem,2.6vw,1.7rem)] font-extrabold leading-tight tracking-[-0.01em] text-ink">
              Use the smallest responsible capability.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              Improve the workflow with the least that does the job. We use
              native software where it works, add rules or AI only where a real
              gap remains, and keep a human in the loop where it matters.
            </p>
          </div>
        </div>
      </PageSection>

      {/* Concrete workflow centerpiece + compact examples */}
      <PageSection
        id="how-it-works"
        eyebrow="How it works"
        eyebrowTone="green"
        title="A concrete example: proposal follow-up."
        supporting="A trigger gathers the context, decides the timing, keeps a human in the loop where it matters, acts, writes back and measures the result."
      >
        <div className="rounded-2xl border-[3px] border-ink bg-paper p-5 shadow-brutal-lg md:p-8">
          <WorkflowFlow steps={FLOW} />
        </div>

        <div className="mt-6">
          <p className="mb-3 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-faint">
            Other workflows we redesign
          </p>
          <div className="flex flex-wrap gap-2">
            {EXAMPLES.map((e) => (
              <span
                key={e}
                className="rounded-lg border-[3px] border-ink bg-card px-3.5 py-2 font-display text-[13px] font-bold text-ink shadow-brutal"
              >
                {e}
              </span>
            ))}
          </div>
        </div>
      </PageSection>

      {/* What you get + measurement, combined */}
      <PageSection
        eyebrow="What you get"
        eyebrowTone="green"
        title="What we implement, and what you can see."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <ListCard
            title="Understand"
            headerTone="green"
            cardAccent="green"
            mark="check"
            markAccent="green"
            items={["Workflow baseline", "Problem / friction mapping"]}
          />
          <ListCard
            title="Redesign"
            headerTone="green"
            cardAccent="green"
            mark="check"
            markAccent="green"
            items={[
              "Redesign",
              "Native capability review",
              "Rules / automation where appropriate",
              "AI / agent capability where justified",
              "Human approval logic",
            ]}
          />
          <ListCard
            title="Ship"
            headerTone="green"
            cardAccent="green"
            mark="check"
            markAccent="green"
            items={["Integration / write-back", "Measurement", "Runbook / handover"]}
          />
        </div>

        <div className="mt-8 rounded-2xl border-[3px] border-ink bg-paper p-5 shadow-brutal-lg md:p-6">
          <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-faint">
            What you can measure
          </p>
          <StepChips
            steps={[
              "Baseline",
              "Live workflow",
              "Measured operational improvement",
            ]}
          />
          <p className="mt-4 text-[13px] leading-relaxed text-faint">
            Depending on the workflow: hours saved, cycle time, completion rate,
            error and rework, response speed, capacity returned, quality and
            consistency.
          </p>
        </div>
      </PageSection>

      <FitAndCta
        accent="green"
        title="Best for a bounded, valuable workflow."
        fit={[
          "Recurring and commercially meaningful",
          "Measurable",
          "Currently manual or fragmented",
          "Bounded enough to improve responsibly",
        ]}
        notFit={[
          "The process barely repeats",
          "The economics don't justify systemization",
          "Native software already solves the change",
        ]}
        related={[
          { title: "How we work", href: "/how-we-work", accent: "green" },
        ]}
      />
    </main>
  );
}
