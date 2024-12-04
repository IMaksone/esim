import { useRouter } from "next/router";

import { useDispatchHideAuthModal } from "src/store/dispatch/dispatchModal";
import ModalLayout from "./ModalLayout";
import useCommonTranslation from "src/hooks/useCommonTranslation";
import EmailFieldController from "src/components/forms/fieldControllers/EmailFieldController";
import { FIELD_NAMES } from "src/enums/fields";
import PrimaryButton from "src/components/ui/buttons/PrimaryButton";
import { useFieldByNameSelector } from "src/store/selector/fieldsSelector";
import { setSessionToken } from "src/helper/sessionStorage/auth";

import classes from "./auth-modal.module.scss";

export default function AuthModal() {
  const commonTranslation = useCommonTranslation();

  const hide = useDispatchHideAuthModal();

  const label = commonTranslation("enterYourEmail");

  return (
    <ModalLayout hide={hide}>
      <h3 className={classes.title}>{commonTranslation("loginToContinue")}</h3>
      <EmailFieldController name={FIELD_NAMES.EMAIL} label={label} />
      <Button />
    </ModalLayout>
  );
}

const Button = () => {
  const router = useRouter();

  const commonTranslation = useCommonTranslation();

  const email = useFieldByNameSelector(FIELD_NAMES.EMAIL);

  const handleClick = () => {
    if (!email?.value || email?.error) return;

    setSessionToken(email.value);

    router.push("/success-login");
  };

  return (
    <PrimaryButton className={classes.button} onClick={handleClick}>
      {commonTranslation("continue")}
    </PrimaryButton>
  );
};
