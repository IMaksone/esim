import { CountriesState } from "src/store/types";
import { SliceSeter } from "../types";
import { Country } from "src/types/country";

type SetFieldByKey = SliceSeter<CountriesState, Country[]>;

const setCountryList: SetFieldByKey = (state, { payload }) => {
  state.countryList = payload;

  return state;
};

export { setCountryList };
