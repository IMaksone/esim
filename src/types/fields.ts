import { FIELD_ERROR_KEYS } from "src/enums/fields";

export type ValueHandler = (value: string, errorKey?: FIELD_ERROR_KEYS) => void;
