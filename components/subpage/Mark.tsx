import { IconCheck } from "../icons";
import { accentBg, type Accent } from "./accents";

/* Small list marks used across before/after, included, and fit cards.
   Checks read on any accent because the tick is ink on an accent square. */
export function CheckMark({ accent }: { accent: Accent }) {
  return (
    <span
      className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-[5px] border-2 border-ink ${accentBg[accent]}`}
    >
      <IconCheck s={12} className="text-ink" />
    </span>
  );
}

export function CrossMark() {
  return (
    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-[5px] border-2 border-ink bg-card text-ink">
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        aria-hidden
      >
        <path d="M6 6l12 12M18 6L6 18" />
      </svg>
    </span>
  );
}
