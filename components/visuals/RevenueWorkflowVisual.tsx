import WorkflowFlow, { type FlowStep } from "../WorkflowFlow";
import {
  IconBolt,
  IconDatabase,
  IconBrain,
  IconUser,
  IconGear,
  IconSync,
  IconChart,
} from "../icons";

const STEPS: FlowStep[] = [
  { icon: <IconBolt s={16} />, label: "Trigger", sub: "Event detected", accent: "green" },
  { icon: <IconDatabase s={16} />, label: "Context", sub: "Relevant data pulled" },
  { icon: <IconBrain s={16} />, label: "Decision", sub: "Rules / AI", accent: "purple" },
  { icon: <IconUser s={16} />, label: "Human approval", sub: "When it matters", accent: "yellow" },
  { icon: <IconGear s={16} />, label: "Action", sub: "Task / message" },
  { icon: <IconSync s={16} />, label: "Write-back", sub: "Into the CRM" },
  { icon: <IconChart s={16} />, label: "Measurement", sub: "Did it change?", accent: "green" },
];

export default function RevenueWorkflowVisual() {
  return <WorkflowFlow steps={STEPS} />;
}
