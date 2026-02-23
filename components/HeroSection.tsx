import Image from "next/image";
import Guilloche from "./Guilloche";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full py-16">
        <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-12 items-center">
          {/* Left column — Text */}
          <div>
            <p className="font-body text-body-sm uppercase tracking-[0.2em] text-ui-grey-dark mb-6">
              The coordination infrastructure for the AI era
            </p>
            <h1 className="font-display text-[64px] md:text-[120px] lg:text-[150px] leading-[0.85] tracking-[-0.03em] text-brand-black max-w-3xl">
              Fund and reward positive impact
            </h1>
            <p className="mt-8 font-body text-body-lg text-ui-grey-dark max-w-md">
              Recognize contributions, reward expertise, and direct funding
              toward the people and projects creating lasting positive impact.
            </p>
            <div className="mt-10 flex gap-4 flex-wrap">
              <a
                href="https://app.hypercerts.org/explore?filter=evaluated"
                className="bg-brand-black text-brand-white px-8 py-3 rounded-brand text-body-lg font-medium hover:bg-brand-navy transition"
              >
                Go to app
              </a>
              <a
                href="/docs/what-are-hypercerts"
                className="border border-brand-black text-brand-black px-8 py-3 rounded-brand text-body-lg font-medium hover:bg-ui-bg transition"
              >
                Learn more
              </a>
            </div>
          </div>

          {/* Right column — Visual (hidden on mobile) */}
          <div className="hidden md:block relative overflow-hidden">
            <Guilloche
              variant="radial"
              width={500}
              height={500}
              color="#33B899"
              opacity={0.15}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/img/hypercert_AI_Safety3.png"
                alt="Hypercert example"
                width={280}
                height={400}
                className="rotate-3 shadow-xl max-w-[280px] w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
