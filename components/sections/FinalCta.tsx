import Container from "../Container";
import BrutalButton, { FIT_CALL_URL } from "../BrutalButton";
import { IconArrowRight } from "../icons";

export default function FinalCta() {
  return (
    <section id="pricing-fit" className="border-b-[3px] border-ink py-16 md:py-24">
      <Container>
        <div className="rounded-2xl border-[3px] border-ink bg-yellow-tint p-8 shadow-brutal-lg md:p-12">
          <h2 className="max-w-3xl font-display text-[clamp(1.9rem,4.5vw,3rem)] font-extrabold leading-[1.03] tracking-[-0.02em] text-ink">
            Want to keep evaluating, or see if there is a fit?
          </h2>
          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-muted">
            You do not need to know which ClarityRev service fits before you
            speak with us. A Fit Call is a short conversation to understand the
            problem, check mutual fit and decide whether there is a sensible next
            step.
          </p>

          <div className="mt-8">
            <BrutalButton href={FIT_CALL_URL} variant="primary">
              Book a Fit Call
            </BrutalButton>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              { label: "Explore services", href: "#what-we-solve" },
              { label: "Review pricing & fit", href: "/pricing-fit" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="brutal-press group flex items-center justify-between rounded-2xl border-[3px] border-ink bg-card p-6 shadow-brutal"
              >
                <span className="font-display text-[18px] font-extrabold text-ink">
                  {c.label}
                </span>
                <span className="text-ink transition-transform group-hover:translate-x-1">
                  <IconArrowRight s={24} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
