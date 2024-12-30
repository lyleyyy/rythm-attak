"use client";
import RegisterModal from "@/components/Modals/AuthModal/RegisterModal/RegisterModal";
import SigninModal from "@/components/Modals/AuthModal/SigninModal/SigninModal";
import Button from "@/ui/Button";
import { useState } from "react";

function UserAuth() {
  const [register, setRegister] = useState(false);
  const [signin, setSignin] = useState(false);

  return (
    <div className="w-1/3">
      <div className="flex justify-end gap-4">
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
      </div>

      {register && <RegisterModal closeModal={() => setRegister(false)} />}
      {signin && <SigninModal closeModal={() => setSignin(false)} />}
    </div>
  );
}

export default UserAuth;
