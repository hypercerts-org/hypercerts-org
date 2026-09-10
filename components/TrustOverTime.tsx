"use client";

import { useEffect, useRef, useState } from "react";
import { bodyCopy, SectionHeading } from "./LandingSection";
import { commonSignals } from "@/lib/data/trustSignals";
import { useDiagramReveal } from "./diagrams/useDiagramReveal";

const curve =
  "M20 260 C110 260 165 244 250 225 C355 202 435 178 550 145 C675 109 785 61 890 45";
const points = [
  { x: 25, y: 75 },
  { x: 55, y: 48.333 },
  { x: 89, y: 15 },
];
const drawDuration = 1500;

/* The red curve is one path revealed by a linear clip wipe. On mount it starts
   hidden and, once the diagram is visible, sweeps to the current stage. Each
   point lights up at the moment the sweep reaches it. */
function TrustCurve({ stage, visible }: { stage: number; visible: boolean }) {
  const [drawn, setDrawn] = useState(false);
  const previous = useRef(0);
  useEffect(() => {
    const id = requestAnimationFrame(() => setDrawn(true));
    return () => cancelAnimationFrame(id);
  }, []);
  const reveal = drawn && visible ? points[stage].x : 0;
  const from = previous.current;
  useEffect(() => {
    previous.current = reveal;
  }, [reveal]);
  const span = Math.abs(reveal - from);
  /* Delay each point until the sweep passes it, growing or retracting. */
  const delayFor = (x: number) => {
    if (span === 0) return 0;
    const within =
      reveal > from ? x > from && x <= reveal : x <= from && x > reveal;
    return within ? (Math.abs(x - from) / span) * drawDuration : 0;
  };
  return (
    <>
      <svg
        viewBox="0 0 1000 300"
        preserveAspectRatio="none"
        className="trust-curve-layer absolute inset-0 h-full w-full"
        style={{ clipPath: `inset(0 ${100 - reveal}% 0 0)` }}
        aria-hidden="true"
      >
        <path d={curve} className="trust-curve" />
      </svg>
      {points.map((point, index) => (
        <span
          key={index}
          aria-hidden="true"
          className="trust-point"
          data-added={reveal >= point.x}
          style={{
            left: `${point.x}%`,
            top: `${point.y}%`,
            transitionDelay: `${delayFor(point.x)}ms`,
          }}
        >
          {index + 1}
        </span>
      ))}
    </>
  );
}

export default function TrustOverTime() {
  const [stage, setStage] = useState(2);
  const { ref, visible } = useDiagramReveal();

  return (
    <section
      id="trust"
      className="bg-surface-cream py-24 md:py-32"
      aria-labelledby="trust-heading"
    >
      <div className="landing-container">
        <SectionHeading id="trust-heading" eyebrow="Examples of trust">
          Trust builds <em className="text-brand-accent">over time</em>
        </SectionHeading>
        <p className={`mt-8 max-w-2xl ${bodyCopy}`}>
          A project starts with little to show. As the work goes on, others
          add to its public record: the team posts an update, a peer vouches
          for it, a funder records its support. Each addition gives the next
          reader more to go on. The three below are examples of the signals a
          record can carry, not the full list.
        </p>
        <div
          ref={ref}
          data-visible={visible}
          className="trust-explorer diagram-reveal mt-12 md:mt-16"
        >
          <div className="trust-panel">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <p className="font-display text-heading-4 text-brand-black">
                One project, three signals
              </p>
            </div>
            <figure className="mt-8" aria-label="How trust can build over time">
              <div className="mb-3 font-body text-body-sm text-ui-grey-dark">
                Trust <span aria-hidden="true">↑</span>
              </div>
              <div className="trust-plot">
                <svg
                  viewBox="0 0 1000 300"
                  preserveAspectRatio="none"
                  className="absolute inset-0 h-full w-full"
                  aria-hidden="true"
                >
                  <path d="M20 20V280H980" className="chart-axis" />
                  <path d="m971 275 9 5-9 5" className="chart-axis" />
                  {points.map((p, i) => (
                    <path
                      key={i}
                      d={`M${p.x * 10} ${p.y * 3} V280`}
                      className="chart-guide"
                    />
                  ))}
                  <path d={curve} className="trust-potential" />
                </svg>
                <TrustCurve stage={stage} visible={visible} />
              </div>
              <div className="mt-2 text-right font-body text-body-sm text-ui-grey-dark">
                Time <span aria-hidden="true">→</span>
              </div>
            </figure>
            <div
              className="mt-8 grid gap-4 md:grid-cols-3"
              role="group"
              aria-label="Explore the trust signals"
            >
              {commonSignals.map((signal, index) => (
                <button
                  key={signal.title}
                  type="button"
                  className="trust-signal"
                  aria-pressed={stage === index}
                  onClick={() => setStage(index)}
                >
                  <span className="mb-5 flex items-center justify-between gap-4 font-body text-body-sm text-ui-grey-muted">
                    <span>Signal {index + 1}</span>
                    <span aria-hidden="true" className="signal-mark">
                      {stage >= index ? "✓" : "+"}
                    </span>
                  </span>
                  <span className="block font-display text-heading-4 text-brand-black">
                    {signal.title}
                  </span>
                  <span className="mt-4 block font-body text-body-sm leading-relaxed text-ui-grey-dark">
                    {signal.description}
                  </span>
                </button>
              ))}
            </div>
            <p className="sr-only" aria-live="polite" aria-atomic="true">
              {stage + 1} of 3 illustrative signals added. Latest signal:{" "}
              {commonSignals[stage].title}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
