export const candyMachineAddress = "0x33a6189ea0beb66e37953181a0e6afaa65b91e151e4cb99470488c2b095bcd42";
export const collectionName = "Immers3 x Arlo"; // Case sensitive!
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
        NODE_URL = "https://fullnode.mainnet.aptoslabs.com/v1";
        FAUCET_URL = null;
    }
}