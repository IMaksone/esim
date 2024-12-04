import useCommonTranslation from "src/hooks/useCommonTranslation";

import classes from "./how-it-work.module.scss";

const elements = [
  {
    id: 0,
    titleKey: "veryLongTitle",
  },
  {
    id: 1,
    titleKey: "veryLongTitle",
  },
  {
    id: 2,
    titleKey: "veryLongTitle",
  },
];

export default function Content() {
  const commonTranslation = useCommonTranslation();

  const rendered = elements.map((el) => (
    <div key={el.id} className={classes.element}>
      <p>{commonTranslation(el.titleKey as any)}</p>
      <div></div>
    </div>
  ));

  return <div className={classes.content}>{rendered}</div>;
}
