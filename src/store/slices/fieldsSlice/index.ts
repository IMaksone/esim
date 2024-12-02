import { createSlice } from "@reduxjs/toolkit";

import { setFieldByKey, setFieldValueByKey, setFieldErrorByKey } from "./seters";
import { FieldsState } from "src/store/types";
import { SLICE_NAMES } from "../enums";
import createInitSlice from "../createInitSlice";

const initialState: FieldsState = {};

const fieldsSlice = createSlice({
  name: SLICE_NAMES.FIELDS,
  initialState,
  reducers: {
    setFieldByKey,
    setFieldValueByKey,
    setFieldErrorByKey,
    initFields: createInitSlice(initialState)
  },
});

export default fieldsSlice;
