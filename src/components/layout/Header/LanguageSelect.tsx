import { useRouter } from "next/router";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

import Dropdown from "src/components/ui/Dropdown";
import Papper from "src/components/ui/Papper";

import classes from "./language-select.module.scss";

export default function LanguageSelect() {
  const [open, setOpen] = useState(false);

  const renderTitle = () => <Title open={open} />;
  const renderContent = () => <Content setOpen={setOpen} />;

  return (
    <Dropdown
      className={classes.dropdown}
      open={open}
      setOpen={setOpen}
      title={renderTitle}
      content={renderContent}
    />
  );
}

type TitleProps = {
  open: boolean;
};

const Title = ({ open }: TitleProps) => {
  const router = useRouter();
  const locale = router.locale;

  const className = open ? classes.title_open : classes.title;

  return <small className={className}>{locale}</small>;
};

type ContentProps = {
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const Content = ({ setOpen }: ContentProps) => {
  const router = useRouter();
  const locales = router.locales;
  const currentLocale = router.locale;

  const handleClick = () => {
    setOpen(false);
  };

  const rendered = locales
    ?.filter((locale) => locale !== currentLocale)
    .map((locale) => (
      <Link
        key={locale}
        href={router.asPath || router.pathname}
        locale={locale}
        onClick={handleClick}
      >
        {locale}
      </Link>
    ));

  return <div className={classes.content}>{rendered}</div>;
};
