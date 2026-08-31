import Container from "../Container";
import Eyebrow from "../Eyebrow";
import { IconTarget, IconBrain, IconGear, IconChart } from "../icons";

const STEPS = [
  {
    n: "01",
    title: "Context",
    q: "What matters right now?",
    icon: <IconTarget s={22} />,
  },
  {
    n: "02",
    title: "Decision",
    q: "What should happen next?",
    icon: <IconBrain s={22} />,
  },
  {
    n: "03",
    title: "Action",
    q: "Put the decision into action.",
    icon: <IconGear s={22} />,
  },
  {
    n: "04",
    title: "Measurement",
    q: "Did the intended change happen?",
    icon: <IconChart s={22} />,
  },
];

export default function HowWeWork() {
  return (
    <section
      id="how-we-work"
      className="border-b-[3px] border-ink bg-purple py-16 text-white md:py-24"
    >
      <Container>
        <div className="max-w-3xl">
          <Eyebrow tone="onDark">How ClarityRev works</Eyebrow>
          <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-[1.03] tracking-[-0.02em]">
            We do more than recommend what should change. We implement it.
          </h2>
        </div>

        {/* operating model */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border-[3px] border-ink bg-card p-6 text-ink shadow-brutal-lg"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border-[3px] border-ink bg-yellow text-ink">
                  {s.icon}
                </span>
                <span className="font-display text-[13px] font-black text-faint">
                  {s.n}
                </span>
              </div>
              <h3 className="mt-4 font-display text-[20px] font-extrabold text-ink">
                {s.title}
              </h3>
              <p className="mt-1.5 text-[14px] leading-relaxed text-muted">
                {s.q}
              </p>
            </div>
          ))}
        </div>

        {/* explanation */}
        <div className="mt-10 grid gap-5 rounded-2xl border-[3px] border-ink bg-card p-7 text-ink shadow-brutal-lg md:grid-cols-3 md:p-9">
          <p className="text-[15px] leading-relaxed text-muted">
            We start with the problem and what needs to get better.
          </p>
          <p className="text-[15px] leading-relaxed text-muted md:border-l-2 md:border-line/15 md:pl-6">
            Then we work out what needs to change in the process, data, handoffs
            and tools. If existing software can do the job, we use it.
          </p>
          <p className="text-[15px] leading-relaxed text-muted md:border-l-2 md:border-line/15 md:pl-6">
            If something important is missing, we configure, connect or build
            what is needed.
          </p>
        </div>
      </Container>
    </section>
  );
}
