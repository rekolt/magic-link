import React from "react";
import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "./styles/globals.css";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/ThirdwebGuideFooter";
import { MagicConnector } from "@thirdweb-dev/react/evm/connectors/magic";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Goerli;

const magicLinkConnector = new MagicConnector({
  options: {
    apiKey: "pk_live_7FBA950F2ED93105",
    rpcUrls: {
      [ChainId.Goerli]: "https://goerli.magic.io/rpc",
    },
  },
});

// Array of wallet connectors you want to use for your dApp.
const connectors = [magicLinkConnector];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      desiredChainId={activeChainId}
      walletConnectors={connectors}
    >
      <Head>
        <title>thirdweb Magic.Link Wallet Connector</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Learn How To Use Thirdweb's useMagic Hook To Connect User's To Your dApp Via Their Email, Phone Number, Or Social Media Account."
        />
        <meta
          name="keywords"
          content="Thirdweb, Magic, Magic.Link, Wallet Connector, Social Media Wallet Connector, Email Address Wallet Connector, Phone Number Wallet Connector"
        />
      </Head>
      <Component {...pageProps} />
      <ThirdwebGuideFooter />
    </ThirdwebProvider>
  );
}

export default MyApp;
