import { Country } from "src/types/country";

const getCountryName = (country: Country) => country?.url?.split("/")?.[2];

export default getCountryName;
