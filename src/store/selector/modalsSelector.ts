import useStoreSelector from "./common/useStoreSelector";

const useAuthModalVisibleSelector = () =>
  useStoreSelector((state) => state.modals.authModal.visible);

export { useAuthModalVisibleSelector };
