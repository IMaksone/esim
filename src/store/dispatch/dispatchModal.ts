import modalSlice from "../slices/modalsSlice";
import createUseStoreDispatch from "./common/createUseStoreDispatch";

const { openAuthModal, hideAuthModal } = modalSlice.actions;

const useDispatchOpenAuthModal = createUseStoreDispatch(openAuthModal);

const useDispatchHideAuthModal = createUseStoreDispatch(hideAuthModal);

export { useDispatchOpenAuthModal, useDispatchHideAuthModal };
