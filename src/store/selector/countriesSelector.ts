import { FieldKeys } from "../types";
import useStoreSelector from "./common/useStoreSelector";

const useFieldByKeySelector = (key: FieldKeys) =>
  useStoreSelector((state) => state.fields[key]);

const useFieldValueByKeySelector = (key: FieldKeys) =>
  useStoreSelector((state) => state.fields[key]?.value);

const useFieldErrorByKeySelector = (key: FieldKeys) =>
  useStoreSelector((state) => state.fields[key]?.error);

export {
  useFieldByKeySelector,
  useFieldValueByKeySelector,
  useFieldErrorByKeySelector,
};
