import type { NextConfig } from "next";
// eslint-disable-next-line @typescript-eslint/no-var-requires
import { i18n } from "./next-i18next.config";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  i18n,
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default nextConfig;
