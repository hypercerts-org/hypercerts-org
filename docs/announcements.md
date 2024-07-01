---
title: Announcements
id: announcements
---

# Announcements

## 2024 Jun Update

### New developments
- Hypercerts Ecosystem: 35 projects were part of the first ever Hypercerts Ecosystem funding round along the Gitcoin Grants Round 20. It is amazing to see how many projects are building on top of the hypercerts protocol. We distributed 60K USD from our matching funders: Gitcoin, Arbitrum and Protocol Labs :pray: You can see all project and the results here: Hypercerts Ecosystem Round | Gitcoin Round Report Card Now we are curious about the progress of these projects. We published a retrospective in the Gitcoin forum: Retrospective of the Hypercerts Ecosystem Round during GG20 - 🌱 Gitcoin Grants - Gitcoin Governance
- Multi-chain support: Implementation of full multi-chain support, which required updating our infrastructure a bit. Now all hypercerts can be viewed from all chains, no matter what chain the user is currently on. Updates will roll out this and next week so builders can rely on our indexing service, API and updated SDK for an easy and reliable developer experience.
- Revamp front-end: The revamp of our frontend is almost done. We are integrating the five components: Hypercert minter, indexer, marketplace features, evaluators and hyperboards. We will share it here as soon as it is ready, which will be before the next round, so make sure to check in again here :slight_smile:
- Marketplace contracts: Bug fixing time! In collaboration with VoiceDeck a bug was discovered and fixed in the marketplace contracts. Thank you to everyone involved.
- Adopting VoiceDeck for Edge City: Edge City is organizing a one-month pop-up city in California, called Edge Esmeralda (https://www.edgeesmeralda.com/). We are adopting the infrastructure and front-end of VoiceDeck to support the creation and retrospective sale of hypercerts from contributors to the event. This work shows how the components in the Hypercerts Ecosystem can be used across use cases, bringing us closer to the vision of an interconnected, dynamic funding network built on top of the hypercerts protocol.

### Roadmap
Next releases
- Beginning of July: Release of revamped front-end. We are so excited for this :crossed_fingers::star_struck: As mentioned above, we will share it here as soon as it is ready.
- Mid June: Release of “VoiceDeck for Edge City”

Next use cases
- Use cases for the marketplace: With the marketplace going live in July, we will be able to support projects to fundraise directly through the sale of their impact in the form of hypercerts.
- Use cases for VoiceDeck-like platforms: After piloting the VoiceDeck adaptation at Edge Esmeralda, we want to enable other use cases to easily reuse the infrastructure.

Next developments
- Hypercert collections: Hypercert collection will enable projects to easily bring together their hypercerts and display them via our hyperboards integration.
- Integrations: Supporting integrations with existing funding platforms, for instance via hyperminter.xyz
- Marketplace widget and Farcaster frame: Hypercerts enable every project to sell their impact wherever their potential funders are. The marketplace widget will be easy to integrate a hypercert sale on every website. The same is planned for the integration into Farcaster.
- Evaluations (ongoing): Extending the evaluations to allow evaluators to submit data based on specified templates for their impact domain.
- Web 2.5: Users have requested to allow credit-card payments in addition to crypto payments. We want to enable this and also allow users to collect hypercerts just with an email address, such that they can transfer the hypercerts to their wallets at a later time. This allows projects to sell their impact to a larger audience.

## 2024 Mar Update

### New developments
- HIP: Introduction of the public Hypercerts Improvement Process (HIP) in order to become more transparent in our work at the Hypercerts Foundation and to allow the community to propose improvement and contribute: https://github.com/hypercerts-org/HIPs
- Hypercerts Ecosystem: Organization of a funding round for the Hypercerts Ecosystem along the Gitcoin Grants Round 20. We want to enable more projects to integrate and build with hypercerts to realize the vision of an interconnected, dynamic funding network: GG20 Proposal: https://gov.gitcoin.co/t/gg20-proposal-hypercerts-ecosystem/18319
- Evaluations: Implementation of EAS evaluations for hypercerts - currently in QA: https://github.com/hypercerts-org/HIPs/discussions/1
- VoiceDeck: Support of [VoiceDeck](https://voicedeck.org/) to build their funding mechanism for decentralized journalism on the hypercerts marketplace – currently in QA
- Hyperboards: Hyperboards functionality and design were updated and pilots run with libp2p, SciOS 2024, and ZuConnect Istanbul 
- Retroactive funding: Conceptual refinement of retroactive funding with hypercerts: https://github.com/hypercerts-org/HIPs/discussions/6
- Redesign: Brand and website redesign in progress

### Roadmap
- EasyRetroPGF: We plan to integrate hypercerts with [EasyRetroPGF](https://easyretropgf.xyz/) to enable projects to apply for retroactive funding with hypercerts and funders to be recognized by receiving hypercerts. Ultimately, we aim to allow rewarding early financial and non-financial contributors by later retroactive funding and use hypercerts to make this process transparent.
- Multi-chain support: Implementation of full multi-chain support - currently work in progress: https://github.com/hypercerts-org/HIPs/discussions/2
- Marketplace features: VoiceDeck release in the coming weeks
- Evaluations: Extending the evaluations as described in HIP 1 above to allow evaluators to submit data based on specified templates for their impact domain.
- Flexible metadata: We plan to allow any EAS attestation to serve as the metadata for a hypercert, such that the metadata is more flexible, EAS tooling can be used, and integrations become simpler: https://github.com/hypercerts-org/HIPs/discussions/4
- Revamp front-end: We are updating the website and split the general hypercert content from the web3 app: https://github.com/hypercerts-org/HIPs/discussions/5
- Integrations: We’ll support funding platforms to integrate hypercerts. If you are interested in using hypercerts, please write us at team [at] hypercerts.org

## An Impactful Year 2023

> Hypercerts are a new token standard for tracking and rewarding positive impact.

Gm gm. We’re wishing you an impactful 2024. We’re excited for the things ahead!

2023 has been a year of maturing the foundations laid by the release of the protocol. Together with Grants Stack, Funding the Commons, da0, Zuzalu and many other partners, we’ve successfully run a set of hypercerts pilots. We are grateful for our partners and the enthusiasm of their communities about hypercerts. At every event, we feel the positive energy about hypercerts and about the value mechanism they can unlock.

At the end of the year, we started developing the hypercert marketplace, which will be released on Sepolia later this week. The marketplace is a fork of LooksRare with modifications to add native support for hypercerts. Thanks to their high quality open source code we were able to use both their exchange contracts as well as the SDK. Special credits go to [Trust Security](https://x.com/trust__90) for not only thoroughly reviewing the changes we’ve made to the stack, but also for going beyond their scope to help us improve our protocol.

To help developers get onboarded with our tec,h we’ve released a [Next.JS starter app](https://github.com/hypercerts-org/hypercert-nextjs-chakra-starter), a repo with minimal [demo apps](https://github.com/hypercerts-org/demo-apps) for JS, TS on both server and client side, and of course, the [hypercerts SDK v1](https://www.npmjs.com/package/@hypercerts-org/sdk). The SDK provides methods and utilities for minting and claiming hypercerts, validating datasets, and uploading to and fetching from IPFS.

All of this work is supported by GG19, the first Octant epoch, Optimism’s retroPGF and of course Protocol Labs. A big thank you to all supporters.

In the next months, we’ll work with close collaborators to build out the evaluation functionalities and provide support to projects that want to integrate hypercerts into their funding systems (similar to how we are integrating hypercerts with Gitcoin) or want to build new applications using hypercerts. If you want to build on top of the hypercerts protocol, please get in contact with us.

Excited and grateful,

The hypercerts team

## 2023 Dec Update

### New developments
- Release on Celo: Hypercerts can now be minted on Celo or Optimism. The deployment on additional EVM-chains has been simplified.
- Marketplace contracts and frontend: We have forked the LooksRare v2 contracts to develop hypercerts marketplace features, such that hypercerts can be bought and sold directly. We are currently building a first frontend for these marketplace features.
- Security audit: The marketplace strategies have been audited externally.
- Hyperboard prototype: We built a hyperboard prototype, incl. admin panel, such that users can create their own boards (to be released).
- ZuConnect Retroactive Fund: We piloted a retroactive fund, collected 17 ETH and distributed them via hypercerts to contributors of ZuConnect.

### Roadmap
- Pilot of marketplace features: We’ll enable a deeper integration of hypercerts into funding flows.
- Pilot of hyperboards: We’ll pilot how to encourage funding by recognizing who contributed financially and non-financially to projects or events.
- Evaluations: We’ll build on the Ethereum Attestation Service (EAS) and the work of https://gitcoinreviews.co/ who have already started a review application for hypercerts. The goal is to allow attestations and evaluations for hypercerts, such that they can be used via user-generated templates for any impact domain.
- Integrations: We’ll support funding platforms to integrate hypercerts. If you are interested in using hypercerts, please write us at team [at] hypercerts.org
- Maintenance and user support: Not a usual roadmap item, but included here to appreciate the work that goes into this, especially as the code-base and use cases increase 🙂





