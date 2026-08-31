import Container from "./Container";
import { FIT_CALL_URL, FOOTER_NAV } from "./nav";

function Col({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-paper/50">
        {title}
      </p>
      <ul className="mt-4 flex flex-col gap-2.5">
        {items.map((a) => (
          <li key={a.label}>
            <a
              href={a.href}
              className="text-[14px] font-medium text-paper/75 transition-colors hover:text-yellow"
            >
              {a.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink py-12 text-paper">
      <Container className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="font-display text-[22px] font-extrabold tracking-[-0.02em] text-paper">
              ClarityRev
            </span>
            <span className="flex items-end gap-[3px]" aria-hidden>
              <span className="h-4 w-[5px] rounded-[1px] bg-purple" />
              <span className="h-5 w-[5px] rounded-[1px] bg-yellow" />
              <span className="h-6 w-[5px] rounded-[1px] bg-green" />
            </span>
          </div>
          <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-paper/60">
            GTM engineering and signal-based outbound. We generate qualified
            pipeline, move active deals forward and automate recurring revenue
            work.
          </p>
        </div>

        <Col title="Explore" items={FOOTER_NAV.explore} />
        <Col title="Offers" items={FOOTER_NAV.offers} />

        <div>
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-paper/50">
            Contact
          </p>
          <a
            href={FIT_CALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-lg border-[3px] border-ink bg-green px-4 py-2.5 font-display text-[15px] font-bold text-ink"
          >
            Book a Fit Call →
          </a>
        </div>
      </Container>

      <Container className="mt-10 border-t border-paper/15 pt-6 text-[13px] text-paper/50">
        © 2026 ClarityRev B.V.
      </Container>
    </footer>
  );
}
