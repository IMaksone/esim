import { NextPageContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import SuccessLogin from "src/components/modules/SuccessLogin";

export default SuccessLogin;

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
