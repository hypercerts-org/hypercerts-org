import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { primaryButton } from "@/components/LandingSection";
import { sharedOpenGraph } from "@/lib/metadata";

/**
 * Where the retired v1 app sends its visitors. app.hypercerts.org and
 * testnet.hypercerts.org redirect here (a Cloudflare redirect rule), as
 * does hypercert-app.vercel.app by way of app.hypercerts.org. Every old
 * deep link lands on this one page, so it explains what happened instead
 * of leaving holders on a homepage that never mentions v1.
 *
 * Built like the hero on docs.hypercerts.org: eyebrow, heading and
 * standfirst on the cream panel, with one guilloche cropped past the edge.
 */

const title = "Hypercerts has reached v2";
const description =
  "Hypercerts has reached v2, and the Hypercerts v1 app has been retired. Hypercerts created in v1 still exist on-chain, and the GraphQL indexer behind the app is retiring too.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/v1-retired" },
  openGraph: {
    ...sharedOpenGraph,
    title: `${title} | Hypercerts`,
    description,
    url: "/v1-retired",
  },
};

/* Subheadings are set in Hanken Grotesk, not Instrument Serif. Instrument
   Serif has a single "1" that reads as an "l", so "v1" would read "vl", and
   a line never switches fonts partway through. */
const subheading =
  "font-body text-body-lg font-semibold leading-snug text-brand-black";
const sectionText = "mt-2 text-base leading-[1.55] text-ui-grey-dark";

export default function V1RetiredPage() {
  return (
    <main id="main-content" tabIndex={-1} className="bg-white pt-10 pb-24 md:pt-[72px] md:pb-32 outline-none">
      <div className="landing-container">
        <article className="relative overflow-hidden rounded-brand bg-surface-cream px-6 py-10 md:px-12 md:py-[72px]">
          <Image
            src="/img/guilloche/guilloche_01.svg"
            alt=""
            aria-hidden="true"
            width={700}
            height={700}
            className="pointer-events-none absolute top-0 -right-[260px] w-[460px] max-w-none -translate-y-[45%] select-none opacity-20 lg:top-1/2 lg:-right-[380px] lg:w-[700px] lg:-translate-y-1/2"
          />

          <div className="relative max-w-[600px] font-body text-pretty">
            <p className="font-body text-body-sm uppercase tracking-[0.2em] leading-relaxed text-ui-grey-dark">
              Announcement
            </p>
            <h1 className="mt-4 font-display text-[length:clamp(38px,4.6vw,60px)] leading-[1.05] tracking-[-0.02em] text-balance text-brand-black">
              Hypercerts has reached v2
            </h1>
            <p className="mt-8 text-body-lg leading-[1.55] text-ui-grey-dark">
              With v2 here, the Hypercerts v1 app has been retired.
            </p>

            <div className="mt-8 space-y-6">
              <section aria-labelledby="v1-hypercerts">
                <h2 id="v1-hypercerts" className={subheading}>
                  Your v1 hypercerts still exist
                </h2>
                <p className={sectionText}>
                  Hypercerts created in v1 are tokens on the blockchain
                  networks where they were minted. Retiring the app
                  doesn&apos;t remove them: they stay in the wallets that hold
                  them.
                </p>
              </section>

              <section aria-labelledby="indexer">
                <h2 id="indexer" className={subheading}>
                  The indexer is retiring too
                </h2>
                <p className={sectionText}>
                  The GraphQL indexer behind the app will be retired as well.
                  If you need access to its data,{" "}
                  <Link
                    href="/contact"
                    className="text-brand-accent underline underline-offset-2 transition hover:text-brand-black"
                  >
                    contact us
                  </Link>
                  .
                </p>
              </section>
            </div>

            <div className="mt-10">
              <Link href="/" className={primaryButton}>
                Explore Hypercerts v2
              </Link>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
