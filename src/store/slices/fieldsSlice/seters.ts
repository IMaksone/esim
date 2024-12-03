import { FieldData, FieldsState } from "src/store/types";
import { SliceSeter } from "../types";
import { FIELD_NAMES } from "src/enums/fields";

type SetFieldByKeyPayload = {
  name: FIELD_NAMES;
  data: FieldData;
};

type SetFieldByName = SliceSeter<FieldsState, SetFieldByKeyPayload>;

const setFieldByName: SetFieldByName = (state, { payload }) => {
  const { name, data } = payload;

  state[name] = data;

  return state;
};

type SetFieldValueByName = SliceSeter<
  FieldsState,
  {
    name: FIELD_NAMES;
    value: string;
  }
>;

const setFieldValueByName: SetFieldValueByName = (state, { payload }) => {
  const { name, value } = payload;

  if (state[name]) {
    state[name].value = value;
  } else {
    state[name] = {
      value,
      error: "",
    };
  }

  return state;
};

type SetFieldErrorByName = SliceSeter<
  FieldsState,
  {
    name: FIELD_NAMES;
    error: string;
  }
>;

const setFieldErrorByName: SetFieldErrorByName = (state, { payload }) => {
  const { name, error } = payload;

  if (state[name]) {
    state[name].error = error;
  } else {
    state[name] = {
      error,
      value: "",
    };
  }

  return state;
};

export { setFieldByName, setFieldValueByName, setFieldErrorByName };
