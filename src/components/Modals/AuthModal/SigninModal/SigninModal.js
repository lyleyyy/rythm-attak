import ModalCloseBtn from "../../ModalCloseBtn/ModalCloseBtn";
import AuthModalContainer from "../AuthModalContainer/AuthModalContainer";

function SigninModal({ onClick }) {
  return (
    <AuthModalContainer>
      <ModalCloseBtn onClick={onClick} />
      SigninModal
    </AuthModalContainer>
  );
}

export default SigninModal;
