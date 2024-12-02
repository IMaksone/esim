import useStoreSelector from "./common/useStoreSelector";

const useCountryListSelector = () =>
  useStoreSelector((state) => state.countries.countryList);

export { useCountryListSelector };
