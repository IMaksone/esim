import { createSlice } from "@reduxjs/toolkit";

import { setCountryList } from "./seters";
import { CountriesState } from "src/store/types";
import { SLICE_NAMES } from "../enums";
import createInitSlice from "../createInitSlice";

const initialState: CountriesState = {
  countryList: [],
};

const countriesSlice = createSlice({
  name: SLICE_NAMES.COUNTRIES,
  initialState,
  reducers: {
    setCountryList,
    initCountries: createInitSlice(initialState)
  },
});

export default countriesSlice;
