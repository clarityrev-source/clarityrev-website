import type { Metadata } from "next";
import Breadcrumbs from "@/components/subpage/Breadcrumbs";
import OfferHero from "@/components/subpage/OfferHero";
import PageSection from "@/components/subpage/PageSection";
import ModelCards from "@/components/subpage/ModelCards";
import SubpageCTA from "@/components/subpage/SubpageCTA";
import NumberBadge from "@/components/ui/NumberBadge";
import { Card, CardHeader } from "@/components/ui/Card";
import { IconArrowDown } from "@/components/icons";

export const metadata: Metadata = {
  title: "How we work | ClarityRev",
  description:
    "Start with what needs to change. Build only what the work actually needs. ClarityRev combines commercial judgement, data, systems and implementation to improve a specific commercial state.",
};

const JOURNEY = [
  "Fit Call",
  "Define the problem / state change",
  "Design where needed",
  "Build / configure / connect",
  "Launch",
  "Measure",
  "Handover",
  "Optional ongoing operation",
];

const HeroVisual = (
  <Card accent="purple" className="mx-auto w-full max-w-[360px]">
    <CardHeader accent="purple">
      <span className="font-display text-[15px] font-extrabold">
        Operating model
      </span>
    </CardHeader>
    <div className="flex flex-col items-stretch gap-2 p-5">
      {["Context", "Decision", "Action", "Measurement"].map((t, i) => (
        <div key={t} className="flex flex-col items-stretch">
          <div className="rounded-lg border-[3px] border-ink bg-card px-4 py-2.5 font-display text-[15px] font-bold text-ink shadow-brutal">
            {t}
          </div>
          {i < 3 && (
            <span className="flex justify-center py-1 text-ink">
              <IconArrowDown s={18} />
            </span>
          )}
        </div>
      ))}
    </div>
  </Card>
);

export default function Page() {
  return (
    <main>
      <Breadcrumbs current="How we work" />

      <OfferHero
        accent="purple"
        eyebrow="How we work"
        headline="Start with what needs to change. Build only what the work actually needs."
        supporting="ClarityRev combines commercial judgement, data, systems and implementation to improve a specific commercial state, without adding technology for its own sake."
        secondaryLabel="See the operating model"
        secondaryHref="#operating-model"
        visual={HeroVisual}
      />

      {/* Framework 1 */}
      <PageSection
        id="operating-model"
        eyebrow="Operating model"
        eyebrowTone="purple"
        title="Context, Decision, Action, Measurement."
      >
        <ModelCards
          accent="purple"
          items={[
            { title: "Context", desc: "What matters right now?" },
            { title: "Decision", desc: "What should happen next?" },
            { title: "Action", desc: "Put the decision into action." },
            { title: "Measurement", desc: "Did the intended change happen?" },
          ]}
        />
      </PageSection>

      {/* Framework 2 + build-nothing callout */}
      <PageSection
        eyebrow="Technology choice"
        eyebrowTone="purple"
        title="Use, Connect, Extend, Build."
        supporting="Reach for the smallest responsible capability. Custom software is the last option, not the first."
      >
        <ModelCards
          accent="green"
          items={[
            {
              title: "Use",
              desc: "Use strong native software capability where it already works.",
            },
            { title: "Connect", desc: "Connect fragmented systems and context." },
            {
              title: "Extend",
              desc: "Add rules, orchestration, AI or lightweight capability only where a real gap remains.",
            },
            {
              title: "Build",
              desc: "Build custom software only when existing capability cannot responsibly solve the problem.",
            },
          ]}
        />

        <div className="mt-6 rounded-2xl border-[3px] border-ink bg-green-tint p-6 shadow-brutal md:p-7">
          <p className="font-display text-[clamp(1.2rem,2.4vw,1.6rem)] font-extrabold leading-tight text-ink">
            Sometimes the right answer is to build nothing.
          </p>
          <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted">
            Use the software you already have, configure it properly, simplify
            the process, switch tools, and build only when something important
            is genuinely missing.
          </p>
        </div>
      </PageSection>

      {/* Combined: engagement + operability */}
      <PageSection
        eyebrow="How we implement responsibly"
        eyebrowTone="purple"
        title="A clear path, and a setup your team can run."
        supporting="We start from the problem, build only what the work needs, measure the change and hand over a setup your team can operate."
      >
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {JOURNEY.map((s, i) => (
            <li
              key={s}
              className="flex items-center gap-3 rounded-2xl border-[3px] border-ink bg-card p-5 shadow-brutal"
            >
              <NumberBadge accent="purple" size="sm">
                {i + 1}
              </NumberBadge>
              <span className="font-display text-[15px] font-bold leading-tight text-ink">
                {s}
              </span>
            </li>
          ))}
        </ol>

        <div className="mt-6 rounded-2xl border-[3px] border-ink bg-purple-tint p-7 shadow-brutal-lg md:p-8">
          <p className="font-display text-[clamp(1.3rem,2.6vw,1.8rem)] font-extrabold leading-tight tracking-[-0.01em] text-ink">
            Your team stays in control of the core setup.
          </p>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
            We document how it works and design it so your team can operate the
            agreed core setup without depending on ClarityRev day to day.
            Ongoing operation is available, but it is not the default.
          </p>
        </div>
      </PageSection>

      <SubpageCTA
        related={[]}
        heading="Start with the problem, not the solution."
        supporting="A Fit Call is a short conversation to understand the commercial problem, check mutual fit and decide whether there is a sensible next step."
      />
    </main>
  );
}
