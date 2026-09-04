# September 2026 landing page

Implemented on `feat/sep_2026_redesign`, 4 September 2026.

## Scope

The homepage follows the current approved Miro frame: hero, mission, partner strip, challenge, protocol roles, Ma Earth, trust over time, why now, funding models, collective, media, contact, and footer. The previous tools showcase, Open by Design, and Knowledge Compounds sections are no longer rendered.

The Ma Earth overview links to `/case-studies/ma-earth`. Both pages distinguish the completed funding round from the next step of using its records in another application's funding process. The shared header uses homepage section links that also work from other routes. The contact CTAs describe the existing contact form accurately.

The existing media data and featured-image layout remain. The partner strip is manually scrollable, with one keyboard-reachable link per partner; it no longer moves automatically or duplicates links. The collective retains its horizontal card layout and now uses the approved partner descriptions.

Homepage metadata, JSON-LD, `llms.txt`, the sitemap, and the social preview image reflect the new positioning. JSON-LD describes the visible page and protocol without invisible FAQ claims or a mandatory funding sequence.

## Sources and assets

- [Approved homepage frame](https://miro.com/app/board/uXjVHrWL3EE=/?moveToWidget=3458764682674208723), read again during implementation.
- [Approved Ma Earth case-study frame](https://miro.com/app/board/uXjVHrWL3EE=/?moveToWidget=3458764682667732989).
- [Ma Earth](https://www.maearth.com/): Round 3 results report 201 projects and $2.19M distributed. The homepage uses the approved rounded wording “almost $2.2M.”
- The 1 September 2026 Hypercerts community-call transcript supplies the almost $1M in crowd donations, $1M matching pool, and $200,000 collective bonus. The approved case frame supplies the partner-review and endorsement-allocation details.
- [Ma Earth source photograph](https://www.maearth.com/images/home/hero/closed/mosaic-01.webp), stored at `public/img/case-studies/ma-earth-community.webp`. Visible attribution links to Ma Earth. The image depicts community members tending crops; it is not presented as a named project's documented funding result.
- [Existing developer guide](https://docs.hypercerts.org/getting-started/building-on-hypercerts), checked for a successful response. The documentation redesign remains separate.
- [AT Protocol overview](https://atproto.com/guides/overview).
- Local design-repository rules and `examples/web-section.html`; existing self-hosted Instrument Serif roman/italic and Switzer Variable, color tokens, 12px radii, and section spacing retained. The sole homepage ornament is the static hero SVG.

The social card is reproducible from `scripts/landing-social-card.html`: open with local-file access, use a 1200 × 630 viewport, wait for `document.fonts.ready`, and save the viewport to `public/img/hypercerts-opengraph-sep-2026.png`.

## Validation

- `npm run build`: passed, including type checking and static generation of both pages.
- `npm run lint`: passed with one pre-existing `no-img-element` warning in the unused `components/OpenByDesign.tsx`.
- Added the five ESLint packages directly imported by `eslint.config.mjs` as dev dependencies, using their already-resolved versions. This fixes lint under pnpm's dependency isolation without upgrading runtime dependencies.
- Checked both pages at 320, 375, 390, 768, 1024, and 1440px: no document overflow or broken images. All three self-hosted font faces loaded.
- Viewed desktop/mobile screenshots and compared with the pre-change homepage and design example. Inspected heading wrapping, diagrams, image crops, section alignment, and the preserved featured-media layout.
- Tested skip link, mobile menu, Tab navigation, Escape/focus return, anchor offset below the fixed header, and homepage navigation from the case-study page.
- Tested media expansion: 6 → 16 → 6 entries, with `aria-expanded` updated.
- Checked homepage, contact, blog, case-study, and developer-guide destinations: HTTP 200. Checked every homepage section-anchor target.
- Body grey and accent contrast on white/grey/cream backgrounds range from 5.92:1 to 7.69:1. Used the [WCAG 2.2 quick reference](https://www.w3.org/WAI/WCAG22/quickref/) for the targeted reflow, contrast, keyboard, focus, and text-alternative checks; this is not a full accessibility conformance audit.

## Handoff

No deployment was requested or performed. Beads (`bd`) is unavailable in the environment, so its onboarding and sync commands could not run. No landing-page implementation work remains; the docs redesign is the separate follow-up described in the original brief. The existing unused-component lint warning is unchanged.
