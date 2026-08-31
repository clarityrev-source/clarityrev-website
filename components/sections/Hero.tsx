import Container from "../Container";
import BrutalButton, { FIT_CALL_URL } from "../BrutalButton";
import HeroSystem from "../HeroSystem";

export default function Hero() {
  return (
    <section id="top" className="border-b-[3px] border-ink py-14 md:py-20">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16 xl:grid-cols-[1fr_1.08fr] xl:gap-20">
        {/* Left: headline + copy + CTAs */}
        <div className="cr-rise">
          <h1 className="font-display text-[clamp(2.6rem,6.4vw,4.6rem)] font-black leading-[0.98] tracking-[-0.03em] text-ink">
            Generate qualified pipeline, move active deals and optimize your
            workflows.
          </h1>

          <div className="mt-9 max-w-xl border-t-[3px] border-ink pt-6">
            <div className="grid gap-x-8 gap-y-4 text-[15px] leading-relaxed text-muted sm:grid-cols-2">
              <p>
                We redesign how the work gets done, connect the data and tools
                around it, and implement what is missing.
              </p>
              <p className="sm:border-l-2 sm:border-line/15 sm:pl-8">
                We use what already works, fix the gaps that matter, and measure
                what changed.
              </p>
            </div>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <BrutalButton href="#what-we-solve" variant="primary">
              Explore what we solve
            </BrutalButton>
            <BrutalButton href={FIT_CALL_URL} variant="link">
              Book a Fit Call
            </BrutalButton>
          </div>
        </div>

        {/* Right: connected system visual */}
        <div className="cr-rise" style={{ animationDelay: "120ms" }}>
          <HeroSystem />
        </div>
      </Container>
    </section>
  );
}
