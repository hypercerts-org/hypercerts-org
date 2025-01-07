---
title: Hyperboards
---

# Hyperboards

A hyperboard is the visualization of one or more collections. For more information on collections, and how to create a hyperboard/collection, see the [collections developer guide](/docs/developer/collections.md). For more information on why and when to use hyperboards see the [hyperboards user guide](/docs/guide/create-collection.mdx).

## Structure 

A hyperboard consists of one or more collections. Each collection is a separate entity, and can be updated independently. This means that collections can be reused across multiple hyperboards. Metadata exists at the hyperboard level, so a hypercert in a hyperboard `hyperboard A` within collection `Collection A` can have a different display size than the same hypercert in the same collection in a different hyperboard `hyperboard B`.

## Metadata and ownership calculation

The tiles on a hyperboard represent the ownership per address over all hypercerts and blueprints in the hyperboard. This relative weight of each hypercert or blueprint is calculated by the `display_size` metadata. In summary: the `display_size` metadata is what determines the real estate occupied by each hypercert or blueprint on the hyperboard, which is then divided amongst the owners of that hypercert or blueprint based on the amount of units they own.

Example 1:

```
Hypercert A consists of 100 units, and has a display_size of 1 (33.33% of the hyperboard will be divided amongst the owners of Hypercert A)
Hypercert B consists of 100 units, and has a display_size of 2 (66.67% of the hyperboard will be divided amongst the owners of Hypercert B)

If an address owns 50 units of Hypercert A and 50 units of Hypercert B, the address will be displayed as owning 50% of the hyperboard.
If an address owns 100 units of Hypercert A and 0 units of Hypercert B, the address will be displayed as owning 33.33% of the hyperboard.
If an address owns 0 units of Hypercert A and 100 units of Hypercert B, the address will be displayed as owning 66.67% of the hyperboard.
```

Example 2:

```
Hypercert A consists of 1 unit, and has a display_size of 1 (50% of the hyperboard will be divided amongst the owners of Hypercert A)
Hypercert B consists of 10 units, and has a display_size of 1 (50% of the hyperboard will be divided amongst the owners of Hypercert B)

If an address owns 1 unit of Hypercert A and 0 units of Hypercert B, the address will be displayed as owning 50% of the hyperboard.
If an address owns 0 units of Hypercert A and 5 units of Hypercert B, the address will be displayed as owning 25% of the hyperboard.
```

## Developer guide

The hyperboard widget lives in the [hyperboards repo](https://github.com/hypercerts-org/hyperboards). The widget is a React component that can be embedded in any website. For more information on how to use the widget, see the [hyperboards user guide](/docs/guide/create-collection.mdx). It's a static JS bundle that is built on every push to the repo, and then hosted from the nextjs public folder.