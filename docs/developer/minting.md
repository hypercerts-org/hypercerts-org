# Minting

## Token design

Hypercerts are semi-fungible tokens.
Thus, each hypercert is represented on-chain by a group of fraction tokens,
each representing a fraction of ownership over the hypercert.
If you want to split your fraction token, or merge multiple tokens into one,
check out the section on [splitting and merging](./split-merge.md).

## Minting your first hypercert

To mint a hypercert you need to provide the `metadata`, total amount of `units` and the preferred `TransferRestrictions`.
The resulting hypercert will be wholly owned by the creator.

### Metadata

Metadata is stored on IPFS and the CID/URLof the metadata is passed to the contract. Metadata needs to be defined according the the [metadata specification](https://github.com/hypercerts-org/hypercerts-sdk/tree/main/src/resources/schema) as a JSON object.

To assist the composing and validation of the metadata the SDK exposes multiple [validation methods](https://github.com/hypercerts-org/hypercerts-sdk/blob/545f04737a7184efde11f26aac0bcf72eee2b69a/src/validator/index.ts) like `validateMetaData`, `validateClaimData` and `validateAllowlist`. Additionally, when using the SDK or our API to store metadata, we execute the validation for you in our upload service.

You can also use our [API playground](https://staging-api.hypercerts.org/spec/) to validate and/or upload your metadata and allowlist.

For an example on using `zod` + `react-hook-form` to collect metadata review the implemenation in the [hypercerts-app](https://github.com/hypercerts-org/hypercerts-app/blob/main/app/hypercerts/new/page.tsx).

### Units

Each fraction of hypercerts holds an arbitrary number of units. When minting a hypercert without allowlist, the total number of units is passed in the mint call. When minting an hypercert with an allow list, the total number of units is the sum of all units specified in the allow list.

We expect a total supply of `100_000_000` units for most use cases. This is a good default for splitting fractions for most use cases and supports tokens with 6 decimal places for reasonable pricing.

### Minting

```js
import { TransferRestrictions, formatHypercertData } from "@hypercerts-org/sdk"

const { metadata } = formatHypercertData(...);
const totalUnits = 10000n;

const txHash = await client.mintClaim({
  metadata,
  totalUnits,
  transferRestrictions: TransferRestrictions.FromCreatorOnly,
});
```

> **Note** If you did not initialize your HypercertsClient with an `walletClient`, the client will run in `read-only mode` and this will fail.

When calling `mintHypercert` the SDK utilizes our API to validate and upload your metadata. Next, we simulate the mint transaction to ensure the parameters are correct. Finally, the SDK will send the transaction to the network and will prompt the user to sign the transaction via the provided wallet client.

## Transfer restrictions

When minting a Hypercert, you must pass in a `TransferRestriction` policy. For now there are only 3 implemented policies:

```js
enum TransferRestrictions {
  // Unrestricted
  AllowAll,
  // All transfers disabled after minting
  DisallowAll,
  // Only the original creator can transfer
  FromCreatorOnly
}
```

## Reference

See the [code](https://github.com/hypercerts-org/hypercerts-sdk/blob/545f04737a7184efde11f26aac0bcf72eee2b69a/src/client.ts#L161)
for more details on how we implement minting.
