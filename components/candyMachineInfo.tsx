export const candyMachineAddress = "0x686fa51177e458df76c9e45abd5e631a6aad53475689542892d412ab6d63976a";
export const collectionName = "AYTLO"; // Case sensitive!
export const mode = "mainnet"; // "dev" or "test" or "mainnet"
export const twitter = "https://twitter.com/AYTLONFT";
export const start = 1667752200;
export const supply = 4444;
export const price = 1.5;

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