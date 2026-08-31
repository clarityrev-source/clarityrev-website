import Container from "../Container";
import SectionHeading from "../SectionHeading";
import Eyebrow from "../Eyebrow";
import CRMCard from "../CRMCard";
import WorkflowFlow, { type FlowStep } from "../WorkflowFlow";
import {
  IconSignal,
  IconTarget,
  IconDatabase,
  IconCheck,
  IconSync,
  IconBolt,
} from "../icons";

const STEPS: FlowStep[] = [
  { icon: <IconSignal s={16} />, label: "Signal / lead", accent: "purple" },
  { icon: <IconTarget s={16} />, label: "Account matched" },
  { icon: <IconDatabase s={16} />, label: "Enriched + context" },
  { icon: <IconCheck s={16} />, label: "Reviewed / scored", accent: "yellow" },
  { icon: <IconSync s={16} />, label: "CRM write-back" },
  { icon: <IconBolt s={16} />, label: "Sales action", accent: "green" },
];

export default function CRMIntegration() {
  return (
    <section id="crm-integration" className="border-b-[3px] border-ink py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Inside your CRM"
          eyebrowTone="green"
          title="Your team keeps working in the systems they already use."
        >
          The relevant signals, context and actions land inside the CRM your
          team already uses. No extra dashboard required.
        </SectionHeading>

        {/* upstream flow */}
        <div className="mt-10">
          <WorkflowFlow steps={STEPS} />
        </div>

        {/* connector: flow → delivered → both CRM destinations */}
        <div className="flex flex-col items-center">
          <div className="mt-4 h-6 w-[3px] bg-ink" />
          <Eyebrow tone="green" className="!text-[12px]">
            Delivered directly into your CRM
          </Eyebrow>
          <div className="h-4 w-[3px] bg-ink" />
          {/* branch bracket into two columns (md+) */}
          <div className="hidden w-full md:block">
            <div className="mx-auto h-[3px] w-1/2 bg-ink" />
            <div className="grid grid-cols-2">
              <span className="flex justify-center">
                <span className="h-5 w-[3px] bg-ink" />
              </span>
              <span className="flex justify-center">
                <span className="h-5 w-[3px] bg-ink" />
              </span>
            </div>
          </div>
          {/* mobile stem */}
          <div className="h-5 w-[3px] bg-ink md:hidden" />
        </div>

        {/* CRM destinations */}
        <div className="grid gap-8 md:grid-cols-2">
          <CRMCard
            system="Salesforce"
            accent="purple"
            rows={[
              { k: "Account", v: "Acme Corp." },
              { k: "Contact", v: "Alex Morgan" },
              { k: "Signal source", v: "ClarityRev" },
              { k: "Priority", v: "92", highlight: true },
              { k: "Owner", v: "Sarah Johnson" },
              { k: "Stage", v: "New Lead" },
              { k: "Next action", v: "Intro call" },
              { k: "Task created", v: "Yes" },
            ]}
          />
          <CRMCard
            system="HubSpot"
            accent="green"
            rows={[
              { k: "Company", v: "Acme Corp." },
              { k: "Contact", v: "Alex Morgan" },
              { k: "Lead score", v: "92", highlight: true },
              { k: "Lifecycle stage", v: "New Lead" },
              { k: "Latest event", v: "Funding raised" },
              { k: "Follow-up task", v: "Intro call" },
            ]}
          />
        </div>

        <p className="mt-8 font-display text-[18px] font-extrabold text-ink">
          No extra dashboard required.{" "}
          <span className="text-muted">
            Sales receives the relevant signals, context and actions inside the
            systems they already use.
          </span>
        </p>
      </Container>
    </section>
  );
}
