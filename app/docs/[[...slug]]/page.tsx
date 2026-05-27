import type { Metadata } from "next";

/**
 * Catch-all for any `hypercerts.org/docs/...` URL. The documentation
 * site has moved to `docs.hypercerts.org` — without this page, every
 * legacy URL (which Google still has indexed for `/docs/guide/start`
 * and friends) renders the generic 404 and reads as broken.
 *
 * The optional catch-all also matches the bare `/docs` route in case
 * inbound links don't include a path segment.
 *
 * `robots: noindex` because every URL behind this route renders the
 * same content; without it the soft-404 set gets re-indexed as thin
 * duplicate content. We keep `follow: true` so the "Open the new
 * docs" link at least passes link equity onward.
 */

export const metadata: Metadata = {
  title: "The docs have moved",
  description:
    "The hypercerts.org documentation has moved to docs.hypercerts.org. Follow the link to continue reading.",
  robots: {
    index: false,
    follow: true,
  },
};

const DOCS_ORIGIN = "https://docs.hypercerts.org";

export default function DocsMovedPage() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="min-h-screen flex items-center justify-center bg-white outline-none"
    >
      <div className="text-center px-6 max-w-2xl">
        <h1 className="font-display text-[48px] sm:text-[64px] md:text-[112px] leading-[1] tracking-[-0.02em] text-brand-black">
          The docs have moved
        </h1>
        <p className="font-body text-body-lg text-ui-grey-dark mt-6">
          Hypercerts documentation now lives at{" "}
          <a
            href={DOCS_ORIGIN}
            className="text-brand-accent hover:text-brand-black transition underline"
          >
            docs.hypercerts.org
          </a>
          .
        </p>
      </div>
    </main>
  );
}
