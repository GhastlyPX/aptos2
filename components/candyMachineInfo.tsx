export const candyMachineAddress = "0x319a3c9971ea09b4a8640ddf53e7ad97e1845e93a587a8e31c66f66ebc6e8029";
export const collectionName = "TEST4"; // Case sensitive!
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