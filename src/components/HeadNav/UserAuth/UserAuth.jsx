"use client";
import ThemeButton from "@/ui/ThemeButton";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import UserPreview from "./UserPreview/UserPreview";
import BorderedButton from "@/ui/BorderedButton";
import RegisterModal from "@/components/Modals/AuthModal/RegisterModal/RegisterModal";
import SigninModal from "@/components/Modals/AuthModal/SigninModal/SigninModal";

function UserAuth() {
  const [register, setRegister] = useState(false);
  const [signin, setSignin] = useState(false);

  const { loggedInUser } = useAuth();

  return (
    <div className="w-1/3">
      <div className="flex items-center justify-end gap-4">
        {!loggedInUser && (
          <>
            <BorderedButton onClick={() => setSignin(true)}>
              Sign in
            </BorderedButton>
            <ThemeButton
              onClick={() => setRegister(true)}
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

      {register && <RegisterModal closeModal={() => setRegister(false)} />}
      {signin && <SigninModal closeModal={() => setSignin(false)} />}
    </div>
  );
}

export default UserAuth;
