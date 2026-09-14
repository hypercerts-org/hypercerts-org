# Hypercerts.org

The official website for Hypercerts: The AI-Native, Open Context Layer for Collective Funding

Hypercerts create shared context—evidence, expert input, and community trust—for better resource allocation.

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
- `public/brand/` — Brand asset kit (logos, mark, avatars, favicons)

## Design

[DESIGN.md](./DESIGN.md) explains what the site looks like and why — the typographic
system, the guilloche ornament, and the rules to follow when adding a section. Read it
before building new UI.

## Blog

Blog posts are fetched from [hypercerts.leaflet.pub](https://hypercerts.leaflet.pub) via RSS and rendered at `/blog`. Posts revalidate every 60 seconds.

## Contact form

The contact form posts to `/api/contact` and sends an internal notification through Resend. Configure these server-side environment variables in Vercel:

- `RESEND_API_KEY` (required): Resend API key with permission to send from the configured domain.
- `RESEND_FROM_EMAIL` (optional): sender address, defaulting to `Hypercerts <no-reply@hypercerts.org>`.
- `CONTACT_TO_EMAIL` (optional): internal recipient, defaulting to `team@hypercerts.org`.
- `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` (required in production): Upstash credentials used to limit submissions to five per IP every ten minutes.

The visitor's email is used only as `Reply-To`; the endpoint never sends mail to an address supplied by a visitor. In development, rate limiting uses process memory when Upstash is not configured.

## Links

- [Documentation](https://docs.hypercerts.org)
- [Hyperscan](https://hyperscan.dev)
- [Certified](https://certified.app)
- [GitHub](https://github.com/hypercerts-org)
- [Bluesky](https://bsky.app/profile/hypercerts.org)
