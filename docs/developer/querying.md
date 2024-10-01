# Querying

Data relevant to the hypercert ecosystem is distributed across IPFS and the chains where hypercerts contracts are deployed. Specifically, metadata and allowlists are stored on IPFS, hypercert supply, metadata and other on-chain data is stored within the contracts used on their respective chains. Attestations are created via EAS which also stores data on chain but within their own set of contracts.

To track on-chain state we operate our own indexer that parses relevant events and updates the current state in our database. Information on hypercert collections, user metadata, orders is stored via our API Rest endpoints. For accessing the tracked data we offer a GraphQL API for read and a REST API for write actions. 

Review our [architecture](./architecture) for a more technical overview of the different components.

## GraphQL

GraphQL is a query language that allows you to compose and fetch the data you need by composing and querying a typesafe API. This section outlines an opiniated workflow to fetch data from our endpoints. Since the API and GrapQL instance are open, you can use any tooling you like to fetch the data. Generally, we use `urql` for our frontend and `axios` for our backend.

### Live graph playground

The easiest way to get started with the GraphQL API is by using our live graph playground on the [staging](https://staging-api.hypercerts.org/v1/graphql) or [production](https://api.hypercerts.org/v1/graphql) endpoints. This allows you to explose the data model in an interactive interface and the composed queries can easily be migrated to you graphql client implementation.

### Fetching the graphl schema

The same queries you compose in the playground can easily be migrated to your graphql client implementation. Our grapql endpoint allows for schema introspection which composes with tools like [`graphql-codegen`](https://the-guild.dev/graphql/codegen) or [`gql.tada`](https://gql-tada.0no.co/) to generate schema definitions and typed query methods withing your project. 

### Getting the data into your application

GraphQL queries can be executed with clients like [`urql`](https://formidable.com/open-source/urql/) or [`graphql-request`](https://www.npmjs.com/package/graphql-request).

### Example

This is a simple example from our app that fetches the total count of hypercerts created:

```typescript
import { HYPERCERTS_API_URL_GRAPH } from "@/configs/hypercerts";
import { graphql } from "@/lib/graphql";
import request from "graphql-request";

const query = graphql(`
  query hypercertsTotal {
    hypercerts {
      count
    }
  }
`);

export async function getHypercertsTotal() {
  const res = await request(HYPERCERTS_API_URL_GRAPH, query);
  return res.hypercerts.count;
}
```
> Source: [hypercerts-app](https://github.com/hypercerts-org/hypercerts-app/blob/main/hypercerts/getHypercertsTotal.ts)
