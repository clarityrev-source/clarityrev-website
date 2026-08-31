import type { ReactNode } from "react";
import Container from "../Container";
import Eyebrow from "../Eyebrow";
import BrutalButton, { FIT_CALL_URL } from "../BrutalButton";
import type { Accent } from "./accents";

/**
 * Buyer-problem-led hero shared by the offer and info pages. Same two-column
 * rhythm as the homepage hero: eyebrow + big headline + supporting + CTAs on
 * the left, a meaningful visual on the right.
 */
export default function OfferHero({
  accent,
  eyebrow,
  headline,
  supporting,
  secondaryHref = "#how-it-works",
  secondaryLabel = "See how it works",
  visual,
}: {
  accent: Accent;
  eyebrow: string;
  headline: ReactNode;
  supporting: ReactNode;
  secondaryHref?: string;
  secondaryLabel?: string;
  visual: ReactNode;
}) {
  return (
    <section id="top" className="border-b-[3px] border-ink py-14 md:py-20">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div className="cr-rise">
          <Eyebrow tone={accent}>{eyebrow}</Eyebrow>
          <h1 className="mt-5 font-display text-[clamp(2.2rem,5vw,3.6rem)] font-black leading-[1.02] tracking-[-0.025em] text-ink">
            {headline}
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted">
            {supporting}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <BrutalButton href={FIT_CALL_URL} variant="primary">
              Book a Fit Call
            </BrutalButton>
            <BrutalButton href={secondaryHref} variant="link">
              {secondaryLabel}
            </BrutalButton>
          </div>
        </div>
        <div className="cr-rise" style={{ animationDelay: "120ms" }}>
          {visual}
        </div>
      </Container>
    </section>
  );
}
