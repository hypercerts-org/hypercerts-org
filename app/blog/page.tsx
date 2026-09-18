import Image from "next/image";
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
  const [latestPost, ...earlierPosts] = posts;

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <main id="main-content" tabIndex={-1} className="bg-white py-24 md:py-32 outline-none">
      <p className="sr-only">
        The Hypercerts blog publishes updates on protocol development, ecosystem
        highlights, and perspectives on impact funding from the Hypercerts
        Foundation and contributors across climate, open-source, research, and
        community domains.
      </p>
      <div className="landing-container">
        {/* Header */}
        <p className="font-body text-body-sm uppercase tracking-[0.2em] text-brand-accent mb-4">
          Blog
        </p>
        <h1 className="font-display text-[36px] sm:text-[48px] md:text-display-2 leading-[1] tracking-[-0.02em] text-brand-black max-w-3xl">
          Updates from the{" "}
          <span className="italic text-brand-accent">Hypercerts Foundation</span>
        </h1>
        <p className="font-body text-body-lg text-ui-grey-dark leading-relaxed max-w-2xl mt-8 mb-12">
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
          <>
            {/* Text beside the cover image on wider screens, so the title and
                image are both visible; on phones the image sits on top. */}
            <Link
              href={`/blog/${latestPost.slug}`}
              className={`group focus-visible:outline-offset-4 ${latestPost.image ? "grid items-center gap-8 md:grid-cols-[5fr_6fr] md:gap-12 lg:gap-16" : "block max-w-3xl"}`}
            >
              {latestPost.image && (
                <div className="relative aspect-[3/2] overflow-hidden rounded-brand bg-ui-bg md:order-last">
                  <Image
                    src={latestPost.image}
                    alt=""
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 520px"
                    className="object-cover transition duration-500 group-hover:scale-[1.01]"
                  />
                </div>
              )}
              <div>
                <p className="mb-4 font-body text-body-sm uppercase tracking-[0.2em] text-brand-accent">
                  Latest post
                  <span aria-hidden="true" className="mx-2 text-ui-grey-dark">
                    ·
                  </span>
                  <time className="text-ui-grey-dark">
                    {formatDate(latestPost.pubDate)}
                  </time>
                </p>
                <h2 className="text-balance font-display text-[32px] leading-[1.08] tracking-[-0.02em] text-brand-black sm:text-[40px] lg:text-[44px]">
                  {latestPost.title}
                </h2>
                <p className="mt-4 line-clamp-3 font-body text-body-lg leading-relaxed text-ui-grey-dark">
                  {latestPost.description}
                </p>
                <span className="mt-5 inline-block font-body text-body-sm font-medium text-brand-black underline decoration-brand-accent/40 underline-offset-4">
                  Read the post
                </span>
              </div>
            </Link>

            {earlierPosts.length > 0 && (
              <section className="mt-20" aria-labelledby="earlier-posts-heading">
                <h2
                  id="earlier-posts-heading"
                  className="mb-3 font-body text-body-sm uppercase tracking-[0.2em] text-ui-grey-dark"
                >
                  Earlier posts
                </h2>
                <div className="space-y-0">
                  {earlierPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group block border-t border-ui-separator py-10 first:border-t first:border-brand-accent/40"
                    >
                      <div className="grid items-start gap-6 md:grid-cols-[1fr_auto] md:gap-12">
                        <div>
                          <h3 className="font-display text-heading-4 text-brand-black group-hover:underline mb-3">
                            {post.title}
                          </h3>
                          <p className="font-body text-body-lg text-ui-grey-dark leading-relaxed">
                            {post.description}
                          </p>
                        </div>
                        <time className="font-body text-body-sm text-ui-grey-dark whitespace-nowrap md:pt-1">
                          {formatDate(post.pubDate)}
                        </time>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </>
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
