# Interface: Maker

Maker object to be used in execute functions

## Properties

### additionalParameters

> **additionalParameters**: `BytesLike`

Additional parameters for complex orders

#### Defined in

[types.ts:223](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/types.ts#L223)

***

### amounts

> **amounts**: `BigNumberish`[]

List of amount for sale for each fraction ID (will always be 1 for hypercert fractions as they are unique)

#### Defined in

[types.ts:221](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/types.ts#L221)

***

### collection

> **collection**: `string`

Collection address

#### Defined in

[types.ts:207](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/types.ts#L207)

***

### collectionType

> **collectionType**: [`CollectionType`](../enumerations/CollectionType.md)

Asset type, 0: ERC-721, 1:ERC-1155, etc

#### Defined in

[types.ts:205](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/types.ts#L205)

***

### currency

> **currency**: `string`

Currency address (zero address for ETH)

#### Defined in

[types.ts:209](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/types.ts#L209)

***

### endTime

> **endTime**: `BigNumberish`

Timestamp in second of the time when the order becomes invalid

#### Defined in

[types.ts:215](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/types.ts#L215)

***

### globalNonce

> **globalNonce**: `BigNumberish`

User's current bid / ask nonce

#### Defined in

[types.ts:197](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/types.ts#L197)

***

### itemIds

> **itemIds**: `BigNumberish`[]

List of fraction IDS

#### Defined in

[types.ts:219](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/types.ts#L219)

***

### orderNonce

> **orderNonce**: `BigNumberish`

Nonce for this specific order

#### Defined in

[types.ts:201](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/types.ts#L201)

***

### price

> **price**: `BigNumberish`

Minimum price to be received after the trade

#### Defined in

[types.ts:217](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/types.ts#L217)

***

### quoteType

> **quoteType**: [`QuoteType`](../enumerations/QuoteType.md)

Bid (0) or Ask (1)

#### Defined in

[types.ts:195](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/types.ts#L195)

***

### signer

> **signer**: `string`

Signer address

#### Defined in

[types.ts:211](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/types.ts#L211)

***

### startTime

> **startTime**: `BigNumberish`

Timestamp in second of the time when the order starts to be valid

#### Defined in

[types.ts:213](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/types.ts#L213)

***

### strategyId

> **strategyId**: [`StrategyType`](../enumerations/StrategyType.md)

Strategy ID, 0: Standard, 1: Collection, etc

#### Defined in

[types.ts:203](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/types.ts#L203)

***

### subsetNonce

> **subsetNonce**: `BigNumberish`

Subset nonce used to group an arbitrary number of orders under the same nonce

#### Defined in

[types.ts:199](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/types.ts#L199)
