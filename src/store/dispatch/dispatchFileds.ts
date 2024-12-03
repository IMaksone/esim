import fieldsSlice from "../slices/fieldsSlice";
import createUseStoreDispatch from "./common/createUseStoreDispatch";

const { setFieldByName, setFieldValueByName, setFieldErrorByName } =
  fieldsSlice.actions;

const useDispatchFieldByName = createUseStoreDispatch(setFieldByName);

const useDispatchFieldValueByName =
  createUseStoreDispatch(setFieldValueByName);

const useDispatchFieldErrorByName =
  createUseStoreDispatch(setFieldErrorByName);

export {
  useDispatchFieldByName,
  useDispatchFieldValueByName,
  useDispatchFieldErrorByName,
};
