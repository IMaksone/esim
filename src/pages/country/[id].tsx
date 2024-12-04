import { GetServerSidePropsContext, GetStaticPaths } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import CountryPage from "src/components/modules/CountryPage";
import getCountryName from "src/helper/getCountryName";
import getCountryPaths from "src/helper/getCountryPaths";
import { getApiCountries } from "src/services/api/countries";

export default CountryPage;

// export const getStaticPaths: GetStaticPaths = async () => {
//   let paths = await getCountryPaths();

//   // We'll prerender only these paths at build time.
//   // { fallback: 'blocking' } will server-render pages
//   // on-demand if the path doesn't exist.
//   return { paths, fallback: true };
// };

export const getServerSideProps = async ({
  params,
  locale,
}: GetServerSidePropsContext) => {
  try {
    const countries = await getApiCountries(locale);

    if (!countries.data) {
      throw new Error(countries.error);
    }

    const country = countries.data.find(
      (country) => getCountryName(country) === params?.id
    );

    if (!country) {
      throw new Error("no country data");
    }

    const translation =
      locale && (await serverSideTranslations(locale, ["common"]));

    return {
      props: { ...translation, country },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};
