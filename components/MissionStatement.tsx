import Guilloche from "./Guilloche";

export default function MissionStatement() {
  return (
    <section
      className="relative overflow-hidden bg-surface-cream py-24 md:py-32"
      aria-label="Mission statement"
    >
      <Guilloche
        variant="wave"
        width={3000}
        height={500}
        color="#000000"
        opacity={0.1}
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
      />
      <div className="landing-container relative text-center">
        <h2 className="font-display text-[36px] leading-[1.05] tracking-[-0.03em] text-brand-black sm:text-[48px] md:text-[64px] lg:text-[80px]">
          What we choose to fund
          <br />
          <em>shapes the future we create.</em>
        </h2>
      </div>
    </section>
  );
}
