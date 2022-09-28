import { NextIntlProvider } from "next-intl";
import Head from "next/head";
import React from "react";
import { SSRProvider } from "react-aria";
import "../styles/globals.css";

function SimpleFinance({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Head>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <title>{pageProps.title}</title>
      </Head>
      <NextIntlProvider messages={pageProps.messages}>
        <Component {...pageProps} />
      </NextIntlProvider>
    </SSRProvider>
  );
}

export default SimpleFinance;
