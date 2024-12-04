import useCommonTranslation from "src/hooks/useCommonTranslation";
import Papper from "src/components/ui/Papper";
import Content from "./Content";

import classes from "./how-it-work.module.scss";

export default function HowItWork() {
  const commonTranslation = useCommonTranslation();

  return (
    <Papper className={classes.wrapper}>
      <h4 className={classes.title}>{commonTranslation("howDoesThisWork")}</h4>
      <Content />
    </Papper>
  );
}
