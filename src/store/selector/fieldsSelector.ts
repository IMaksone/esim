import { FIELD_NAMES } from "src/enums/fields";
import useStoreSelector from "./common/useStoreSelector";

const useFieldByNameSelector = (name: FIELD_NAMES) =>
  useStoreSelector((state) => state.fields[name]);

const useFieldValueByNameSelector = (name: FIELD_NAMES) =>
  useStoreSelector((state) => state.fields[name]?.value || "");

const useFieldErrorByNameSelector = (name: FIELD_NAMES) =>
  useStoreSelector((state) => state.fields[name]?.error);

export {
  useFieldByNameSelector,
  useFieldValueByNameSelector,
  useFieldErrorByNameSelector,
};
