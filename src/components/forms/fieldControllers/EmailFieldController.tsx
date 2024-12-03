import { FIELD_NAMES } from "src/enums/fields";
import useFieldController from "./useFieldController";
import EmailField from "src/components/ui/fields/EmailField";

type EmailFieldControllerProps = {
  id: string;
  name: FIELD_NAMES;
  label: string;
  required?: boolean;
};

export default function EmailFieldController({
  id,
  name,
  label,
  required,
}: EmailFieldControllerProps) {
  const { value, errorMessage, valueHandler, clear } = useFieldController(name);

  return (
    <EmailField
      id={id}
      name={name}
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
