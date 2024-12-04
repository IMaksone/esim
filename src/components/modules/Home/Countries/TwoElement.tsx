import CountryElement from "src/components/ui/CountryElement";
import { Country } from "src/types/country";
import { VIRTUAL_LIST_PARAMS } from "src/constants/virtual";

import classes from "./countries.module.scss";

type TwoElementProps = {
  data: Country[];
};

export default function TwoElement({ data }: TwoElementProps) {
  return (
    <div
      className={classes.two_element}
      style={{ height: VIRTUAL_LIST_PARAMS.elFullHeight }}
    >
      <CountryElement data={data[0]} />
      <CountryElement data={data[1]} />
    </div>
  );
}
