import { getApiCountries } from "src/services/api/countries";
import getCountryName from "./getCountryName";

type Path = {
  params: {
    id: string;
  };
};

const getCountryPaths = async () => {
  let paths: Path[] = [];

  try {
    const countries = await getApiCountries("en");

    if (countries.data) {
      paths = countries.data.map((country) => ({
        params: { id: getCountryName(country) },
      }));
    }
  } catch {}

  // We'll prerender only these paths at build time.
  // { fallback: 'blocking' } will server-render pages
  // on-demand if the path doesn't exist.
  return paths;
};

export default getCountryPaths;
