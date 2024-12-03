import Logo from "src/components/ui/Logo";
import LanguageSelect from "./LanguageSelect";
import AuthButton from "../AuthButton";

import classes from "./header.module.scss";

export default function Header() {
  return (
    <nav className={classes.header}>
      <div className={classes.header_content}>
        <Logo />
        <div className={classes.buttons}>
          <LanguageSelect />
          <AuthButton />
        </div>
      </div>
    </nav>
  );
}
