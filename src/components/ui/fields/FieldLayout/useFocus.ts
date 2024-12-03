import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import clickInsideHandler from 'src/helper/clickInsideHandler'


export default function useFocus(disabled?: boolean) {
  const inputRef = useRef<any>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const [focused, setFocused] = useState(false)

  useKeydownTab(inputRef, focused, setFocused)

  const setFocus = (focus: boolean) => {
    if (focus) {
      inputRef?.current?.focus()
    } else {
      inputRef?.current?.blur()
    }

    setFocused(focus)
  }

  useEffect(() => {
    if (!disabled) {
      return clickInsideHandler(wrapperRef, focused, setFocus)
    } else if (focused) {
      setFocus(false)
    }
  }, [focused, disabled])

  return { inputRef, wrapperRef, focused }
}

const useKeydownTab = (
  inputRef: MutableRefObject<any>,
  focused: boolean,
  setFocused: Dispatch<SetStateAction<boolean>>
) => {
  const checkFocus = useCallback(() => {
    setTimeout(() => {
      if (document.activeElement === inputRef.current && !focused) {
        setFocused(true)
      } else if (document.activeElement !== inputRef.current && focused) {
        setFocused(false)
      }
    })
  }, [inputRef, focused, setFocused])

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.code === 'Tab') {
        checkFocus()
      }
    }

    addEventListener('keydown', listener)

    return () => {
      removeEventListener('keydown', listener)
    }
  }, [checkFocus])
}
