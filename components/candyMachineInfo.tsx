export const candyMachineAddress = "0x8a1a535b1bc56cd249c7de53a984bb36f7b45e142731469bffab368defe522bd";
export const collectionName = "TTM Angels"; // Case sensitive!
export const mode = "mainnet"; // "dev" or "test" or "mainnet"
export const twitter = "https://twitter.com/ttmcapitalnft";
export const start = 1667322000;
export const supply = 3333;
export const price = 3.75;

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