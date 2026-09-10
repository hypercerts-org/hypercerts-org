import Image from "next/image";
import { bodyCopy, SectionHeading } from "./LandingSection";

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
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {contributions.map(({ role, action }) => (
            <div
              key={role}
              className="flex flex-col rounded-brand border border-ui-separator bg-white p-6 md:p-8"
            >
              <h3 className="mb-4 font-display text-[28px] leading-tight">
                {role}
              </h3>
              <p className={`flex-1 ${bodyCopy}`}>{action}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
