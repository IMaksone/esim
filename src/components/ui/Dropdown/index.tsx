import { Dispatch, ReactNode, SetStateAction, useEffect, useRef } from "react";

type DropdownProps = {
  open: boolean;
  title: ReactNode;
  content: ReactNode;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export default function Dropdown({
  open,
  title,
  content,
  setOpen,
}: DropdownProps) {
  const rootRef = useRef(null);

  useEffect(() => {
    if (!open || !rootRef?.current) return;

    const handler = (event: MouseEvent) => {
      if (!rootRef?.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, [open]);

  return (
    <div ref={rootRef}>
      {title}
      {open && <div>{content}</div>}
    </div>
  );
}
