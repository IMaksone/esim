import PrimaryButton from "src/components/ui/buttons/PrimaryButton";
import useCommonTranslation from "src/hooks/useCommonTranslation";
import { useAuthorizedSelector } from "src/store/selector/authSelector";

export default function AuthButton() {
  const translation = useCommonTranslation();

  const authorized = useAuthorizedSelector();

  const handleClick = () => {};

  const text = authorized ? translation("logout") : translation("login");

  return <PrimaryButton onClick={handleClick}>{text}</PrimaryButton>;
}
