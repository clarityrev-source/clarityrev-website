"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Container from "./Container";
import { FIT_CALL_URL, PRIMARY_NAV, SOLVE_GROUPS, type Accent } from "./nav";

/** A route link (not a homepage #anchor) that matches the current path. */
const isRoute = (href: string) => href.startsWith("/") && !href.includes("#");

const accentBg: Record<Accent, string> = {
  purple: "bg-purple",
  yellow: "bg-yellow",
  green: "bg-green",
};

function Wordmark() {
  return (
    <a href="/" className="flex items-center gap-2.5">
      <span className="font-display text-[22px] font-extrabold tracking-[-0.02em] text-ink">
        ClarityRev
      </span>
      <span className="flex items-end gap-[3px]" aria-hidden>
        <span className="h-4 w-[5px] rounded-[1px] bg-purple" />
        <span className="h-5 w-[5px] rounded-[1px] bg-yellow" />
        <span className="h-6 w-[5px] rounded-[1px] bg-green" />
      </span>
    </a>
  );
}

function Bars() {
  return (
    <span className="flex flex-col gap-[3px]" aria-hidden>
      <span className="h-[2.5px] w-4 bg-ink" />
      <span className="h-[2.5px] w-4 bg-ink" />
      <span className="h-[2.5px] w-4 bg-ink" />
    </span>
  );
}

