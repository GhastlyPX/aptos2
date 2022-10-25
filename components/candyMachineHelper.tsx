import axios from "axios";
import {candyMachineAddress, collectionName, mode, NODE_URL} from "./candyMachineInfo"
import {useState} from "react";


async function getCandyMachineResourceAccount() {
    const response = await axios.get(`${NODE_URL}/accounts/${candyMachineAddress}/resources`);
    const resources = response.data;

    for (const resource of resources) {
        if (resource.type === "0x9923a49a1259f870842b0c1cde30028883d0888bd8205cc309dce5c361c491bd::candy_machine_v2::ResourceData") {
            return resource.data.resource_account.account;
        }
    }

    console.error(`Candy machine not initialized on given address for chain ${mode}`);
    return null;
}

async function getCandyMachineCollectionInfo(
    cmResourceAccount: any
) {
    const response = await axios.get(`${NODE_URL}/accounts/${cmResourceAccount}/resources`);
    const cmResourceAccountResources = response.data;

    const collectionInfo = {
        numUploadedTokens: undefined,
        numMintedTokens: undefined,
        tokenDataHandle: undefined,
        candyMachineConfigHandle: undefined
    }
    for (const resource of cmResourceAccountResources) {
        if (resource.type === "0x3::token::Collections") {
            collectionInfo.numUploadedTokens = resource.data.create_token_data_events.counter;
            collectionInfo.numMintedTokens = resource.data.mint_token_events.counter;
            collectionInfo.tokenDataHandle = resource.data.token_data.handle;
            continue;
        }
        if (resource.type === "0x9923a49a1259f870842b0c1cde30028883d0888bd8205cc309dce5c361c491bd::candy_machine_v2::CollectionConfigs") {
            collectionInfo.candyMachineConfigHandle = resource.data.collection_configs.handle;
        }
    }

    return collectionInfo;
}

async function getCandyMachineConfigData(
    candyMachineConfigHandle: any
) {
    const data = JSON.stringify({
        "key_type": "vector<u8>",
        "value_type": "0x9923a49a1259f870842b0c1cde30028883d0888bd8205cc309dce5c361c491bd::candy_machine_v2::CollectionConfig",
        "key": stringToHex(collectionName)
    });
    const customConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const response = await axios.post(`${NODE_URL}/tables/${candyMachineConfigHandle}/item`, data, customConfig);
    const cmConfigData = response.data;

    const isPublic = cmConfigData.is_public;
    const maxMintsPerWallet = cmConfigData.max_supply_per_user;
    const mintFee = cmConfigData.mint_fee_per_mille / 100000000;
    const presaleMintTime = cmConfigData.presale_mint_time;
    const publicMintTime = cmConfigData.public_mint_time;

    return {isPublic, maxMintsPerWallet, mintFee, presaleMintTime, publicMintTime}
}

async function getMintedNfts(aptosClient: { getTableItem: (arg0: any, arg1: { key_type: string; value_type: string; key: { creator: any; collection: any; name: any; }; }) => any; }, collectionTokenDataHandle: any, cmResourceAccount: any, collectionName: any, txInfo: { events: any; }) {
    const mintedNfts = [];
    for (const event of txInfo.events) {
        if (event["type"] !== "0x3::token::MintTokenEvent") continue
        const mintedNft = {
            name: event["data"]["id"]["name"],
            imageUri: null
        }
        try {
            mintedNft.imageUri = (await aptosClient.getTableItem(collectionTokenDataHandle, {
                "key_type": "0x3::token::TokenDataId",
                "value_type": "0x3::token::TokenData",
                "key": {
                    "creator": cmResourceAccount,
                    "collection": collectionName,
                    "name": mintedNft.name
                }
            })).uri
        } catch (err) {
            console.error(err);
        }
        mintedNfts.push(mintedNft)
    }

    console.log("Minted NFTs")
    console.log(mintedNfts)
    return mintedNfts
}




function stringToHex(str: string) {
    var result = '';
    for (var i=0; i<str.length; i++) {
        result += str.charCodeAt(i).toString(16);
    }
    return result;
}

export function getTimeDifference(current: number, next: number) {
    if (next < current) return "LIVE"
    var delta = Math.abs(next - current);

    var days = Math.floor(delta / 86400);
    delta -= days * 86400;

    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    var seconds = Math.floor(delta % 60);

    return {days, hours, minutes, seconds};
}


export default {
    getCandyMachineResourceAccount,
    getCandyMachineCollectionInfo,
    getCandyMachineConfigData,
    getTimeDifference,
    getMintedNfts,
}