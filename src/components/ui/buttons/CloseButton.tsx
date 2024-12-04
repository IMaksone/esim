import Button from "./Button";
import { ButtonProps } from "./types";
import classNames from "src/helper/classNames";
import Image from "next/image";

import classes from "./close-button.module.scss";

export default function CloseButton({
  className = "",
  onClick,
}: ButtonProps) {
  const insideClassName = classNames(classes.button, className);

  return (
    <Button className={insideClassName} onClick={onClick}>
      <Image src="svg/close.svg" alt="close" width={16} height={16} />
    </Button>
  );
}
