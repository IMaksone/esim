
import { FIELD_NAMES } from "src/enums/fields";
import useGetFieldErrorByKey from "src/hooks/useFieldErrorByKey";
import { useDispatchFieldErrorByName, useDispatchFieldValueByName } from "src/store/dispatch/dispatchFileds";
import { useFieldErrorByNameSelector, useFieldValueByNameSelector } from "src/store/selector/fieldsSelector";
import { ValueHandler } from "src/types/fields";

export default function useFieldController(name: FIELD_NAMES) {
  const getFieldErrorByKey = useGetFieldErrorByKey();

  const value = useFieldValueByNameSelector(name);
  const errorMessage = useFieldErrorByNameSelector(name);

  const dispatchFieldValue = useDispatchFieldValueByName();
  const dispatchFieldError = useDispatchFieldErrorByName();

  const valueHandler: ValueHandler = (newValue, errorKey) => {
    dispatchFieldValue({ name, value: newValue });

    if (errorKey) {
      const newErrorMessage = getFieldErrorByKey(errorKey);

      if (newErrorMessage !== errorMessage)
        dispatchFieldError({ name, error: newErrorMessage });
    }
  };

  const clear = () => {
    dispatchFieldValue({ name, value: "" });
  };

  return { value, errorMessage, valueHandler, clear };
}
