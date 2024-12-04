import {
  setSessionStorageItem,
  getSessionStorageItem,
  removeSessionStorageItem,
} from "./methods";
import { SESSION_STORAGE_KEYS } from "src/enums/sessionStorage";

export const setSessionToken = (value: string) =>
  setSessionStorageItem(SESSION_STORAGE_KEYS.AUTH_TOKEN, value);

export const getSessionToken = () =>
  getSessionStorageItem(SESSION_STORAGE_KEYS.AUTH_TOKEN);

export const removeSessionToken = () =>
  removeSessionStorageItem(SESSION_STORAGE_KEYS.AUTH_TOKEN);
