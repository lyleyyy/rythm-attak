"use client";
import capitalizeEachWord from "@/helper/capitalizeEachWord";
import { SignIn } from "@/lib/auth-action";
import BorderedButton from "@/ui/BorderedButton";
import { FcGoogle } from "react-icons/fc";

function OAuthForm({ provider }) {
  return (
    <form
      action={() => {
        SignIn(provider);
      }}
    >
      <BorderedButton
        type="submit"
        height="h-12"
        width="w-72"
        borderRadius="rounded-full"
      >
        <span className="flex h-full w-full items-center justify-start gap-8 pl-4">
          {provider === "google" && <FcGoogle className="text-2xl" />}
          Continue with {capitalizeEachWord(provider)}
        </span>
      </BorderedButton>
    </form>
  );
}

export default OAuthForm;
