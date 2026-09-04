import { bodyCopy, SectionHeading } from "./LandingSection";

export default function WhyNow() {
  return (
    <section
      className="bg-white py-24 md:py-32"
      aria-labelledby="why-now-heading"
    >
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading id="why-now-heading" eyebrow="Why now">
          As AI changes funding,
          <br />
          <em className="text-brand-accent">open information matters more</em>
        </SectionHeading>
        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="border-t-2 border-brand-black pt-5">
            <h3 className="mb-5 font-display text-[28px] leading-tight">
              What automated decisions
              <br />
              <em>can see matters</em>
            </h3>
            <p className={bodyCopy}>
              AI makes applications easier to produce and screen. But automated
              reviews can only use information they can access. When that
              information sits in closed databases, their owners gain influence
              over which projects become visible. Open histories, evaluations,
              and community input can give funders a broader basis for
              assessment.
            </p>
          </div>
          <div className="border-t-2 border-brand-black pt-5">
            <h3 className="mb-5 font-display text-[28px] leading-tight">
              The open network needed for this
              <br />
              <em>now exists</em>
            </h3>
            <p className={bodyCopy}>
              AT Protocol makes portable identities, user-controlled records,
              and connected applications practical at scale. Hypercerts builds
              on it so compatible services can read the same project
              information, evaluations, endorsements, and funding records.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
