import { useTranslation } from "next-i18next";
import { useCountryListSelector } from "src/store/selector/countriesSelector";

export default function Home() {
  const { t } = useTranslation("common");

  const countriesList = useCountryListSelector();

  console.log(countriesList);

  return <>{t("title")}</>;
}
