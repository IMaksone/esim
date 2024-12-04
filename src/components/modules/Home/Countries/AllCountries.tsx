import { useMemo } from "react";

import { useCountryListSelector } from "src/store/selector/countriesSelector";
import CountryElement from "src/components/ui/CountryElement";
import VirtualList from "src/components/ui/VirtualList";
import { useScreenWidthGreaterThan } from "src/hooks/useScreenWidthGreaterThan";
import { Country } from "src/types/country";

import classes from "./countries.module.scss";

export default function AllCountries() {
  const inColumn = !useScreenWidthGreaterThan(650);

  const countryList = useCountryListSelector();

  return inColumn ? (
    <VirtualList
      className={classes.content}
      list={countryList}
      element={CountryElement}
    />
  ) : (
    <TwoElementVirtualList />
  );
}

const TwoElementVirtualList = () => {
  const list = useTwoElementList();

  return (
    <VirtualList className={classes.content} list={list} element={TwoElement} />
  );
};

const useTwoElementList = () => {
  const countryList = useCountryListSelector();

  const getList = () => {
    const list = [];

    for (let index = 0; index < countryList.length; index += 2) {
      const elementData = [countryList[index]];

      if (countryList[index + 1]) {
        elementData.push(countryList[index + 1]);
      }

      list.push(elementData);
    }

    return list;
  };

  const list = useMemo(getList, [countryList]);

  return list;
};

type TwoElementProps = {
  data: Country[];
};

const TwoElement = ({ data }: TwoElementProps) => {
  return (
    <div className={classes.two_element}>
      <CountryElement data={data[0]} />
      <CountryElement data={data[1]} />
    </div>
  );
};
