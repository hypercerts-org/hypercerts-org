---
title: 'Step-by-step: Minting'
id: minting
sidebar_position: 2
---

# Getting started

### How to create a hypercert

Creating a hypercert is similar to creating an NFT on platforms like OpenSea or Zora.

In this article, we’ll walk through the steps one by one and explain exactly what you need to do to create your first hypercert.

### Who can create a hypercert?

Anyone doing work that is intended to have a positive impact can create a hypercert. Your hypercert can be as simple as "I did X on this date and want to claim all future impact from it".

It can also represent something more, such as a phase in an ongoing team project, an invention or discovery, a research publication, or an important software release.

Critically, if the work was done by more than one person, then each person should be listed as a contributor to the hypercert and approve the creation of the hypercert. The hypercert only represents the work of the contributors that are listed. For example if a research paper was written by 5 people, but only 3 are listed, then the hypercert also only represents their contributions, which is less than the full research artifact.

### What do I need to create a hypercert?

You will need to prepare all of the information required in the form builder (see [Step-by-step instructions for creating a hypercert](guide/minting.md) below). This includes important metadata, such as a description of the project and the dimensions of your impact claim, as well as a project artwork. You may also want to include an allowlist of wallets that are approved to claim one or more fractions of the hypercert.

In addition to the information regarding the hypercert itself, you’ll need a crypto wallet to mint your hypercert. “Minting” a hypercert is the process of writing an impact claim to the blockchain. This establishes its immutable record of authenticity and ownership.

Next, choose a blockchain on which to mint your hypercert. The hypercerts protocol is available on Optimism, Celo, Base, and Sepolia (testnet). Each of these blockchains has different gas fees associated with transactions on their networks.

Finally, go ahead and create your hypercert.

### How much does it cost to create a hypercert?

You will need enough gas in your wallet to cover transaction fees. In our simulations, the gas fee for minting a hypercert on Optimism are very low, e.g., below 0.0005 ETH or less than $1.

# Step-by-step instructions

First, go to the <a href="https://app.hypercerts.org/hypercerts/new" target="_blank">Create Hypercert</a> site with a wallet-enabled browser. We recommend minting your first hypercert on testnet, which you can this <a href="https://testnet.hypercerts.org/hypercerts/new" target="_blank">here</a>.

Although the site works on mobile, it is easier to use on desktop because the browser will display a dynamic preview of the hypercert while you fill out the Create form.

Next, connect your wallet. You will be prompted to switch to a compatible network. Make sure you mint the hypercert on your preferred chain.

Once you've connected, you will see an empty form for creating a hypercert.

### General information (first tab)

#### 1. Title

Enter the name or title of the hypercert. This is the place to be verbose and specific about what the project is doing. You'll see on the preview when your title becomes too long.

Given that a project may create numerous hypercerts over time, consider giving the hypercert a name that represents a discrete phase or output.

Names are restricted to 100 characters but may include emojis (:smile:), accents (é), non-Latin scripts (表情), and other Unicode characters.

#### 2. Description

Enter a human readable description of the hypercert. This is the place to share more details about the work and the team or individual behind the work.

