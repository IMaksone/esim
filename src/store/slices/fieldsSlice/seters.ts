import { FieldData, FieldKeys, FieldsState } from "src/store/types";
import { SliceSeter } from "../types";

type SetFieldByKey = SliceSeter<
  FieldsState,
  {
    key: FieldKeys;
    data: FieldData;
  }
>;

const setFieldByKey: SetFieldByKey = (state, { payload }) => {
  const { key, data } = payload;

  state[key] = data;

  return state;
};

type SetFieldValueByKey = SliceSeter<
  FieldsState,
  {
    key: FieldKeys;
    value: string;
  }
>;

const setFieldValueByKey: SetFieldValueByKey = (state, { payload }) => {
  const { key, value } = payload;

  if (state[key]) {
    state[key].value = value;
  } else {
    state[key] = {
      value,
      error: "",
    };
  }

  return state;
};

type SetFieldErrorByKey = SliceSeter<
  FieldsState,
  {
    key: FieldKeys;
    error: string;
  }
>;

const setFieldErrorByKey: SetFieldErrorByKey = (state, { payload }) => {
  const { key, error } = payload;

  if (state[key]) {
    state[key].error = error;
  } else {
    state[key] = {
      error,
      value: "",
    };
  }

  return state;
};

export { setFieldByKey, setFieldValueByKey, setFieldErrorByKey };
