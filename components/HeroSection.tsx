export default function HeroSection() {
  return (
    <section className="relative h-screen -mt-[50px] pt-[50px] flex flex-col items-center justify-center bg-white overflow-hidden" aria-labelledby="hero-heading">
      {/* Guilloche background — positioned so only top 40% is visible */}
      <img
        src="/img/guilloche_02_top.svg"
        alt=""
        aria-hidden="true"
        className="absolute left-1/2 -translate-x-1/2 bottom-0 pointer-events-none opacity-[0.25] max-w-none"
        style={{
          width: "auto",
          height: "calc(100% - 70px)",
          maskImage: "radial-gradient(ellipse 50% 70% at 50% 90%, transparent 30%, black 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 50% 70% at 50% 90%, transparent 30%, black 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Label */}
        <p className="font-body text-body-sm uppercase tracking-[0.2em] text-brand-accent mb-6">
          The AI-Native, Open Context Layer
        </p>

        {/* Title */}
        <h1 id="hero-heading" className="font-display text-[58px] sm:text-[68px] md:text-[72px] lg:text-[88px] leading-[0.95] tracking-[-0.03em] text-brand-black">
          Collective Intelligence
          <br />
          <span className="italic text-brand-accent">for Funding Impact</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-8 font-body text-body-lg text-ui-grey-dark max-w-md mx-auto leading-relaxed">
          Hypercerts create shared context—evidence, expert input,
          and community trust—for better resource allocation.
        </p>

        {/* CTAs */}
        <div className="mt-12 flex gap-4 flex-wrap justify-center">
          <a
            href="#tools-and-apps"
            className="bg-brand-black text-brand-white px-8 py-3 rounded-brand text-body-lg font-medium hover:bg-brand-navy transition"
          >
            Build with hypercerts
          </a>
          <a
            href="#what-is-hypercert"
            className="bg-brand-white border border-ui-separator text-brand-black px-8 py-3 rounded-brand text-body-lg font-medium hover:border-brand-black hover:bg-ui-bg transition"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
