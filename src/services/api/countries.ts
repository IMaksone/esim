import { Country } from "src/types/country";
import fetcher from "./tools/fetcher";
import { ApiRequest } from "./types";

const COUNTRIES_FOR_SALE = "countries_for_sale";

export const getApiCountries: ApiRequest<Country[]> = async (lang: string) => {
  try {
    const endpoint = COUNTRIES_FOR_SALE + "?lang=" + lang;

    const response = await fetcher(endpoint);
    if (response[0]) {
      return { data: response[0] };
    } else {
      throw new Error("ERROR getApiCountries: no data");
    }
  } catch (error: any) {
    return { error: error?.message };
  }
};
