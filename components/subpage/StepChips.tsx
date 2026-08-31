import { Fragment } from "react";
import { IconArrowDown, IconArrowRight } from "../icons";

/**
 * A labeled principle sequence (e.g. Remove → Simplify → … → Human).
 * Horizontal with right arrows on wider screens, stacked with down arrows
 * on mobile. Never causes page-level horizontal scroll.
 */
export default function StepChips({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:flex-wrap md:items-center md:gap-y-3">
      {steps.map((s, i) => (
        <Fragment key={s}>
          <span className="rounded-lg border-[3px] border-ink bg-card px-4 py-2.5 text-center font-display text-[14px] font-bold text-ink shadow-brutal">
            {s}
          </span>
          {i < steps.length - 1 && (
            <span className="flex items-center justify-center self-center text-ink">
              <IconArrowDown s={18} className="md:hidden" />
              <IconArrowRight s={18} className="hidden md:block" />
            </span>
          )}
        </Fragment>
      ))}
    </div>
  );
}
