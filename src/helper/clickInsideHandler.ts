import { RefObject } from "react";

const clickInsideHandler = (
  wrapperRef: RefObject<HTMLElement>,
  flag: boolean,
  setFlag: (flag: boolean) => void
) => {
  const handler = (event: MouseEvent) => {
    const outside = !wrapperRef?.current?.contains(event.target as Node);

    if (flag && outside) {
      setFlag(false);
    } else if (!flag && !outside) {
      setFlag(true);
    }
  };

  document.addEventListener("click", handler);

  return () => {
    document.removeEventListener("click", handler);
  };
};

export default clickInsideHandler;
