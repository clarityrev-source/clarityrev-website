import { FIT_CALL_URL } from "./BrutalButton";

export { FIT_CALL_URL };

export type Accent = "purple" | "yellow" | "green";

/* One source of truth for site navigation so the header, the mobile menu
   and the footer stay in sync. Group titles point at their homepage
   outcome section (absolute so they resolve from any page); offer links
   point at the dedicated offer pages. */

export type SolveGroup = {
  title: string;
  href: string;
  label: string;
  accent: Accent;
  offers: { label: string; href: string }[];
};

export const SOLVE_GROUPS: SolveGroup[] = [
  {
    title: "Generate qualified pipeline",
    href: "/#generate-qualified-pipeline",
    accent: "purple",
    label: "Build and improve a repeatable new-business motion.",
    offers: [
      { label: "ICP-to-Pipeline", href: "/icp-to-pipeline" },
      { label: "Signal-to-Pipeline", href: "/signal-to-pipeline" },
    ],
  },
  {
    title: "Move active deals forward",
    href: "/#move-deals-forward",
    accent: "yellow",
    label: "Turn fragmented deal context into clear next actions and decisions.",
    offers: [{ label: "Deal-to-Decision", href: "/deal-to-decision" }],
  },
  {
    title: "Automate recurring revenue work",
    href: "/#automate-revenue-work",
    accent: "green",
    label: "Improve one recurring commercial workflow end-to-end.",
    offers: [
      { label: "Revenue Workflow Build", href: "/revenue-workflow-build" },
    ],
  },
];

export const PRIMARY_NAV: {
  label: string;
  href: string;
  solve?: boolean;
}[] = [
  { label: "Home", href: "/" },
  { label: "What we solve", href: "/#what-we-solve", solve: true },
  { label: "How we work", href: "/how-we-work" },
  { label: "Pricing & Fit", href: "/pricing-fit" },
];

export const FOOTER_NAV = {
  explore: [
    { label: "Home", href: "/" },
    { label: "What we solve", href: "/#what-we-solve" },
    { label: "How we work", href: "/how-we-work" },
    { label: "Pricing & Fit", href: "/pricing-fit" },
  ],
  offers: [
    { label: "ICP-to-Pipeline", href: "/icp-to-pipeline" },
    { label: "Signal-to-Pipeline", href: "/signal-to-pipeline" },
    { label: "Deal-to-Decision", href: "/deal-to-decision" },
    { label: "Revenue Workflow Build", href: "/revenue-workflow-build" },
  ],
};
