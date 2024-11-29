import { NextPageContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Home() {
  const { t } = useTranslation('common');

  return <>{t("title")}</>;
}

export async function getStaticProps(context: NextPageContext) {
  const { locale } = context;

  const translation =
    locale && (await serverSideTranslations(locale, ["common"]));

  return {
    props: {
      ...translation,
    },
  };
}
