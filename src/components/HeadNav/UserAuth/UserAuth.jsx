"use client";
import RegisterModal from "@/components/Modals/RegisterModal/RegisterModal";
import Button from "@/ui/Button";
import { useState } from "react";

function UserAuth() {
  const [register, setRegister] = useState(false);

  return (
    <>
      <div className="flex gap-4">
        <Button
          borderWidth={true}
          bgColor="black"
          isHover={true}
          hoverTextColor="hover:text-black"
          hoverBgColor="hover:bg-white"
        >
          Sign in
        </Button>
        <Button onClick={() => setRegister(true)}>Create Account</Button>
      </div>

      {register && <RegisterModal onClick={() => setRegister(false)} />}
    </>
  );
}

export default UserAuth;
