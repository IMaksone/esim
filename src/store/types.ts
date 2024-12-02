// TODO типизировать

export type Country = {
  [key in string]?: any
}

export type CountriesState = {
  countryList: Country[];
};

export type ModalsState = {
  authModal: { visible: boolean };
};

export type FieldKeys = "email" | "search";

export type FieldData = {
  value: string;
  error: string;
};

export type FieldsState = {
  [key in FieldKeys]?: FieldData;
};

export type AuthState = {
  authorized: boolean;
};
