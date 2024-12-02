import { Country, CountriesState } from "src/store/types";
import { SliceSeter } from "../types";

type SetFieldByKey = SliceSeter<CountriesState, Country[]>;

const setCountryList: SetFieldByKey = (state, { payload }) => {
  state.countryList = payload;

  return state;
};

export { setCountryList };
