import { useTranslation } from "next-i18next";

export default function useCommonTranslation() {
  const { t } = useTranslation("common");

  return t;
}
