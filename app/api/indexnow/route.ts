import { fetchBlogPosts } from "@/lib/blog";

/* Tells IndexNow about newly published blog posts, so Bing and the other
   engines that use it (not Google) pick them up quickly. Vercel Cron calls
   this every hour (vercel.json). Posts appear without a deploy, which is
   why this runs on a schedule rather than at build time. */

const siteUrl = "https://hypercerts.org";
/* Public by design: public/<key>.txt holds the same key, which is how
   IndexNow checks that the submitter controls the site. */
const key = "ceaa1f1d15aa141b4fcd929680e9583d";
/* An hour plus a margin, so each post is submitted once even if a run
   starts a little late. */
const windowMs = 65 * 60 * 1000;

export async function GET(request: Request) {
  /* Vercel sends CRON_SECRET with each cron request. Without it set,
     refuse everything rather than leave the endpoint open. */
  const secret = process.env.CRON_SECRET;
  if (!secret || request.headers.get("authorization") !== `Bearer ${secret}`) {
    return new Response("Unauthorized", { status: 401 });
  }

  const since = Date.now() - windowMs;
  const posts = (await fetchBlogPosts()).filter(
    (post) => new Date(post.pubDate).getTime() > since,
  );
  if (posts.length === 0) return Response.json({ submitted: [] });

  const urlList = [
    ...posts.map((post) => `${siteUrl}/blog/${post.slug}`),
    `${siteUrl}/blog`,
  ];
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: new URL(siteUrl).host,
      key,
      keyLocation: `${siteUrl}/${key}.txt`,
      urlList,
    }),
  });

  /* 200 means accepted, 202 means accepted while the key is checked. */
  if (res.status !== 200 && res.status !== 202) {
    console.error(`IndexNow rejected the submission: ${res.status}`, await res.text());
    return Response.json({ error: `IndexNow responded with ${res.status}` }, { status: 502 });
  }
  return Response.json({ submitted: urlList });
}
