import { useAuthModalVisibleSelector } from "src/store/selector/modalsSelector";
import AuthModal from "./AuthModal";

export default function Modal() {
  const authModal = useAuthModalVisibleSelector();

  const rendered = authModal && <AuthModal />;

  return rendered;
}
