"use client";
import RegisterModal from "@/components/Modals/AuthModal/RegisterModal/RegisterModal";
import SigninModal from "@/components/Modals/AuthModal/SigninModal/SigninModal";
import Button from "@/ui/Button";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import UserPreview from "./UserPreview/UserPreview";

function UserAuth() {
  const [register, setRegister] = useState(false);
  const [signin, setSignin] = useState(false);

  const { loggedInUser } = useAuth();

  return (
    <div className="w-1/3">
      <div className="flex items-center justify-end gap-4">
        {!loggedInUser && (
          <>
            <Button
              borderWidth={true}
              bgColor="black"
              isHover={true}
              hoverTextColor="hover:text-black"
              hoverBgColor="hover:bg-white"
              onClick={() => setSignin(true)}
            >
              Sign in
            </Button>
            <Button
              onClick={() => setRegister(true)}
              hoverBgColor="hover:bg-purple-600"
            >
              Create Account
            </Button>
          </>
        )}

        {loggedInUser && (
          <>
            <Button
              bgColor="bg-purple-700"
              textColor="text-white"
              hoverBgColor="hover:bg-purple-600"
            >
              Subscribe RA
            </Button>
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
