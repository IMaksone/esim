import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

import { StoreDispatch } from "src/store/makeStore";

type Seter<Payload> = ActionCreatorWithPayload<Payload>;

const useStoreDispatch = () => useDispatch<StoreDispatch>();

export default function createUseStoreDispatch<Payload>(seter: Seter<Payload>) {
  return () => {
    const dispatch = useStoreDispatch();

    const callback = (value: Payload) => dispatch(seter(value));

    const dispatchFieldValue = useCallback(callback, [dispatch]);

    return dispatchFieldValue;
  };
}
