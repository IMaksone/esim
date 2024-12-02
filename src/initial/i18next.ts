
import { UserConfig } from "next-i18next";
import { i18n } from "../../next-i18next.config.js";

export const emptyInitialI18NextConfig: UserConfig = {
  i18n: {
    defaultLocale: i18n.defaultLocale,
    locales: i18n.locales,
  },
};
