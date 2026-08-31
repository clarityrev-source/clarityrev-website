import SignalCard from "../SignalCard";
import WorkflowFlow, { type FlowStep } from "../WorkflowFlow";
import { IconArrowRight, IconBrain, IconPhone, IconSync, IconCheck } from "../icons";

const CHAIN: FlowStep[] = [
  { icon: <IconBrain s={16} />, label: "Relevance logic", sub: "Fit + timing + history", accent: "purple" },
  { icon: <IconCheck s={16} />, label: "Priority", sub: "High", accent: "yellow" },
  { icon: <IconPhone s={16} />, label: "Recommended action", sub: "Intro call" },
  { icon: <IconSync s={16} />, label: "CRM / outreach", sub: "Task + sequence" },
  { icon: <IconCheck s={16} />, label: "Outcome", sub: "Meeting booked", accent: "green" },
];

export default function SignalToPipeline() {
  return (
    <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center">
      <SignalCard
        priority="High"
        rows={[
          { k: "Signal", v: "Funding raised", highlight: true },
          { k: "ICP fit", v: "92%" },
          { k: "Existing relationship", v: "Yes" },
          { k: "Relevant buyer", v: "VP Operations" },
          { k: "Buying reason", v: "Expansion" },
        ]}
      />
      <div className="hidden shrink-0 text-ink lg:block">
        <IconArrowRight s={28} />
      </div>
      <div className="w-full min-w-0 flex-1">
        <WorkflowFlow steps={CHAIN} />
      </div>
    </div>
  );
}
