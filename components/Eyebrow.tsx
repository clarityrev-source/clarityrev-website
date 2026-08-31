import type { ReactNode } from "react";

type Tone = "purple" | "yellow" | "green" | "ink" | "onDark";

/* Color is the ONLY thing that differs between variants — geometry
   (height, padding, border, type) is shared. Opaque background + z-10
   so a chip always sits above borders and connector lines. `w-fit`
   stops flex/grid parents from stretching it into a full-width bar. */
const tones: Record<Tone, string> = {
  purple: "bg-purple text-white",
  yellow: "bg-yellow text-ink",
  green: "bg-green text-ink",
  ink: "bg-ink text-paper",
  onDark: "bg-white/15 text-white",
};

export default function Eyebrow({
  children,
  tone = "ink",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={`relative z-10 inline-flex w-fit max-w-full items-center self-start rounded-md border-2 border-ink px-2.5 py-[5px] font-mono text-[11px] font-bold uppercase leading-none tracking-[0.12em] ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
