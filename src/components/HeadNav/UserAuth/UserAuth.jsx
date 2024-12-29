"use client";
import RegisterModal from "@/components/Modals/AuthModal/RegisterModal/RegisterModal";
import SigninModal from "@/components/Modals/AuthModal/SigninModal/SigninModal";
import Button from "@/ui/Button";
import { useState } from "react";

function UserAuth() {
  const [register, setRegister] = useState(false);
  const [signin, setSignin] = useState(false);

  return (
    <>
      <div className="flex gap-4">
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
        <Button onClick={() => setRegister(true)}>Create Account</Button>
      </div>

      {register && <RegisterModal onClick={() => setRegister(false)} />}
      {signin && <SigninModal onClick={() => setSignin(false)} />}
    </>
  );
}

export default UserAuth;
