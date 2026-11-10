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

The contact form's controls (`components/FormControls.tsx`) are local: they are adapted
from the Hypercerts design system's React package and styled with this site's Tailwind
tokens. Everything else is Tailwind.

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

## License

- **Text:** the text in this repository is licensed under [CC BY 4.0](LICENSE). That covers the copy on the site's pages (much of it written inside components), the slide deck in `public/docs/`, and documents such as this README and `DESIGN.md`. You may share and adapt it if you credit the Hypercerts Foundation, link to the license, and say whether you changed it. The exception is the Terms of Use (`app/terms/page.tsx`) and the Privacy Policy (`app/privacy/page.tsx`): as each page says, they are licensed under CC BY-SA.
- **Code:** the site's source is licensed under either [MIT](LICENSE-MIT) or [Apache-2.0](LICENSE-APACHE), at your option.
- **Marks:** the Hypercerts logos and wordmarks and the guilloche ornament identify the Hypercerts Foundation. The code licenses cover the code that draws the ornament (`components/Guilloche.tsx`); they are not permission to use the marks to identify something else.
- **Not covered:** the images (including logos, photos and screenshots) and the fonts. The images belong to their owners, and each font keeps its own license.
- Blog posts are fetched from [hypercerts.leaflet.pub](https://hypercerts.leaflet.pub) and aren't stored here.

Some code and icons in this repository come from elsewhere and keep their own terms:

- The GitHub, LinkedIn and Bluesky icons in `app/about/page.tsx` come from [Bootstrap Icons](https://icons.getbootstrap.com) 1.13.1, under the MIT license (Copyright (c) 2019-2024 The Bootstrap Authors). The logos they show belong to their owners.
- `public/img/social-icons/github.svg` is adapted from the `github-square` icon of [Font Awesome Free](https://fontawesome.com) 5 by Fonticons, Inc., under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); it has been cropped and partly redrawn. The GitHub logo it shows belongs to GitHub.
- `public/img/social-icons/support.svg` is adapted from the `contact_support` icon of Google's [Material Symbols](https://fonts.google.com/icons), under the Apache License 2.0; a black square has been added behind it.
- The slide deck in `public/docs/2026-08-24_Hypercerts_Introduction.html` bundles React and React DOM 18.3.1, under the MIT license (Copyright (c) Facebook, Inc. and its affiliates), and code from Claude (Anthropic), the tool that exported the deck: its loader, its runtime and a page-layout component.
