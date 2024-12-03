import Image from "next/image";

import useCommonTranslation from "src/hooks/useCommonTranslation";
import { Country } from "src/types/country";

import classes from "./country-element.module.scss";
import Link from "next/link";

type CountryProps = {
  data: Country;
};

export default function CountryElement({ data }: CountryProps) {
  const commonTranslation = useCommonTranslation();

  return (
    <Link href={data.url} className={classes.wrapper}>
      <div>
        {/* <Image /> */}
        <div>
          <p>{data.country}</p>
          <small>{commonTranslation("from")} €5/GB</small>
        </div>
      </div>
      <Image src="/svg/arrow.svg" alt="arrow" width={5} height={10} />
    </Link>
  );
}
