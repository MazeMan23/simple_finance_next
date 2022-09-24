import { NextIntlProvider } from "next-intl";
import React from "react";
import "../styles/globals.css";

function SimpleFinance({ Component, pageProps }) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}

export default SimpleFinance;
