import type { ReactNode } from "react";

type Variant = "primary" | "dark" | "outline" | "link";

/** Single source of truth for the "Book a Fit Call" destination. */
const FIT_CALL_URL =
  "https://calendly.com/clarityrev/clg-clarityrev-first-intro-call";

export { FIT_CALL_URL };

/** External http(s) links open in a new tab so visitors keep the site open. */
function externalProps(href: string) {
  return /^https?:\/\//i.test(href)
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
}

export default function BrutalButton({
  href = "#",
  children,
  variant = "primary",
  className = "",
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const ext = externalProps(href);

  if (variant === "link") {
    return (
      <a
        href={href}
        {...ext}
        className={`group inline-flex items-center gap-2 font-display text-[15px] font-bold text-ink underline decoration-2 underline-offset-[6px] transition-colors hover:text-purple ${className}`}
      >
        {children}
        <span
          aria-hidden
          className="transition-transform group-hover:translate-x-1"
        >
          →
        </span>
      </a>
    );
  }

  const box =
    "brutal-press inline-flex items-center justify-center gap-2 rounded-lg border-[3px] border-ink px-6 py-3 font-display text-[15px] font-bold shadow-brutal";
  const fill = {
    primary: "bg-green text-ink",
    dark: "bg-ink text-paper",
    outline: "bg-card text-ink",
  }[variant as Exclude<Variant, "link">];

  return (
    <a href={href} {...ext} className={`${box} ${fill} ${className}`}>
      {children}
    </a>
  );
}
