import {WalletButton} from "./WalletButton";
import {useEffect} from "react";
import {useWallet} from "@manahippo/aptos-wallet-adapter";

export default function Layout({children}: {children: React.ReactNode}) {

    const wallet = useWallet();
    useEffect(() => {
        if (!wallet.autoConnect && wallet.wallet?.adapter) {
            wallet.connect();
        }
    }, [wallet.autoConnect, wallet.wallet, wallet.connect]);


    return (
        <div className={"flex flex-col min-h-screen w-screen bg-background"}>
            <div className={"flex flex-col items-center"}>
                {/*Header*/}
                <div className={"flex flex-row sticky top-0 flex-col h-[100px] w-[100%] z-10 text-[14px]"}>
                    <div className={"flex h-full items-center"}>
                        {/*End*/}

                        {/*Logo*/}
                        <div className={"flex px-10 tablet:absolute tablet:justify-center w-full"}>
                            <img src={"/i3.png"} className={"w-[100px]"} alt={"immers3"}/>
                        </div>
                        {/*End logo*/}
                        {/*Wallet (fix)*/}
                        <div className={"flex tablet:absolute right-0 px-10"}>
                            <WalletButton/>
                        </div>
                    </div>
                </div>
                {/*End header*/}
            </div>
            {children}
            {/*Footer*/}
            <footer className="flex w-[100%] items-center justify-end px-6 gap-6 h-[70px]">
                <a target="_blank" rel="noopener noreferrer" href={"https://discord.gg/immers3"}><img src={"icon_clyde_white_RGB.svg"} className={"w-[14px] h-[14px]"} alt={"discord"}/></a>
                <a target="_blank" rel="noopener noreferrer" href={"https://twitter.com/Immers3Labs"}><img src={"Twitter.svg"} className={"w-[14px] h-[14px]"} alt={"twitter"}/></a>
            </footer>
            {/*End footer*/}
        </div>
    )
}