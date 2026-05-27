import Link from "next/link";
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

/**
 * If a viewer landed on `/docs/<path>` we offer a direct jump to the
 * same path on `docs.hypercerts.org`. Most legacy URLs round-trip
 * cleanly because the new site mirrors the old top-level structure;
 * paths that don't resolve fall back to the new docs' own 404, which
 * still beats showing nothing here.
 */
function buildTargetUrl(slugSegments: string[] | undefined): string {
  if (!slugSegments || slugSegments.length === 0) return DOCS_ORIGIN;
  // Re-encode each segment defensively — `params` arrives URL-decoded
  // and re-encoding keeps any unicode / spaces well-formed.
  const path = slugSegments.map((s) => encodeURIComponent(s)).join("/");
  return `${DOCS_ORIGIN}/${path}`;
}

export default async function DocsMovedPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  const target = buildTargetUrl(slug);
  const showSpecificLink = !!slug && slug.length > 0;

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="min-h-screen flex items-center justify-center bg-white outline-none"
    >
      <div className="text-center px-6 max-w-2xl">
        <h1 className="font-display text-[64px] sm:text-[80px] md:text-display-1 leading-[1] tracking-[-0.02em] text-brand-black">
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

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={target}
            className="inline-block bg-brand-black text-brand-white px-8 py-3 rounded-brand text-body-lg font-medium hover:bg-brand-navy transition"
          >
            {showSpecificLink ? "Open this page on the new docs" : "Open the docs"}
          </a>
          {showSpecificLink ? (
            <a
              href={DOCS_ORIGIN}
              className="inline-block border border-brand-black text-brand-black px-8 py-3 rounded-brand text-body-lg font-medium hover:bg-brand-black hover:text-brand-white transition"
            >
              Docs home
            </a>
          ) : (
            <Link
              href="/"
              className="inline-block border border-brand-black text-brand-black px-8 py-3 rounded-brand text-body-lg font-medium hover:bg-brand-black hover:text-brand-white transition"
            >
              Go to hypercerts.org
            </Link>
          )}
        </div>

        {showSpecificLink ? (
          <p className="font-body text-body-sm text-ui-grey-dark mt-8">
            Trying to reach{" "}
            <code className="font-mono text-sm bg-ui-grey-light px-1.5 py-0.5 rounded">
              /docs/{slug!.join("/")}
            </code>
            ? If the page doesn&rsquo;t open at the new address, browse from{" "}
            <a
              href={DOCS_ORIGIN}
              className="text-brand-accent hover:text-brand-black transition underline"
            >
              docs.hypercerts.org
            </a>{" "}
            instead.
          </p>
        ) : null}
      </div>
    </main>
  );
}
