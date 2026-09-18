"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

function Arrow({ direction }: { direction: "back" | "forward" }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-4 w-4">
      <path
        d={direction === "back" ? "M10 3 5 8l5 5" : "m6 3 5 5-5 5"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* A row of list items that scrolls sideways and shows that it can: the next
   item peeks in under a fade at the edge, and an arrow button appears on
   whichever side has more to see. The row starts at the page margin and runs
   to the window edge. Children are the <li> items. */
export default function HorizontalScroller({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  const track = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ atStart: true, atEnd: true });

  const measure = useCallback(() => {
    const element = track.current;
    if (!element) return;
    setEdges({
      atStart: element.scrollLeft <= 1,
      atEnd:
        element.scrollLeft + element.clientWidth >= element.scrollWidth - 1,
    });
  }, []);

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    measure();
    element.addEventListener("scroll", measure, { passive: true });
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => {
      element.removeEventListener("scroll", measure);
      observer.disconnect();
    };
  }, [measure]);

  function scrollOnePage(direction: 1 | -1) {
    const element = track.current;
    if (!element) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    element.scrollBy({
      left: direction * element.clientWidth * 0.8,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  return (
    <div
      className="scroller"
      data-at-start={edges.atStart}
      data-at-end={edges.atEnd}
    >
      <div
        ref={track}
        className="scroller-track scrollbar-hide"
        role="region"
        aria-label={label}
        tabIndex={0}
      >
        <ul className="scroller-list">{children}</ul>
      </div>
      <button
        type="button"
        className="scroller-button"
        data-side="start"
        hidden={edges.atStart}
        onClick={() => scrollOnePage(-1)}
        aria-label={`Scroll ${label.toLowerCase()} back`}
      >
        <Arrow direction="back" />
      </button>
      <button
        type="button"
        className="scroller-button"
        data-side="end"
        hidden={edges.atEnd}
        onClick={() => scrollOnePage(1)}
        aria-label={`Scroll ${label.toLowerCase()} forward`}
      >
        <Arrow direction="forward" />
      </button>
    </div>
  );
}
