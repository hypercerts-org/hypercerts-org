import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { bodyCopy, primaryButton } from "@/components/LandingSection";
import { sharedOpenGraph } from "@/lib/metadata";

/**
 * Where the retired v1 app sends its visitors. app.hypercerts.org and
 * testnet.hypercerts.org redirect here (a Cloudflare redirect rule), as
 * does hypercert-app.vercel.app by way of app.hypercerts.org. Every old
 * deep link lands on this one page, so it explains what happened instead
 * of leaving holders on a homepage that never mentions v1.
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

/* Instrument Serif has a single "1", and at heading sizes it reads as an
   "l" ("vl"). Version numbers in headings are set in Hanken Grotesk, whose
   x-height and figure height match Instrument Serif's within 4%, so they
   sit on the same line at the same size. */
function Version({ children }: { children: ReactNode }) {
  return <span className="font-body font-normal">{children}</span>;
}

const columnHeading =
  "font-display text-[28px] leading-tight tracking-[-0.02em] text-balance text-brand-black";
const inlineLink =
  "text-brand-accent underline decoration-brand-accent/40 underline-offset-4 transition hover:text-brand-black";

export default function V1RetiredPage() {
  return (
    <main id="main-content" tabIndex={-1} className="bg-white py-24 md:py-32 outline-none">
      <div className="landing-container">
        <h1 className="max-w-4xl font-display text-display-3 md:text-display-2 leading-[1.05] tracking-[-0.02em] text-balance text-brand-black">
          Hypercerts has reached <Version>v2</Version>
        </h1>
        <p className={`mt-8 max-w-2xl text-pretty ${bodyCopy}`}>
          With v2 here, the Hypercerts v1 app has been retired.
        </p>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16">
          <section aria-labelledby="v1-hypercerts" className="border-t-2 border-brand-black pt-5">
            <h2 id="v1-hypercerts" className={columnHeading}>
              Your <Version>v1</Version> hypercerts still exist
            </h2>
            <p className={`mt-4 text-pretty ${bodyCopy}`}>
              Hypercerts created in v1 are tokens on the blockchain networks
              where they were minted. Retiring the app doesn&apos;t remove
              them: they stay in the wallets that hold them.
            </p>
          </section>

          <section aria-labelledby="indexer" className="border-t-2 border-brand-black pt-5">
            <h2 id="indexer" className={columnHeading}>
              The indexer is retiring too
            </h2>
            <p className={`mt-4 text-pretty ${bodyCopy}`}>
              The GraphQL indexer behind the app will be retired as well. If
              you need access to its data,{" "}
              <Link href="/contact" className={inlineLink}>
                contact us
              </Link>
              .
            </p>
          </section>
        </div>

        <div className="mt-16">
          <Link href="/" className={primaryButton}>
            Explore Hypercerts v2
          </Link>
        </div>
      </div>
    </main>
  );
}
