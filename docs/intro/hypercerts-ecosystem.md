---
title: Hypercerts Ecosystem
id: hypercerts-ecosystem
---

# What are Hypercerts?

### Hypercerts are a new token for tracking, rewarding, and funding positive impact.

Each hypercert represents the impact of work. The work is defined by

- **Who:** the set of contributors 
- **What:** the scope of the work
- **When:** the time of the work 

Moreover, the hypercert can define the rights of the owner of the hypercert in regard to the work and its impact.

The hypercert itself is an extended ERC-1155 semi-fungible token with the information above stored as metadata on IPFS. Here’s an example.

### Hypercert example

#### Graphic representation

Every hypercert includes an image that contains some of the core information.

<img src="/img/hypercert_example_IPFS.png" alt="hypercert design example" width="300"/>

#### General information

- **Title of hypercert:** Invention of the InterPlanetary Filesystem (IPFS)
- **Description:** The InterPlanetary File System (IPFS) is a set of composable, peer-to-peer protocols for addressing, routing, and transferring content-addressed data in a decentralized file system.
- **Link:** ipns://ipfs.tech/

#### Work and impact description

- **Set of contributors:** 0xb794f5ea0ba39494ce839613fffba74279579268 _(example Ethereum address)_
- **Scope of work:** IPFS ∧ ¬ go-ipfs
- **Time of work:** 2013-01-01 --> 2013-12-31
- **Scope of impact:** All
- **Time of impact:** 2013-01-01 --> indefinite
- **Rights:** Public display

### How do hypercerts function?
Hypercerts function as a decentralized database to track impactful work and their evaluations. Multiple evaluators can submit evaluations to a hypercert. Hypercerts can be sold to financial contributors and transferred to non-financial contributors, thus tracking these contributions and allowing contributors to *claim the impact* of the work.

As a result, hypercerts can power [impact markets](intro/impact-markets.md) and are also valuable for other impact funding mechanisms, such as grants, prize competitions, and retroactive funding (see [Hypercerts Ecosystem](intro/hypercerts-ecosystem.md)).

### Why should you care?

We spend trillions of dollars every year on public goods via governmental agencies, foundations, private donations and corporate spendings; however, we don’t effectively track this work – leaving us in the dark, hoping that it actually has the intended positive impact.

We believe we can do better:

- We should start by tracking this work consistently – this is what hypercerts are for.
- We should evaluate how impactful that work was – this is what the open evaluation system of hypercerts supports.
- We should reward the work that was exceptionally impactful – this is what the public display of hypercerts and retrospective funding is for.

Doing this would unfold powerful incentives. Retrospective funding 1) provides incentives for creators to take on public goods projects with a potentially high, but uncertain, impact, 2) enables feedback loops to learn from successes and failures, and 3) attracts more talent to the public goods sector by improving performance-based compensation.

While we are excited about the prospects of retrospective funding, hypercerts do not impose any specific funding mechanisms, but start with tracking the work that is supposed to be impactful. As a database for many funding mechanisms this facilitates experimentation and interoperability between funding mechanisms.

### Next

Curious and want to learn more? Head to the next section on [impact markets](intro/impact-markets.md); alternatively, head over to the [whitepaper](whitepaper/whitepaper-intro.md) to dive deeper into the world of hypercerts.

Or do you want to get started right away? Head to the [minting guide](guide/start.md).