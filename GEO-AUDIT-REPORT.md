# GEO Audit Report: hypercerts.org

**Audit Date:** 2026-03-25
**URL:** https://hypercerts.org
**Business Type:** Infrastructure / Protocol
**Pages Analyzed:** 8

---

## Executive Summary

**Overall GEO Score: 55/100 (Fair)**

Hypercerts.org has strong technical foundations — excellent SSR, rich structured data (all 7 GEO-critical schema types), AI crawler permissions, and a well-structured llms.txt. However, the site is significantly held back by near-zero brand authority on third-party platforms (no Reddit, YouTube, or Wikipedia presence), thin content volume (only 3 blog posts), zero statistics or metrics on the homepage, and a critical canonical URL bug on blog posts. The site is well-built for humans but under-optimized for AI citation.

### Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 42/100 | 25% | 10.5 |
| Brand Authority | 28/100 | 20% | 5.6 |
| Content E-E-A-T | 45/100 | 20% | 9.0 |
| Technical GEO | 88/100 | 15% | 13.2 |
| Schema & Structured Data | 62/100 | 10% | 6.2 |
| Platform Optimization | 28/100 | 10% | 2.8 |
| **Overall GEO Score** | | | **47/100** |

---

## Critical Issues (Fix Immediately)

### 1. Blog canonical URL points to homepage
**Severity: CRITICAL**
Blog post pages (e.g. `/blog/3mb6z2bku2c2z`) have their canonical URL set to `https://hypercerts.org` (the homepage) instead of the post's own URL. This tells search engines and AI crawlers to ignore the blog posts entirely. Fix `metadataBase` / `alternates.canonical` in the blog post page component.

### 2. Blog post Twitter/OG meta tags show homepage content
**Severity: CRITICAL**
Blog posts display the homepage title, description, and OG image instead of article-specific metadata in Twitter Cards and OG tags. This means social shares of blog posts show "Collective Intelligence for Funding Impact" instead of the article title.

### 3. Canonical URL mismatch: www vs non-www
**Severity: HIGH**
The site redirects `hypercerts.org` → `www.hypercerts.org` (308), but the canonical tag says `https://hypercerts.org`. These must match. Either update the canonical to `https://www.hypercerts.org` or remove the www redirect.

---

## High Priority Issues

### 4. Zero statistics or metrics on the homepage
No numbers, data points, or concrete claims anywhere on the site. AI systems strongly prefer citing pages with specific data (e.g. "Over X hypercerts created", "Y projects funded", "$Z allocated"). This is the single largest citability gap.

### 5. No discoverable Reddit presence
Reddit is the #1 community platform for AI citations (22.9% of top-cited domains). Zero threads mention hypercerts.

### 6. No discoverable YouTube presence
YouTube is the #2 platform for AI citations (13.4%). Conference talks exist but are not surfacing in search results — likely poor titles/descriptions or unlisted.

### 7. Article schema missing `image`
Blog post Article schema has no `image` property. This blocks Google rich result eligibility and reduces AI discoverability.

### 8. No BreadcrumbList schema
Missing on all pages. BreadcrumbList helps AI systems understand site hierarchy.

---

## Medium Priority Issues

### 9. Only 3 blog posts
Extremely thin content volume. Sites that rank well for AI citations typically have 20+ posts. Blog is the #1 AI entry point (44.5% of citations).

### 10. No FAQ section visible on the page
FAQPage schema exists in JSON-LD but there is no corresponding visible FAQ section. AI systems cross-reference schema with visible content.

### 11. Schema blocks disconnected — no @id references
Organization, WebSite, Article schemas don't use `@id` to form a connected knowledge graph.

### 12. SoftwareApplication.applicationCategory is non-standard
"Infrastructure" is not in Google's expected enumeration. Use "DeveloperApplication" or "WebApplication".

