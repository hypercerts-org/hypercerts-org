import Image from "next/image";
import {
  bodyCopy,
  developerGuideUrl,
  SectionHeading,
  textLink,
} from "./LandingSection";

const contributions = [
  {
    role: "Projects and organizations",
    action:
      "Publish profiles, progress updates, and evidence about their work.",
    record: "Profiles, updates & evidence",
  },
  {
    role: "Networks",
    action: "Publish memberships, badges, and endorsements.",
    record: "Memberships & endorsements",
  },
  {
    role: "Evaluators and certifiers",
    action:
      "Contribute certifications and assessments with supporting evidence.",
    record: "Certifications & assessments",
  },
  {
    role: "Funders",
    action:
      "Use others’ assessments alongside their own, and record support for the work.",
    record: "Funding history",
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
          supporting infrastructure work together. The Hypercerts Foundation
          stewards the protocol and maintains that infrastructure.
        </p>
        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {contributions.map(({ role, action, record }) => (
            <div
              key={role}
              className="flex flex-col border-t border-brand-black pt-6"
            >
              <h3 className="mb-4 font-display text-[28px] leading-tight">
                {role}
              </h3>
              <p className={`flex-1 ${bodyCopy}`}>{action}</p>
              <p className="mt-6 font-body text-body-sm leading-relaxed text-ui-grey-muted">
                {record}
              </p>
            </div>
          ))}
        </div>
        <a href={developerGuideUrl} className={`mt-10 ${textLink}`}>
          For builders: read the Guide <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
