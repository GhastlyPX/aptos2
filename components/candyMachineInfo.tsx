export const candyMachineAddress = "0x529bfa51aff4d5efbef03c88a4ef512fa0fd2d9969fb978d69b84239e0d56e06";
export const collectionName = "TTM Angels"; // Case sensitive!
export const mode = "mainnet"; // "dev" or "test" or "mainnet"
export const twitter = "https://twitter.com/ttmcapitalnft";
export const start = 1667322000;
export const supply = 3333;
export const price = 3.75;

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