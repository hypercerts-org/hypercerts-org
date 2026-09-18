import { bodyCopy, SectionHeading } from "./LandingSection";

export default function WhyNow() {
  return (
    <section
      className="bg-surface-cream py-24 md:py-32"
      aria-labelledby="why-now-heading"
    >
      <div className="landing-container">
        <SectionHeading
          id="why-now-heading"
          eyebrow="Why now · The emerging challenge"
          headingClassName="text-balance text-[36px] sm:text-[48px] md:text-display-2"
        >
          Information is cheap to produce,
          <br />
          <em className="text-brand-accent">and expensive to verify</em>
        </SectionHeading>
        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="border-t border-brand-black pt-6">
            <h3 className="mb-5 font-display text-[28px] leading-tight">
              A strong application is no longer a strong signal
            </h3>
            <p className={bodyCopy}>
              With AI, a polished application takes minutes to write, so it no
              longer shows whether the project behind it does good work. Funders
              need evidence from outside the application: what the project has
              done, and what the people who know its work say about it.
            </p>
          </div>
          <div className="border-t border-brand-black pt-6">
            <h3 className="mb-5 font-display text-[28px] leading-tight">
              AI is moving into funding decisions
            </h3>
            <p className={bodyCopy}>
              Tools that screen applications, rank projects, and brief
              decision-makers judge from whatever data they can reach. Whoever
              holds that data sets the terms: if project records sit in closed
              databases, the owner of the database decides which work gets seen.
            </p>
          </div>
        </div>
        {/* Set like a quote, in grey serif italic, so it does not read as
            another heading. */}
        <div className="mx-auto mt-16 max-w-4xl rounded-brand border border-ui-separator bg-white px-6 py-8 text-center md:mt-20 md:px-10 md:py-10">
          <p className="text-balance font-display text-[24px] italic leading-[1.25] text-ui-grey-dark md:text-[30px] lg:text-[32px]">
            {/* One block per sentence, so each balances its own lines. */}
            <span className="block">
              The infrastructure for{" "}
              <span className="whitespace-nowrap">AI-guided</span> funding is
              being built today.
            </span>{" "}
            <span className="block">It must be open, not owned by platforms.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
