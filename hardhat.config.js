require('@primitivefi/hardhat-dodoc');
require("hardhat-preprocessor");
const fs = require('fs');


function getRemappings() {
    return fs
        .readFileSync("./repos/hypercerts-monorepo/contracts/remappings.txt", "utf8")
        .split("\n")
        .filter(Boolean)
        .map((line) => line.trim().split("="));
}

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    dodoc: {
        include: ["src"],
        exclude: ["@openzeppelin/contracts", "@openzeppelin/contracts-upgradeable", "node_modules", "@looksrare", "@chainlink", "chainlink", "IImmutableCreate2Factory", "StrategyCollectionOffer", "StrategyItemIdsRange", "StrategyChainlinkUSDDynamicAsk", "BaseStrategyChainlinkPriceLatency"],
        freshOutput: true,
        keepFileStructure: true,
        outputDir: "./docs/developer/api/contracts",
        template: "./resources/solidity_template.sqrl",
    },
    paths: {
        root: "./repos/hypercerts-monorepo/contracts/",
        sources: "src",
        cache: "cache_hardhat", // Use a different cache for Hardhat than Foundrygit
    },
    preprocess: {
        eachLine: (hre) => ({
            transform: (line) => {
                if (line.match(/^\s*import /i)) {
                    for (const [from, to] of getRemappings()) {
                        if (line.includes(from)) {
                            line = line.replace(from, to);
                            break;
                        }
                    }
                }
                return line;
            },
        }),
    },
    solidity: {
        version: "0.8.17",
        settings: {
            metadata: {
                bytecodeHash: "none",
            },
            optimizer: {
                enabled: true,
                runs: 5_000,
            },
        },
    },
};
