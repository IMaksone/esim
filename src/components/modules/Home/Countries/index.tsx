import { useState } from "react";

import useCommonTranslation from "src/hooks/useCommonTranslation";
import Papper from "src/components/ui/Papper";
import PopularCountries from "./PopularCountries";
import PrimaryButton from "src/components/ui/buttons/PrimaryButton";
import AllCountries from "./AllCountries";

import classes from "./countries.module.scss";

export default function Title() {
  const commonTranslation = useCommonTranslation();

  const [showAll, setShowAll] = useState(false);

  const handleClick = () => {
    setShowAll(!showAll);
  };

  const title = showAll
    ? commonTranslation("allCountries")
    : commonTranslation("popularCountries");

  const buttonText = showAll
    ? commonTranslation("showPopularCountries")
    : commonTranslation("showAllCountries");

  const renderedContent = showAll ? <AllCountries /> : <PopularCountries />;

  return (
    <Papper>
      <h4 className={classes.title}>{title}</h4>
      {renderedContent}
      <PrimaryButton className={classes.button} onClick={handleClick}>
        {buttonText}
      </PrimaryButton>
    </Papper>
  );
}
