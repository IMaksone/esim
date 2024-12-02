import { SliceSeter } from "./types";

export default function createInitSlice<State>(
  initialState: State
): SliceSeter<State, State> {
  return (state, { payload }) => {
    return { ...initialState, ...state, ...payload };
  };
}
