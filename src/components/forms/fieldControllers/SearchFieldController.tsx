import { FIELD_NAMES } from "src/enums/fields";
import useFieldController from "./useFieldController";
import TextField from "src/components/ui/fields/TextField";

import classes from './search-field-controller.module.scss'

type PhoneFieldControllerProps = {
  id?: string;
  name: FIELD_NAMES;
  label: string;
  required?: boolean;
};

export default function SearchFieldController({
  id,
  name,
  label,
  required,
}: PhoneFieldControllerProps) {
  const { value, errorMessage, valueHandler, clear } = useFieldController(name);

  return (
    <TextField
      id={id}
      name={name}
      className={classes.search_field}
      label={label}
      value={value || ""}
      errorMessage={errorMessage}
      validate={{
        required,
      }}
      valueHandler={valueHandler}
      clear={clear}
    />
  );
}
