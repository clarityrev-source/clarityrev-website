import type { ReactNode } from "react";
import Container from "./Container";
import Eyebrow from "./Eyebrow";
import NumberBadge from "./ui/NumberBadge";
import BrutalButton from "./BrutalButton";

type Accent = "purple" | "yellow" | "green";

export type Outcome = { label: string; body: string };
export type Cta = { href: string; label: string };

/**
 * One "what are you trying to improve?" block: numbered header, intro,
 * three outcome cards, CTAs, and a workflow visual. Shared by the
 * Pipeline / Deals / Workflows sections.
 */
export default function ServiceSection({
  id,
  number,
  accent,
  label,
  title,
  intro,
  outcomes,
  ctas,
  visualLabel,
  visual,
}: {
  id: string;
  number: string;
  accent: Accent;
  label: string;
  title: string;
  intro: ReactNode;
  outcomes: Outcome[];
  ctas: Cta[];
  visualLabel: string;
  visual: ReactNode;
}) {
  return (
    <section id={id} className="border-b-[3px] border-ink py-16 md:py-24">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <NumberBadge accent={accent} size="md">
                {number}
              </NumberBadge>
              <Eyebrow tone={accent}>{label}</Eyebrow>
            </div>
            <h2 className="mt-5 font-display text-[clamp(2rem,4.6vw,3rem)] font-extrabold leading-[1.03] tracking-[-0.02em] text-ink">
              {title}
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-muted">{intro}</p>
          </div>
        </div>

        {/* outcome columns */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {outcomes.map((o, i) => (
            <div
              key={o.label}
              className="rounded-2xl border-[3px] border-ink bg-card p-6 shadow-brutal-lg"
            >
              <NumberBadge accent={accent} size="sm">
                {i + 1}
              </NumberBadge>
              <h3 className="mt-4 font-display text-[18px] font-extrabold leading-tight text-ink">
                {o.label}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">{o.body}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
          {ctas.map((c) => (
            <BrutalButton key={c.label} href={c.href} variant="link">
              {c.label}
            </BrutalButton>
          ))}
        </div>

        {/* visual */}
        <div className="mt-12 rounded-2xl border-[3px] border-ink bg-paper p-5 shadow-brutal-lg md:p-8">
          <Eyebrow tone={accent}>{visualLabel}</Eyebrow>
          <div className="mt-6">{visual}</div>
        </div>
      </Container>
    </section>
  );
}
