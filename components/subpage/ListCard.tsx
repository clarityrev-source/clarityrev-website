import { Card, CardHeader, type Accent } from "../ui/Card";
import { CheckMark, CrossMark } from "./Mark";
import type { Accent as ColorAccent } from "./accents";

/**
 * A titled card with a marked list. Powers Before/After and Best-fit/Not-a-fit
 * blocks by varying the header tone and the list mark.
 */
export default function ListCard({
  title,
  headerTone = "plain",
  cardAccent = "ink",
  mark = "check",
  markAccent = "purple",
  items,
}: {
  title: string;
  headerTone?: Accent | "plain";
  cardAccent?: Accent;
  mark?: "check" | "cross";
  markAccent?: ColorAccent;
  items: string[];
}) {
  return (
    <Card accent={cardAccent} className="h-full">
      <CardHeader accent={headerTone}>
        <span className="font-display text-[16px] font-extrabold">{title}</span>
      </CardHeader>
      <ul className="flex flex-col gap-3 p-5">
        {items.map((it) => (
          <li key={it} className="flex gap-2.5 text-[14px] leading-snug text-muted">
            {mark === "check" ? <CheckMark accent={markAccent} /> : <CrossMark />}
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
