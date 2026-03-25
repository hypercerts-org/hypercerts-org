# Hypercerts

Hypercerts create shared context—evidence, expert input, and community trust—for better resource allocation. At its core, a hypercert is a living digital record of impactful work: what was done or is planned, by whom, when, and where. As evidence and evaluations accumulate over time, it becomes a shared, evolving picture of work and its value.

Today's impact funding systems are fragmented and inefficient. Hypercerts address this with a simple pattern—record, evaluate, fund—that works across climate and regeneration, open-source software, research and development, and community programs. Built on the AT Protocol as open infrastructure, records are portable, referenceable, and not locked into any single platform.

<details>
  <summary><strong>What problem does this solve?</strong></summary>

In many domains, valuable work produces public or shared benefits, but information about that work—what was done, by whom, with what evidence, and how it was evaluated—is fragmented, ephemeral, or locked inside platforms.

This makes it difficult to:
- evaluate work in pluralistic ways,
- coordinate funding across many contributors and evaluators,
- reuse prior information rather than recreating it from scratch.

Hypercerts address this by providing a shared, open data model for describing work and its evaluation as first-class, linkable records.
</details>

<details>
  <summary><strong>What are hypercerts?</strong></summary>

At a high level, a hypercert:
- describes **an activity or scope of work**,
- links to **evidence** and contextual data,
- can be **evaluated by multiple parties over time**,
- can be **referenced by funding and ownership mechanisms**.

Hypercerts are not a marketplace or a single application. They are a protocol-level building block that can be used by many different tools, communities, and funding mechanisms.

The design emphasizes: composability, reuse, plural evaluation, and durability of records.
</details>

<details>
  <summary><strong>Architecture</strong></summary>

Hypercerts span both social and financial layers:

- **Offchain / social data**
  - Records for activities, evidence, evaluations, and relationships
  - Built on [ATProto](https://atproto.com/) as an open data layer
  - Portable identities and durable references

- **Onchain (optional)**
  - Ownership, fractionalization, and transfer
  - Anchoring records or hashes on public blockchains
  - Used when financial coordination or incentives are required

This separation allows hypercerts to be useful even without tokenization, while still supporting onchain mechanisms where appropriate.
</details>

<details>
  <summary><strong>Who is this for?</strong></summary>

Hypercerts are intended for:
- builders of funding, evaluation, or coordination tools
- evaluators, reviewers, and domain experts producing assessments or judgments
- researchers exploring new institutional or economic mechanisms
- open-source and public-interest projects seeking better funding primitives
- funders experimenting with pluralistic or retrospective allocation models

You do not need to adopt the entire stack to use hypercerts—individual components can be reused independently.
</details>

# Repositories

## Active repositories

### Protocol & data layer

- [hypercerts-lexicon](https://github.com/hypercerts-org/hypercerts-lexicon) — ATProto lexicons (data schema) for hypercerts
- [hyperindex](https://github.com/hypercerts-org/hyperindex) — query hypercert data across the network
- [ePDS](https://github.com/hypercerts-org/ePDS) — extended Personal Data Server for hypercerts
- [certified-group-service](https://github.com/hypercerts-org/certified-group-service) — group coordination service for managing a PDS
- [documentation](https://github.com/hypercerts-org/documentation) — [docs.hypercerts.org](https://docs.hypercerts.org)

### Applications & tools

- [hypercerts-org](https://github.com/hypercerts-org/hypercerts-org) — the [hypercerts.org](https://hypercerts.org) website
- [certified-app](https://github.com/hypercerts-org/certified-app) — portable impact profiles at [certified.app](https://certified.app)
- [hypercerts-cli](https://github.com/GainForest/hypercerts-cli) — create and manage hypercerts programmatically
- [hypercerts-scaffold-atproto](https://github.com/hypercerts-org/hypercerts-scaffold-atproto) — quickstart scaffold app for building on hypercerts

## Legacy repositories (v0.1)

- [hypercerts-protocol](https://github.com/hypercerts-org/hypercerts-protocol) — smart contracts and the contracts NPM package
- [hypercerts-app](https://github.com/hypercerts-org/hypercerts-app) — the original app.hypercerts.org application
- [hypercerts-sdk](https://github.com/hypercerts-org/hypercerts-sdk) — SDK with contract methods, helpers, and tooling
- [marketplace-sdk](https://github.com/hypercerts-org/marketplace-sdk) — marketplace SDK (built on Looksrare)
- [hypercerts-indexer](https://github.com/hypercerts-org/hypercerts-indexer) — custom indexer for rapid data access
- [hypercerts-api](https://github.com/hypercerts-org/hypercerts-api) — OpenAPI and GraphQL instance for querying data
- [ecocerts](https://github.com/hypercerts-org/ecocerts) — discussion and development of hypercerts for ecological impact

# Further resources

**Contributing**
- [CONTRIBUTING.md](./CONTRIBUTING.md) for how to get involved
- [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for community standards

**General information**
- Website: https://hypercerts.org
- Documentation: https://docs.hypercerts.org
- Blog: https://hypercerts.org/blog

**Contact**
- [Bluesky](https://bsky.app/profile/hypercerts.org)
- [Twitter](https://x.com/hypercerts)
- [Telegram](https://t.me/+YF9AYb6zCv1mNDJi)
- [Telegram Support](https://t.me/+FODiLtCV2TgwNzRi)

# Supporters

The hypercerts project is supported by organizations and individuals who believe in building open, interoperable infrastructure for recognizing and coordinating around real-world work. These include: Protocol Labs, Ma Earth, GainForest, Optimism, Octant, Gitcoin, Silvi, Regen Foundation, and Funding the Commons.

Their support—through funding, collaboration, feedback, and shared experimentation—helps advance the development of hypercerts as a public-good primitive. Support does not imply endorsement of specific design decisions or applications.

We're grateful to all supporters who contribute time, resources, and trust to this ongoing effort.
