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
      "Keep approved profiles and information about their work up to date.",
    record: "Profiles & work",
  },
  {
    role: "Networks and certifiers",
    action:
      "Publish memberships, endorsements, and certifications others can check.",
    record: "Memberships & endorsements",
  },
  {
    role: "Evaluators",
    action:
      "Publish evidence and assessments, with a clear record of who produced them.",
    record: "Evidence & assessments",
  },
  {
    role: "Funders",
    action:
      "Use relevant information to assess projects and record which work they support.",
    record: "Funding history",
  },
];

export default function WhatIsHypercert() {
  return (
    <section
      id="how-it-works"
      className="bg-white py-24 md:py-32"
      aria-labelledby="protocol-heading"
    >
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading id="protocol-heading" eyebrow="The Hypercerts protocol">
          A shared language
          <br />
          <em className="text-brand-accent">for funding</em>
        </SectionHeading>
        <p className={`mt-8 max-w-3xl ${bodyCopy}`}>
          The Hypercerts Foundation stewards the protocol and maintains shared,
          open infrastructure. Common formats let projects, networks,
          evaluators, and funders publish information that other participating
          applications can understand and use.
        </p>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {contributions.map(({ role, action, record }) => (
            <div
              key={role}
              className="flex flex-col border-t-2 border-brand-black pt-5"
            >
              <h3 className="mb-4 font-display text-heading-4">{role}</h3>
              <p className={`flex-1 ${bodyCopy}`}>{action}</p>
              <p className="mt-6 border-t border-ui-separator pt-3 font-body text-body-sm leading-relaxed text-brand-accent">
                {record}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-brand border border-ui-separator bg-surface-cream p-6 md:p-8">
          <p className={bodyCopy}>
            Organizations can connect approved public information from their
            existing systems, while keeping private information in those
            systems.
          </p>
        </div>
        <a href={developerGuideUrl} className={`mt-6 ${textLink}`}>
          For builders: start with the developer guide{" "}
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
