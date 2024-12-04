import { useCallback } from "react";

import { FIELD_ERROR_KEYS } from "src/enums/fields";
import useCommonTranslation from "./useCommonTranslation";

export default function useGetFieldErrorByKey() {
  const commonTranslation = useCommonTranslation();

  const callback = (key: FIELD_ERROR_KEYS) => {
    return commonTranslation("fieldErrors." + key as any);
  };

  return useCallback(callback, [commonTranslation]);
}
