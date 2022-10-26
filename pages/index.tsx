import type { NextPage } from 'next'
import MintButton from "../components/MintButton";
import {useEffect, useState} from "react";
import {AptosClient} from "aptos";
import {NODE_URL} from "../components/candyMachineInfo";
import cmHelper from "../components/candyMachineHelper"
import Image from "next/dist/client/future/image";

const Home: NextPage = () => {

    const aptosClient = new AptosClient(NODE_URL);

    const [candyMachineData, setCandyMachineData] = useState(null)
    const [isFetchingCmData, setIsFetchingCmData] = useState(false)
    const autoCmRefresh = 100000;
    const [timeLeftToMint, setTimeLeftToMint] = useState({presale: "", public: "", timeout: null})

    async function fetchCandyMachineData(indicateIsFetching = false) {
        if (indicateIsFetching) setIsFetchingCmData(true)
        const cmResourceAccount = await cmHelper.getCandyMachineResourceAccount();
        if (cmResourceAccount === null) {
            // @ts-ignore
            setCandyMachineData({...candyMachineData, data: {}})
            setIsFetchingCmData(false)
            return
        }

        const collectionInfo = await cmHelper.getCandyMachineCollectionInfo(cmResourceAccount);
        const configData = await cmHelper.getCandyMachineConfigData(collectionInfo.candyMachineConfigHandle);
        // @ts-ignore
        setCandyMachineData({...candyMachineData, data: {cmResourceAccount, ...collectionInfo, ...configData}})
        setIsFetchingCmData(false)
    }

    useEffect(() => {
        fetchCandyMachineData(true)
        setInterval(fetchCandyMachineData, autoCmRefresh)
    }, [])

    return (
        <div className={"flex flex-1 w-[100%] justify-center items-center"}>
            {/*Wrapper*/}
            <div className={"flex w-[100%] tablet:max-w-[650px] text-[12px] justify-center px-10 items-center"}>
                <div className={"flex flex-col tablet:flex-row border rounded-[5px] w-[100%] items-center p-10 justify-between"}>
                    <a target="_blank" rel="noopener noreferrer" href={"https://twitter.com/Immers3Labs"}>{/*Twitter link*/}
                        <Image src={"/immers3mint.png"} width={200} height={200} alt={"abc"} className={"max-w-[200px] max-h-[200px] rounded-[5px] aspect-square"} />
                    </a>
                    <div className={"flex flex-col h-[200px] justify-between items-center justify-center"}>
                        <div className={"flex flex-col gap-2 justify-center"}>
                            <h1 className={"flex justify-center text-[28px]"}>TEST</h1>
                        </div>
                        <div className={"flex flex-row gap-10 items-center"}>
                            <div className={"flex flex-col gap-2 items-center"}>
                                <h1 className={"text-[18px]"}>Supply</h1>
                                <h1 className={"text-[14px] text-[#B4B4B4]"}>5</h1>
                            </div>
                            <div className={"flex flex-col gap-2 items-center"}>
                                <h1 className={"text-[18px]"}>Price</h1>
                                <h1 className={"flex text-[14px] text-[#B4B4B4] w-[50px] justify-center"}>0 $APT</h1>
                            </div>
                            <div className={"flex flex-col gap-2 items-center"}>
                                <h1 className={"text-[18px]"}>Minted</h1>
                                <h1 className={"text-[14px] text-[#B4B4B4]"}>{// @ts-ignore
                                    candyMachineData?.data?.numUploadedTokens}/5</h1>
                            </div>
                        </div>
                        <div className={"flex justify-center text-[16px]"}>
                            <MintButton // @ts-ignore
                                candyMachineData={candyMachineData}/>
                        </div>
                    </div>
                </div>
            </div>
            {/*End Wrapper*/}
        </div>
        /*End Wrapper*/
    )
}

export default Home
