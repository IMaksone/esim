import { useMemo } from "react";

import { useCountryListSelector } from "src/store/selector/countriesSelector";
import CountryElement from "src/components/ui/CountryElement";
import { VIRTUAL_LIST_PARAMS } from "src/constants/virtual";
import useInColumn from "./useInColumn";
import TwoElement from "./TwoElement";
import getTwoElementsArr from "src/helper/getTwoElementsArr";

import classes from "./countries.module.scss";

const POPULAR_COUNTRIES_COUNT = 12;

export default function PopularCountries() {
  const inColumn = useInColumn();

  const rendered = inColumn ? <ColumnCountries /> : <TwoRowCountries />;

  return <div className={classes.poppular_countries}>{rendered}</div>;
}

const ColumnCountries = () => {
  const popularCountries = usePopularCountries();

  return popularCountries.map((country) => (
    <div key={country.id} style={{ height: VIRTUAL_LIST_PARAMS.elFullHeight }}>
      <CountryElement data={country} />
    </div>
  ));
};

const TwoRowCountries = () => {
  const popularCountries = usePopularCountries();

  const list = useMemo(
    () => getTwoElementsArr(popularCountries),
    [popularCountries]
  );

  return list.map((data) => <TwoElement key={data[0].id} data={data} />);
};

const usePopularCountries = () => {
  const countryList = useCountryListSelector();

  return useMemo(
    () => countryList.slice(0, POPULAR_COUNTRIES_COUNT),
    [countryList]
  );
};
