export const candyMachineAddress = "0xde20ab94da1299b1ffc86a16540a04ddd68e5a7443fcc79b33e8ef0ed193c418";
export const collectionName = "TEST"; // Case sensitive!
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