import { useMemo, useState } from "react";

import Dropdown from "src/components/ui/Dropdown";
import SearchFieldController from "src/components/forms/fieldControllers/SearchFieldController";
import { FIELD_NAMES } from "src/enums/fields";
import useCommonTranslation from "src/hooks/useCommonTranslation";
import { useCountryListSelector } from "src/store/selector/countriesSelector";
import VirtualList from "src/components/ui/VirtualList";
import { useFieldValueByNameSelector } from "src/store/selector/fieldsSelector";
import CountryElement from "src/components/ui/CountryElement";

import classes from "./search-wrapper.module.scss";

export default function SearchWrapper() {
  const [open, setOpen] = useState(false);

  return (
    <Dropdown
      className={classes.dropdown}
      open={open}
      setOpen={setOpen}
      title={Title}
      content={Content}
    />
  );
}

const Title = () => {
  const commonTranslation = useCommonTranslation();

  const label = commonTranslation("findDirection");

  return <SearchFieldController name={FIELD_NAMES.SEARCH} label={label} />;
};

const Content = () => {
  const commonTranslation = useCommonTranslation();

  const list = useList();

  const rendered = list.length ? (
    <VirtualList
      className={classes.virtual_list}
      list={list}
      element={CountryElement}
    />
  ) : (
    <p className={classes.not_found}>{commonTranslation("notFound")}</p>
  );

  return <div className={classes.content}>{rendered}</div>;
};

const useList = () => {
  const countryList = useCountryListSelector();
  const searchValue = useFieldValueByNameSelector(FIELD_NAMES.SEARCH);

  const list = searchValue
    ? countryList.filter(
        (country) =>
          country.country.indexOf(searchValue) >= 0 ||
          country.iso.indexOf(searchValue) >= 0
      )
    : [];

  return useMemo(() => list, [searchValue, countryList]);
};
