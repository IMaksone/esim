import { Dispatch, FC, SetStateAction, useEffect, useRef } from "react";
import clickInsideHandler from "src/helper/clickInsideHandler";

type DropdownProps = {
  className?: string;
  open: boolean;
  title: FC<any>;
  content: FC<any>;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export default function Dropdown({
  className,
  open,
  title: Title,
  content: Content,
  setOpen,
}: DropdownProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return clickInsideHandler(rootRef, open, setOpen);
  }, [open, setOpen]);

  return (
    <div ref={rootRef} className={className}>
      <Title />
      {open && <Content />}
    </div>
  );
}
