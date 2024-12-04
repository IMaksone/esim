import { Country } from "src/types/country";

import classes from "./country-page.module.scss";

type TitleProps = {
  country: Country;
};

export default function Title({ country }: TitleProps) {
  return <h1 className={classes.title}>{country.country}</h1>;
}
