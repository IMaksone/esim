import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

import { fontInter } from "src/initial/fonts";
import { emptyInitialI18NextConfig } from "src/initial/i18next";
import StoreProvider from "src/store";

import "src/styles/globals.scss";

function App({ Component, pageProps }: AppProps) {
  const initialState = pageProps.initialState;

  return (
    <main className={fontInter.className}>
      <StoreProvider initialState={initialState}>
        <Component {...pageProps} />
      </StoreProvider>
    </main>
  );
}

export default appWithTranslation(App, emptyInitialI18NextConfig);
