import fetcher from "./tools/fetcher";
import { ApiRequest } from "./types";

const COUNTRIES_FOR_SALE = "countries_for_sale";

export const getApiCountries: ApiRequest = async (lang: string) => {
  try {
    const endpoint = COUNTRIES_FOR_SALE + "?lang=" + lang;

    const response = await fetcher(endpoint);

    return { data: response };
  } catch (error: any) {
    return { error: error?.message };
  }
};
