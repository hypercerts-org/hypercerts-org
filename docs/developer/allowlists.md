# Allowlists

Allowlists are an efficient way to enable distribution of hypercert fractions amongst a group.
First, the creator will create the hypercert with the metadata and an immutable allowlist.
With the `claimId`, every account specified in the allowlist can later mint their fraction token from that allowlist.

## Allow list format

The allowlist is a list of addresses and the number of units they should receive. The list can be provided in three formats:

1. As a string (URI)
2. As a string (Merkle tree dump)
3. As an array of `AllowlistEntry` objects (in code)

When using the hypercerts infrastructure, we expect allowlists and hypercerts to be created with a total supply of **100_000_000 units**. We find this to be a good default for most use cases by supporting tokens with 6 decimal places for reasonable pricing and a large enough supply for splitting fractions for most use cases.

### Allow list as a string (URI)

The allowlist is stored as a CSV file in IPFS. The file must have two columns:

1. `address` - The address of the receiver
2. `units` - The number of units the receiver should receive

The CSV file must be encoded as a `UTF-8` encoded CSV file. 

You can find a template for the allowlist [here](https://github.com/hypercerts-org/hypercerts-app/blob/71c0b999c61f78ac4e713c313ccd6298ae213996/public/allowlist.csv).

### Allow list as a string (Merkle tree dump)

You can also pass the merkle tree dump to the  minting method. This allows you to parse the allowlist data in any manner you prefer but ending up with the same merkle tree root.

Review the [OpenZeppelin Merkle tree library](https://github.com/OpenZeppelin/merkle-tree) for more information on the Merkle tree dump format.

### Allow list as an array of `AllowlistEntry` objects

You can also pass the allowlist as an array of `AllowlistEntry` objects. This is the most flexible way to specify the allowlist but also the most verbose.

```js
import { AllowlistEntry } from "@hypercerts-org/sdk";

// highlight-start
const allowlist: AllowlistEntry[] = [
  { address: "0x123....asfcnaes", units: 50_000_000n },
  { address: "0xabc....w2dwqwef", units: 50_000_000n },
];
// highlight-end
```

## Mint an hypercert with an allowlist

The `mintHypercert` method in the `HypercertClient` allows you to mint new hypercerts, optionally with an allowlist. This documentation focuses on the allowlist functionality and the underlying business logic.

First specify an allowlist, mapping addresses to the number of units they should receive.

```js Example
import {
  TransferRestrictions,
  formatHypercertData,
  AllowlistEntry,
} from "@hypercerts-org/sdk";

const allowlist: AllowlistEntry[] = [
  { address: "0x123....asfcnaes", units: 100n },
  { address: "0xabc....w2dwqwef", units: 100n },
];

const { metadata } = formatHypercertData(...);
const totalUnits = 100_000_000n;
const transferRestrictions = TransferRestrictions.FromCreatorOnly

// highlight-start
const txHash = await client.mintHypercert({
  allowList,
  metaData,
  totalUnits,
  transferRestrictions: TransferRestrictions.FromCreatorOnly,
});
// highlight-end
```

### 1. Allow list processing

The SDK supports processing of different allowlist formats.

#### If `allowList` is a string (URI):
* The content is fetched using `fetchFromHttpsOrIpfs`
* The system attempts to parse it as an OpenZeppelin Merkle tree dump
* If parsing fails, it tries to parse it as a CSV file

#### If `allowList` is a string (Merkle tree dump):
* The content is directly processed into a Merkle tree

#### If `allowList` is an array of `AllowlistEntry` objects:
* We validate the total units and addresses
* It's directly processed into a Merkle tree

#### Get the root
* The resulting Merkle tree is used to generate a root for the allowlist

### 2. Metadata upload

The metadata and allowlist are stored on IPFS by relaying the data to our API which validates the content and uploads it to IPFS.

> We store the allowlist as a dump of the OpenZeppelin Merkle tree. To understand the Merkle tree generation and data structures, check out the [OpenZeppelin merkle tree library](https://github.com/OpenZeppelin/merkle-tree)

### 3. Minting

If an allowlist is specified, the SDK will call the `createAllowlist` function on the contract with the appropriate parameters. The SDK will return the transaction hash for further processing as you find helpfull.

> We recommend using a method similar to viem's [`waitForTransactionReceipt`](https://viem.sh/docs/actions/public/waitForTransactionReceipt.html) to wait for the transaction to be processed. We also provide the [`getClaimStoredDataFromTxHash`](https://github.com/hypercerts-org/hypercerts-sdk/blob/545f04737a7184efde11f26aac0bcf72eee2b69a/src/utils/txParser.ts#L33) to parse the transaction logs and return the data from the `ClaimStored` event. 

## Claiming a fraction using an allowlist

Users can claim their fraction tokens for many hypercerts at once using `claimFractionFromAllowlist`. A fraction is claimed by providing the `claimId`, the `units` and the `proof` that the address is in the allowlist.

### Getting merkle proofs for an address

Merkle proof can be fetched from the allowlist stored on IPFS. While this is nice for the purists, we also provide access to allow list entries using our Graph.

To get all allowlist entries for a given account you can run the following query on our graph:

```graphql
query getAllowListRecordsForAddress($address: String!) {
  allowlistRecords(where: {user_address: {contains: [$address]}}) {
    count
    data {
      proof
      root
      hypercert_id
      token_id
      units
      user_address
      claimed
    }
  }
}
```
[Graph playground](api.hypercerts.org/v1/graphql)

> For a full implementation see [`getAllowListRecordsForAddressByClaimed`](https://github.com/hypercerts-org/hypercerts-app/blob/71c0b999c61f78ac4e713c313ccd6298ae213996/allowlists/getAllowListRecordsForAddressByClaimed.tsx) in the hypercerts app.

### Submit the claim

By submitting the user's address, the number of units contained in their fraction and the proof, the user can claim their fraction of an hypercert. When a root is not provided, the contract will catch invalid proofs. It's faster to provide the root before so we can validate in the SDK. 

```typescript
const txHash = await client.claimFractionFromAllowlist(
    hypercertTokenId,
    units,
    proof,
    root);
```

> Note that the `hypercertTokenId` refers to the actual `tokenId` in the minting contract, which is the third part of the hypercert ID. For example for hypercert ID `11155111-0xa16DFb32Eb140a6f3F2AC68f41dAd8c7e83C4941-222544667966293755105046993260376410292224` the hypercertTokenId is `222544667966293755105046993260376410292224` 

#### Claiming via the hypercerts app

By using the __Profile__ view in the hypercert app you can easily claim allowlist fractions. Simply connect your wallet in [our app](https://app.hypercerts.org) and navigate to your profile. You will see a list of all your claimable fractions under __Claimable__.


![Claimable fractions in the profile view](/img/app_claim_fraction_from_profile.png)

