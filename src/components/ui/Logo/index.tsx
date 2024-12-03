import Image from "next/image";
import Link from "next/link";

import classes from "./logo.module.scss";

export default function Logo() {
  return (
    <Link href="/" className={classes.logo}>
      <Image src="/svg/logo.svg" width={103} height={30} alt="logo" />
    </Link>
  );
}
