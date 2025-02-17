"use client";
import ThemeButton from "@/ui/ThemeButton";
import { useAuth } from "@/contexts/AuthContext";
import UserPreview from "./UserPreview/UserPreview";
import BorderedButton from "@/ui/BorderedButton";
import RegisterModal from "@/components/Modals/AuthModal/RegisterModal/RegisterModal";
import SigninModal from "@/components/Modals/AuthModal/SigninModal/SigninModal";
import { useAuthModal } from "@/contexts/AuthModalContext";
import AuthRequiredModal from "@/components/Modals/AuthRequiredModal/AuthRequiredModal";
import ModalContainer from "@/ui/ModalContainer";

function UserAuth() {
  const {
    isRegisterModalOpen,
    setIsRegisterModalOpen,
    isSigninModalOpen,
    setIsSigninModalOpen,
    isLoginPromptOpen,
    setIsLoginPromptOpen,
  } = useAuthModal();

  const { loggedInUser } = useAuth();

  return (
    <div className="w-1/3">
      <div className="flex items-center justify-end gap-4">
        {!loggedInUser && (
          <>
            <BorderedButton onClick={() => setIsSigninModalOpen(true)}>
              Sign in
            </BorderedButton>
            <ThemeButton
              onClick={() => setIsRegisterModalOpen(true)}
              hoverBgColor="hover:bg-purple-600"
            >
              Create Account
            </ThemeButton>
          </>
        )}

        {loggedInUser && (
          <>
            <ThemeButton>Subscribe RA</ThemeButton>
            <UserPreview loggedInUser={loggedInUser} />
          </>
        )}
      </div>

      {isRegisterModalOpen && (
        <RegisterModal closeModal={() => setIsRegisterModalOpen(false)} />
      )}
      {isSigninModalOpen && (
        <SigninModal closeModal={() => setIsSigninModalOpen(false)} />
      )}
      {isLoginPromptOpen && (
        <ModalContainer onClick={() => setIsLoginPromptOpen(false)}>
          <AuthRequiredModal />
        </ModalContainer>
      )}
    </div>
  );
}

export default UserAuth;
