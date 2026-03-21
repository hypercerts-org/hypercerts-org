import Guilloche from "./Guilloche";

export default function MissionStatement() {
  return (
    <section className="relative w-full bg-surface-cream py-24 md:py-32 overflow-hidden" aria-label="Mission Statement">
      {/* Subtle Guilloche wave accent */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Guilloche
          variant="wave"
          width={1200}
          height={300}
          color="#000000"
          opacity={0.05}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <p className="font-display italic text-[28px] md:text-[36px] lg:text-[42px] leading-[1.3] tracking-[-0.02em] text-brand-black">
          To solve the challenges we face this century, we need scalable and
          sustainable financing models for public goods that reward contributors
          for the positive impact they create.
        </p>

        {/* Divider */}
        <div className="mt-8 w-16 h-px bg-brand-black mx-auto" />

        {/* Attribution */}
        <p className="mt-6 font-body text-body-sm uppercase tracking-[0.15em] text-ui-grey-dark">
          Hypercerts Foundation
        </p>
      </div>
    </section>
  );
}
