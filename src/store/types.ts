import { FIELD_NAMES } from "src/enums/fields";
import { Country } from "src/types/country";

export type CountriesState = {
  countryList: Country[];
};

export type ModalsState = {
  authModal: { visible: boolean };
};

export type FieldData = {
  value: string;
  error: string;
};

export type FieldsState = {
  [key in FIELD_NAMES]?: FieldData;
};

export type AuthState = {
  authorized: boolean;
};
