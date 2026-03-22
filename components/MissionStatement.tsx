import Guilloche from "./Guilloche";

export default function MissionStatement() {
  return (
    <section className="relative w-full bg-surface-cream pt-16 pb-24 md:pt-20 md:pb-32 overflow-hidden" aria-label="Mission Statement">
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

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] leading-[1.05] tracking-[-0.03em] text-brand-black">
          What we choose to fund
          <br />
          <span className="italic">shapes the future we create.</span>
        </h2>
      </div>
    </section>
  );
}
