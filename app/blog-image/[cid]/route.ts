import { getBlobSourceUrl } from "@/lib/blog";

/* Blog images (covers and inline images), served from this site so the
   image optimizer can resize them as local images. Only ever fetches the
   Foundation's own blobs: the PDS they live on is shared by many accounts,
   and listing it as a remote image host would let anyone have
   hypercerts.org fetch and resize theirs. */

/* A CIDv1 in base32, the form AT Protocol writes blob CIDs in. */
const blobCid = /^b[a-z2-7]{50,200}$/;

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ cid: string }> },
) {
  const { cid } = await params;
  if (!blobCid.test(cid)) return new Response("Not found", { status: 404 });

  let res: Response;
  try {
    /* Revalidated, not cached forever, so a blob deleted from the PDS
       stops being served from here. */
    res = await fetch(await getBlobSourceUrl(cid), {
      next: { revalidate: 3600 },
    });
  } catch {
    return new Response("Bad gateway", { status: 502 });
  }
  if (!res.ok) {
    return res.status >= 500
      ? new Response("Bad gateway", { status: 502 })
      : new Response("Not found", { status: 404 });
  }

  /* Raster images only; SVG can carry script. */
  const type = (res.headers.get("content-type") ?? "")
    .split(";")[0]
    .trim()
    .toLowerCase();
  if (!type.startsWith("image/") || type.includes("svg")) {
    return new Response("Not found", { status: 404 });
  }

  return new Response(res.body, {
    headers: {
      "Content-Type": type,
      /* A CID names its content, so the bytes never change, but a blob can
         be deleted: cache for a day rather than for good. */
      "Cache-Control": "public, max-age=86400",
      "Content-Security-Policy": "default-src 'none'; sandbox",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
