import authSlice from "../slices/authSlice";
import createUseStoreDispatch from "./common/createUseStoreDispatch";

const { authorize, unauthorize } = authSlice.actions;

const useDispatchAuthorize = createUseStoreDispatch(authorize);

const useDispatchUnauthorize = createUseStoreDispatch(unauthorize);

export { useDispatchAuthorize, useDispatchUnauthorize };
