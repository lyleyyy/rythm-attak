"use client";
import capitalizeEachWord from "@/helper/capitalizeEachWord";
import { SignIn } from "@/lib/auth-action";
import Button from "@/ui/Button";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

function OAuthForm({ provider }) {
  return (
    <form
      action={() => {
        SignIn(provider);
      }}
    >
      <Button
        type="submit"
        width="w-72"
        height="h-12"
        bgColor="bg-black"
        borderRadius="rounded-full"
        borderWidth={true}
        borderColor="border-zinc-600"
        hoverBorder="hover:border-white"
      >
        <span className="flex h-full w-full items-center justify-start gap-8 pl-4">
          {provider === "google" && <FcGoogle className="text-2xl" />}
          {provider === "facebook" && (
            <FaFacebook className="rounded-full bg-white text-2xl text-blue-500" />
          )}
          Continue with {capitalizeEachWord(provider)}
        </span>
      </Button>
    </form>
  );
}

export default OAuthForm;
