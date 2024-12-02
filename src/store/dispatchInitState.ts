import { InitialState, MyStore } from "./makeStore";
import fieldsSlice from "./slices/fieldsSlice";
import countriesSlice from "./slices/countriesSlice";
import modalsSlice from "./slices/modalsSlice";
import authSlice from "./slices/authSlice";

export default function dispatchInitState(
  store: MyStore,
  initialState: InitialState
) {
  const { countries, fields, modals, auth } = initialState;

  const dispatch = store.dispatch;

  if (countries) {
    const { initCountries } = countriesSlice.actions;
    dispatch(initCountries(countries));
  }
  if (fields) {
    const { initFields } = fieldsSlice.actions;
    dispatch(initFields(fields));
  }
  if (modals) {
    const { initModals } = modalsSlice.actions;
    dispatch(initModals(modals));
  }
  if (auth) {
    const { initAuth } = authSlice.actions;
    dispatch(initAuth(auth));
  }
}
