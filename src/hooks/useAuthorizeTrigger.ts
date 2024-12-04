import { useCallback, useEffect, useState } from "react";
import { getSessionToken } from "src/helper/sessionStorage/auth";
import {
  useDispatchAuthorize,
  useDispatchUnauthorize,
} from "src/store/dispatch/dispatchAuth";
import { useAuthorizedSelector } from "src/store/selector/authSelector";

const INTERVAL = 1000;

export default function useAuthorizeTrigger() {
  const checkAuth = useCheckAuth();

  const [firstRenderCalled, setFirstRenderCalled] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(checkAuth, INTERVAL);

    return () => {
      clearInterval(Number(intervalId));
    };
  }, [checkAuth]);

  useEffect(() => {
    if (!firstRenderCalled) {
      setFirstRenderCalled(true);

      checkAuth();
    }
  }, [firstRenderCalled, checkAuth]);
}

const useCheckAuth = () => {
  const authorized = useAuthorizedSelector();

  const dispatchAuthorize = useDispatchAuthorize();
  const dispatchUnauthorize = useDispatchUnauthorize();

  const callback = useCallback(() => {
    const token = getSessionToken();

    if (token && !authorized) {
      dispatchAuthorize();
    } else if (!token && authorized) {
      dispatchUnauthorize();
    }
  }, [authorized, dispatchAuthorize, dispatchUnauthorize]);

  return callback;
};
