export const candyMachineAddress = "0x30243c6480936f276dee057907077fdeb9f31425f158a6e8c296b5df26191db4";
export const collectionName = "Test"; // Case sensitive!
export const mode = "dev"; // "dev" or "test" or "mainnet"

export let NODE_URL: string;
let FAUCET_URL;
if (mode == "dev") {
    NODE_URL = "https://fullnode.devnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.devnet.aptoslabs.com";
} else if (mode === "test") {
    NODE_URL = "https://fullnode.testnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.testnet.aptoslabs.com";
} else {
    NODE_URL = "https://aptos-mainnet.nodereal.io/v1/ae1d16cac902481a983971715430e422";
    FAUCET_URL = null;
}