# Type Alias: CreateFractionalSaleMakerAskInput

> **CreateFractionalSaleMakerAskInput**: `Omit`\<[`CreateMakerInput`](../interfaces/CreateMakerInput.md), `"strategyId"` \| `"collectionType"` \| `"collection"` \| `"subsetNonce"` \| `"orderNonce"` \| `"amounts"` \| `"additionalParameters"` \| `"price"`\> & `object`

## Type declaration

### maxUnitAmount

> **maxUnitAmount**: `BigNumberish`

Maximum amount of units to sell per transaction.

### minUnitAmount

> **minUnitAmount**: `BigNumberish`

Minimum amount of units to sell per transaction.

### minUnitsToKeep

> **minUnitsToKeep**: `BigNumberish`

Minimum amount of units to keep after all sales.

### price

> **price**: `BigNumberish`

Price of one unit in wei

### root?

> `optional` **root**: `string`

Root of the allowlist tree for users that are allowed to buy parts of the fraction.

### sellLeftoverFraction

> **sellLeftoverFraction**: `boolean`

Whether to sell the leftover fraction, if any. This will override `minUnitsAmount` on the last sale if there are leftover units in the fraction.

## Defined in

[types.ts:158](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/types.ts#L158)
