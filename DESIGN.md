# What hypercerts.org looks like, and why

Worth knowing even if you never touch the code, because it is an argument rather than a style preference.

If Certified is a notary's ledger reimagined as a mobile app, hypercerts.org is the **prospectus that explains why the ledger should exist**. Same lineage — printed instruments, certificates, things meant to be countersigned — but a different document in the family. Certified is the artifact. This site is the case for the artifact, and it is allowed to be warmer, wider and more rhetorical because persuasion, not record-keeping, is the job.

## Typography carries the identity

Instrument Serif for display, Switzer Variable for everything structural, both self-hosted as woff2 in `public/fonts/`. Serif headlines give the page the weight of something printed; the sans handles labels, navigation and body copy without editorialising. There is no illustration and no photography in the page chrome. As on Certified, the restraint is the brand — but here it is restraint with a cream backdrop rather than a white one.

## The italic turn is the signature device

Nine of the section headings change voice partway through — usually at a line break, sometimes mid-sentence:

> What we choose to fund
> *shapes the future we create.*

Roman states the condition, italic states the consequence. It appears in `HeroSection`, `MissionStatement`, `ResourceAllocation`, `WhatIsHypercert`, `OpenByDesign`, `UseCases`, `ToolsAndApps`, `Ecosystem` and `GetInvolved` — often with the italic clause also carrying `text-brand-accent`. This is the closest thing the site has to a logo behaviour. **If you write a new section heading, it should turn.** A heading that states one flat thing in one voice will look foreign next to its neighbours.

Above nearly every heading sits an eyebrow: `text-body-sm uppercase tracking-[0.2em]`. Ten of the twelve homepage sections open this way — only `MissionStatement` and `PartnerLogos` skip it. It is the section-head convention of a printed report, and it is doing the work that a coloured category chip would do in a more conventional marketing layout.

## The page is monochrome; the colour lives in the ornament

This is the part most likely to be missed. `tailwind.config.ts` declares thirteen brand and surface colours — teal, navy, forest, orange, sage, lavender and so on. **The rendered UI uses three of them.** `brand-accent` (26 uses), `brand-navy` (8, almost all button hover states) and `surface-cream` (5). The other nine appear nowhere in `app/` or `components/`.

They are not unused, though. The teals and oranges are hardcoded inside the guilloche presets in `components/Guilloche.tsx` — `#33B899`, `#14334C`, `#426A5A` in the teal preset; `#121047`, `#FF4B00`, `#FFD099` in the warm one. So the palette is real, but it has been pushed entirely into the ornament. Page chrome is black on white on cream with a single burnt-red accent (`#af2901`); colour enters only as engine-turned line work at 10–25% opacity.

Whether that was the intent or is simply where things landed, it is now the most distinctive thing about the site, and it is worth defending. Reaching for `bg-brand-teal` on a new section would break it.

## The guilloche is generated, not drawn

The ornament from banknotes and share certificates, built mathematically: `Guilloche.tsx` composes hypotrochoid (spirograph) curves in three layers — dense radial rays distributed by the golden angle (137.508°), concentric warped contour rings, and a fine outer crosshatch grid. Two presets, `teal` and `warm`.

It ships two ways, and the split is deliberate rather than accidental duplication:

- **Live-rendered** in `MissionStatement`, using the cheap `wave` variant.
- **Baked to static SVG** in `public/img/guilloche/` for `HeroSection`, `OpenByDesign` and `GetInvolved`. The `radial` compositions run 130–290 KB of path data each; rendering them per request is not free, so the output was frozen.

If you need a new placement, generate it with the component and bake the result. Do not render a `radial` variant live.

## The tension it is managing

Certified's tension is institutional formality running on casual social patterns. This site's is different: **infrastructure argued for in editorial language.** The subject matter is a protocol — portable records, persistent identity, AT Protocol data layers — and the instinct for that subject is a developer-marketing dashboard: dark mode, monospace, gradient meshes, architecture diagrams. The site refuses all of it and reaches for the register of a foundation's annual report instead. `border-t-2 border-brand-black` rules above column headings, generous `py-24 md:py-32` section rhythm, backgrounds alternating white → `#F1F1F1` → cream, a 50px fixed header and a 12px corner radius that keeps cards soft rather than technical.

The claim embedded in that choice is that hypercerts are a funding instrument first and a technical protocol second. The layout is making that argument before a single word is read.

## It is designed to be read by machines, too

`app/page.tsx` carries four JSON-LD blocks — `DefinedTerm`, `HowTo`, `FAQPage`, `SoftwareApplication` — plus an `sr-only` paragraph written specifically to be extracted by AI search engines. There is a `public/llms.txt` and a `GEO-AUDIT-REPORT.md`.

This is the same instinct behind Certified's agent-facing `DESIGN.md`, applied one level out. Certified writes its review criteria where the generator will read them; hypercerts.org writes its summary where the retrieval engine will read it. In both cases the machine reader is treated as a real audience with its own layout needs, rather than as an SEO afterthought. **When you add a section that makes a factual claim about what hypercerts are, the structured data is part of the change, not a follow-up ticket.**

## The rules, briefly

- Headings turn: roman clause, then italic clause. Accent the italic when the section needs lift.
- Sections open with an uppercase, `0.2em`-tracked eyebrow.
- Body copy is `text-ui-grey-dark`, not black. Black is for headings and buttons.
- Backgrounds cycle white / `ui-bg` / `surface-cream`. There are no dark sections — `brand-black` is for buttons and bullets only.
- Section padding is `py-24 md:py-32` unless there is a reason.
- Colour belongs to the guilloche. The page stays monochrome plus `brand-accent`.
- Bake new guilloche placements to SVG; do not render `radial` live.
- Brand assets live in `public/brand/`, lowercase-kebab, `{svg,png,pdf}` per lockup.

## Known drift

Honest notes rather than intentions, so nobody mistakes these for design decisions:

- **Nine of thirteen declared colours are unused in the UI.** Either the palette is aspirational and should be trimmed, or sections were meant to use the surface tints and never did.
- **The blog CSS hardcodes hexes that already exist as tokens.** `app/globals.css` writes `#af2901`, `#D2D2D2` and `#535353` literally; those are `brand-accent`, `ui-separator` and `ui-grey-dark`. They will drift apart the first time the palette is retuned.
- **`public/brand/` ships without usage guidance** — no clear space, minimum sizes, or rule for when Hypercerts vs. Hypercerts Foundation applies.
- **`display-1` (160px) is declared but never used.** The largest type on the site is the 88px hero and the 80px mission statement.
