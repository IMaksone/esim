import Button from "./Button";
import { ButtonProps } from "./types";
import classNames from "src/helper/classNames";

import classes from "./icon-button.module.scss";

export default function PrimaryButton({
  className,
  children,
  onClick,
}: ButtonProps) {
  const insideClassName = classNames(classes.button, className)

  return (
    <Button className={insideClassName} onClick={onClick}>
      {children}
    </Button>
  );
}