The description field supports [Markdown syntax](https://www.markdownguide.org/cheat-sheet/) and has a limit of 10,000 characters.

In addition to the main link (see next field) you can add further links in the markdown to help others to understand the work of the project.

*Note: At the moment the view page doesn't yet support Markdown; however, it will be added soon. Hence, we recommend to use Markdown already.*

#### 3. Link

A valid URL for the project, beginning with https://, ipfs://, or ipns://

This will be displayed next to the hypercert on webpages like OpenSea and should link users to a page that has more information about the project or impact claim. For instance, you can add an impact report here.

#### 4. Logo

An icon for the top left part of the card. This could be your project logo. It will be automatically masked to the shape of a circle.

Logo images look best with an aspect ratio of 1.0 (square-shaped).

The easiest way is to find an image you like in your web browser, right click "Copy Image Address", and paste it in the field. Images stored on IPFS should be referenced through a hosted URL service, e.g., `https://cloudflare-ipfs.com/ipfs/<CID>`.

#### 5. Banner Image

A background image that will extend across the upper half of the artwork. This could be your project masthead or a unique piece of art.

Banner images look best with an aspect ratio of 1.5 (e.g., 600 x 400 pixels). The dimensions should be at least 320 pixels wide and 214 pixels high to avoid stretching.

Currently we don't support zoom / cropping, so you will need to test the look and feel on your own.

The easiest way is to find an image you like in your web browser, right click "Copy Image Address", and paste it in the field. Images stored on IPFS should be referenced through a hosted URL service, e.g., `https://cloudflare-ipfs.com/ipfs/<CID>`.

### Who did what & when (second tab)

#### 6. Work Scope

One or multiple tags describe the work that the hypercert represents. This work scope will be used to identify the work that is included in the hypercerts and the work that is not included.

Multiple tags are [logically conjunctive](https://en.wikipedia.org/wiki/Logical_conjunction), e.g. `Planting trees` ∧ `Germany` means that the hypercert includes the planting of trees only in Germany, but not planting trees anywhere else or any other work in Germany that wasn't planting trees. These are not just standard "tags", but work differently.

For most projects, it's probably best to start with a short form of your project's name. Given that your project may create numerous hypercerts over time, having a work scope that represents the name of your project will make your claims in the "impact hyperspace" continuous. If you want to create a hypercert only for some part of your project, add another tag that narrows down the scope. With every additional tag you can narrow it down further.

#### 7. Start and End Date of Work

The work time period defines when the work was done that the hypercert represents, i.e., only the work in this time period is included in the hypercert.

The time period of work doesn't need to be the start and end date of a project, but it can be. One project can be split up into multiple hypercerts, e.g. all hypercerts can have the same `work scope`, but different time periods of work. Of course, the time periods are not allowed to overlap in that case.

#### 8. Set of Contributors

Provide a list of contributors, one per line, or comma-separated.

The list should include _all_ contributors that performed the described work.

Contributors are generally itemized as wallet addresses or ENS names, but can also be names / pseudonyms. Groups of contributors can be represented by a multisig or name of an organization.

You need to confirm that all listed contributors have permitted their works' inclusion in this hypercert.

#### 9. Owners and allowlist

[add explanation]

The allowlist allocates fractions of the hypercert to specific wallet addresses. These wallet addresses are then allowed to claim these fractions afterwards. For example, it can be used to allocate fractions to previous funders and contributors.

The allowlist is implemented as a CSV file specifying `index,address,price,fractions` headers.

| index | address                                    | price | fractions |
| ----- | ------------------------------------------ | ----- | --------- |
| 0     | 0x5dee7b340764c49a827c60d2b8729e49405fbefc | 0.0   | 100       |
| 1     | 0x1e2dbb9ca3f6d48e085384a821b7259abfdc7d65 | 0.0   | 50        |
| ...   | ...                                        | ...   | ...       |
| 999   | 0x436bad18642f45d3fa5fcaad0a2d81764a9cba85 | 0.0   | 1         |

The `price` field is denominated in ETH. This should remain at 0.0 for all hypercerts, as primary sales are not currently supported through the app and the secondary sale/transfer of hypercerts is currently not allowed.

You can store your allowlists on IPFS using [web3.storage](https://web3.storage/).

:::note
If your allowlist is not properly formatted, you will be unable to mint your hypercert. If you do not include an allowlist, then the creator of the hypercert will receive 100% of the hypercert (set to a default of 10,000 units), which you can then sell or transfer to another wallet a maximum of one time.
:::

### Additional fields
<details>
  <summary>Impact scope and time</summary>

  [add explanation]
</details>

<details>
  <summary>Rights</summary>

This field defines the rights that owners of the hypercert have over the work being claimed by this hypercert.

By default this is set to `Public Display`, i.e., the owners are allowed to publicly display the hypercert and show their support of the work.

_Note: In the future, additional rights can be included for different hypercerts._

</details>