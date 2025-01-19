import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import { CredentialsSignIn } from "@/lib/auth-action";
import { useAuth } from "@/contexts/AuthContext";
import OAuthForm from "../OAuthForm/OAuthForm";
import AuthModalContainer from "../AuthModalContainer/AuthModalContainer";
import AuthModalHeader from "../AuthModalHeader/AuthModalHeader";
import AuthInput from "../AuthInput/AuthInput";
import ErrorMessage from "./ErrorMessage/ErrorMessage";

function SigninModal({ closeModal }) {
  const {
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const [isEmailPwdWrong, setIsEmailPwdWrong] = useState(false);
  const [isSigningin, setIsSigningin] = useState(false);
  const { setIsLoggedIn } = useAuth();

  return (
    <AuthModalContainer onClick={closeModal}>
      <AuthModalHeader>Sign in to RythmAttak</AuthModalHeader>
      {isEmailPwdWrong && <ErrorMessage />}
      <div className="flex flex-col gap-4">
        <OAuthForm provider="google" />
      </div>
      <hr className="h-px w-1/5 rounded border-0 bg-zinc-400" />

      <form
        action={async (formData) => {
          try {
            await CredentialsSignIn("credentials", formData);
            setIsLoggedIn(true);
            closeModal();
          } catch (e) {
            setIsEmailPwdWrong(true);
            setIsSigningin(false);
          }
        }}
        onSubmit={() => setIsSigningin(true)}
        className="flex flex-col gap-2"
      >
        <Controller
          name="email"
          control={control}
          rules={{ required: "Email is required." }}
          render={({ field }) => (
            <AuthInput
              name="name"
              type="email"
              error={errors.email}
              {...field}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          rules={{ required: "Password is required." }}
          render={({ field }) => (
            <AuthInput
              name="password"
              type="password"
              error={errors.password}
              {...field}
            />
          )}
        />
        <button
          className="mt-2 h-12 w-72 rounded-full bg-purple-700 text-lg font-medium outline-none hover:cursor-pointer hover:bg-purple-600 disabled:cursor-not-allowed disabled:bg-gray-400"
          disabled={isSigningin}
        >
          {isSigningin ? "Signing in..." : "Sign in"}
        </button>
      </form>

      <span className="text-zinc-300 underline hover:cursor-pointer hover:text-white">
        Forgot Password?
      </span>
      <div className="flex gap-2">
        <span className="text-zinc-300">Don&apos;t have an account?</span>
        <span className="text-zinc-300 underline hover:text-white">
          Sign up for RA
        </span>
      </div>
    </AuthModalContainer>
  );
}

export default SigninModal;
