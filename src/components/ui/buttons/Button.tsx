import { MouseEventHandler } from "react";
import { ButtonProps } from "./types";

export default function Button({ className, children, onClick }: ButtonProps) {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();

    onClick(event);
  };

  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
}
