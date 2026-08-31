import Container from "../Container";
import Eyebrow from "../Eyebrow";
import BrutalButton, { FIT_CALL_URL } from "../BrutalButton";
import ListCard from "./ListCard";
import { IconArrowRight } from "../icons";
import { accentBg, type Accent } from "./accents";

type Related = { title: string; href: string; accent: Accent };

/**
 * Combined closing chapter for offer pages: "Is this a fit?" (best fit /
 * another route) and the Fit Call CTA with related links, in one section
 * instead of three. Reuses the existing card + CTA styling.
 */
export default function FitAndCta({
  accent,
  title,
  fit,
  notFit,
  related = [],
}: {
  accent: Accent;
  title: string;
  fit: string[];
  notFit: string[];
  related?: Related[];
}) {
  const cards: Related[] = [
    ...related,
    { title: "Review Pricing & Fit", href: "/pricing-fit", accent: "green" },
  ];

  return (
    <section id="cta" className="py-16 md:py-24">
      <Container>
        <Eyebrow tone={accent}>Is this a fit?</Eyebrow>
        <h2 className="mt-5 max-w-3xl font-display text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink">
          {title}
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <ListCard
            title="Best fit when"
            headerTone={accent}
            cardAccent={accent}
            mark="check"
            markAccent={accent}
            items={fit}
          />
          <ListCard
            title="Another route may be better when"
            headerTone="ink"
            cardAccent="ink"
            mark="cross"
            items={notFit}
          />
        </div>

        <div className="mt-8 rounded-2xl border-[3px] border-ink bg-yellow-tint p-7 shadow-brutal-lg md:p-9">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="max-w-xl font-display text-[clamp(1.3rem,2.6vw,1.8rem)] font-extrabold leading-tight tracking-[-0.01em] text-ink">
              Bring the problem and the outcome that needs to change.
            </p>
            <BrutalButton href={FIT_CALL_URL} variant="primary">
              Book a Fit Call
            </BrutalButton>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {cards.map((c) => (
              <a
                key={c.title}
                href={c.href}
                className="brutal-press group flex items-center justify-between gap-4 rounded-xl border-[3px] border-ink bg-card p-5 shadow-brutal"
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`inline-block h-4 w-4 shrink-0 rounded-[4px] border-2 border-ink ${accentBg[c.accent]}`}
                  />
                  <span className="font-display text-[16px] font-extrabold text-ink">
                    {c.title}
                  </span>
                </span>
                <span className="text-ink transition-transform group-hover:translate-x-1">
                  <IconArrowRight s={20} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
