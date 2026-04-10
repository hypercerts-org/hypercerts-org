import { NextRequest, NextResponse } from "next/server";

const BLOG_HOST = "blog.hypercerts.org";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0] ?? "";
  const isBlogSubdomain = host === BLOG_HOST;

  if (!isBlogSubdomain) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  // Paths that should NOT be rewritten to /blog/...
  // (assets, Next internals, static pages served on the main domain)
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/img") ||
    pathname.startsWith("/fonts") ||
    pathname.match(/\.\w+$/) // static files (favicon.ico, robots.txt, etc.)
  ) {
    const response = NextResponse.next();
    response.headers.set("x-blog-host", "1");
    return response;
  }

  // Root → blog index
  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/blog";
    const response = NextResponse.rewrite(url);
    response.headers.set("x-blog-host", "1");
    return response;
  }

  // Already starts with /blog — pass through (handles direct /blog access)
  if (pathname.startsWith("/blog")) {
    const response = NextResponse.next();
    response.headers.set("x-blog-host", "1");
    return response;
  }

  // Rewrite /<slug> → /blog/<slug>
  const url = request.nextUrl.clone();
  url.pathname = `/blog${pathname}`;
  const response = NextResponse.rewrite(url);
  response.headers.set("x-blog-host", "1");
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image).*)",
  ],
};
