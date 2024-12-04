import PrimaryButton from "src/components/ui/buttons/PrimaryButton";
import { removeSessionToken } from "src/helper/sessionStorage/auth";
import useCommonTranslation from "src/hooks/useCommonTranslation";
import { useDispatchUnauthorize } from "src/store/dispatch/dispatchAuth";
import { useDispatchOpenAuthModal } from "src/store/dispatch/dispatchModal";
import { useAuthorizedSelector } from "src/store/selector/authSelector";

export default function AuthButton() {
  const translation = useCommonTranslation();

  const authorized = useAuthorizedSelector();
  const openAuthModal = useDispatchOpenAuthModal();
  const unauthorize = useDispatchUnauthorize();

  const handleClick = () => {
    if (!authorized) {
      openAuthModal();
    } else {
      removeSessionToken();
      unauthorize();
    }
  };

  const text = authorized ? translation("logout") : translation("login");

  return <PrimaryButton onClick={handleClick}>{text}</PrimaryButton>;
}
