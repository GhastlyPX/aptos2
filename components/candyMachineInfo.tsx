export const candyMachineAddress = "0x2142d7304276e359eb3d676bb1dea5e99edb46a1ca85009656c223f47ffcd35a";
export const collectionName = "TEST8"; // Case sensitive!
export const mode = "mainnet"; // "dev" or "test" or "mainnet"

export let NODE_URL: string;
let FAUCET_URL;
// @ts-ignore
if (mode == "dev") {
    NODE_URL = "https://fullnode.devnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.devnet.aptoslabs.com";
} else { // @ts-ignore
    if (mode === "test") {
        NODE_URL = "https://fullnode.testnet.aptoslabs.com/v1";
        FAUCET_URL = "https://faucet.testnet.aptoslabs.com";
    } else {
        NODE_URL = "https://aptos-mainnet.nodereal.io/v1/3ccdf334ef2c4528b118a6b6064cc39c/v1";
        FAUCET_URL = null;
    }
}