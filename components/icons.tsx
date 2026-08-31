/* Simple black line icons — one visual family across the whole site.
   Stroke uses currentColor; size via the `s` prop (default 20). */
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { s?: number };

function base(s: number) {
  return {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
}

export function IconBuilding({ s = 20, ...p }: IconProps) {
  return (
    <svg {...base(s)} {...p}>
      <rect x="4" y="3" width="12" height="18" rx="1" />
      <path d="M20 21V9l-4-2" />
      <path d="M8 7h4M8 11h4M8 15h4" />
    </svg>
  );
}

export function IconUser({ s = 20, ...p }: IconProps) {
  return (
    <svg {...base(s)} {...p}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
    </svg>
  );
}

export function IconChart({ s = 20, ...p }: IconProps) {
  return (
    <svg {...base(s)} {...p}>
      <path d="M4 20V4" />
      <path d="M4 20h16" />
      <rect x="7" y="12" width="3" height="5" />
      <rect x="12" y="8" width="3" height="9" />
      <rect x="17" y="5" width="3" height="12" />
    </svg>
  );
}

export function IconDatabase({ s = 20, ...p }: IconProps) {
  return (
    <svg {...base(s)} {...p}>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </svg>
  );
}

export function IconGear({ s = 20, ...p }: IconProps) {
  return (
    <svg {...base(s)} {...p}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1" />
    </svg>
  );
}

export function IconCheck({ s = 20, ...p }: IconProps) {
  return (
    <svg {...base(s)} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.5l2.5 2.5L16 9.5" />
    </svg>
  );
}

export function IconBolt({ s = 20, ...p }: IconProps) {
  return (
    <svg {...base(s)} {...p} fill="currentColor" stroke="none">
      <path d="M13 2L4.5 13.5H11l-1 8.5L19.5 10H13l0-8z" />
    </svg>
  );
}

export function IconCrown({ s = 20, ...p }: IconProps) {
  return (
    <svg {...base(s)} {...p} fill="currentColor" stroke="currentColor" strokeWidth={1.2}>
      <path d="M4 18h16l1-9-5 3-4-6-4 6-5-3 1 9z" />
    </svg>
  );
}

export function IconArrowRight({ s = 20, ...p }: IconProps) {
  return (
    <svg {...base(s)} {...p}>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconArrowDown({ s = 20, ...p }: IconProps) {
  return (
    <svg {...base(s)} {...p}>
      <path d="M12 4v15M6 13l6 6 6-6" />
    </svg>
  );
}

export function IconTarget({ s = 20, ...p }: IconProps) {
  return (
    <svg {...base(s)} {...p}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" />
    </svg>
  );
}

export function IconSignal({ s = 20, ...p }: IconProps) {
  return (
    <svg {...base(s)} {...p}>
      <path d="M5 18a10 10 0 0 1 10-10" />
      <path d="M5 13a5 5 0 0 1 5-5" />
      <circle cx="6" cy="17" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function IconSync({ s = 20, ...p }: IconProps) {
  return (
    <svg {...base(s)} {...p}>
      <path d="M4 12a8 8 0 0 1 13-6l3 2" />
      <path d="M20 12a8 8 0 0 1-13 6l-3-2" />
      <path d="M20 4v4h-4M4 20v-4h4" />
    </svg>
  );
}

export function IconDoc({ s = 20, ...p }: IconProps) {
  return (
    <svg {...base(s)} {...p}>
      <path d="M6 2h8l4 4v16H6z" />
      <path d="M14 2v4h4" />
      <path d="M9 12h6M9 16h6" />
    </svg>
  );
}

export function IconPhone({ s = 20, ...p }: IconProps) {
  return (
    <svg {...base(s)} {...p}>
      <path d="M6 3h4l2 5-3 2a11 11 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2z" />
    </svg>
  );
}

export function IconMail({ s = 20, ...p }: IconProps) {
  return (
    <svg {...base(s)} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}

export function IconBrain({ s = 20, ...p }: IconProps) {
  return (
    <svg {...base(s)} {...p}>
      <path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-1 5 3 3 0 0 0 2 4 3 3 0 0 0 5 1V4a2 2 0 0 0-3 0z" />
      <path d="M12 4a2 2 0 0 1 3 0 3 3 0 0 1 3 3 3 3 0 0 1 1 5 3 3 0 0 1-2 4 3 3 0 0 1-5 1" />
    </svg>
  );
}

export function IconCalendar({ s = 20, ...p }: IconProps) {
  return (
    <svg {...base(s)} {...p}>
      <rect x="3" y="4" width="18" height="17" rx="1.5" />
      <path d="M3 9h18M8 2v4M16 2v4" />
    </svg>
  );
}
