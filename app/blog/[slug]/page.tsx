import { notFound } from "next/navigation";
import Link from "next/link";
import { fetchBlogPost, fetchBlogPosts } from "@/lib/rss";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await fetchBlogPost(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: `${post.title} | Hypercerts Blog`,
      description: post.description,
    },
  };
}

export async function generateStaticParams() {
  const posts = await fetchBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await fetchBlogPost(slug);

  if (!post) notFound();

  const date = new Date(post.pubDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const isoDate = new Date(post.pubDate).toISOString();

  return (
    <main className="bg-white py-24 md:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            datePublished: isoDate,
            author: {
              "@type": "Organization",
              name: "Hypercerts Foundation",
              url: "https://hypercerts.org",
            },
            publisher: {
              "@type": "Organization",
              name: "Hypercerts Foundation",
              logo: {
                "@type": "ImageObject",
                url: "https://hypercerts.org/img/hypercerts_logo_horizontal.svg",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://hypercerts.org/blog/${slug}`,
            },
          }),
        }}
      />
      <article className="max-w-3xl mx-auto px-6">
        {/* Back link */}
        <Link
          href="/blog"
          className="font-body text-body-sm text-brand-accent hover:text-brand-black transition mb-10 inline-block"
        >
          &larr; All posts
        </Link>

        {/* Header */}
        <h1 className="font-display text-[32px] sm:text-[42px] md:text-[56px] leading-[1.05] tracking-[-0.02em] text-brand-black mb-6">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 mb-6 pb-8 border-b border-brand-accent/40">
          <time dateTime={isoDate} className="font-body text-body-sm text-ui-grey-dark">
            {date}
          </time>
          <span className="text-ui-separator">|</span>
          <span className="font-body text-body-sm text-ui-grey-dark">
            Hypercerts Foundation
          </span>
        </div>

        {/* Article content */}
        <div
          className="blog-content font-body text-body-lg text-ui-grey-dark leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-ui-separator">
          <Link
            href="/blog"
            className="font-body text-body-sm text-brand-black font-medium hover:underline"
          >
            &larr; All posts
          </Link>
        </div>
      </article>
    </main>
  );
}
