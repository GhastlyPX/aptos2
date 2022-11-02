export const candyMachineAddress = "0xd342674792fd7d24dbba2c81014148b5148e6299a8b4c5a69fb71bc645c08c06";
export const collectionName = "Anarchy Dog"; // Case sensitive!
export const mode = "mainnet"; // "dev" or "test" or "mainnet"
export const twitter = "https://twitter.com/dog_anarchy";
export const start = 1667414700;
export const supply = 2000;
export const price = 1.3;

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