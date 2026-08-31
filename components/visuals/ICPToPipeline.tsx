import WorkflowFlow, { type FlowStep } from "../WorkflowFlow";
import {
  IconChart,
  IconTarget,
  IconBuilding,
  IconUser,
  IconDatabase,
  IconMail,
  IconSync,
  IconCheck,
} from "../icons";

const STEPS: FlowStep[] = [
  { icon: <IconChart s={16} />, label: "Commercial evidence", sub: "Won / lost deals", accent: "purple" },
  { icon: <IconTarget s={16} />, label: "ICP", sub: "Fit definition", accent: "purple" },
  { icon: <IconBuilding s={16} />, label: "Target accounts", sub: "1,240 accounts" },
  { icon: <IconUser s={16} />, label: "Buying roles", sub: "VP Ops · CFO" },
  { icon: <IconDatabase s={16} />, label: "Enrichment", sub: "Firmographic + tech" },
  { icon: <IconMail s={16} />, label: "Activation", sub: "Sequenced outreach" },
  { icon: <IconSync s={16} />, label: "CRM", sub: "HubSpot / SFDC" },
  { icon: <IconCheck s={16} />, label: "Qualified pipeline", sub: "Tracked opportunities", accent: "green" },
];

export default function ICPToPipeline() {
  return <WorkflowFlow steps={STEPS} />;
}
