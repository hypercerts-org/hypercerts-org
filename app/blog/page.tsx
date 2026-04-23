import Link from "next/link";
import { fetchBlogPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog",
  description:
    "Updates from the Hypercerts Foundation on protocol development and highlights from across the ecosystem.",
  openGraph: {
    title: "Blog | Hypercerts",
    description:
      "Updates from the Hypercerts Foundation on protocol development and highlights from across the ecosystem.",
  },
};

export default async function BlogPage() {
  const posts = await fetchBlogPosts();

  return (
    <main id="main-content" tabIndex={-1} className="bg-white py-24 md:py-32 outline-none">
      <p className="sr-only">
        The Hypercerts blog publishes updates on protocol development, ecosystem
        highlights, and perspectives on impact funding from the Hypercerts
        Foundation and contributors across climate, open-source, research, and
        community domains.
      </p>
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <p className="font-body text-body-sm uppercase tracking-[0.2em] text-brand-accent mb-4">
          Blog
        </p>
        <h1 className="font-display text-[36px] sm:text-[48px] md:text-display-2 leading-[1] tracking-[-0.02em] text-brand-black max-w-3xl">
          Updates from the{" "}
          <span className="italic text-brand-accent">Hypercerts Foundation</span>
        </h1>
        <p className="font-body text-body-lg text-ui-grey-dark leading-relaxed max-w-2xl mt-8 mb-16">
          News and highlights from across the
          growing ecosystem.
        </p>

        {/* Posts */}
        {posts.length === 0 ? (
          <p className="font-body text-body-lg text-ui-grey-dark">
            No posts available right now. Visit{" "}
            <a
              href="https://hypercerts.leaflet.pub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-black underline"
            >
              hypercerts.leaflet.pub
            </a>{" "}
            directly.
          </p>
        ) : (
          <div className="space-y-0">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block border-t border-ui-separator py-10 first:border-t first:border-brand-accent/40"
              >
                <div className="grid md:grid-cols-[1fr_auto] gap-6 md:gap-12 items-start">
                  <div>
                    <h2 className="font-display text-heading-4 text-brand-black group-hover:underline mb-3">
                      {post.title}
                    </h2>
                    <p className="font-body text-body-lg text-ui-grey-dark leading-relaxed">
                      {post.description}
                    </p>
                  </div>
                  <time className="font-body text-body-sm text-ui-grey-dark whitespace-nowrap md:pt-1">
                    {new Date(post.pubDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Footer link */}
        <div className="mt-16 border-t border-ui-separator pt-8">
          <p className="font-body text-body-lg text-ui-grey italic leading-relaxed">
            Subscribe on{" "}
            <a
              href="https://hypercerts.leaflet.pub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-black not-italic font-medium hover:underline"
            >
              Leaflet
            </a>{" "}
            for new posts.
          </p>
        </div>
      </div>
    </main>
  );
}
