import { ReactNode } from "react";

import classNames from "src/helper/classNames";

import classes from "./papper.module.scss";

type PapperProps = {
  className?: string;
  children: ReactNode;
};

export default function Papper({ className = "", children }: PapperProps) {
  const insideClassName = classNames(classes.papper, className);

  return <div className={insideClassName}>{children}</div>;
}
