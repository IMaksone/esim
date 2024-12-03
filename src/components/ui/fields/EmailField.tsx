import { ChangeEventHandler, FocusEventHandler } from "react";

import Field from "./Field";
import { CommonFieldsProps } from "./types";
import requiredValidation from "./validation/requiredValidation";
import emailValidation from "./validation/emailValidation";

type FieldProps = {
  validate?: {
    required?: boolean;
  };
} & CommonFieldsProps;

export default function EmailField({
  id,
  name,
  className,
  label,
  value,
  readOnly,
  disabled,
  errorMessage,
  validate,
  valueHandler,
}: FieldProps) {
  const { required } = validate || {};

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const targetValue = event.target.value;

    valueHandler(targetValue);
  };

  const onBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    const targetValue = event.target.value;

    const errorKey =
      requiredValidation(targetValue, required) || emailValidation(targetValue);

    valueHandler(targetValue, errorKey);
  };

  return (
    <Field
      id={id}
      name={name}
      type="email"
      className={className}
      label={label}
      value={value}
      required={required}
      readOnly={readOnly}
      disabled={disabled}
      errorMessage={errorMessage}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
}
