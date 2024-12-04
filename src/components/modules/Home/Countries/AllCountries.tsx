import { useMemo } from "react";

import { useCountryListSelector } from "src/store/selector/countriesSelector";
import CountryElement from "src/components/ui/CountryElement";
import VirtualList from "src/components/ui/VirtualList";
import TwoElement from "./TwoElement";
import useInColumn from "./useInColumn";
import getTwoElementsArr from "src/helper/getTwoElementsArr";

import classes from "./countries.module.scss";

export default function AllCountries() {
  const inColumn = useInColumn();

  const countryList = useCountryListSelector();

  return inColumn ? (
    <VirtualList
      className={classes.all_countries}
      list={countryList}
      element={CountryElement}
    />
  ) : (
    <TwoElementVirtualList />
  );
}

const TwoElementVirtualList = () => {
  const list = useTwoCountryList();

  return (
    <VirtualList className={classes.content} list={list} element={TwoElement} />
  );
};

function useTwoCountryList() {
  const countryList = useCountryListSelector();

  const list = useMemo(() => getTwoElementsArr(countryList), [countryList]);

  return list;
}
