export const candyMachineAddress = "0x245bb85a75b2fca52996a8a3d169dfcacad8286e8f71df075b6df251ab44bb60";
export const collectionName = "Clockmen"; // Case sensitive!
export const mode = "mainnet"; // "dev" or "test" or "mainnet"
export const project = "Clockmen"

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