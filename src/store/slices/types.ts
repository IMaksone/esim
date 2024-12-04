import { PayloadAction } from "@reduxjs/toolkit";

export type SliceSeter<State, Payload = void> = (
  state: State,
  { payload }: PayloadAction<Payload>
) => State;
