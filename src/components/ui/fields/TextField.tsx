import { ChangeEventHandler, FocusEventHandler } from "react";

import Field from "./Field";
import { CommonFieldsProps } from "./types";
import requiredValidation from "./validation/requiredValidation";

type NewFieldProps = {
  validate?: {
    required?: boolean;
  };
} & CommonFieldsProps;

export default function TextField({
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
}: NewFieldProps) {
  const { required } = validate || {};

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const targetValue = event.target.value;

    valueHandler(targetValue);
  };

  const onBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    const targetValue = event.target.value;

    const errorKey = requiredValidation(targetValue, required);

    valueHandler(targetValue, errorKey);
  };

  return (
    <Field
      id={id}
      name={name}
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
