import authSlice from "../slices/authSlice";
import createUseStoreDispatch from "./common/createUseStoreDispatch";

const { authorize, unauthorize } = authSlice.actions;

const useDispatchAuthorize = createUseStoreDispatch<void>(authorize);

const useDispatchUnauthorize = createUseStoreDispatch<void>(unauthorize);

export { useDispatchAuthorize, useDispatchUnauthorize };
