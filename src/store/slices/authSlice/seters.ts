import { AuthState } from "src/store/types";
import { SliceSeter } from "../types";

const authorize: SliceSeter<AuthState> = (state: AuthState) => {
  state.authorized = true;

  return state;
};

const unauthorize: SliceSeter<AuthState> = (state: AuthState) => {
  state.authorized = false;

  return state;
};

export { authorize, unauthorize };
