# Hypercerts.org

The official website for Hypercerts: open infrastructure for funding valuable work. Trust in times of AI.

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

Reusable controls come from `@hypercerts-org/ui-react`. Its compiled, component-scoped
stylesheet is imported once in `app/globals.css`, and the Hypercerts theme is selected
with `data-hc-theme="hypercerts"` in the root layout. The application can continue to
use Tailwind for page-specific layout and composition.

## Blog

Blog posts are fetched from [hypercerts.leaflet.pub](https://hypercerts.leaflet.pub) via RSS and rendered at `/blog`. Posts revalidate every 60 seconds.

## Contact form

The contact form posts to `/api/contact` and sends an internal notification through Resend. Configure these server-side environment variables in Vercel:

- `RESEND_API_KEY` (required): Resend API key with permission to send from the configured domain.
- `RESEND_FROM_EMAIL` (optional): sender address, defaulting to `Hypercerts <no-reply@hypercerts.org>`.
- `CONTACT_TO_EMAIL` (optional): internal recipient, defaulting to `team@hypercerts.org`.

The visitor's email is used only as `Reply-To`; the endpoint never sends mail to an address supplied by a visitor. Production request limits are enforced by a Vercel Firewall rule on `POST /api/contact`.

## Links

- [Documentation](https://docs.hypercerts.org)
- [Hyperscan](https://hyperscan.dev)
- [Certified](https://certified.app)
- [GitHub](https://github.com/hypercerts-org)
- [Bluesky](https://bsky.app/profile/hypercerts.org)
