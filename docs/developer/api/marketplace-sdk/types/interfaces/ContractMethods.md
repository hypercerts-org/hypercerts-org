# Interface: ContractMethods

Return type for any on chain call

## Properties

### call()

> **call**: (`additionalOverrides`?) => `Promise`\<`ContractTransactionResponse`\>

#### Parameters

• **additionalOverrides?**: `Overrides`

#### Returns

`Promise`\<`ContractTransactionResponse`\>

#### Defined in

[types.ts:88](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/types.ts#L88)

***

### callStatic()

> **callStatic**: (`additionalOverrides`?) => `Promise`\<`any`\>

#### Parameters

• **additionalOverrides?**: `Overrides`

#### Returns

`Promise`\<`any`\>

#### Defined in

[types.ts:90](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/types.ts#L90)

***

### estimateGas()

> **estimateGas**: (`additionalOverrides`?) => `Promise`\<`bigint`\>

#### Parameters

• **additionalOverrides?**: `Overrides`

#### Returns

`Promise`\<`bigint`\>

#### Defined in

[types.ts:89](https://github.com/hypercerts-org/marketplace-sdk/blob/5b36795934d26bddc05adc354c58feff6a0aa2e7/src/types.ts#L89)
