import useCommonTranslation from "src/hooks/useCommonTranslation";

import classes from "./home.module.scss";

export default function Title() {
  const commonTranslation = useCommonTranslation();

  return <h1 className={classes.title}>{commonTranslation("title")}</h1>;
}
