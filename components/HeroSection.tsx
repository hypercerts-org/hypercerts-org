export default function HeroSection() {
  return (
    <section className="relative h-screen -mt-[50px] pt-[50px] flex flex-col items-center justify-center bg-white overflow-hidden" aria-labelledby="hero-heading">
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Label */}
        <p className="font-body text-body-sm uppercase tracking-[0.2em] text-brand-accent mb-6">
          The Open Context Layer
        </p>

        {/* Title */}
        <h1 id="hero-heading" className="font-display text-[42px] sm:text-[56px] md:text-[72px] lg:text-[88px] leading-[0.95] tracking-[-0.03em] text-brand-black">
          Collective Intelligence
          <br />
          <span className="italic text-brand-accent">for Funding Impact</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-8 font-body text-body-lg text-ui-grey-dark max-w-xl mx-auto leading-relaxed">
          Hypercerts creates shared context—evidence, expert input, and
          community trust—that humans and AI use to decide what to fund.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex gap-4 flex-wrap justify-center">
          <a
            href="https://hypercerts.org/docs/what-are-hypercerts"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-black text-brand-white px-8 py-3 rounded-brand text-body-lg font-medium hover:bg-brand-navy transition"
          >
            Learn more
          </a>
          <a
            href="https://hypercerts.org/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-brand-black text-brand-black px-8 py-3 rounded-brand text-body-lg font-medium hover:bg-ui-bg transition"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