### 13. No `ClaudeBot` in robots.txt
`Claude-Web` is listed (older identifier) but `ClaudeBot` (Anthropic's current crawler) is not explicitly listed. Both are allowed via wildcard, but explicit listing signals intent.

### 14. Blog post slugs are opaque IDs
Slugs like `3mb6z2bku2c2z` give no semantic signal to AI crawlers. Descriptive slugs improve discoverability.

---

## Low Priority Issues

### 15. No comparison or "vs" content
Comparative content accounts for 27.7% of AI citations. No pages comparing hypercerts with alternatives.

### 16. HowTo schema lacks images
Won't qualify for Google HowTo rich result without images.

### 17. LinkedIn presence is stale
Most posts from 2022-2023. No recent activity visible in search.

### 18. Duplicate H3 headings in tools section
Mobile/desktop variants both rendered in DOM.

---

## Category Deep Dives

### AI Citability (42/100)

**Strongest citable passages:**
- "At its core, a hypercert captures a simple claim: what was done or is planned, by whom, when, and where."
- "Hypercerts are living digital records of impactful work, built on the AT Protocol as open infrastructure."
- The Record → Evaluate → Fund 3-step structure

**Weaknesses:**
- Zero statistics or concrete data points
- No explicit definition block ("A hypercert is...")
- No technical depth on the homepage — docs are on a subdomain AI may not prioritize
- Marketing/poetic tone reduces quotability vs definitional tone
- No visible FAQ section matching the schema FAQ

### Brand Authority (28/100)

| Platform | Presence |
|---|---|
| Own name in search | Strong (8/10) |
| Protocol Labs blog | Present |
| EA Forum | Present |
| Gitcoin blog | Present |
| HackerNoon | 1 article |
| Reddit | None |
| YouTube (search) | None |
| Wikipedia | None |
| LinkedIn | Company page exists, stale posts |
| GitHub | Active org (6/10) |

85% of AI citations come from third-party sources. Hypercerts' third-party coverage is thin, niche (web3/public-goods only), and mostly from 2022-2023.

### Content E-E-A-T (45/100)

- **Experience:** Ma Earth use case provides real-world grounding, but no case studies or outcome data
- **Expertise:** Team credentials not visible on the site (no team page, no author bios)
- **Authoritativeness:** Protocol Labs and Gitcoin endorsements help, but coverage is narrow
- **Trustworthiness:** Open-source, AT Protocol, clear legal pages — good signals

### Technical GEO (88/100)

- SSR/static rendering: Excellent (Vercel edge, sub-300ms TTFB)
- All AI crawlers allowed in robots.txt
- llms.txt present and well-structured
- HTTPS + HSTS enforced
- Mobile responsive
- OG/Twitter Cards complete on homepage
- **Issues:** canonical mismatch (www), blog canonical bug, 316KB HTML payload

### Schema & Structured Data (62/100)

All 7 GEO-critical schema types present (Organization, WebSite, FAQPage, HowTo, DefinedTerm, Article, SoftwareApplication). This is unusually comprehensive. However: disconnected blocks (no @id graph), Article missing image, non-standard applicationCategory, no BreadcrumbList.

### Platform Optimization (28/100)

Essentially zero presence on the platforms AI models rely on most heavily for entity recognition: Reddit, YouTube, Wikipedia. LinkedIn exists but is stale. GitHub is the strongest platform presence.

---

## Quick Wins (Implement This Week)

1. **Fix blog canonical URL** — change `metadataBase` or add per-page canonical so blog posts point to themselves, not the homepage
2. **Fix blog OG/Twitter meta** — ensure blog posts use their own title/description
3. **Add ClaudeBot to robots.txt** explicitly
4. **Add 3-5 concrete metrics** to the homepage (hypercerts created, projects funded, ecosystem size)
5. **Align www canonical** — update `metadataBase` to `https://www.hypercerts.org`

## 30-Day Action Plan

### Week 1: Fix Critical Bugs
- [ ] Fix blog post canonical URLs
- [ ] Fix blog post OG/Twitter meta tags
- [ ] Align www/non-www canonical
- [ ] Add `image` to Article schema
- [ ] Add ClaudeBot to robots.txt

### Week 2: Improve Citability
- [ ] Add concrete metrics/statistics to homepage
- [ ] Add a visible FAQ section that matches the schema FAQ
- [ ] Add BreadcrumbList schema to all pages
- [ ] Connect schema blocks with @id references
- [ ] Add a brief technical overview paragraph to the homepage

### Week 3: Content Volume
- [ ] Publish 2-3 new blog posts
- [ ] Create a "What are hypercerts?" standalone explainer page
- [ ] Ensure YouTube conference talks have proper titles/descriptions/tags
- [ ] Post existing talks on Reddit (r/ethereum, r/web3, r/impactinvesting)

### Week 4: Platform Presence
- [ ] Create/optimize Reddit engagement strategy
- [ ] Update LinkedIn company page with recent content
- [ ] Assess Wikipedia notability for a hypercerts article
- [ ] Ensure all YouTube talks link back to hypercerts.org

---

## Appendix: Pages Analyzed

| URL | Title | Key Issues |
|---|---|---|
| https://hypercerts.org | Hypercerts — Collective Intelligence for Funding Impact | No metrics, www canonical mismatch |
| https://hypercerts.org/blog | Blog \| Hypercerts | Only 3 posts |
| https://hypercerts.org/blog/3mb6z2bku2c2z | Transitioning from 2025 to 2026 | Canonical bug, missing Article image, OG bug |
| https://hypercerts.org/blog/3m6zilmofzs2c | Ma Earth Interview with Holke | Canonical bug, missing Article image, OG bug |
| https://hypercerts.org/blog/3m6mnb2riz22o | Why We Are Building Hypercerts | Canonical bug, missing Article image, OG bug |
| https://hypercerts.org/contact | Contact \| Hypercerts | No citable content |
| https://hypercerts.org/privacy | Privacy Policy \| Hypercerts | — |
| https://hypercerts.org/terms | Terms of Use \| Hypercerts | — |
