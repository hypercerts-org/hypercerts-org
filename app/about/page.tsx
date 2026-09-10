import type { Metadata } from "next";
import Image from "next/image";
import { bodyCopy, SectionHeading } from "@/components/LandingSection";
import GetInvolved from "@/components/GetInvolved";
import { ecosystemPartners } from "@/lib/data/ecosystem";

export const metadata: Metadata = {
  title: "About the Hypercerts Foundation",
  description:
    "An independent nonprofit stewarding open infrastructure for funding valuable work.",
  alternates: { canonical: "/about" },
  // The Miro frame leaves the team unconfirmed. Keep the scaffold out of search until complete.
  robots: { index: false, follow: true },
  openGraph: {
    title: "About the Hypercerts Foundation",
    description:
      "An independent nonprofit stewarding open infrastructure for funding valuable work.",
    url: "/about",
  },
};

export default function About() {
  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      <section
        className="relative overflow-hidden bg-white py-24 md:py-32"
        aria-labelledby="about-heading"
      >
        <div className="landing-container">
          <p className="mb-6 font-body text-body-sm uppercase tracking-[0.2em] text-ui-grey-dark">
            The Hypercerts Foundation
          </p>
          <h1
            id="about-heading"
            className="max-w-4xl font-display text-[40px] leading-[1.05] tracking-[-0.02em] sm:text-[56px] md:text-display-2"
          >
            Stewarding open infrastructure
            <br />
            <em className="text-brand-accent">for funding valuable work</em>
          </h1>
          <p className={`mt-8 max-w-2xl ${bodyCopy}`}>
            The Hypercerts Foundation is an independent nonprofit. We steward
            the Hypercerts protocol and maintain the shared infrastructure that
            helps organizations publish and use information about valuable work.
          </p>
        </div>
      </section>
      <section
        className="bg-surface-cream py-20 md:py-24"
        aria-labelledby="origins-heading"
      >
        <div className="landing-container grid items-center gap-12 md:grid-cols-[1.5fr_1fr] md:gap-24">
          <div>
            <h2 id="origins-heading" className="font-display text-display-3">
              Our <em className="text-brand-accent">origins</em>
            </h2>
            <p className={`mt-6 ${bodyCopy}`}>
              Hypercerts began at Protocol Labs. Today, an independent
              foundation works with partners to develop the protocol and its
              open infrastructure.
            </p>
          </div>
          <a
            href="https://www.protocol.ai"
            className="flex min-h-24 items-center justify-center rounded-brand border border-ui-separator bg-white p-10"
            aria-label="Visit Protocol Labs"
          >
            <Image
              src="/img/protocollabs_logo.png"
              alt="Protocol Labs"
              width={220}
              height={80}
              className="h-auto max-h-20 w-auto max-w-full object-contain grayscale"
            />
          </a>
        </div>
      </section>
      <section
        className="bg-white py-24 md:py-32"
        aria-labelledby="people-heading"
      >
        <div className="landing-container">
          <SectionHeading id="people-heading" eyebrow="The people">
            Meet the people
            <br />
            <em className="text-brand-accent">behind Hypercerts</em>
          </SectionHeading>
          <p className="mt-8 font-body text-body-sm leading-relaxed text-ui-grey-muted">
            Team profiles are being prepared. Names, roles, portraits, and
            social links will be added here.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[1, 2, 3].map((number) => (
              <div
                key={number}
                className="overflow-hidden rounded-brand border border-ui-separator"
              >
                <div
                  className="flex aspect-[4/3] items-center justify-center bg-ui-bg"
                  aria-hidden="true"
                >
                  <svg width="64" height="80" viewBox="0 0 64 80" fill="none">
                    <circle cx="32" cy="24" r="15" stroke="#666" />
                    <path
                      d="M4 76V64c0-16 12-25 28-25s28 9 28 25v12"
                      stroke="#666"
                    />
                  </svg>
                </div>
                <div className="p-6">
                  <p className="font-display text-heading-4">
                    Team profile {number}
                  </p>
                  <p className="mt-3 text-body-sm leading-relaxed text-ui-grey-muted">
                    Name and role to be confirmed
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="bg-ui-bg py-24 md:py-32"
        aria-labelledby="about-partners-heading"
      >
        <div className="landing-container">
          <SectionHeading id="about-partners-heading" eyebrow="Our partners">
            Built with a network
            <br />
            <em className="text-brand-accent">of organizations</em>
          </SectionHeading>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ecosystemPartners
              .filter((partner) => partner.name !== "Hypercerts Foundation")
              .map((partner) => (
                <a
                  key={partner.name}
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-40 flex-col items-start justify-between gap-8 rounded-brand border border-ui-separator bg-white p-8 transition-colors hover:border-brand-black"
                >
                  {partner.logo && (
                    <Image
                      src={partner.logo}
                      alt=""
                      width={140}
                      height={32}
                      className={`h-8 w-auto max-w-[160px] object-contain object-left grayscale${partner.logoInvert ? " invert" : ""}`}
                    />
                  )}
                  <span className="flex w-full items-center justify-between gap-4 font-body text-body-sm">
                    {partner.name}
                    <span aria-hidden="true">↗</span>
                  </span>
                </a>
              ))}
          </div>
        </div>
      </section>
      <GetInvolved />
    </main>
  );
}
