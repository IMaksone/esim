import Image from "next/image";
import Link from "next/link";

import useCommonTranslation from "src/hooks/useCommonTranslation";
import { Country } from "src/types/country";

import classes from "./country-element.module.scss";

type CountryProps = {
  data: Country;
};

export default function CountryElement({ data }: CountryProps) {
  const commonTranslation = useCommonTranslation();

  const renderedFlag = (
    <Image
      src={`/flags/${data.iso}.svg`}
      className={classes.flag}
      alt={data.iso + " icon"}
      width={32}
      height={32}
    />
  );

  const smallText = commonTranslation("from") + " €5/GB";

  return (
    <Link href={data.url} className={classes.wrapper}>
      <div className={classes.content}>
        {renderedFlag}
        <div className={classes.text}>
          <div>
            <p>{data.country}</p>
            <small>{smallText}</small>
          </div>
        </div>
      </div>
      <Image src="/svg/arrow.svg" alt="arrow" width={5} height={10} />
    </Link>
  );
}
