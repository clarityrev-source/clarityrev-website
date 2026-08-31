/* The hero's right-hand visual: three connected commercial systems.
   Each panel = colored diagram (left) + cream label (right), reproducing
   the reference's funnel / deal-record / workflow-tree motifs. The panels
   are routed together by a black connector rail on the left. */

import Eyebrow from "./Eyebrow";

/* ── Shared bits used inside the SVG diagrams ───────────────────── */
const cardStyle = { fill: "#ffffff", stroke: "#16130d", strokeWidth: 2.4 };
const line = {
  stroke: "#16130d",
  strokeWidth: 2.4,
  fill: "none",
  strokeLinecap: "round" as const,
};

function PipelineDiagram() {
  return (
    <svg viewBox="0 0 220 210" className="h-auto w-full max-w-[240px]">
      {/* three source cards */}
      {[28, 90, 152].map((x, i) => (
        <g key={i}>
          <rect x={x} y={16} width={40} height={30} rx={5} {...cardStyle} />
          <line x1={x + 20} y1={46} x2={110} y2={78} {...line} />
          {/* tiny glyphs */}
          {i === 0 && (
            <path
              d={`M${x + 12} 40v-16h10v16M${x + 24} 40v-10l4-2v12`}
              {...line}
              strokeWidth={1.8}
            />
          )}
          {i === 1 && (
            <>
              <circle cx={x + 20} cy={28} r={5} {...line} strokeWidth={1.8} />
              <path d={`M${x + 12} 42c1-5 15-5 16 0`} {...line} strokeWidth={1.8} />
            </>
          )}
          {i === 2 && (
            <path
              d={`M${x + 12} 40v-4M${x + 20} 40v-10M${x + 28} 40v-16`}
              {...line}
              strokeWidth={2.4}
            />
          )}
        </g>
      ))}

      {/* funnel */}
      <path d="M62 78 H158 L128 116 H92 Z" {...cardStyle} />
      <circle cx={100} cy={92} r={2.6} fill="#16130d" />
      <circle cx={118} cy={92} r={2.6} fill="#16130d" />
      <line x1={110} y1={116} x2={110} y2={150} {...line} />

      {/* qualified buyer node */}
      <circle cx={110} cy={172} r={20} {...cardStyle} />
      <circle cx={110} cy={166} r={5.5} {...line} strokeWidth={2} />
      <path d="M99 184c1-8 21-8 22 0" {...line} strokeWidth={2} />
    </svg>
  );
}

function DealDiagram() {
  return (
    <svg viewBox="0 0 240 200" className="h-auto w-full max-w-[250px]">
      {/* deal record card */}
      <rect x="22" y="18" width="196" height="120" rx="8" {...cardStyle} />
      {/* header */}
      <text
        x="38"
        y="46"
        fontFamily="var(--font-archivo)"
        fontSize="16"
        fontWeight="800"
        fill="#16130d"
      >
        Acme Corp.
      </text>
      {/* crown */}
      <path
        d="M182 40h16l1.5-11-6 3.5-3.5-6-3.5 6-6-3.5z"
        fill="#f6c445"
        stroke="#16130d"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {/* stage line */}
      <line x1="40" y1="72" x2="200" y2="72" {...line} />
      {[40, 93, 147, 200].map((x, i) => (
        <circle
          key={i}
          cx={x}
          cy={72}
          r={i === 2 ? 8 : 6}
          fill={i === 2 ? "#f6c445" : "#ffffff"}
          stroke="#16130d"
          strokeWidth={2.4}
        />
      ))}
      {/* divider */}
      <line x1="22" y1="96" x2="218" y2="96" stroke="#16130d" strokeWidth="1.4" />
      <text
        x="38"
        y="114"
        fontFamily="var(--font-inter)"
        fontSize="10"
        fontWeight="700"
        fill="#6f6a5c"
        letterSpacing="0.5"
      >
        NEXT ACTION
      </text>
      <text
        x="38"
        y="130"
        fontFamily="var(--font-archivo)"
        fontSize="13"
        fontWeight="700"
        fill="#16130d"
      >
        Align on budget
      </text>
      {/* owner avatar */}
      <circle cx="196" cy="120" r="14" {...cardStyle} />
      <circle cx="196" cy="116" r="4" {...line} strokeWidth={2} />
      <path d="M188 130c1-6 15-6 16 0" {...line} strokeWidth={2} />
    </svg>
  );
}