function Cross() {
  return (
    <span className="relative block h-4 w-4" aria-hidden>
      <span className="absolute left-0 top-1/2 h-[2.5px] w-4 -translate-y-1/2 rotate-45 bg-ink" />
      <span className="absolute left-0 top-1/2 h-[2.5px] w-4 -translate-y-1/2 -rotate-45 bg-ink" />
    </span>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

/** Top-level menu row (Home / How we work / Pricing & Fit). */
function TopLink({
  href,
  children,
  onNavigate,
  active = false,
}: {
  href: string;
  children: React.ReactNode;
  onNavigate: () => void;
  active?: boolean;
}) {
  return (
    <a
      href={href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={`group flex min-h-[54px] items-center justify-between rounded-lg px-3 font-display text-[19px] font-bold text-ink transition-colors focus-visible:outline-none ${
        active ? "bg-yellow/50" : "hover:bg-yellow/30 focus-visible:bg-yellow/30"
      }`}
    >
      <span className="flex items-center gap-2.5">
        {active && (
          <span className="h-4 w-[6px] rounded-[1px] bg-ink" aria-hidden />
        )}
        {children}
      </span>
      <span
        className={`transition ${
          active
            ? "opacity-100"
            : "translate-x-0 opacity-0 group-hover:translate-x-0.5 group-hover:opacity-100 group-focus-visible:opacity-100"
        }`}
      >
        →
      </span>
    </a>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [solveOpen, setSolveOpen] = useState(true);
  const panelRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const getFocusable = () =>
      panel
        ? Array.from(
            panel.querySelectorAll<HTMLElement>(
              'a[href],button:not([disabled])'
            )
          )
        : [];
    getFocusable()[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        btnRef.current?.focus();
      } else if (e.key === "Tab") {
        const f = getFocusable();
        if (f.length === 0) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-paper">
      <Container className="flex h-16 items-center justify-between">
        <Wordmark />
        <button
          ref={btnRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="cr-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="brutal-press inline-flex items-center gap-2.5 rounded-lg border-[3px] border-ink bg-yellow px-4 py-2 font-display text-[15px] font-bold text-ink shadow-brutal"
        >
          {open ? "Close" : "Menu"}
          {open ? <Cross /> : <Bars />}
        </button>
      </Container>

      {open && (
        <>
          {/* backdrop */}
          <button
            type="button"
            aria-hidden
            tabIndex={-1}
            onClick={close}
            className="fixed inset-0 top-16 z-40 cursor-default bg-ink/25"
          />
          {/* panel: full-width on mobile, compact right-aligned drawer on sm+ */}
          <div
            id="cr-menu"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Main menu"
            className="fixed right-0 top-16 z-40 w-full border-b-[3px] border-ink bg-paper sm:right-4 sm:top-[76px] sm:w-[440px] sm:rounded-2xl sm:border-[3px] sm:shadow-brutal-lg"
          >
            <nav
              aria-label="Primary"
              className="flex max-h-[calc(100dvh-88px)] flex-col overflow-y-auto"
            >
              <ul className="flex flex-col gap-0.5 p-3">
                {PRIMARY_NAV.map((n) =>
                  n.solve ? (
                    <li key={n.href}>
                      {/* What we solve: overview link + accordion of outcomes */}
                      <div className="group flex items-stretch rounded-lg pr-1 hover:bg-yellow/30">
                        <a
                          href={n.href}
                          onClick={close}
                          className="flex min-h-[54px] flex-1 items-center px-3 font-display text-[19px] font-bold text-ink focus-visible:outline-none"
                        >
                          {n.label}
                        </a>
                        <button
                          type="button"
                          onClick={() => setSolveOpen((v) => !v)}
                          aria-expanded={solveOpen}
                          aria-controls="cr-solve"
                          aria-label={
                            solveOpen
                              ? "Collapse what we solve"
                              : "Expand what we solve"
                          }
                          className="my-2 flex w-10 items-center justify-center rounded-md border-2 border-ink bg-card text-ink"
                        >
                          <Chevron open={solveOpen} />
                        </button>
                      </div>

                      {solveOpen && (
                        <ul
                          id="cr-solve"
                          className="mb-1 ml-3 mt-1 flex flex-col gap-3 border-l-[3px] border-ink pl-3"
                        >
                          {SOLVE_GROUPS.map((g) => (
                            <li key={g.title}>
                              <a
                                href={g.href}
                                onClick={close}
                                className="block rounded-md px-1 py-0.5 hover:bg-yellow/30 focus-visible:bg-yellow/30 focus-visible:outline-none"
                              >
                                <span className="flex items-center gap-2 font-display text-[15px] font-bold leading-tight text-ink">
                                  <span
                                    className={`inline-block h-3.5 w-3.5 shrink-0 rounded-[3px] border-2 border-ink ${accentBg[g.accent]}`}
                                  />
                                  {g.title}
                                </span>
                                <span className="mt-1 block pl-[22px] text-[12px] leading-snug text-faint">
                                  {g.label}
                                </span>
                              </a>
                              <div className="mt-1.5 flex flex-wrap gap-1.5 pl-[22px]">
                                {g.offers.map((o) => {
                                  const activeOffer =
                                    isRoute(o.href) && pathname === o.href;
                                  return (
                                    <a
                                      key={o.label}
                                      href={o.href}
                                      onClick={close}
                                      aria-current={
                                        activeOffer ? "page" : undefined
                                      }
                                      className={`rounded-md border-2 border-ink px-2 py-1 font-mono text-[11px] font-bold uppercase tracking-wide text-ink transition-colors focus-visible:outline-none ${
                                        activeOffer
                                          ? "bg-yellow"
                                          : "bg-card hover:bg-yellow focus-visible:bg-yellow"
                                      }`}
                                    >
                                      {o.label}
                                    </a>
                                  );
                                })}
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ) : (
                    <li key={n.href}>
                      <TopLink
                        href={n.href}
                        onNavigate={close}
                        active={isRoute(n.href) && pathname === n.href}
                      >
                        {n.label}
                      </TopLink>
                    </li>
                  )
                )}
              </ul>

              {/* CTA — visually separated at the bottom */}
              <div className="border-t-[3px] border-ink p-3">
                <a
                  href={FIT_CALL_URL}
                  onClick={close}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-press flex items-center justify-center gap-2 rounded-lg border-[3px] border-ink bg-green py-3 font-display text-[16px] font-bold text-ink shadow-brutal"
                >
                  Book a Fit Call →
                </a>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
