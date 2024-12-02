import countriesSlice from "../slices/countriesSlice";
import createUseStoreDispatch from "./common/createUseStoreDispatch";

const { setCountryList } = countriesSlice.actions;

const useDispatchSetCountryList = createUseStoreDispatch(setCountryList);

export { useDispatchSetCountryList };
