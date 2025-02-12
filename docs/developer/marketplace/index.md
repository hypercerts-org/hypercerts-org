# Getting started

## Install

This package currently has a peer dependency on [etherjs V6](https://docs.ethers.io/v6/).

```bash
yarn add @hypercerts-org/marketplace-sdk ethers
```

```bash
npm install @hypercerts-org/marketplace-sdk ethers --save
```

```bash
pnpm add @hypercerts-org/marketplace-sdk ethers
```

## Initialization

The SDK exposes a main class that's used to perform all onchain operations:

```ts
import {
  HypercertExchangeClient,
  ChainId,
} from "@hypercerts-org/marketplace-sdk";
const hypercertExchangeClient = new HypercertExchangeClient(
  ChainId.OPTIMISM,
  provider,
  signer
);
```

The signer is optional if you need access to read only data (:warning: Calls to functions that need a signer will throw a `Signer is undefined` exception):

```ts
import {
  HypercertExchangeClient,
  ChainId,
} from "@hypercerts-org/marketplace-sdk";
const hypercertExchangeClient = new HypercertExchangeClient(
  ChainId.OPTIMISM,
  provider
);
```

If you work on a Hardhat setup, you can override the addresses as follows:

```ts
import { HypercertExchangeClient, ChainId } from "@hypercerts-org/marketplace-sdk";
const addresses: Addresses = {...};
const hypercertExchangeClient = new HypercertExchangeClient(ChainId.HARDHAT, provider, signer, addresses);
```
