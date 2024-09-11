# hypercerts-org

Hypercerts content website - fund and reward impact

# Development

## Setup

We use git submodules to include packages maintained by the Hypercerts Foundation that we use in this project.

To initialize the submodules, run the following command:

```sh
git submodule update --init --recursive
```

Next, install the dependencies:

```sh
pnpm install
```

## Start

As this is a Docusaurus project, you can use the following command to start the development server:

```sh
pnpm start
```

## Build

To build the project, run the following command:

```sh
pnpm build
```

## Serve

To serve the built project, run the following command:

```sh
pnpm serve
```

# Dependencies

This repository is set up to import documentation from the following packages:

- [hypercerts-sdk](https://github.com/hypercerts-org/hypercerts-sdk)
- [hypercerts-monorepo](https://github.com/hypercerts-org/hypercerts)
- [marketplace-sdk](https://github.com/hypercerts-org/marketplace-sdk)

These packages are managed using git submodules.

During the build process we use different processes to generate documentation for these packages.

## hypercerts-sdk

We use the [TypeDoc](https://typedoc.org/) tool to generate documentation for the hypercerts-sdk package. This tool is
used by the [docusaurus-plugin-typedoc](https://github.com/tgreyuk/docusaurus-plugin-typedoc) plugin.

The documentation is generated using the following command:

```sh
pnpm build 
```

We configure the plugin to generate documentation for the hypercerts-sdk package and copy it to
the `docs/developer/api/hypercerts-sdk` directory.

## hypercerts-monorepo

We use [hardhat-dodoc](https://github.com/primitivefi/hardhat-dodoc) to generate documentation for the hypercerts
contracts.

The documentation is generated using the following command:

```sh
pnpm hardhat dodoc
```
Note: this step is implicit in the `generate:docs` script in the `package.json` file.

> Note: this step is implicit in the `prebuild` script in the `package.json` file.

This command will generate the documentation for the hypercerts-monorepo package and copy it to
the `docs/developer/api/contracts` directory.

## marketplace-sdk

The marketplace SDK is a fork of the LooksRare SDK. The repo has a `doc` directory that contains the documentation for
the SDK.

To make the documentation available for the Docusaurus site, we copy the documentation to
the `docs/developer/api/marketplace-sdk` directory.


```sh
pnpm cpx './repos/marketplace-sdk/doc/**/*.md' './docs/developer/api/marketplace-sdk'
```
> Note: this command is run as part of the `generate:docs` script in the root `package.json` file.