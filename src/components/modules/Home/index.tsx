import { useTranslation } from "next-i18next";

import DefaultLayout from "src/components/layout/Defaultlayout";

export default function Home() {
  const { t } = useTranslation("common");

  return <DefaultLayout>{t("title")}</DefaultLayout>;
}
