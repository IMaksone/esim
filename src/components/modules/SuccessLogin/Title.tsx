import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import useCommonTranslation from "src/hooks/useCommonTranslation";
import { getSessionToken } from "src/helper/sessionStorage/auth";
import { useAuthorizedSelector } from "src/store/selector/authSelector";

import classes from "./success-login.module.scss";

export default function Title() {
  const router = useRouter();

  const commonTranslation = useCommonTranslation();

  const authorized = useAuthorizedSelector();

  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    const token = getSessionToken();

    if (!token) router.push("/");

    if (token && email !== token) setEmail(token);
  }, [authorized, email, router]);

  return (
    <h1 className={classes.title}>
      {commonTranslation("successfullyLoggedEmail") + " " + email}
    </h1>
  );
}
