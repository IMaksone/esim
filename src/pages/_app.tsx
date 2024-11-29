import type { AppProps } from "next/app";
import { appWithTranslation, UserConfig } from "next-i18next";
import { i18n } from "../../next-i18next.config.js";

import "src/styles/globals.css";

const emptyInitialI18NextConfig: UserConfig = {
  i18n: {
    defaultLocale: i18n.defaultLocale,
    locales: i18n.locales,
  },
};

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(App, emptyInitialI18NextConfig);
