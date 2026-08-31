import { Fragment, type ReactNode } from "react";
import { IconArrowDown } from "./icons";

type Accent = "purple" | "yellow" | "green" | "ink";

export type FlowStep = {
  icon?: ReactNode;
  label: string;
  sub?: string;
  accent?: Accent;
};

const chip: Record<Accent, string> = {
  purple: "bg-purple text-white",
  yellow: "bg-yellow text-ink",
  green: "bg-green text-ink",
  ink: "bg-ink text-paper",
};

/**
 * A continuous left-to-right sequence of step cards joined by connector
 * lines (line + arrowhead) so the steps read as one flow, not separate
 * cards. Stacks vertically with down-arrows on mobile — never causes
 * page-level horizontal scroll. On tablet a very long flow scrolls
 * inside its own track only.
 */
export default function WorkflowFlow({
  steps,
  className = "",
}: {
  steps: FlowStep[];
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col md:flex-row md:items-stretch md:overflow-x-auto md:pb-1 ${className}`}
    >
      {steps.map((s, i) => (
        <Fragment key={s.label}>
          <div className="flex w-full flex-col rounded-xl border-[3px] border-ink bg-card p-3 shadow-brutal md:w-auto md:min-w-[116px] md:flex-1">
            {s.icon && (
              <span
                className={`mb-2 inline-flex h-8 w-8 items-center justify-center rounded-md border-2 border-ink ${
                  chip[s.accent ?? "ink"]
                }`}
              >
                {s.icon}
              </span>
            )}
            <span className="font-display text-[13px] font-bold leading-tight text-ink">
              {s.label}
            </span>
            {s.sub && (
              <span className="mt-1 text-[11px] leading-tight text-faint">
                {s.sub}
              </span>
            )}
          </div>

          {i < steps.length - 1 && (
            <div className="flex shrink-0 items-center justify-center self-center py-2 text-ink md:w-6 md:py-0">
              {/* mobile: down arrow */}
              <IconArrowDown s={18} className="md:hidden" />
              {/* desktop: connector line + arrowhead touching both cards */}
              <span className="hidden w-full items-center md:flex">
                <span className="h-[3px] flex-1 bg-ink" />
                <span className="h-0 w-0 border-y-[5px] border-l-[7px] border-y-transparent border-l-ink" />
              </span>
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}
