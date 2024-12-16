# Interface: CreateMakerInput

Input of the createMakerAsk function

## Properties

### additionalParameters?

> `optional` **additionalParameters**: `any`[]

Additional parameters for complex orders

#### Default Value

```ts
[]
```

#### Defined in

[types.ts:150](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/types.ts#L150)

***

### collection

> **collection**: `string`

Collection address

#### Defined in

[types.ts:118](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/types.ts#L118)

***

### collectionType

> **collectionType**: [`CollectionType`](../enumerations/CollectionType.md)

Asset type, 0: ERC-721, 1:ERC-1155, etc

#### Defined in

[types.ts:122](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/types.ts#L122)

***

### currency?

> `optional` **currency**: `string`

Currency address

#### Default Value

```ts
ETH
```

#### Defined in

[types.ts:140](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/types.ts#L140)

***

### endTime

> **endTime**: `BigNumberish`

Timestamp in seconds when the order becomes invalid

#### Defined in

[types.ts:128](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/types.ts#L128)

***

### itemIds

> **itemIds**: `BigNumberish`[]

IDs of fractions to be sold

#### Default Value

```ts
[1]
```

#### Defined in

[types.ts:135](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/types.ts#L135)

***

### orderNonce

> **orderNonce**: `BigNumberish`

Order nonce, get it from the HypercertExchange API

#### Defined in

[types.ts:126](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/types.ts#L126)

***

### price

> **price**: `BigNumberish`

Asset price in wei

#### Defined in

[types.ts:130](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/types.ts#L130)

***

### startTime?

> `optional` **startTime**: `BigNumberish`

Order validity start time

#### Default Value

```ts
now
```

#### Defined in

[types.ts:145](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/types.ts#L145)

***

### strategyId

> **strategyId**: [`StrategyType`](../enumerations/StrategyType.md)

Strategy ID, 0: Sell entire fraction, 1: Sell part of a fraction, etc

#### Defined in

[types.ts:120](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/types.ts#L120)

***

### subsetNonce

> **subsetNonce**: `BigNumberish`

Subset nonce used to group an arbitrary number of orders under the same nonce

#### Defined in

[types.ts:124](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/types.ts#L124)
