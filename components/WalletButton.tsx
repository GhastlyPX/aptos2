import { Dialog, Transition } from "@headlessui/react";
import {
    AptosWalletName, Coin98WalletName, FewchaWalletName, HippoWalletName,
    MartianWalletName,
    PontemWalletName, RiseWalletName,
    useWallet
} from "@manahippo/aptos-wallet-adapter"
import {Fragment, useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export const WalletButton = () => {
    const wallet = useWallet()
    const {connect, disconnect, connected} = useWallet();
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    async function connectMartian() {
        try {
            if (wallet.connected) {
                await disconnect();
            }
            {
                await connect(MartianWalletName)
                closeModal()
            }
        } catch (e) {
            toast("Martian wallet not installed!", {
                type: "error",
            });
        }
    }

    async function connectPontem() {
        try {
            if (wallet.connected) {
                await disconnect();
            }
            {
                await connect(PontemWalletName)
                closeModal()
            }
        } catch (e) {
            toast("Pontem wallet not installed!", {
                type: "error",
            });
        }
    }

    async function connectAptos() {
        try {
            if (wallet.connected) {
                await disconnect();
            }
            {
                await connect(AptosWalletName)
                closeModal()
            }
        } catch (e) {
            toast("Aptos wallet not installed!", {
                type: "error",
            });
        }
    }

    async function connectRise() {
        try {
            if (wallet.connected) {
                await disconnect();
            }
            {
                await connect(RiseWalletName)
                closeModal()
            }
        } catch (e) {
            toast("Rise wallet not installed!", {
                type: "error",
            });
        }
    }

    async function connectCoin98() {
        try {
            if (wallet.connected) {
                await disconnect();
            }
            {
                await connect(Coin98WalletName)
                closeModal()
            }
        } catch (e) {
            toast("Coin98 wallet not installed!", {
                type: "error",
            });
        }
    }

    async function connectFewcha() {
        try {
            if (wallet.connected) {
                await disconnect();
            }
            {
                await connect(FewchaWalletName)
                closeModal()
            }
        } catch (e) {
            toast("Fewcha wallet not installed!", {
                type: "error",
            });
        }
    }

    async function connectHippo() {
        try {
            if (wallet.connected) {
                await disconnect();
            }
            {
                await connect(HippoWalletName)
                closeModal()
            }
        } catch (e) {
            toast("Hippo wallet not installed!", {
                type: "error",
            });
        }
    }

    async function disconnectWallet() {
        try {
            if (wallet.connected) {
                await disconnect();
                closeModal()
            }
        } catch (e) {
            toast("Error disconnecting wallet!", {
                type: "error",
            });
        }
    }

    return (
        <>
                <button type="button" onClick={openModal} className="w-[150px] h-[48px] text-[16px] font-weight-[600] outline outline-[1px] rounded-[5px] hover:bg-[#6BE2CE] hover:outline-none hover:text-black">
                   {// @ts-ignore
                       connected ? ((wallet.account?.publicKey.toString()).substring(0,6)+"...") : "Connect Wallet"}
                </button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto bg-black bg-opacity-[50%]">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-[5px] bg-[#0F0F10] outline outline-[1px] p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title as="h3" className="flex text-lg font-medium leading-6 text-white justify-center">
                                        Connect Wallet
                                    </Dialog.Title>
                                    <div className="flex flex-col items-start mt-5 text-white">
                                        <button onClick={() => connectAptos() } className={"flex flex-row items-center w-[100%] p-4 rounded-[5px] hover:bg-black hover:bg-opacity-[40%]"}><div className={"flex items-center gap-5"}><img src={"/Petra.svg"} className={"h-[50px]"} alt={"Petra"}/><h1>Petra Wallet</h1></div></button>
                                        <button onClick={() => connectMartian() } className={"flex flex-row items-center w-[100%] p-4 rounded-[5px] hover:bg-black hover:bg-opacity-[40%]"}><div className={"flex items-center gap-5"}><img src={"/martian.svg"} className={"h-[50px]"} alt={"Martian"}/><h1>Martian Wallet</h1></div></button>
                                        <button onClick={() => connectPontem() } className={"flex flex-row items-center w-[100%] p-4 rounded-[5px] hover:bg-black hover:bg-opacity-[40%]"}><div className={"flex items-center gap-5"}><img src={"/Pontem.svg"} className={"h-[50px]"} alt={"Pontem"}/><h1>Pontem Wallet</h1></div></button>
                                        <button onClick={() => connectRise() } className={"flex flex-row items-center w-[100%] p-4 rounded-[5px] hover:bg-black hover:bg-opacity-[40%]"}><div className={"flex items-center gap-5"}><img src={"/Rise.png"} className={"h-[50px]"} alt={"Rise"}/><h1>Rise Wallet</h1></div></button>
                                        <button onClick={() => connectFewcha() } className={"flex flex-row items-center w-[100%] p-4 rounded-[5px] hover:bg-black hover:bg-opacity-[40%]"}><div className={"flex items-center gap-5"}><img src={"/Fewcha.svg"} className={"h-[50px]"} alt={"Fewcha"}/><h1>Fewcha Wallet</h1></div></button>
                                        <button onClick={() => connectCoin98() } className={"flex flex-row items-center w-[100%] p-4 rounded-[5px] hover:bg-black hover:bg-opacity-[40%]"}><div className={"flex items-center gap-5"}><img src={"/coin98.svg"} className={"h-[50px]"} alt={"Coin98"}/><h1>Coin98 Wallet</h1></div></button>
                                        <button onClick={() => connectHippo() } className={"flex flex-row items-center w-[100%] p-4 rounded-[5px] hover:bg-black hover:bg-opacity-[40%]"}><div className={"flex items-center gap-5"}><img src={"/Hippo.png"} className={"h-[50px]"} alt={"Hippo"}/><h1>Hippo Wallet</h1></div></button>
                                        <button onClick={() => disconnectWallet() } className={"flex flex-row items-center w-[100%] p-4 rounded-[5px] hover:bg-black hover:bg-opacity-[40%] justify-center"}><div className={"flex items-center gap-5 font-semibold"}><h1>Disconnect Wallet</h1></div></button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            <ToastContainer />
        </>
    )
}