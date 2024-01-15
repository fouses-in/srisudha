import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import Layout from "../components/layout/layout";
import wrapper from "../store/reducers";

import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="keywords" content="Keywords" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <title>Srisudha Consultancy</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Choose your requirement here " />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/icon-64*64.png"
          rel="apple-touch-icon"
          sizes="64x64"
        />
        <link
          href="/icons/icon-32*32.png"
          rel="apple-touch-icon"
          sizes="32x32"
        />
        <link
          href="/icons/icon-128*128.png"
          rel="apple-touch-icon"
          sizes="128x128"
        />
        <link
          href="/icons/icon-256*256.png"
          rel="apple-touch-icon"
          sizes="256x256"
        />
        <link
          href="/icons/icon-512*512.png"
          rel="apple-touch-icon"
          sizes="512x512"
        />

        <meta name="theme-color" content="#317EFB" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default wrapper.withRedux(MyApp);
