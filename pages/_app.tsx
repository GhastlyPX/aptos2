import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout";
import {
    WalletProvider,
    HippoWalletAdapter,
    AptosWalletAdapter,
    HippoExtensionWalletAdapter,
    MartianWalletAdapter,
    FewchaWalletAdapter,
    PontemWalletAdapter,
    SpikaWalletAdapter,
    RiseWalletAdapter,
    FletchWalletAdapter,
    TokenPocketWalletAdapter,
    ONTOWalletAdapter,
    BloctoWalletAdapter,
    SafePalWalletAdapter
} from '@manahippo/aptos-wallet-adapter';
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {

    const wallets = [
        new HippoWalletAdapter(),
        new MartianWalletAdapter(),
        new AptosWalletAdapter(),
        new FewchaWalletAdapter(),
        new HippoExtensionWalletAdapter(),
        new PontemWalletAdapter(),
        new SpikaWalletAdapter(),
        new RiseWalletAdapter(),
        new FletchWalletAdapter(),
        new TokenPocketWalletAdapter(),
        new ONTOWalletAdapter(),
        new BloctoWalletAdapter(),
        new SafePalWalletAdapter(),
    ];

  return (
      <WalletProvider
          wallets={wallets}
          autoConnect={true} /** allow auto wallet connection or not **/
          onError={(error: Error) => {
              console.log('Handle Error Message', error);
          }}>
          <title>Immers3 x AYTLO</title>
      <Layout>
      <Component {...pageProps} />
      </Layout>
      </WalletProvider>
  )
}

export default MyApp
