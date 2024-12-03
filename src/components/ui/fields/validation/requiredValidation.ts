import { FIELD_ERROR_KEYS } from "src/enums/fields";


export default function requiredValidation(
  value: string,
  required?: boolean
) {
  if (required && !value) {
    return FIELD_ERROR_KEYS.REQUIRED
  }
}