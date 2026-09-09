# September 2026 landing page

Updated locally on `feat/sep_2026_redesign`, 9 September 2026. Do not push or deploy without a new user request.

## Current implementation

The homepage follows the latest Miro continuity pass: hero, mission, moving partners, challenge, information-reuse bridge, selectable trust example, protocol roles, Ma Earth, why now, information-economy timeline, collective, media, contact, and footer. The header now links Home, About, and Docs. Existing media and the Ma Earth case page remain.

The trust illustration is a responsive SVG curve with three selectable fields. All fields share project updates and peer endorsements; the third signal is certification for local energy, community evaluation and impact data for land regeneration, and expert assessment for AI safety research. Select a signal to view that stage of the curve. The descriptions and contributors are illustrative examples, not real records. The graph has no numerical or universal trust score. Tabs support arrow keys, Home, and End; changes are announced to screen readers.

The information-economy diagram has three connected chapters: today's crowdfunding and matching, possible next outcome payments, and future impact investing, commerce, and procurement. Bounties are described as a nearer possibility; procurement requires protocol changes. Current uses have grey panels, possible extensions white panels. The line draws once on entry and the panels settle into place. On narrow screens the timeline becomes vertical. Both diagrams respect reduced motion.

The original hero, mission wave, protocol-corner, and contact guilloche treatments are restored. This deliberately follows the user's request for the existing site's background images over the design repository's usual single-ornament guidance. The expensive radial ornaments are existing static assets. Partner logos move continuously, pause on hover or with the pause button, and become a static scrollable row during keyboard use or reduced motion. Duplicate visuals are inert and hidden from assistive technology. Silvi is included from the updated wireframe.

A shared 64rem container aligns navigation, content, diagrams, and footer. Instrument Serif roman/italic and Switzer remain self-hosted. The latest accessible muted grey (#666666), 11px micro type token, and monochrome button hover are reflected in the site tokens. Section spacing stays generous and card padding is consistent.

## About scaffold and editorial follow-up

`/about` contains the Foundation introduction, Protocol Labs origins, three explicit team placeholders, the seven organizations named in the new frame, and the contact section. It is marked `noindex` and intentionally omitted from the sitemap while incomplete.

Before publishing About, confirm names, roles, portraits, relevant LinkedIn/GitHub/Bluesky links, and the partner roster. Replace the placeholders and remove `noindex` once approved. No names, biographies, or social links have been invented.

The board still marks the hero category “AI-native context layer,” hero CTA choices, and “Information economy done right” as provisional. This iteration implements the latest visible wireframe wording for review. It does not silently substitute the alternative hero phrase on the adjacent sticky. Obvious typos in the protocol and why-now copy were corrected. “Start a conversation” accurately describes the existing contact form; no booking system is implied.

## Authoritative sources

- [02. Main website - Homepage continuity pass](https://miro.com/app/board/uXjVHrWL3EE=/?moveToWidget=3458764682674208723), including its 9 September review notes.
- [02a. Main website - About draft](https://miro.com/app/board/uXjVHrWL3EE=/?moveToWidget=3458764683147680261).
- Only these current frames were used for this iteration; archived page variants were excluded.
- `hypercerts-design` upstream `098239c`, read after fetching its updated guidelines. The design repository's local checkout was not changed. Relevant rules include screen-safe muted grey, monochrome hover, typography, spacing, and ornament guidance.
- Live [hypercerts.org](https://hypercerts.org/) inspected for original background placements and logo motion.
- [Approved Ma Earth case-study frame](https://miro.com/app/board/uXjVHrWL3EE=/?moveToWidget=3458764682667732989), implemented in the previous iteration.
- [Ma Earth](https://www.maearth.com/): Round 3 supported 201 projects with $2.19M, expressed as “almost $2.2M.” The page distinguishes this completed round from reuse of its records in another application's future funding process.
- The existing Ma Earth photograph is credited visibly and stored at `public/img/case-studies/ma-earth-community.webp`.
- [Existing developer guide](https://docs.hypercerts.org/getting-started/building-on-hypercerts); documentation redesign remains separate.

Metadata, JSON-LD, `llms.txt`, and the reproducible social card reflect the new visible copy. The social card source is `scripts/landing-social-card.html`; capture it at 1200 × 630 after fonts load.

## Validation

- `npm run build`: passed, including TypeScript checks and static page generation.
- `npm run lint`: zero errors.
- 18 route/viewport checks: homepage, About, and Ma Earth at 320, 375, 390, 768, 1024, and 1440px; no document overflow, broken loaded images, or invalid internal anchors. All three font faces loaded.
- 26 browser interaction checks: all nine project/signal combinations, tab keyboard behavior, logo pause/resume and focus behavior, reduced motion, mobile menu and Escape, About navigation, and draft metadata.
- Axe 4.12.1: zero violations on the homepage and About. Image-backed text still requires manual contrast review; the restored subtle ornaments and overlaid text were inspected in screenshots. This is a targeted review, not a complete accessibility conformance audit.
- Desktop and mobile screenshots reviewed for both diagrams, typography, spacing, restored backgrounds, and About. Partner images were checked after scrolling them into view.

The pre-existing `no-img-element` lint warning in unused `components/OpenByDesign.tsx` remains. Beads (`bd`) is unavailable; editorial follow-ups are therefore recorded above.
