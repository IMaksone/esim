import { useMemo } from "react";

import { useCountryListSelector } from "src/store/selector/countriesSelector";
import CountryElement from "src/components/ui/CountryElement";
import { VIRTUAL_LIST_PARAMS } from "src/constants/virtual";

import classes from "./countries.module.scss";

const POPULAR_COUNTRIES_COUNT = 12;

export default function PopularCountries() {
  const popularCountries = usePopularCountries();

  const rendered = popularCountries.map((country) => (
    <div key={country.id} style={{ height: VIRTUAL_LIST_PARAMS.elFullHeight }}>
      <CountryElement data={country} />
    </div>
  ));

  return <div className={classes.content}>{rendered}</div>;
}

const usePopularCountries = () => {
  const countryList = useCountryListSelector();

  return useMemo(
    () => countryList.slice(0, POPULAR_COUNTRIES_COUNT),
    [countryList]
  );
};
