export const candyMachineAddress = "0x56a80a7bc8718506aa6bee50dfa4046dd40ed52c373d75a4fcf68a51e9b945b9";
export const collectionName = "TEST3"; // Case sensitive!
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