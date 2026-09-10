import Image from "next/image";
import {
  bodyCopy,
  developerGuideUrl,
  primaryButton,
  secondaryButton,
} from "./LandingSection";

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-[calc(100svh-50px)] flex-col items-center justify-center overflow-hidden bg-white py-24 md:py-32"
      aria-labelledby="hero-heading"
    >
      <Image
        src="/img/guilloche_02_top.svg"
        alt=""
        aria-hidden="true"
        width={1600}
        height={1000}
        priority
        className="pointer-events-none absolute bottom-0 left-1/2 max-w-none -translate-x-1/2 opacity-[0.2]"
        style={{
          width: "auto",
          height: "calc(100% - 70px)",
          maskImage:
            "radial-gradient(ellipse 50% 70% at 50% 90%, transparent 30%, black 70%)",
        }}
      />
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <p className="mb-6 max-w-xl font-body text-body-sm uppercase tracking-[0.2em] leading-relaxed text-brand-accent">
          The AI-native context layer
        </p>
        <h1
          id="hero-heading"
          className="font-display text-[36px] min-[375px]:text-[40px] leading-[0.98] tracking-[-0.03em] text-brand-black sm:text-[68px] md:text-[72px] lg:text-[88px]"
        >
          Open infrastructure for
          <br /> <em className="text-brand-accent">funding valuable work</em>
        </h1>
        <p className={`mt-8 max-w-2xl ${bodyCopy}`}>
          Hypercerts is an open protocol that connects information about
          valuable work with evidence, evaluations, and funding history.
          Projects and organizations publish once, for any application or agent
          to read.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#how-it-works" className={primaryButton}>
            See how it works
          </a>
          <a href={developerGuideUrl} className={secondaryButton}>
            Start the Guide{" "}
            <span className="ml-2" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
