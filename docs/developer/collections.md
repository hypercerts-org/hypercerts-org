---
title: Collections
---

> [!WARNING]
> There are currently no dedicated collection endpoints, but they are expected to be added in the future. For now, management of collections is done through the hyperboard endpoints.

# Collections

Collections are a way to group hypercerts (and blueprints) together. They can then be visualized in a hyperboard.

Within a collection, all hypercerts and blueprints must be on the same chain.

They can then be modified through the [`PATCH /v1/hyperboards/{hyperboardId}`](https://api.hypercerts.org/spec/#/Hyperboards/UpdateHyperboard) endpoint. Deleting a hyperboard is done through the [`DELETE /v1/hyperboards/{hyperboardId}`](https://api.hypercerts.org/spec/#/Hyperboards/DeleteHyperboard) endpoint.

Collections have 1 or more admins. Only admins are allowed to change the contents of a collection or the metadata attached to blueprints and hypercerts in the collection.

## Creating a collection

Collections can be created using the [`POST /v1/hyperboards`](https://api.hypercerts.org/spec/#/Hyperboards/CreateHyperboard) endpoint. When creating a new hyperboard, all collections in it are automatically created. Within a hyperboard, all hypercerts and blueprints in all collections must be on the same chain.

```ts
const { signTypedDataAsync } = useSignTypedData();
const { address } = useAccount();

// Example data for hypercerts and blueprints, all from the same chain
const hypercerts = [
  {
    hypercertId:
      "10-0x822F17A9A5EeCFd66dBAFf7946a8071C265D1d07-13601086205829910384631083059047775411896320",
    factor: 100n,
  },
];
const blueprints = [{ blueprintId: 1n, factor: 100n }];

// Get the signature
const signature = await signTypedDataAsync({
  account: address,
  domain: {
    name: "Hypercerts",
    version: "1",
    chainId: 11155111,
  },
  types: {
    Hyperboard: [
      { name: "title", type: "string" },
      { name: "description", type: "string" },
      { name: "borderColor", type: "string" },
      { name: "hypercertIds", type: "string[]" },
      { name: "hypercertFactors", type: "uint256[]" },
      { name: "blueprintIds", type: "uint256[]" },
      { name: "blueprintFactors", type: "uint256[]" },
    ],
    HyperboardCreateRequest: [{ name: "hyperboard", type: "Hyperboard" }],
  },
  primaryType: "HyperboardCreateRequest",
  message: {
    hyperboard: {
      title: data.title,
      description: data.description,
      borderColor: data.borderColor,
      hypercertIds: hypercerts.map((hc) => hc.hypercertId),
      hypercertFactors: hypercerts.map((hc) => hc.factor),
      blueprintIds: blueprints.map((bp) => bp.blueprintId),
      blueprintFactors: blueprints.map((bp) => bp.factor),
    },
  },
});

// Create the collection
const body = {
  title: "My Collection",
  collections: [
    {
      title: "My Collection",
      description: "My Collection Description",
      hypercerts,
      blueprints,
    },
  ],
  borderColor: "#000000",
  chainIds: [11155111],
  backgroundImg: "https://hypercerts.org/img/hyperboard-background.png",
  adminAddress: "0xc0ffee254729296a45a3885639AC7E10F9d54979",
  signature,
};
await fetch("https://api.hypercerts.org/v1/hyperboards", {
  method: "POST",
  body: JSON.stringify(body),
  headers: {
    "Content-Type": "application/json",
  },
});
```

## Updating a collection

Collections can be updated using the [`PATCH /v1/hyperboards/{hyperboardId}`](https://api.hypercerts.org/spec/#/Hyperboards/UpdateHyperboard) endpoint. Updating a collection is very similar to creating a collection, but the `id` of the collection is required.

```ts
const { signTypedDataAsync } = useSignTypedData();
const { address } = useAccount();

// Example data for hypercerts and blueprints
const hypercerts = [
  {
    hypercertId:
      "10-0x822F17A9A5EeCFd66dBAFf7946a8071C265D1d07-13601086205829910384631083059047775411896320",
    factor: 100n,
  },
  {
    hypercertId:
      "10-0x822F17A9A5EeCFd66dBAFf7946a8071C265D1d07-13601086205829910384631083059047775411896322",
    factor: 200n,
  },
];
const blueprints = [
  { blueprintId: 1n, factor: 100n },
  { blueprintId: 2n, factor: 200n },
];

// Get the signature
const signature = await signTypedDataAsync({
  account: address,
  domain: {
    name: "Hypercerts",
    version: "1",
    chainId: 11155111,
  },
  types: {
    Hyperboard: [
      { name: "id", type: "string" },
      { name: "title", type: "string" },
      { name: "description", type: "string" },
      { name: "borderColor", type: "string" },
      { name: "hypercertIds", type: "string[]" },
      { name: "hypercertFactors", type: "uint256[]" },
      { name: "blueprintIds", type: "uint256[]" },
      { name: "blueprintFactors", type: "uint256[]" },
    ],
    HyperboardUpdateRequest: [{ name: "hyperboard", type: "Hyperboard" }],
  },
  primaryType: "HyperboardUpdateRequest",
  message: {
    hyperboard: {
      id: "123e4567-e89b-12d3-a456-426614174000",
      title: "My Collection",
      description: "My Collection Description",
      borderColor: "#000000",
      hypercertIds: hypercerts.map((hc) => hc.hypercertId),
      hypercertFactors: hypercerts.map((hc) => hc.factor),
      blueprintIds: blueprints.map((bp) => bp.blueprintId),
      blueprintFactors: blueprints.map((bp) => bp.factor),
    },
  },
});

// Update the collection
const body = {
  id: "123e4567-e89b-12d3-a456-426614174000",
  title: "My Collection",
  collections: [
    {
      id: "123e4567-e89b-12d3-a456-426614174000",
      title: "My Collection",
      description: "My Collection Description",
      hypercerts,
      blueprints,
    },
  ],
  borderColor: "#000000",
  chainIds: [11155111],
  backgroundImg: "https://hypercerts.org/img/hyperboard-background.png",
  adminAddress: "0x123",
  signature,
};
await fetch(
  `https://api.hypercerts.org/v1/hyperboards/123e4567-e89b-12d3-a456-426614174000`,
  {
    method: "PATCH",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  }
);
```

## Fetching collections

Collections can be fetched through the [GraphQL API](https://api.hypercerts.org/v1/graphql).

## Visualizing collections

Collections can be visualized in a hyperboard, see the [create a collection](/docs/guide/create-collection.mdx) and [hyperboards developer guide](/docs/developer/hyperboards.md) for more information.
