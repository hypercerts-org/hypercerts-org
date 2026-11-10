import type { Metadata } from "next";
import Link from "next/link";
import { sharedOpenGraph } from "@/lib/metadata";

/**
 * Where the retired v1 app sends its visitors. app.hypercerts.org and
 * testnet.hypercerts.org redirect here (a Cloudflare redirect rule), as
 * does hypercert-app.vercel.app by way of app.hypercerts.org. Every old
 * deep link lands on this one page, so it explains what happened instead
 * of leaving holders on a homepage that never mentions v1.
 */

const title = "The original Hypercerts app has been retired";
const description =
  "The Hypercerts v1 app at app.hypercerts.org has been retired. Hypercerts minted in v1 still exist on-chain, and the GraphQL indexer is being retired too.";

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

export default function V1RetiredPage() {
  return (
    <main id="main-content" tabIndex={-1} className="bg-white py-24 md:py-32 outline-none">
      <article className="max-w-3xl mx-auto px-6 font-body text-brand-black">
        {/* No "v1" in the display heading: Instrument Serif's 1 reads as an l. */}
        <h1 className="font-display text-[36px] sm:text-[48px] md:text-display-2 leading-[1] tracking-[-0.02em] mb-12">
          The original Hypercerts app has been retired
        </h1>

        <div className="space-y-8 text-body-lg text-ui-grey-dark leading-relaxed">
          <p>
            The Hypercerts v1 app at app.hypercerts.org was retired on
            November 10, 2026. You can no longer create, claim, buy, or sell
            hypercerts through it.
          </p>

          <section>
            <h2 className="font-display text-heading-4 text-brand-black mb-4">
              Your hypercerts still exist
            </h2>
            <p>
              Hypercerts created in v1 are tokens on the blockchain networks
              where they were minted. Retiring the app doesn&apos;t remove
              them: they stay in the wallets that hold them.
            </p>
          </section>

          <section>
            <h2 className="font-display text-heading-4 text-brand-black mb-4">
              The indexer is retiring too
            </h2>
            <p>
              The GraphQL indexer behind the app, at api.hypercerts.org, will
              be retired as well. If you need access to its data,{" "}
              <Link
                href="/contact"
                className="text-brand-accent hover:text-brand-black transition underline"
              >
                contact us
              </Link>
              .
            </p>
          </section>

          <section className="pt-4">
            <p className="mb-8">Hypercerts itself continues.</p>
            <Link
              href="/"
              className="inline-block bg-brand-black text-brand-white px-8 py-3 rounded-brand text-body-lg font-medium hover:bg-brand-navy transition"
            >
              See what Hypercerts is today
            </Link>
          </section>
        </div>
      </article>
    </main>
  );
}
