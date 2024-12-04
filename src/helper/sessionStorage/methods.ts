import { SESSION_STORAGE_KEYS } from "src/enums/sessionStorage"

export const setSessionStorageItem = (
  key: SESSION_STORAGE_KEYS,
  value: string
) => {
  if (typeof sessionStorage === 'undefined') return

  sessionStorage.setItem(key, value)
}

export const getSessionStorageItem = (key: SESSION_STORAGE_KEYS) => {
  if (typeof sessionStorage === 'undefined') return

  const value = sessionStorage.getItem(key)

  return value
}

export const removeSessionStorageItem = (key: SESSION_STORAGE_KEYS) => {
  if (typeof sessionStorage === 'undefined') return

  sessionStorage.removeItem(key)
}
