import Container from "../Container";
import SectionHeading from "../SectionHeading";
import ServiceSection from "../ServiceSection";
import ICPToPipeline from "../visuals/ICPToPipeline";
import SignalToPipeline from "../visuals/SignalToPipeline";
import DealExecutionVisual from "../visuals/DealExecutionVisual";
import RevenueWorkflowVisual from "../visuals/RevenueWorkflowVisual";

function SubLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-faint">
      {children}
    </p>
  );
}

export default function Improve() {
  return (
    <>
      {/* Intro */}
      <section id="what-we-solve" className="border-b-[3px] border-ink py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Where to start"
            eyebrowTone="purple"
            title="What are you trying to improve?"
          >
            Start with the problem closest to what you need to change. These
            paths can overlap.
          </SectionHeading>
        </Container>
      </section>

      {/* 01 — Pipeline */}
      <ServiceSection
        id="generate-qualified-pipeline"
        number="01"
        accent="purple"
        label="Pipeline Generation"
        title="Generate qualified pipeline"
        intro="Your offer sells, but turning a target market into qualified opportunities is still inconsistent, hard to repeat or hard to learn from."
        outcomes={[
          {
            label: "Market evidence",
            body: "Use customer history, lost deals, market knowledge and available commercial evidence to define the accounts and buyers worth pursuing.",
          },
          {
            label: "Repeatable way to reach the right accounts",
            body: "Build a good way to reach fit accounts, then use selected account changes and current context to help your team judge when their attention is warranted now.",
          },
          {
            label: "Traceable qualified opportunities",
            body: "Connect the work to agreed qualification and CRM tracking so your team can see which conversations become qualified opportunities.",
          },
        ]}
        ctas={[
          { href: "/icp-to-pipeline", label: "Build the foundation: ICP-to-Pipeline" },
          { href: "/signal-to-pipeline", label: "Improve timing and relevance: Signal-to-Pipeline" },
        ]}
        visualLabel="Pipeline systems"
        visual={
          <div className="space-y-10">
            <div>
              <SubLabel>ICP-to-Pipeline</SubLabel>
              <ICPToPipeline />
            </div>
            <div className="border-t-2 border-line/15 pt-8">
              <SubLabel>Signal-to-Pipeline</SubLabel>
              <SignalToPipeline />
            </div>
          </div>
        }
      />

      {/* 02 — Deals */}
      <ServiceSection
        id="move-deals-forward"
        number="02"
        accent="yellow"
        label="Deal Execution"
        title="Move more deals forward"
        intro="Valuable deals sit in limbo because what is actually happening is spread across CRM, calls, email, proposals and people's memory. The next step, the owner or the decision itself is too easy to lose."
        outcomes={[
          {
            label: "Fragmented deal picture",
            body: "What is actually happening is scattered across CRM, calls, email, proposals and memory.",
          },
          {
            label: "Clear next action and owner",
            body: "One place shows the real state, the missing information, the next step and who owns it.",
          },
          {
            label: "Clear commercial decision",
            body: "The deal moves toward a decision instead of stalling in limbo.",
          },
        ]}
        ctas={[{ href: "/deal-to-decision", label: "Explore Deal-to-Decision" }]}
        visualLabel="Deal Execution"
        visual={<DealExecutionVisual />}
      />

      {/* 03 — Workflows */}
      <ServiceSection
        id="automate-revenue-work"
        number="03"
        accent="green"
        label="Revenue Workflow Systems"
        title="Automate recurring revenue work"
        intro="An important recurring workflow keeps consuming time, causing delays or creating avoidable rework because people still have to hold too much of it together manually."
        outcomes={[
          {
            label: "Recurring manual work",
            body: "An important workflow keeps eating time, causing delays and creating avoidable rework.",
          },
          {
            label: "Better-designed workflow",
            body: "The process, data, handoffs and tools are redesigned so people hold less of it together by hand.",
          },
          {
            label: "More capacity, speed, quality or reliability",
            body: "The same work runs with more capacity, more speed, higher quality or greater reliability.",
          },
        ]}
        ctas={[{ href: "/revenue-workflow-build", label: "Explore Revenue Workflow Build" }]}
        visualLabel="Revenue Workflow Systems"
        visual={<RevenueWorkflowVisual />}
      />
    </>
  );
}
