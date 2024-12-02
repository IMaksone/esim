import { NextPageContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Home from "src/components/modules/Home";
import { getApiCountries } from "src/services/api/countries";

export default Home;

export async function getStaticProps(context: NextPageContext) {
  const { locale } = context;

  const countries = await getApiCountries(locale);

  const initialState = {
    countries: {
      countryList: countries,
    },
  };

  const translation =
    locale && (await serverSideTranslations(locale, ["common"]));

  return {
    props: {
      ...translation,
      initialState,
    },
  };
}
