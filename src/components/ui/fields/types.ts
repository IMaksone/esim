import { ValueHandler } from "src/types/fields";

export type CommonFieldsProps = {
  id?: string;
  name?: string;
  className?: string;
  label?: string;
  value: string;
  readOnly?: boolean;
  disabled?: boolean;
  errorMessage?: string;
  valueHandler: ValueHandler;
  clear: () => void;
};
