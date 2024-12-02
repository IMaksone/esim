import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

import { fontInter } from "src/initial/fonts";
import { emptyInitialI18NextConfig } from "src/initial/i18next";

import "src/styles/globals.scss";

function App({ Component, pageProps }: AppProps) {
  return (
    <main className={fontInter.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default appWithTranslation(App, emptyInitialI18NextConfig);
