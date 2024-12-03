import { FIELD_ERROR_KEYS } from "src/enums/fields";
import useCommonTranslation from "./useCommonTranslation";
import { useCallback } from "react";

export default function useGetFieldErrorByKey() {
  const commonTranslation = useCommonTranslation();

  const callback = (key: FIELD_ERROR_KEYS) => {
    return commonTranslation("fieldErrors." + key);
  };

  return useCallback(callback, [commonTranslation]);
}
