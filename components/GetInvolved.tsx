export default function GetInvolved() {
  return (
    <section
      className="relative w-full bg-white py-24 md:py-32 overflow-hidden"
      aria-labelledby="get-involved-heading"
    >
      {/* Guilloche — centered background */}
      <img
        src="/img/guilloche/guilloche_01.svg"
        alt=""
        aria-hidden="true"
        className="absolute -bottom-[500px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] md:w-[1000px] md:h-[1000px] pointer-events-none opacity-[0.2]"
      />

      <div className="relative max-w-2xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <p className="font-body text-body-sm uppercase tracking-[0.2em] text-ui-grey-dark mb-4">
          Get involved
        </p>

        {/* Heading */}
        <h2
          id="get-involved-heading"
          className="font-display text-[36px] sm:text-[48px] md:text-display-2 leading-[1] tracking-[-0.02em] text-brand-black"
        >
          Let&rsquo;s build this{" "}
          <span className="italic">together</span>
        </h2>

        {/* Supporting paragraph */}
        <p className="font-body text-body-lg text-ui-grey-dark leading-relaxed mt-8">
          We&rsquo;re especially interested in working with builders, funders,
          and domain experts shaping how impact is evaluated and funded.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex gap-4 flex-wrap justify-center">
          <a
            href="/contact"
            className="bg-brand-black text-brand-white px-8 py-3 rounded-brand text-body-lg font-medium hover:bg-brand-navy transition"
          >
            Reach out &rarr;
          </a>
          <a
            href="https://t.me/+o4wPsJ7yEZYzNGFk"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-brand-black text-brand-black px-8 py-3 rounded-brand text-body-lg font-medium hover:bg-ui-bg transition"
          >
            Stay informed
          </a>
          <a
            href="https://github.com/hypercerts-org"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-brand-black text-brand-black px-8 py-3 rounded-brand text-body-lg font-medium hover:bg-ui-bg transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
