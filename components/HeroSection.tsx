export default function HeroSection() {
  return (
    <section
      className="w-full flex flex-col items-center pt-12 pb-12"
      style={{
        backgroundImage: "url('/img/hypercerts_hero_bg.svg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1
        className="font-display text-[80px] md:text-display-1 text-center tracking-tight leading-[0.81] text-black"
        style={{ letterSpacing: "-0.03em", lineHeight: "0.81" }}
      >
        Fund and Reward Impact
      </h1>
      <div className="mt-8">
        <img
          src="/img/hypercert_AI_Safety3.png"
          alt="Hypercerts"
          style={{ maxWidth: "250px", height: "auto" }}
        />
      </div>
    </section>
  );
}
