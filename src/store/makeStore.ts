import {
  combineReducers,
  configureStore,
  UnknownAction,
} from "@reduxjs/toolkit";
import countriesSlice from "./slices/countriesSlice";
import modalsSlice from "./slices/modalsSlice";
import fieldsSlice from "./slices/fieldsSlice";
import authSlice from "./slices/authSlice";

type MyStore = ReturnType<typeof makeStore>;
type StoreDispatch = MyStore["dispatch"];
type StoreState = ReturnType<MyStore["getState"]>;
type InitialState = Partial<StoreState>;

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
  });

const rootReducer = (state: any, action: UnknownAction) =>
  combinedReducer(state, action);

const combinedReducer = combineReducers({
  [countriesSlice.name]: countriesSlice.reducer,
  [modalsSlice.name]: modalsSlice.reducer,
  [fieldsSlice.name]: fieldsSlice.reducer,
  [authSlice.name]: authSlice.reducer,
});

export default makeStore;

export type { MyStore, StoreDispatch, StoreState, InitialState };
