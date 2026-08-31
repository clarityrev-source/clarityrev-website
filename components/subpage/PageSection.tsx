import type { ReactNode } from "react";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import type { Accent } from "./accents";

/** Standard subpage section: eyebrow + title + optional supporting, then content. */
export default function PageSection({
  id,
  eyebrow,
  eyebrowTone = "ink",
  title,
  supporting,
  children,
  dark = false,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  eyebrowTone?: Accent | "ink";
  title: ReactNode;
  supporting?: ReactNode;
  children?: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`border-b-[3px] border-ink py-16 md:py-24 ${className}`}
    >
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          eyebrowTone={eyebrowTone}
          title={title}
          dark={dark}
        >
          {supporting}
        </SectionHeading>
        {children && <div className="mt-10">{children}</div>}
      </Container>
    </section>
  );
}
