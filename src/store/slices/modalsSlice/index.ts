import { createSlice } from "@reduxjs/toolkit";

import { openAuthModal, hideAuthModal } from "./seters";
import { ModalsState } from "src/store/types";
import { SLICE_NAMES } from "../enums";
import createInitSlice from "../createInitSlice";

const initialState: ModalsState = {
  authModal: { visible: false },
};

const modalsSlice = createSlice({
  name: SLICE_NAMES.MODALS,
  initialState,
  reducers: {
    openAuthModal,
    hideAuthModal,
    initModals: createInitSlice(initialState)
  },
});

export default modalsSlice;
