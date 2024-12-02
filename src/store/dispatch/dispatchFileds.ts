import fieldsSlice from "../slices/fieldsSlice";
import createUseStoreDispatch from "./common/createUseStoreDispatch";

const { setFieldByKey, setFieldValueByKey, setFieldErrorByKey } =
  fieldsSlice.actions;

const useDispatchSetFieldByKey = createUseStoreDispatch(setFieldByKey);

const useDispatchSetFieldValueByKey =
  createUseStoreDispatch(setFieldValueByKey);

const useDispatchSetFieldErrorByKey =
  createUseStoreDispatch(setFieldErrorByKey);

export {
  useDispatchSetFieldByKey,
  useDispatchSetFieldValueByKey,
  useDispatchSetFieldErrorByKey,
};
