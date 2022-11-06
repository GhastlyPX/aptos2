export const candyMachineAddress = "0x686fa51177e458df76c9e45abd5e631a6aad53475689542892d412ab6d63976a";
export const collectionName = "AYTLO"; // Case sensitive!
export const mode = "mainnet"; // "dev" or "test" or "mainnet"
export const twitter = "https://twitter.com/AYTLONFT";
export const start = 0;
export const supply = 2222;
export const price = 0.4;

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
        NODE_URL = "https://fullnode.mainnet.aptoslabs.com/v1";
        FAUCET_URL = null;
    }
}