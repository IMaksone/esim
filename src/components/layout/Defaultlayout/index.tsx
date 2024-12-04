import { ReactNode } from "react";

import Header from "../Header";

import classes from "./default-layout.module.scss";
import HowItWork from "../HowItWork";

type DefaultLayoutProps = {
  children: ReactNode;
};

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <section className={classes.layout}>
      <Header />
      <section className={classes.content}>
        {children}
        <HowItWork />
      </section>
    </section>
  );
}
