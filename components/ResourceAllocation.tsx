import { bodyCopy, SectionHeading } from "./LandingSection";

export default function ResourceAllocation() {
  return (
    <section
      id="why-hypercerts"
      className="bg-ui-bg py-24 md:py-32"
      aria-labelledby="challenge-heading"
    >
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading id="challenge-heading" eyebrow="The challenge">
          Closing the funding gap
          <br />
          <em className="text-brand-accent">for valuable work</em>
        </SectionHeading>
        <div className="mt-10 grid gap-12 md:grid-cols-2 md:gap-16">
          <p className={bodyCopy}>
            Ecosystem restoration, open-source software, research, and community
            programs create benefits that sales or contracts often cannot fully
            pay for. Projects and social enterprises need funding that
            recognizes the wider value of their work.
          </p>
          <div className="space-y-8">
            <div className="border-t-2 border-brand-black pt-4">
              <h3 className="mb-3 font-display text-heading-4">
                For projects and enterprises
              </h3>
              <p className={bodyCopy}>
                Time goes into rewriting applications and reporting the same
                information in disconnected systems.
              </p>
            </div>
            <div className="border-t-2 border-brand-black pt-4">
              <h3 className="mb-3 font-display text-heading-4">For funders</h3>
              <p className={bodyCopy}>
                Previous reviews, local knowledge, and funding history are hard
                to find, so useful assessment work is repeated.
              </p>
            </div>
          </div>
        </div>
        <p className="mt-12 border-t border-ui-separator pt-6 font-display text-[28px] leading-tight text-brand-black md:text-[32px]">
          The result today is a persistent gap between valuable work{" "}
          <em>and the resources it needs.</em>
        </p>
      </div>
    </section>
  );
}
