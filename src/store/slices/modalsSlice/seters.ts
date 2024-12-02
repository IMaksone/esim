import { ModalsState } from "src/store/types";

const openAuthModal = (state: ModalsState) => {
  state.authModal.visible = true;

  return state;
};

const hideAuthModal = (state: ModalsState) => {
  state.authModal.visible = false;

  return state;
};

export { openAuthModal, hideAuthModal };