function WorkflowDiagram() {
  return (
    <svg viewBox="0 0 240 200" className="h-auto w-full max-w-[250px]">
      {/* trigger node */}
      <circle cx="120" cy="34" r="20" {...cardStyle} />
      <path
        d="M123 22l-9 12h7l-1 10 9-13h-7l1-9z"
        fill="#16130d"
        stroke="none"
      />
      {/* branch lines */}
      <line x1="120" y1="54" x2="120" y2="78" {...line} />
      <line x1="45" y1="78" x2="195" y2="78" {...line} />
      {[45, 95, 145, 195].map((x, i) => (
        <line key={i} x1={x} y1="78" x2={x} y2="104" {...line} />
      ))}
      {/* four action boxes */}
      {[27, 77, 127, 177].map((x, i) => (
        <g key={i}>
          <rect x={x} y={104} width={36} height={36} rx={6} {...cardStyle} />
          {/* glyphs: database / gear / user / check */}
          {i === 0 && (
            <g stroke="#16130d" strokeWidth="1.8" fill="none">
              <ellipse cx={x + 18} cy={116} rx={9} ry={3.5} />
              <path d={`M${x + 9} 116v8c0 2 18 2 18 0v-8`} />
            </g>
          )}
          {i === 1 && (
            <g stroke="#16130d" strokeWidth="1.8" fill="none">
              <circle cx={x + 18} cy={122} r={5} />
              <path
                d={`M${x + 18} 113v3M${x + 18} 128v3M${x + 9} 122h3M${x + 24} 122h3`}
              />
            </g>
          )}
          {i === 2 && (
            <g stroke="#16130d" strokeWidth="1.8" fill="none">
              <circle cx={x + 18} cy={118} r={4.5} />
              <path d={`M${x + 9} 133c1-7 17-7 18 0`} />
            </g>
          )}
          {i === 3 && (
            <path
              d={`M${x + 10} 122l5 5 11-11`}
              stroke="#46cc5e"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </g>
      ))}
    </svg>
  );
}

type PanelDef = {
  n: string;
  title: string;
  desc: string;
  bg: string;
  accent: "purple" | "yellow" | "green";
  shadow: string;
  diagram: React.ReactNode;
};

const PANELS: PanelDef[] = [
  {
    n: "01",
    title: "Generate qualified pipeline",
    desc: "Find the right accounts, reach the right people and create qualified opportunities.",
    bg: "bg-purple",
    accent: "purple",
    shadow: "shadow-brutal-purple",
    diagram: <PipelineDiagram />,
  },
  {
    n: "02",
    title: "Move active deals forward",
    desc: "Bring clarity to deal state, next actions and ownership so deals reach the right decision.",
    bg: "bg-yellow",
    accent: "yellow",
    shadow: "shadow-brutal-yellow",
    diagram: <DealDiagram />,
  },
  {
    n: "03",
    title: "Optimize your workflows",
    desc: "Automate recurring revenue workflows to save time, reduce errors and improve outcomes.",
    bg: "bg-green",
    accent: "green",
    shadow: "shadow-brutal-green",
    diagram: <WorkflowDiagram />,
  },
];

export default function HeroSystem() {
  return (
    <div className="relative">
      {/* connector rail (desktop only) */}
      <div className="pointer-events-none absolute left-[15px] top-10 bottom-10 hidden w-[3px] bg-ink lg:block" />
      <div className="absolute left-[9px] top-8 hidden h-4 w-4 rounded-full border-[3px] border-ink bg-card lg:block" />

      <div className="flex flex-col gap-7 lg:pl-12">
        {PANELS.map((p, i) => (
          <div key={p.n} className="relative">
            {/* connector stub into this panel */}
            <div className="pointer-events-none absolute -left-12 top-1/2 hidden h-[3px] w-9 -translate-y-1/2 bg-ink lg:block" />
            {i === PANELS.length - 1 ? (
              <div className="absolute -left-[15px] top-1/2 hidden -translate-y-1/2 border-y-[6px] border-l-[9px] border-y-transparent border-l-ink lg:block" />
            ) : (
              <div className="absolute -left-[18px] top-1/2 hidden h-3 w-3 -translate-y-1/2 rounded-full bg-ink lg:block" />
            )}

            <article
              className={`overflow-hidden rounded-2xl border-[3px] border-ink bg-card ${p.shadow} flex flex-col sm:flex-row`}
            >
              {/* colored diagram side */}
              <div
                className={`${p.bg} flex items-center justify-center border-b-[3px] border-ink p-6 sm:w-[46%] sm:border-b-0 sm:border-r-[3px]`}
              >
                {p.diagram}
              </div>
              {/* label side */}
              <div className="flex flex-col justify-center p-6 sm:w-[54%]">
                <Eyebrow tone={p.accent}>{p.n}</Eyebrow>
                <h3 className="mt-3 font-display text-[22px] font-extrabold leading-[1.05] tracking-[-0.01em] text-ink">
                  {p.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-snug text-muted">
                  {p.desc}
                </p>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}
