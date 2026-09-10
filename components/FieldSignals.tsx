"use client";

import { useEffect, useRef, useState } from "react";
import { bodyCopy, SectionHeading } from "./LandingSection";
import { commonSignals, fields } from "@/lib/data/trustSignals";
import { useDiagramReveal } from "./diagrams/useDiagramReveal";
import ProjectIcon from "./diagrams/ProjectIcon";

const cycleInterval = 4500;

/* A seal mark for the lines only the field can supply. */
function Seal() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="record-seal"
      aria-hidden="true"
    >
      <path d="M12 2.5 14.3 4.6l3.1-.4.9 3 2.8 1.4-1.2 2.9 1.2 2.9-2.8 1.4-.9 3-3.1-.4L12 21.5l-2.3-2.1-3.1.4-.9-3-2.8-1.4 1.2-2.9-1.2-2.9 2.8-1.4.9-3 3.1.4Z" />
      <path d="m8.5 12 2.3 2.3 4.7-4.6" />
    </svg>
  );
}

export default function FieldSignals() {
  const [fieldIndex, setFieldIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const { ref, visible } = useDiagramReveal();
  const field = fields[fieldIndex];

  /* Cycle through the fields while visible, until the reader takes over. */
  useEffect(() => {
    if (!visible || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(
      () => setFieldIndex((index) => (index + 1) % fields.length),
      cycleInterval,
    );
    return () => window.clearInterval(id);
  }, [visible, paused]);

  function selectField(index: number) {
    setPaused(true);
    setFieldIndex(index);
  }

  return (
    <section
      id="field-signals"
      className="bg-ui-bg py-24 md:py-32"
      aria-labelledby="field-signals-heading"
    >
      <div
        ref={ref}
        data-visible={visible}
        className="landing-container grid gap-12 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16"
      >
        <div>
          <SectionHeading
            id="field-signals-heading"
            eyebrow="Field-specific signals"
            headingClassName="text-[36px] sm:text-[44px] md:text-[36px] lg:text-display-3"
          >
            What counts as evidence
            <br />
            <em className="text-brand-accent">depends on the field</em>
          </SectionHeading>
          <div className={`mt-8 space-y-6 ${bodyCopy}`}>
            <p>
              Updates, endorsements, and funding records apply to any project.
              The signals that carry the most weight are particular to the
              work: certifications for an energy installation, community
              evaluation and measured impact for land regeneration, expert
              assessment for research.
            </p>
            <p>
              A project&rsquo;s record can hold all of them. Each one names who
              issued it, so a reader can decide how much weight to give it.
            </p>
          </div>
          <div
            role="tablist"
            aria-label="Choose a field"
            aria-orientation="vertical"
            className="field-tabs mt-10"
          >
            {fields.map((item, index) => (
              <button
                key={item.id}
                ref={(element) => {
                  tabs.current[index] = element;
                }}
                type="button"
                role="tab"
                id={`field-tab-${item.id}`}
                aria-controls="field-record"
                aria-selected={fieldIndex === index}
                tabIndex={fieldIndex === index ? 0 : -1}
                className="field-tab"
                onClick={() => selectField(index)}
                onKeyDown={(event) => {
                  let next: number | undefined;
                  if (event.key === "ArrowDown" || event.key === "ArrowRight")
                    next = (index + 1) % fields.length;
                  if (event.key === "ArrowUp" || event.key === "ArrowLeft")
                    next = (index + fields.length - 1) % fields.length;
                  if (event.key === "Home") next = 0;
                  if (event.key === "End") next = fields.length - 1;
                  if (next !== undefined) {
                    event.preventDefault();
                    selectField(next);
                    tabs.current[next]?.focus();
                  }
                }}
              >
                <ProjectIcon kind={item.id} className="h-7 w-7 shrink-0" />
                <span className="field-tab-text">
                  <span className="block">{item.name}</span>
                  <span className="field-tab-signal">
                    {item.signals.map((signal) => signal.title).join(" · ")}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
        <div
          id="field-record"
          role="tabpanel"
          aria-labelledby={`field-tab-${field.id}`}
          tabIndex={0}
          className="record-card"
          onMouseEnter={() => setPaused(true)}
          onFocus={() => setPaused(true)}
        >
          <div className="record-head">
            <p className="font-body text-body-sm uppercase tracking-[0.2em] text-ui-grey-muted">
              Public record
            </p>
            <p
              key={field.id}
              className="record-project animate-fade-in font-display text-heading-4 text-brand-black"
            >
              {field.project}
            </p>
          </div>
          <div className="record-columns" aria-hidden="true">
            <span>Signal</span>
            <span>Issued by</span>
          </div>
          <ol className="record-lines">
            {commonSignals.map((signal) => (
              <li key={signal.title} className="record-line">
                <div>
                  <p className="font-display text-[22px] leading-tight text-brand-black">
                    {signal.title}
                  </p>
                  <p className="mt-1 font-body text-body-sm leading-relaxed text-ui-grey-dark">
                    {signal.description}
                  </p>
                </div>
                <p className="record-issuer">
                  <span className="record-issuer-label">Issued by </span>
                  {signal.issuer}
                </p>
              </li>
            ))}
            {field.signals.map((signal) => (
              <li
                key={`${field.id}-${signal.title}`}
                className="record-line animate-fade-in"
                data-field="true"
              >
                <div>
                  <p className="flex items-center gap-2 font-display text-[22px] leading-tight text-brand-accent">
                    <Seal />
                    {signal.title}
                  </p>
                  <p className="mt-1 font-body text-body-sm leading-relaxed text-ui-grey-dark">
                    {signal.description}
                  </p>
                </div>
                <p className="record-issuer record-issuer-field">
                  <span className="record-issuer-label">Issued by </span>
                  {signal.issuer}
                </p>
              </li>
            ))}
          </ol>
          <p className="record-foot">
            Every line names its issuer. None of them is a score.
          </p>
        </div>
      </div>
    </section>
  );
}
