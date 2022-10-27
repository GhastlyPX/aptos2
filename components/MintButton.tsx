import {useWallet} from "@manahippo/aptos-wallet-adapter";
import {candyMachineAddress, collectionName, NODE_URL} from "./candyMachineInfo"
import cmHelper from "./candyMachineHelper"
import { AptosClient } from "aptos";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {WL} from "./WL";

const MintButton = () => {

    const aptosClient = new AptosClient(NODE_URL);

    const wallet = useWallet();
    const [mintInfo, setMintInfo] = useState({numToMint: 1, minting: false, success: false, mintedNfts: []})
    const [group, setGroup] = useState('');
    const [time, setTime] = useState(0);
    const start = 1667129334;

        useEffect(() => {
            GetTime();
            async function GetTime() {
                const time = Math.round(new Date().getTime() / 1000)
                setTime(time);
            }
            const interval = setInterval(() => {
                GetTime();
            }, 10000);
            return () => clearInterval(interval);
        }, [])


    const mint = async () => {

        try {
        if (wallet.account?.address?.toString() === undefined || mintInfo.minting) return;

        console.log(wallet.account?.address?.toString());
        setMintInfo({...mintInfo, minting: true})
        // Generate a transaction
        const payload = {
            type: "entry_function_payload",
            function: "0x9923a49a1259f870842b0c1cde30028883d0888bd8205cc309dce5c361c491bd::candy_machine_v2::mint_tokens",
            type_arguments: [],
            arguments: [
                candyMachineAddress,
                collectionName,
                mintInfo.numToMint,
            ]
        };

        let txInfo;
            const txHash = await wallet.signAndSubmitTransaction(payload);
            console.log(txHash);
            txInfo = await aptosClient.waitForTransactionWithResult(txHash.hash)
            // @ts-ignore
            if (txInfo.success) {
                toast("Transaction successful!", {
                    type: "success",
                });
            } else {
                toast("Transaction failed, please try again!", {
                    type: "error",
                });
            }
        } catch (e) {
            setMintInfo({...mintInfo, minting: false})
            toast("Transaction failed, please try again!", {
                type: "error",
            });
        }// @ts-ignore
    }

    /*Finding wallet mint group*/
    useEffect(() => {
        try {
            // @ts-ignore
            WL.find((address) => address === wallet.account?.publicKey.toString()) ? setGroup('WL') : WL.find((address) => address === wallet.account?.address.toString()) ? setGroup('WL') : setGroup('Public')
        }
        catch (e) {
            /*Insert toast wallet error*/
            console.log(e)
        }
        console.log(wallet);
    }, [wallet]);

    return (
        <>
            {!wallet.connected && (
                <button disabled={!wallet.connected} className={"w-[150px] tablet:w-[200px] h-[50px] border rounded-[5px] hover:bg-[#6BE2CE] hover:text-black duration-500 hover:border-none"}>Wallet Not Connected</button>
            )}
            {wallet.connected && (
                group === "WL" ? <button disabled={!wallet.connected} className={"w-[150px] tablet:w-[200px] h-[50px] border rounded-[5px] hover:bg-[#6BE2CE] hover:text-black duration-500 hover:border-none"} onClick={mint}>
                        {wallet.connected && (time < start) ? "WL" : "Public"}
                    </button>
                    :
                    group === "Public" && <button disabled={!wallet.connected || (time < start)} className={"w-[150px] tablet:w-[200px] h-[50px] border rounded-[5px] hover:bg-[#6BE2CE] hover:text-black duration-500 hover:border-none"} onClick={mint}>
                        {wallet.connected && time < start ? "Public mint is not live" : "Public"}
                    </button>
            )}
        </>
    );
}

export default MintButton