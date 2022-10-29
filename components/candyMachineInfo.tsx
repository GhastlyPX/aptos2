export const candyMachineAddress = "0x2cf6d1f7ee0c39352a10179f93f16d0b5f998acffdc1d050902b2fe77b2d9048";
export const collectionName = "wrong"; // Case sensitive!
export const mode = "mainnet"; // "dev" or "test" or "mainnet"
export const project = "Robotium"

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