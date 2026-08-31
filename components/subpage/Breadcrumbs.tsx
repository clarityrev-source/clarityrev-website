import Container from "../Container";

/** Subtle, single-level breadcrumb shown directly under the header on subpages. */
export default function Breadcrumbs({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb">
      <Container className="pt-4 md:pt-5">
        <ol className="flex items-center gap-2 text-[13px] font-medium">
          <li>
            <a
              href="/"
              className="text-faint underline-offset-2 transition-colors hover:text-ink hover:underline"
            >
              Home
            </a>
          </li>
          <li aria-hidden className="text-faint">
            /
          </li>
          <li>
            <span aria-current="page" className="font-semibold text-ink">
              {current}
            </span>
          </li>
        </ol>
      </Container>
    </nav>
  );
}
