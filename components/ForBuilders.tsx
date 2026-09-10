import {
  bodyCopy,
  developerGuideUrl,
  primaryButton,
  SectionHeading,
} from "./LandingSection";

const guideTopics = [
  {
    title: "Start here",
    copy: "What Hypercerts is, why it builds on AT Protocol, and how the protocol and infrastructure fit together.",
  },
  {
    title: "Core data model",
    copy: "Activities and contributions, projects and collections, actors, evidence and assessments, trust relationships, and funding records.",
  },
  {
    title: "Common usage",
    copy: "The shared rules that let independent applications interpret the same records in the same way.",
  },
];

export default function ForBuilders() {
  return (
    <section
      id="for-builders"
      className="bg-ui-bg py-24 md:py-32"
      aria-labelledby="builders-heading"
    >
      <div className="landing-container grid gap-14 md:grid-cols-2 md:gap-16 lg:gap-24">
        <div>
          <SectionHeading
            id="builders-heading"
            eyebrow="For builders"
            headingClassName="text-[36px] sm:text-[44px] md:text-[36px] lg:text-display-3"
          >
            Build on records
            <br />
            <em className="text-brand-accent">that outlast any single app</em>
          </SectionHeading>
          <div className={`mt-8 space-y-6 ${bodyCopy}`}>
            <p>
              Hypercerts records live on AT Protocol, in repositories their
              authors control. Any compatible application can read a project,
              its evidence, the assessments attached to it, and the funding it
              has received, without asking a platform for permission.
            </p>
            <p>
              The Guide explains the data model and the shared rules behind
              it, so what your application writes is understood by everyone
              else on the network. Start with the concepts, then move on to
              integration examples and the lexicon reference.
            </p>
          </div>
          <a href={developerGuideUrl} className={`${primaryButton} mt-10`}>
            Start the Guide
          </a>
        </div>
        <div className="md:pt-9">
          <p className="mb-6 font-body text-body-sm uppercase tracking-[0.2em] text-ui-grey-muted">
            What the Guide covers
          </p>
          <div className="space-y-8">
            {guideTopics.map((topic) => (
              <div key={topic.title} className="border-t border-brand-black pt-5">
                <h3 className="mb-3 font-display text-[28px] leading-tight">
                  {topic.title}
                </h3>
                <p className={bodyCopy}>{topic.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
