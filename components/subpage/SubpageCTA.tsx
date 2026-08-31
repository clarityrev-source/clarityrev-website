import Container from "../Container";
import BrutalButton, { FIT_CALL_URL } from "../BrutalButton";
import { IconArrowRight } from "../icons";
import { accentBg, type Accent } from "./accents";

type Related = { title: string; href: string; accent: Accent };

/**
 * Page-ending CTA: dominant Fit Call, plus related-offer links and a route to
 * Pricing & Fit. Shared by every offer page so the closing rhythm is identical.
 */
export default function SubpageCTA({
  related = [],
  heading = "Not sure if this is the right fit?",
  supporting = "You do not need to know which offer fits before speaking with us. A Fit Call is a short conversation to understand the problem, check mutual fit and decide whether there is a sensible next step.",
  includePricing = true,
}: {
  related?: Related[];
  heading?: string;
  supporting?: string;
  includePricing?: boolean;
}) {
  const cards: Related[] = [
    ...related,
    ...(includePricing
      ? [
          {
            title: "Review pricing & fit",
            href: "/pricing-fit",
            accent: "green" as Accent,
          },
        ]
      : []),
  ];

  return (
    <section id="cta" className="py-16 md:py-24">
      <Container>
        <div className="rounded-2xl border-[3px] border-ink bg-yellow-tint p-8 shadow-brutal-lg md:p-12">
          <h2 className="max-w-3xl font-display text-[clamp(1.9rem,4.5vw,3rem)] font-extrabold leading-[1.03] tracking-[-0.02em] text-ink">
            {heading}
          </h2>
          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-muted">
            {supporting}
          </p>

          <div className="mt-8">
            <BrutalButton href={FIT_CALL_URL} variant="primary">
              Book a Fit Call
            </BrutalButton>
          </div>

          {cards.length > 0 && (
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {cards.map((c) => (
              <a
                key={c.title}
                href={c.href}
                className="brutal-press group flex items-center justify-between gap-4 rounded-2xl border-[3px] border-ink bg-card p-6 shadow-brutal"
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`inline-block h-4 w-4 shrink-0 rounded-[4px] border-2 border-ink ${accentBg[c.accent]}`}
                  />
                  <span className="font-display text-[17px] font-extrabold text-ink">
                    {c.title}
                  </span>
                </span>
                <span className="text-ink transition-transform group-hover:translate-x-1">
                  <IconArrowRight s={22} />
                </span>
              </a>
            ))}
          </div>
          )}
        </div>
      </Container>
    </section>
  );
}
