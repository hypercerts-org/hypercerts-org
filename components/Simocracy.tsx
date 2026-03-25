import Image from "next/image";

export default function Simocracy() {
  return (
    <section className="w-full bg-surface-cream py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 md:gap-16 items-center">
          {/* Left: text */}
          <div>
            <p className="font-body text-body-sm uppercase tracking-[0.2em] text-ui-grey-dark mb-3">
              Built on hypercerts
            </p>
            <h2 className="font-display text-[24px] md:text-[32px] leading-[1.15] tracking-[-0.02em] text-brand-black mb-4">
              Simocracy
            </h2>
            <p className="font-body text-body-lg text-ui-grey-dark leading-relaxed mb-4">
              A decentralized governance simulation built on the AT Protocol.
              Users create AI agents, propose policies, vote, and participate in
              a living democracy&mdash;all running on shared, open
              infrastructure.
            </p>
            <p className="font-body text-body-lg text-ui-grey-dark leading-relaxed mb-6">
              Simocracy demonstrates how hypercerts and the AT Protocol can
              power coordination beyond funding&mdash;extending into
              governance, collective decision-making, and AI-assisted policy
              design.
            </p>
            <a
              href="https://simocracy.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-body-sm text-brand-accent font-medium hover:text-brand-black transition"
            >
              simocracy.org &rarr;
            </a>
          </div>

          {/* Right: screenshot */}
          <div className="rounded-brand overflow-hidden border border-ui-separator">
            <Image
              src="/img/screenshots/simocracy_screenshot.png"
              alt="Simocracy — decentralized governance simulation"
              sizes="(max-width: 768px) 100vw, 560px"
              width={800}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
