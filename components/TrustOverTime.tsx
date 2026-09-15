import type { CSSProperties } from "react";
import { bodyCopy, SectionHeading } from "./LandingSection";
import {
  fieldSignals,
  fundingRecords,
  projectUpdates,
  thirdPartyAttestations,
} from "@/lib/data/trustSignals";

const signals = [projectUpdates, thirdPartyAttestations, fundingRecords];

/* The record as four equal steps in the 1000 × 300 viewBox: flat, a jump when
   evidence is added, flat again. Third-party attestations can come from
   several parties, so they take two of the jumps. */
const baseline = 280;
const stepWidth = 200;
const stepHeight = 45;
const jumps = Array.from({ length: 4 }, (_, index) => ({
  x: 160 + index * stepWidth,
  top: baseline - (index + 1) * stepHeight,
}));
const stepPath = `M20 ${baseline} ${jumps.map((jump) => `H${jump.x} V${jump.top}`).join(" ")} H960`;

/* Each label sits the same distance above its highest point, centred over the
   points it names, so the labels rise with the steps. A dotted guide joins
   each point to its label; a dotted bracket joins the guides of a signal with
   several jumps. Labels may wrap within their maximum width (in percent). */
const labelRise = 40;
const chartLabels = [
  { signal: projectUpdates, points: [jumps[0]], maxWidth: 26 },
  { signal: thirdPartyAttestations, points: [jumps[1], jumps[2]], maxWidth: 39 },
  { signal: fundingRecords, points: [jumps[3]], maxWidth: 28 },
].map((label) => ({
  ...label,
  x: (label.points[0].x + label.points[label.points.length - 1].x) / 2,
  guideEnd: Math.min(...label.points.map((point) => point.top)) - labelRise,
}));

/* A seal mark for the kinds of third-party attestation. */
function Seal() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="signal-seal"
      aria-hidden="true"
    >
      <path d="M12 2.5 14.3 4.6l3.1-.4.9 3 2.8 1.4-1.2 2.9 1.2 2.9-2.8 1.4-.9 3-3.1-.4L12 21.5l-2.3-2.1-3.1.4-.9-3-2.8-1.4 1.2-2.9-1.2-2.9 2.8-1.4.9-3 3.1.4Z" />
      <path d="m8.5 12 2.3 2.3 4.7-4.6" />
    </svg>
  );
}

export default function TrustOverTime() {
  return (
    <section
      id="trust"
      className="bg-surface-cream py-24 md:py-32"
      aria-labelledby="trust-heading"
    >
      <div className="landing-container">
        <SectionHeading id="trust-heading" eyebrow="One project, many signals">
          Trust builds <em className="text-brand-accent">over time</em>
        </SectionHeading>
        <p className={`mt-8 max-w-2xl ${bodyCopy}`}>
          A project starts with little to show. As the work goes on, others
          add to its public record: the team posts an update, a peer vouches
          for it, a funder records its support. Each addition lowers the cost
          of the next decision about the project.
        </p>
        <div className="trust-explorer mt-12 md:mt-16">
          <div className="trust-panel">
            <figure
              aria-label="How trust builds on a project's record: a step up for a project update, two steps for third-party attestations, and a step up for a funding record"
            >
              <div className="trust-plot" aria-hidden="true">
                <svg
                  viewBox="0 0 1000 300"
                  preserveAspectRatio="none"
                  className="absolute inset-0 h-full w-full"
                >
                  <path d="M20 20V280H980" className="chart-axis" />
                  {chartLabels.flatMap((label) =>
                    label.points.map((point) => (
                      <path
                        key={point.x}
                        d={`M${point.x} ${point.top - 10} V${label.guideEnd}`}
                        className="chart-leader"
                      />
                    )),
                  )}
                  {chartLabels
                    .filter((label) => label.points.length > 1)
                    .map((label) => (
                      <path
                        key={label.signal.title}
                        d={`M${label.points[0].x} ${label.guideEnd} H${label.points[label.points.length - 1].x}`}
                        className="chart-leader"
                      />
                    ))}
                  <path d={stepPath} className="trust-track" />
                </svg>
                {/* The red line draws over the grey track as the chart scrolls
                    through the viewport; the track keeps the whole record
                    visible throughout. */}
                <svg
                  viewBox="0 0 1000 300"
                  preserveAspectRatio="none"
                  className="trust-line absolute inset-0 h-full w-full"
                >
                  <path d={stepPath} className="trust-step" />
                </svg>
                {jumps.map((jump) => (
                  <span
                    key={jump.x}
                    className="trust-dot"
                    style={
                      {
                        left: `${jump.x / 10}%`,
                        top: `${jump.top / 3}%`,
                        "--at": jump.x / 1000,
                      } as CSSProperties
                    }
                  />
                ))}
                {chartLabels.map((label, index) => (
                  <span
                    key={label.signal.title}
                    className="trust-annotation"
                    style={{
                      left: `${label.x / 10}%`,
                      top: `${(label.guideEnd - 4) / 3}%`,
                      maxWidth: `${label.maxWidth}%`,
                    }}
                  >
                    <span className="trust-number font-body">{index + 1}</span>
                    <span>{label.signal.label}</span>
                  </span>
                ))}
                {/* Arrowheads and axis names at the ends of the axes (the
                    axis runs from 20 to 280 down and to 980 across). They are
                    HTML so they keep their shape while the plot stretches. */}
                <svg
                  viewBox="0 0 10 10"
                  className="trust-axis-arrow"
                  style={{
                    left: "2%",
                    top: `${20 / 3}%`,
                    transform: "translate(-50%, -1.5px)",
                  }}
                >
                  <path d="M1.5 6 5 1.5 8.5 6" />
                </svg>
                <svg
                  viewBox="0 0 10 10"
                  className="trust-axis-arrow"
                  style={{
                    left: "98%",
                    top: `${baseline / 3}%`,
                    transform: "translate(-8.5px, -50%)",
                  }}
                >
                  <path d="M4 1.5 8.5 5 4 8.5" />
                </svg>
                <span
                  className="absolute font-body text-body-sm text-ui-grey-dark"
                  style={{
                    left: "calc(2% + 12px)",
                    top: `${20 / 3}%`,
                    transform: "translateY(-50%)",
                  }}
                >
                  Trust
                </span>
                <span
                  className="absolute font-body text-body-sm text-ui-grey-dark"
                  style={{
                    right: "calc(2% + 6px)",
                    bottom: `calc(${(300 - baseline) / 3}% + 6px)`,
                  }}
                >
                  Time
                </span>
              </div>
            </figure>
            <ol className="mt-8 grid gap-4 md:grid-cols-3">
              {signals.map((signal, index) => (
                <li key={signal.title} className="trust-signal">
                  <h3 className="flex items-center gap-3 font-display text-heading-4 text-brand-black">
                    <span className="trust-number font-body">{index + 1}</span>
                    {signal.title}
                  </h3>
                  <p className="mt-4 font-body text-body-sm leading-relaxed text-ui-grey-dark">
                    {signal.description}
                  </p>
                  {signal === thirdPartyAttestations && (
                    <ul className="mt-3 space-y-1 font-body text-body-sm leading-relaxed text-brand-black">
                      {fieldSignals.map((type) => (
                        <li key={type} className="flex items-start gap-2">
                          <Seal />
                          {type}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
