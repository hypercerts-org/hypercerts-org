import type { Metadata } from "next";
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
 * Laid out like the privacy page: an informational notice, not a landing
 * section.
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
  "font-body text-[20px] font-semibold leading-snug tracking-[-0.01em] text-brand-black mb-3";

export default function V1RetiredPage() {
  return (
    <main id="main-content" tabIndex={-1} className="bg-white py-24 md:py-32 outline-none">
      <article className="max-w-3xl mx-auto px-6 font-body text-brand-black">
        <h1 className="font-display text-[36px] sm:text-[48px] md:text-display-2 leading-[1] tracking-[-0.02em] text-balance mb-12">
          Hypercerts has reached v2
        </h1>

        <div className="max-w-[68ch] space-y-8 text-body-lg text-ui-grey-dark leading-relaxed text-pretty">
          <p>With v2 here, the Hypercerts v1 app has been retired.</p>

          <section aria-labelledby="v1-hypercerts">
            <h2 id="v1-hypercerts" className={subheading}>
              Your v1 hypercerts still exist
            </h2>
            <p>
              Hypercerts created in v1 are tokens on the blockchain networks
              where they were minted. Retiring the app doesn&apos;t remove
              them: they stay in the wallets that hold them.
            </p>
          </section>

          <section aria-labelledby="indexer">
            <h2 id="indexer" className={subheading}>
              The indexer is retiring too
            </h2>
            <p>
              The GraphQL indexer behind the app will be retired as well. If
              you need access to its data,{" "}
              <Link
                href="/contact"
                className="text-brand-accent underline underline-offset-2 transition hover:text-brand-black"
              >
                contact us
              </Link>
              .
            </p>
          </section>

          <div className="pt-4">
            <Link href="/" className={primaryButton}>
              Explore Hypercerts v2
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
