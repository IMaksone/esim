import { createSlice } from "@reduxjs/toolkit";

import { authorize, unauthorize } from "./seters";
import { AuthState } from "src/store/types";
import { SLICE_NAMES } from "../enums";
import createInitSlice from "../createInitSlice";

export const initialState: AuthState = {
  authorized: false,
};

const authSlice = createSlice({
  name: SLICE_NAMES.AUTH,
  initialState,
  reducers: {
    authorize,
    unauthorize,    
    initAuth: createInitSlice(initialState)
  },
});

export default authSlice;
