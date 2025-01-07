---
title: Blueprints
---

# Blueprints

For more information on what blueprints are and how to use them, see the [Blueprints user guide](/docs/guide/send-blueprint.mdx).

## Creating a blueprint

To create a blueprint, a typed messaged is signed, and a call to [`POST /v1/blueprints`](https://api.hypercerts.org/spec/#/Blueprints/CreateBlueprint) is made with values and the signature.

The request body is a JSON object containing the following fields:

- `form_values`: The form values from the blueprint creation form. These will be preloaded into the hypercert creation form when the blueprint is selected for minting.
- `minter_address`: The address of the recipient that will mint the hypercert.
- `admin_address`: The address of the admin that created the blueprint and signed the transaction.
- `signature`: The signature of the admin.
- `chain_id`: The chain ID of the chain the blueprint will be available on.

```ts
const { signTypedDataAsync } = useSignTypedData();
const { address } = useAccount();

// Get the signature
const signature = await signTypedDataAsync({
  account: address,
  domain: {
    name: "Hypercerts",
    version: "1",
    chainId: 11155111,
  }
  types: { Message: [{ name: "message", type: "string" }] },
  primaryType: "Message",
  message: {
    message: `Create blueprint for ${address}`,
  },
});

// Create the blueprint using the API
const body = {
  form_values: {
    title: "",
    banner: "",
    description: "",
    logo: "",
    link: "",
    cardImage: "",
    tags: [],
    projectDates: {
        from: new Date(),
        // 1 day from now
        to: new Date(Date.now() + 24 * 60 * 60 * 1000),
    },
    contributors: [],
    allowlistURL: "",
    allowlistEntries: [{
        address: "0x123",
        units: "100",
    }, {
        address: "0x456",
        units: "200",
    }],
  },
  minter_address: "0x007029eA234833eC09f2e9d936AA097A6577d067",
  admin_address: "0x265684EFA8AEc9afF2a689B4aeDd57aF49bf049D",
  chain_id: 11155111,
  signature,
};
await fetch(`https://api.hypercerts.org/v1/blueprints`, {
  method: "POST",
  body: JSON.stringify(body),
  headers: {
    "Content-Type": "application/json",
  },
});
```

## Fetching blueprints

Blueprints can be fetched through our [GraphQL API](/docs/developer/querying.md).

## Minting a hypercert from a blueprint

When minting a hypercert from a blueprint, a call to [`POST /v1/blueprints/mint/{blueprintId}`](https://api.hypercerts.org/spec/#/Blueprints/MintBlueprint) is made. The transaction will be added to a queue and once the transaction is confirmed, the newly minted hypercert will be swapped for the blueprint in the collection. The blueprint is then marked as `minted: true`. The blueprint metadata is copied to the hypercert metadata.

More info on minting hypercerts can be found in the [minting docs](/docs/developer/minting.md).

```ts
import { HypercertClient, TransferRestrictions } from "@hypercerts-org/sdk";
import { useAccount, useSignTypedData, useWalletClient } from "wagmi";
import { parseUnits } from "viem";

// Mint the hypercert and get the transaction hash
const { data: walletClient } = useWalletClient();
const client = new HypercertClient({
  environment: "production",
  walletClient,
});

// This is an example of how to mint a hypercert from a blueprint.
// The exact way to do it will depend on the data stored in the blueprint.
const blueprint = await getBlueprintById(1);
const units = parseUnits("1", 8);
const txHash = await client.mintHypercert({
  metaData: blueprint.form_data,
  totalUnits: units,
  transferRestriction: TransferRestrictions.FromCreatorOnly,
  allowList: blueprint.allowlist_entries,
});

// Get the signature to queue the minting of the blueprint
const { signTypedDataAsync } = useSignTypedData();
const { address } = useAccount();
const signature = await signTypedDataAsync({
  account: address,
  domain: {
    name: "Hypercerts",
    version: "1",
    chainId: 11155111,
  },
  types: {
    Blueprint: [
      { name: "id", type: "uint256" },
      {
        name: "tx_hash",
        type: "string",
      },
    ],
    BlueprintQueueMintRequest: [{ name: "blueprint", type: "Blueprint" }],
  },
  primaryType: "BlueprintQueueMintRequest",
  message: {
    blueprint: {
      id: 1n,
      tx_hash: txHash,
    },
  },
});

// Register that the mint has been completed. This queues the txHash, and once the transaction is confirmed by our API, the blueprint will be marked as `minted: true`.
await fetch("https://api.hypercerts.org/v1/blueprints/mint/1", {
  method: "POST",
  body: JSON.stringify({
    signature,
    chain_id: 11155111,
    minter_address: address,
    tx_hash: txHash,
  }),
  headers: {
    "Content-Type": "application/json",
  },
});
```
