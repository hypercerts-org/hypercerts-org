---
title: 'Mint'
id: mint
sidebar_position: 2
---

### Who can create a hypercert?

Anyone doing work that is intended to have a positive impact can create a hypercert. Your hypercert can be as simple as "I did X on this date and want to claim all future impact from it".

It can also represent something more, such as a phase in an ongoing team project, an invention or discovery, a research publication, or an important software release.

Critically, if the work was done by more than one person, then each person should be listed as a contributor to the hypercert and approve the creation of the hypercert. The hypercert only represents the work of the contributors that are listed. For example if a research paper was written by 5 people, but only 3 are listed, then the hypercert also only represents their contributions, which is less than the full research artifact.

### What do I need to create a hypercert?

You will need to prepare all of the information required in the form builder (see [Step-by-step instructions for creating a hypercert](guide/mint.md) below). This includes important metadata, such as a description of the project and the dimensions of your impact claim, as well as a project artwork. You may also want to include an allowlist of wallets that are approved to claim one or more fractions of the hypercert.

In addition to the information regarding the hypercert itself, you’ll need a crypto wallet to mint your hypercert. “Minting” a hypercert is the process of writing an impact claim to the blockchain. This establishes its immutable record of authenticity and ownership.

Next, choose a blockchain on which to mint your hypercert. The hypercerts protocol is available on Optimism, Celo, Base, and Sepolia (testnet). Each of these blockchains has different gas fees associated with transactions on their networks.

Finally, go ahead and create your hypercert.

# Step-by-step instructions

First, go to the <a href="https://app.hypercerts.org/hypercerts/new" target="_blank">Create Hypercert</a> site with a wallet-enabled browser. 

Although the site works on mobile, it is easier to use on desktop because the browser will display a dynamic preview of the hypercert while you fill out the Create form.

Next, connect your wallet. You will be prompted to switch to a compatible network. Make sure you mint the hypercert on your preferred chain.

Once you've connected, you will see an empty form for creating a hypercert.

:::note[testnet]
We recommend minting your first hypercert on testnet, which you can <a href="https://testnet.hypercerts.org/hypercerts/new" target="_blank">here</a>. It is the exact same Create form and you can walk through the process once before creating a hypercert on mainnet.
:::

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

#### 7. Time of Work

The work time period defines when the work was done that the hypercert represents, i.e., only the work in this time period is included in the hypercert.

The time period of work doesn't need to be the start and end date of a project, but it can be. One project can be split up into multiple hypercerts, e.g. all hypercerts can have the same `work scope`, but different time periods of work. Of course, the time periods are not allowed to overlap in that case.

#### 8. Set of Contributors

Provide a list of contributors, one per line, or comma-separated.

The list should include _all_ contributors that performed the described work.

Contributors are generally itemized as wallet addresses or ENS names, but can also be names / pseudonyms. Groups of contributors can be represented by a multisig or name of an organization.

You need to confirm that all listed contributors have permitted their works' inclusion in this hypercert.

#### 9. Owners and allowlist

The allowlist allocates fractions of the hypercert to specific wallet addresses. These wallet addresses are then allowed to claim these fractions afterwards. For example, it can be used to allocate fractions to previous funders and contributors.

You can submit an already available allowlist, create a new one or upload a CSV file. If you want to keep any fraction, include yourself in the allowlist.

The allowlist is implemented as a CSV file specifying `address,units` headers. You can find a template [here](https://testnet.hypercerts.org/allowlist.csv).

| address                                    | units              |
| ------------------------------------------ | ------------------ |
| 0x5dee7b340764c49a827c60d2b8729e49405fbefc | 300000000000000000 |
| 0x1e2dbb9ca3f6d48e085384a821b7259abfdc7d65 | 200000000000000000 |
| ...                                        | ...                |
| 0x436bad18642f45d3fa5fcaad0a2d81764a9cba85 | 100000000000000000 |

Hypercerts are minted with a total supply of 1 ether (10^18 units). This means the total number of units in the allowlist needs to sum to 10^18.

:::note
If your allowlist is not properly formatted, you will be unable to mint your hypercert. If you do not include an allowlist, then the creator of the hypercert will receive 100% of the hypercert, which the creator can then sell or transfer to another wallet a maximum of one time.
:::

### Future releases

In future release, you will be able to modify additional fields. In this release, you can't change their default value. If it is necessary for your project to adjust these default values, please contact us in our [discord help forum](https://discord.gg/UZt8cBnP4w).

<details>
  <summary>Impact Scope</summary>

The impact scope can be used to limit the impact that a hypercert represents, e.g. for the work scope `Planting trees` a hypercert can represent _only_ the impact on biodiversity by including the impact scope tag `Biodiversity`. This would exclude all other impacts, including the impact on CO2 in the atmosphere, which can be useful if that impact is already captured by a carbon credit.

In the current release, this is set to "`all`", i.e. every impact the work has is included in the hypercert.

Just like the work scope, multiple impact scope tags are [logically conjunctive](https://en.wikipedia.org/wiki/Logical_conjunction).

</details>

<details>
  <summary>Time of Impact</summary>

The impact time period is another way to limit the impact that a hypercert represents, e.g. inventing a new medical treatment has a positive impact over many years, but we might want to capture the positive impact separately for each year.

By default the `impact start date` is the same as the `work start date` and the `impact end date` is "`indefinite`", i.e., the impact is not restricted time-wise.

</details>

<details>
  <summary>Rights</summary>

This field defines the rights that owners of the hypercert have over the work being claimed by this hypercert.

By default this is set to `Public Display`, i.e., the owners are allowed to publicly display the hypercert and show their support of the work.

</details>