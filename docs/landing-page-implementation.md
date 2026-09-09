# September 2026 landing page

Updated locally on `feat/sep_2026_redesign`, 9 September 2026. Do not push or deploy without a new user request.

## Current implementation

The homepage follows the latest Miro continuity pass: hero, mission, moving partners, challenge, information-reuse bridge, selectable trust example, protocol roles, Ma Earth, why now, information-economy timeline, collective, media, contact, and footer. The header now links Home, About, and Docs. Existing media and the Ma Earth case page remain.

The trust illustration is a responsive SVG curve with three selectable fields. All fields share project updates and peer endorsements; the third signal is certification for local energy, community evaluation and impact data for land regeneration, and expert assessment for AI safety research. Select a signal to view that stage of the curve. The descriptions and contributors are illustrative examples, not real records. The graph has no numerical or universal trust score. Tabs support arrow keys, Home, and End; changes are announced to screen readers.

The information-economy diagram has three connected chapters: today's crowdfunding and matching, possible next outcome payments, and future impact investing, commerce, and procurement. Bounties are described as a nearer possibility; procurement requires protocol changes. Current uses have grey panels, possible extensions white panels. The line draws once on entry in 500ms while the panels remain still. On narrow screens the timeline becomes vertical. Both diagrams respect reduced motion.

The original hero, mission wave, protocol-corner, and contact guilloche treatments are restored. This deliberately follows the user's request for the existing site's background images over the design repository's usual single-ornament guidance. The expensive radial ornaments are existing static assets. The partner strip matches the main branch's 50px height, 150px cells, and gentle hover enlargement. It has no pause button. Partner logos move continuously, pause on hover, and become a static scrollable row during keyboard use or reduced motion. Duplicate visuals are inert and hidden from assistive technology. Silvi is included from the updated wireframe.

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

## Browser feedback iteration

The bridge at `/#reusable-information` is one short editorial section, grounded in the 9 September “Website and Docs Wireframe Review” meeting notes, section 3. Its heading is “The knowledge is there. Let’s make it reusable.” One paragraph concludes the fragmentation problem and introduces Hypercerts through visibility, attribution, and reuse in later funding decisions. It uses the existing section-heading component and typography. The eyebrow, heading, and paragraph are centered in the style of the hero, with a 38rem body measure and refined wrapping to provide variation between the left-aligned sections. The illustrations and their animations have been removed. Protocol mechanics remain after the trust examples.

Removed the trust diagram's illustrative-example label, explanatory caption, and all three source footers and divider lines as requested. Card text retains its original comfortable padding. The examples remain illustrative in the underlying data and documentation.

Em dashes have been removed from locally authored site copy and metadata, including their escaped and HTML-entity forms. Sentences use conjunctions, commas, colons, or full stops according to context. The rule is recorded in `DESIGN.md` for future edits.

Feedback validation: production build passed; lint has zero errors and the existing unused-component warning. Checked 320, 390, 682, 884, 1024, and 1440px for overflow, 50px logo height, removed trust annotations, and absence of em dashes in rendered homepage text. Trust selection and keyboard/reduced-motion logo behavior still work. Axe reported zero automated violations.

## Protocol, timeline, and collective detail pass

Removed the four protocol record summaries, the separate “Almost” label above the homepage funding figure, the timeline's trailing note, and the collective's About link. The Ma Earth introductory paragraph retains its original rounded wording. Both large figures now share the same top spacing.

The builder guide is a dedicated full-width link band with an eyebrow, large serif title, thin rules, and a black arrow button treatment. It retains the existing verified guide destination and adds no new explanatory copy.

Timeline connectors now belong to each card's grid cell and include the exact shared gutter width. The red segment ends at the center of the next circle on both horizontal and vertical layouts. A 500ms SVG clip reveal avoids scaling artifacts from normalized dash animation. Cards and dots remain still. Reduced motion shows the completed line immediately.

The collective remains scrollable with hidden scrollbars and room for keyboard focus outlines.

Detail-pass validation: production build and lint passed with the existing unused-component image warning. At 320, 390, 682, 768, 884, 1024, and 1440px, the red SVG endpoint matched the next circle center exactly in both axes. Verified the line is continuous, all requested removals, guide destination, horizontal scrolling with hidden scrollbar, keyboard access, reduced motion, and no document overflow. Axe reported zero automated violations.

Simple bridge validation: production build passed; lint retains only the existing unused-component warning. Checked the alternating desktop rows and stacked mobile order at six widths from 320 to 1440px. Verified unchanged paragraph text, no overflow, two small animations, and no animation under reduced motion.

The editorial bridge revision passed the production build and lint (the existing unused `OpenByDesign.tsx` image warning remains). Browser checks covered 1237px desktop and 390px mobile layouts, with a 320px overflow check. The rendered homepage contains no em dashes, and the bridge contains no SVGs. Screenshots are saved in the 9 September output folder under `editorial-bridge`.

The challenge now ends after the project and funder explanations. Its repeated-applications closing statement and divider were removed in response to browser feedback.
