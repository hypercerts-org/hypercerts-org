# Class: HypercertExchangeClient

HypercertExchange
This class provides helpers to interact with the HypercertExchange V2 contracts

## Constructors

### new HypercertExchangeClient()

> **new HypercertExchangeClient**(`chainId`, `provider`, `signer`?, `overrides`?): [`HypercertExchangeClient`](HypercertExchangeClient.md)

HypercertExchange protocol main class

#### Parameters

• **chainId**: [`ChainId`](../../types/enumerations/ChainId.md)

Chain id for contract interactions

• **provider**: `Provider`

Ethers provider

• **signer?**: `Signer`

Ethers signer

• **overrides?**

Override contract addresses or API endpoint used

• **overrides.addresses?**: [`Addresses`](../../types/interfaces/Addresses.md)

• **overrides.apiEndpoint?**: `string`

• **overrides.currencies?**: `Partial`\<`Record`\<`"ETH"` \| `"WETH"` \| `"DAI"` \| `"CELO"` \| `"cUSD"` \| `"USDT"` \| `"USDC"`, [`Currency`](../../types/interfaces/Currency.md)\>\>

#### Returns

[`HypercertExchangeClient`](HypercertExchangeClient.md)

#### Defined in

[HypercertExchangeClient.ts:99](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/HypercertExchangeClient.ts#L99)

## Properties

### addresses

> `readonly` **addresses**: [`Addresses`](../../types/interfaces/Addresses.md)

Mapping of Hypercert protocol addresses for the current chain

#### Defined in

[HypercertExchangeClient.ts:75](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/HypercertExchangeClient.ts#L75)

***

### api

> `readonly` **api**: `ApiClient`

API client to interact with the HypercertExchange API

#### Defined in

[HypercertExchangeClient.ts:80](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/HypercertExchangeClient.ts#L80)

***

### chainId

> `readonly` **chainId**: [`ChainId`](../../types/enumerations/ChainId.md)

Current app chain ID

#### Defined in

[HypercertExchangeClient.ts:72](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/HypercertExchangeClient.ts#L72)

***

### currencies

> `readonly` **currencies**: `Partial`\<`Record`\<`"ETH"` \| `"WETH"` \| `"DAI"` \| `"CELO"` \| `"cUSD"` \| `"USDT"` \| `"USDC"`, [`Currency`](../../types/interfaces/Currency.md)\>\>

List of supported currencies for the current chain

#### Defined in

[HypercertExchangeClient.ts:77](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/HypercertExchangeClient.ts#L77)

***

### provider

> `readonly` **provider**: `Provider`

Ethers provider. If you want a batch functionality, use JsonRpcProvider.

#### See

[Ethers provider doc](https://docs.ethers.org/v6/api/providers/#Provider)

#### Defined in

[HypercertExchangeClient.ts:90](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/HypercertExchangeClient.ts#L90)

***

### signer?

> `readonly` `optional` **signer**: `Signer`

Ethers signer

#### See

[Ethers signer doc](https://docs.ethers.org/v6/api/providers/#Signer)

#### Defined in

[HypercertExchangeClient.ts:85](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/HypercertExchangeClient.ts#L85)

## Methods

### approveAllCollectionItems()

> **approveAllCollectionItems**(`collectionAddress`, `approved`, `overrides`?): `Promise`\<`ContractTransactionResponse`\>

Approve all the items of a collection, to eventually be traded on the Hypercert Exchange
The spender is the TransferManager.

#### Parameters

• **collectionAddress**: `string`

Address of the collection to be approved.

• **approved**: `boolean` = `true`

true to approve, false to revoke the approval (default to true)

• **overrides?**: `Overrides`

#### Returns

`Promise`\<`ContractTransactionResponse`\>

ContractTransaction

#### Defined in

[HypercertExchangeClient.ts:411](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/HypercertExchangeClient.ts#L411)

***

### approveErc20()

> **approveErc20**(`tokenAddress`, `amount`, `overrides`?): `Promise`\<`ContractTransactionResponse`\>

Approve an ERC20 to be used as a currency on the Hypercert Exchange.
The spender is the HypercertExchangeProtocol contract.

#### Parameters

• **tokenAddress**: `string`

Address of the ERC20 to approve

• **amount**: `bigint` = `MaxUint256`

Amount to be approved (default to MaxUint256)

• **overrides?**: `Overrides`

#### Returns

`Promise`\<`ContractTransactionResponse`\>

ContractTransaction

#### Defined in

[HypercertExchangeClient.ts:428](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/HypercertExchangeClient.ts#L428)

***

### cancelAllOrders()

> **cancelAllOrders**(`bid`, `ask`, `overrides`?): [`ContractMethods`](../../types/interfaces/ContractMethods.md)

Cancell all maker bid and/or ask orders for the current user

#### Parameters

• **bid**: `boolean`

Cancel all bids

• **ask**: `boolean`

Cancel all asks

• **overrides?**: `Overrides`

#### Returns

[`ContractMethods`](../../types/interfaces/ContractMethods.md)

ContractMethods

#### Defined in

[HypercertExchangeClient.ts:389](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/HypercertExchangeClient.ts#L389)

***

### cancelOrders()

> **cancelOrders**(`nonces`, `overrides`?): [`ContractMethods`](../../types/interfaces/ContractMethods.md)

Cancel a list of orders by nonce

#### Parameters

• **nonces**: `BigNumberish`[]

List of nonces to be cancelled

• **overrides?**: `Overrides`

#### Returns

[`ContractMethods`](../../types/interfaces/ContractMethods.md)

ContractMethods

#### Defined in

[HypercertExchangeClient.ts:399](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/HypercertExchangeClient.ts#L399)

***

### checkOrdersValidity()

> **checkOrdersValidity**(`orders`, `overrides`?): `Promise`\<`object`[]\>

Utility function to check if a list of orders are valid, according to logic specific for hypercerts using order validation codes.

#### Parameters

• **orders**: [`Order`](../../types/interfaces/Order.md)[]

List of orders to be checked

• **overrides?**: `Overrides`

Call overrides (optional)

#### Returns

`Promise`\<`object`[]\>

#### Defined in

[HypercertExchangeClient.ts:509](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/HypercertExchangeClient.ts#L509)

***

### createDirectFractionsSaleMakerAsk()

> **createDirectFractionsSaleMakerAsk**(`CreateDirectFractionsSaleMakerAskInput`): `Promise`\<[`CreateMakerAskOutput`](../../types/interfaces/CreateMakerAskOutput.md)\>

Create a maker ask for a collection or singular offer of fractions

#### Parameters

• **CreateDirectFractionsSaleMakerAskInput**: [`CreateDirectFractionsSaleMakerAskInput`](../../types/type-aliases/CreateDirectFractionsSaleMakerAskInput.md)

#### Returns

`Promise`\<[`CreateMakerAskOutput`](../../types/interfaces/CreateMakerAskOutput.md)\>

#### Defined in

[HypercertExchangeClient.ts:574](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/HypercertExchangeClient.ts#L574)

***

### createFractionalSaleMakerAsk()

> **createFractionalSaleMakerAsk**(`CreateFractionalSaleMakerInput`): `Promise`\<[`CreateMakerAskOutput`](../../types/interfaces/CreateMakerAskOutput.md)\>

Create a maker ask to let the buyer decide how much of a fraction they want to buy

#### Parameters

• **CreateFractionalSaleMakerInput**: [`CreateFractionalSaleMakerAskInput`](../../types/type-aliases/CreateFractionalSaleMakerAskInput.md)

#### Returns

`Promise`\<[`CreateMakerAskOutput`](../../types/interfaces/CreateMakerAskOutput.md)\>

#### Defined in

[HypercertExchangeClient.ts:620](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/HypercertExchangeClient.ts#L620)

***

### createFractionalSaleTakerBid()

> **createFractionalSaleTakerBid**(`maker`, `recipient`, `unitAmount`, `pricePerUnit`): [`Taker`](../../types/interfaces/Taker.md)

Create a taker bid for buying part of a fraction

#### Parameters

• **maker**: [`Maker`](../../types/interfaces/Maker.md)

Maker order

• **recipient**: `string` = `ZeroAddress`

Recipient address of the taker (if none, it will use the sender)

• **unitAmount**: `BigNumberish`

Amount of units to buy

• **pricePerUnit**: `BigNumberish`

Price per unit in wei

#### Returns

[`Taker`](../../types/interfaces/Taker.md)

#### Defined in

[HypercertExchangeClient.ts:688](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/HypercertExchangeClient.ts#L688)

***

### createMakerAsk()

> **createMakerAsk**(`CreateMakerInput`): `Promise`\<[`CreateMakerAskOutput`](../../types/interfaces/CreateMakerAskOutput.md)\>

Create a maker ask object ready to be signed

#### Parameters

• **CreateMakerInput**: [`CreateMakerInput`](../../types/interfaces/CreateMakerInput.md)

#### Returns

`Promise`\<[`CreateMakerAskOutput`](../../types/interfaces/CreateMakerAskOutput.md)\>

the maker object, isTransferManagerApproved, and isTransferManagerApproved

#### Defined in

[HypercertExchangeClient.ts:156](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/HypercertExchangeClient.ts#L156)

***

### createMakerBid()

> **createMakerBid**(`CreateMakerInput`): `Promise`\<[`CreateMakerBidOutput`](../../types/interfaces/CreateMakerBidOutput.md)\>

Create a maker bid object ready to be signed

#### Parameters

• **CreateMakerInput**: [`CreateMakerInput`](../../types/interfaces/CreateMakerInput.md)

#### Returns

`Promise`\<[`CreateMakerBidOutput`](../../types/interfaces/CreateMakerBidOutput.md)\>

the maker object, isCurrencyApproved, and isBalanceSufficient

#### Defined in

[HypercertExchangeClient.ts:220](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/HypercertExchangeClient.ts#L220)

***

### createTaker()

> **createTaker**(`maker`, `recipient`, `additionalParameters`): [`Taker`](../../types/interfaces/Taker.md)

Create a taker ask ready to be executed against a maker bid

#### Parameters

• **maker**: [`Maker`](../../types/interfaces/Maker.md)

Maker order that will be used as counterparty for the taker

• **recipient**: `string` = `ZeroAddress`

Recipient address of the taker (if none, it will use the sender)

• **additionalParameters**: `any`[] = `[]`

Additional parameters used to support complex orders

#### Returns

[`Taker`](../../types/interfaces/Taker.md)

Taker object

#### Defined in

[HypercertExchangeClient.ts:285](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/HypercertExchangeClient.ts#L285)

***

### deleteOrder()

> **deleteOrder**(`orderId`): `Promise`\<`boolean`\>

Delete the order from the hypercerts marketplace API

#### Parameters

• **orderId**: `string`

Order ID

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[HypercertExchangeClient.ts:726](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/HypercertExchangeClient.ts#L726)

***

### executeMultipleOrders()

> **executeMultipleOrders**(`orders`, `isAtomic`, `overrides`?): `object`

Execute several orders

#### Parameters

• **orders**: `object`[]

List of orders data

• **isAtomic**: `boolean`

Should the transaction revert or not if a trade fails

• **overrides?**: `Overrides`

Call overrides

#### Returns

`object`

ContractMethods

##### call()

> **call**: (`additionalOverrides`?) => `any`

###### Parameters

• **additionalOverrides?**: `any`

###### Returns

`any`

##### callStatic()

> **callStatic**: (`additionalOverrides`?) => `any`

###### Parameters

• **additionalOverrides?**: `any`

###### Returns

`any`

##### estimateGas()

> **estimateGas**: (`additionalOverrides`?) => `any`

###### Parameters

• **additionalOverrides?**: `any`

###### Returns

`any`

#### Defined in

[HypercertExchangeClient.ts:344](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/HypercertExchangeClient.ts#L344)

***

### executeOrder()

> **executeOrder**(`maker`, `taker`, `signature`, `merkleTree`, `overrides`?): [`ContractMethods`](../../types/interfaces/ContractMethods.md)

Execute a trade

#### Parameters

• **maker**: [`Maker`](../../types/interfaces/Maker.md)

Maker order

• **taker**: [`Taker`](../../types/interfaces/Taker.md)

Taker order

• **signature**: `string`

Signature of the maker order

• **merkleTree**: [`MerkleTree`](../../types/interfaces/MerkleTree.md) = `defaultMerkleTree`

Optional merkle tree

• **overrides?**: `Overrides`

#### Returns

[`ContractMethods`](../../types/interfaces/ContractMethods.md)

ContractMethods

#### Defined in

[HypercertExchangeClient.ts:325](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/HypercertExchangeClient.ts#L325)

***

### getTypedDataDomain()

> **getTypedDataDomain**(): `TypedDataDomain`

Retrieve EIP-712 domain

#### Returns

`TypedDataDomain`

TypedDataDomain

#### Defined in

[HypercertExchangeClient.ts:142](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/HypercertExchangeClient.ts#L142)

***

### grantTransferManagerApproval()

> **grantTransferManagerApproval**(`operators`, `overrides`?): [`ContractMethods`](../../types/interfaces/ContractMethods.md)

Grant a list of operators the rights to transfer user's assets using the transfer manager

#### Parameters

• **operators**: `string`[] = `...`

List of operators (default to the exchange address)

• **overrides?**: `Overrides`

#### Returns

[`ContractMethods`](../../types/interfaces/ContractMethods.md)

ContractMethods

#### Default Value

```ts
Exchange address
```

#### Defined in

[HypercertExchangeClient.ts:458](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/HypercertExchangeClient.ts#L458)

***

### isTransferManagerApproved()

> **isTransferManagerApproved**(`operator`, `overrides`?): `Promise`\<`boolean`\>

Check whether or not an operator has been approved by the user

#### Parameters

• **operator**: `string` = `...`

Operator address (default to the exchange address)

• **overrides?**: `Overrides`

#### Returns

`Promise`\<`boolean`\>

true if the operator is approved, false otherwise

#### Defined in

[HypercertExchangeClient.ts:443](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/HypercertExchangeClient.ts#L443)

***

### registerOrder()

> **registerOrder**(`__namedParameters`): `Promise`\<`object`\>

Register the order with the hypercerts marketplace API

#### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.order**: [`Maker`](../../types/interfaces/Maker.md)

• **\_\_namedParameters.signature**: `string`

#### Returns

`Promise`\<`object`\>

##### success

> **success**: `boolean`

#### Defined in

[HypercertExchangeClient.ts:705](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/HypercertExchangeClient.ts#L705)

***

### revokeTransferManagerApproval()

> **revokeTransferManagerApproval**(`operators`, `overrides`?): [`ContractMethods`](../../types/interfaces/ContractMethods.md)

Revoke a list of operators the rights to transfer user's assets using the transfer manager

#### Parameters

• **operators**: `string`[] = `...`

List of operators

• **overrides?**: `Overrides`

#### Returns

[`ContractMethods`](../../types/interfaces/ContractMethods.md)

ContractMethods

#### Default Value

```ts
Exchange address
```

#### Defined in

[HypercertExchangeClient.ts:472](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/HypercertExchangeClient.ts#L472)

***

### signMakerOrder()

> **signMakerOrder**(`maker`): `Promise`\<`string`\>

Sign a maker order using the signer provided in the constructor

#### Parameters

• **maker**: [`Maker`](../../types/interfaces/Maker.md)

Order to be signed by the user

#### Returns

`Promise`\<`string`\>

Signature

#### Defined in

[HypercertExchangeClient.ts:297](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/HypercertExchangeClient.ts#L297)

***

### signMultipleMakerOrders()

> **signMultipleMakerOrders**(`makerOrders`): `Promise`\<[`SignMerkleTreeOrdersOutput`](../../types/interfaces/SignMerkleTreeOrdersOutput.md)\>

Sign multiple maker orders with a single signature
/!\ Use this function for UI implementation only

#### Parameters

• **makerOrders**: [`Maker`](../../types/interfaces/Maker.md)[]

Array of maker orders

#### Returns

`Promise`\<[`SignMerkleTreeOrdersOutput`](../../types/interfaces/SignMerkleTreeOrdersOutput.md)\>

Signature, proofs, and Merkletree object

#### Defined in

[HypercertExchangeClient.ts:309](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/HypercertExchangeClient.ts#L309)

***

### strategyInfo()

> **strategyInfo**(`strategyId`, `overrides`?): `Promise`\<[`StrategyInfo`](../../types/interfaces/StrategyInfo.md)\>

Retrieve strategy info

#### Parameters

• **strategyId**: [`StrategyType`](../../types/enumerations/StrategyType.md)

use the enum StrategyType

• **overrides?**: `Overrides`

#### Returns

`Promise`\<[`StrategyInfo`](../../types/interfaces/StrategyInfo.md)\>

StrategyInfo

#### Defined in

[HypercertExchangeClient.ts:566](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/HypercertExchangeClient.ts#L566)

***

### verifyMakerOrders()

> **verifyMakerOrders**(`makerOrders`, `signatures`, `merkleTrees`?, `overrides`?): `Promise`\<[`OrderValidatorCode`](../../types/enumerations/OrderValidatorCode.md)[][]\>

Verify if a set of orders can be executed (i.e are valid)

#### Parameters

• **makerOrders**: [`Maker`](../../types/interfaces/Maker.md)[]

List of maker orders

• **signatures**: `string`[]

List of signatures

• **merkleTrees?**: [`MerkleTree`](../../types/interfaces/MerkleTree.md)[]

List of merkle trees (optional)

• **overrides?**: `Overrides`

#### Returns

`Promise`\<[`OrderValidatorCode`](../../types/enumerations/OrderValidatorCode.md)[][]\>

A list of OrderValidatorCode for each order (code 0 being valid)

#### Defined in

[HypercertExchangeClient.ts:487](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/HypercertExchangeClient.ts#L487)
