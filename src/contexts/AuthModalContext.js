"use client";
import { createContext, useContext, useState } from "react";

const AuthModalContext = createContext();

function AuthModalProvider({ children }) {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isSigninModalOpen, setIsSigninModalOpen] = useState(false);
  const [isLoginPromptOpen, setIsLoginPromptOpen] = useState(false);

  return (
    <AuthModalContext.Provider
      value={{
        isRegisterModalOpen,
        setIsRegisterModalOpen,
        isSigninModalOpen,
        setIsSigninModalOpen,
        isLoginPromptOpen,
        setIsLoginPromptOpen,
      }}
    >
      {children}
    </AuthModalContext.Provider>
  );
}

function useAuthModal() {
  const context = useContext(AuthModalContext);
  if (context === undefined) return;
  return context;
}

export { AuthModalProvider, useAuthModal };
