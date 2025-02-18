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
import { redirect } from "next/navigation";

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

  async function handleSubscribe() {
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}), // 可根據需要傳遞參數
      });

      if (!res.ok) {
        throw new Error("Failed to create checkout session");
      }

      const { url } = await res.json();
      window.location.href = url; // 跳轉到 Stripe Checkout 頁面
    } catch (error) {
      console.error("Checkout error:", error);
    }
  }

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
            <ThemeButton onClick={handleSubscribe}>Subscribe RA</ThemeButton>
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
