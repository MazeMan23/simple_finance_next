import { NextIntlProvider } from "next-intl";
import React from "react";
import { SSRProvider } from "react-aria";
import "../styles/globals.css";

function SimpleFinance({ Component, pageProps }) {
  return (
    <SSRProvider>
      <NextIntlProvider messages={pageProps.messages}>
        <Component {...pageProps} />
      </NextIntlProvider>
    </SSRProvider>
  );
}

export default SimpleFinance;
