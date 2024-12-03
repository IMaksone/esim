import { FIELD_ERROR_KEYS } from "src/enums/fields";

export const emailRegexp = /@/;

export default function emailValidation(value: string) {
  if (value && !emailRegexp.test(value)) return FIELD_ERROR_KEYS.EMAIL;
}
