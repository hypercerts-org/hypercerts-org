# Hypercerts.org

The official website for the Hypercerts protocol — collective intelligence for funding impact.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS 4
- Deployed on Vercel

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

- `app/` — Pages and layouts (home, blog, contact, privacy, terms)
- `components/` — Section components for the landing page
- `lib/data/` — Content data (media, tools, ecosystem partners, navigation)
- `lib/rss.ts` — Blog integration via Leaflet RSS feed
- `public/img/` — Static assets, logos, screenshots, guilloche patterns

## Blog

Blog posts are fetched from [hypercerts.leaflet.pub](https://hypercerts.leaflet.pub) via RSS and rendered at `/blog`. Posts revalidate every 60 seconds.

## Links

- [Documentation](https://docs.hypercerts.org)
- [Hyperscan](https://hyperscan.dev)
- [Certified](https://certified.app)
- [GitHub](https://github.com/hypercerts-org)
- [Bluesky](https://bsky.app/profile/hypercerts.org)
