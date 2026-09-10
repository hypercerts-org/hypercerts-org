import Image from "next/image";
import { bodyCopy, developerGuideUrl, SectionHeading } from "./LandingSection";

const contributions = [
  {
    role: "Projects and organizations",
    action:
      "Publish profiles, progress updates, and evidence about their work.",
  },
  {
    role: "Networks",
    action: "Publish memberships, badges, and endorsements.",
  },
  {
    role: "Evaluators and certifiers",
    action:
      "Contribute certifications and assessments with supporting evidence.",
  },
  {
    role: "Funders",
    action:
      "Use others’ assessments alongside their own, and record support for the work.",
  },
];

export default function WhatIsHypercert() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-white py-24 md:py-32"
      aria-labelledby="protocol-heading"
    >
      <Image
        src="/img/guilloche/guilloche_01.svg"
        alt=""
        aria-hidden="true"
        width={700}
        height={700}
        className="pointer-events-none absolute -bottom-[350px] -left-[350px] max-w-none opacity-[0.2]"
      />
      <div className="landing-container relative">
        <SectionHeading id="protocol-heading" eyebrow="The Hypercerts protocol">
          A shared language to make
          <br />
          <em className="text-brand-accent">project information reusable</em>
        </SectionHeading>
        <p className={`mt-8 max-w-2xl ${bodyCopy}`}>
          The Hypercerts protocol gives project information a common format, so
          it can be reused across applications and agents instead of being
          submitted and assessed from scratch. Lexicons, usage guidance, and
          supporting infrastructure work together to make that possible. The
          Hypercerts Foundation stewards the protocol and maintains the
          infrastructure that keeps the information accessible.
        </p>
        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {contributions.map(({ role, action }) => (
            <div
              key={role}
              className="flex flex-col border-t border-brand-black pt-6"
            >
              <h3 className="mb-4 font-display text-[28px] leading-tight">
                {role}
              </h3>
              <p className={`flex-1 ${bodyCopy}`}>{action}</p>
            </div>
          ))}
        </div>
        <a
          href={developerGuideUrl}
          className="builder-guide group mt-16 md:mt-20"
        >
          <div>
            <span className="mb-3 block font-body text-body-sm uppercase tracking-[0.2em] text-ui-grey-dark">
              For builders
            </span>
            <span className="font-display text-[36px] leading-[1.1] tracking-[-0.02em] sm:text-display-3">
              Read the <em className="text-brand-accent">Guide</em>
            </span>
          </div>
          <span className="builder-guide-rule" aria-hidden="true" />
          <span className="builder-guide-arrow" aria-hidden="true">
            <svg
              viewBox="0 0 32 32"
              fill="none"
              className="h-8 w-8 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path
                d="M8 24 24 8M8 8h16v16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
