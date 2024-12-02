import useStoreSelector from "./common/useStoreSelector";

const useAuthorizedSelector = () =>
  useStoreSelector((state) => state.auth.authorized);

export { useAuthorizedSelector };
