import Button from "@/ui/Button";
import ModalCloseBtn from "../../ModalCloseBtn/ModalCloseBtn";
import AuthModalContainer from "../AuthModalContainer/AuthModalContainer";
import AuthModalHeader from "../AuthModalHeader/AuthModalHeader";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { Controller, useForm } from "react-hook-form";
import AuthInput from "../AuthInput/AuthInput";
import { getUser } from "@/services/apiUsers";
import { useState } from "react";
import IncorrectNote from "./IncorrectNote/IncorrectNote";
import OAuthForm from "../OAuthForm";
import { CredentialsSignIn } from "@/lib/auth-action";

function SigninModal({ closeModal }) {
  const {
    handleSubmit,
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

  async function formSubmitHandler(data) {
    try {
      const { email, password } = data;
      const res = await getUser(email, password);
      // console.log(res, "res");
      // can start to render login, may need nextAuth
    } catch (err) {
      console.error("Error in sign in formSubmitHandler: ", err.message);
      setIsEmailPwdWrong(true);
      throw err;
    }
  }

  return (
    <AuthModalContainer>
      <ModalCloseBtn onClick={closeModal} />
      <AuthModalHeader>Sign in to RythmAttak</AuthModalHeader>
      {isEmailPwdWrong && <IncorrectNote />}
      <div className="flex flex-col gap-4">
        <OAuthForm provider="google" />
      </div>
      <hr className="h-px w-1/5 rounded border-0 bg-zinc-400" />

      <form
        action={async (formData) => {
          const res = await CredentialsSignIn("credentials", formData);
          console.log(res);
          if (!res.success) {
            alert(`Error: ${res.message}`);
          }
        }}
        className="text-black"
      >
        <label>
          Email
          <input name="email" type="email" />
        </label>
        <label>
          Password
          <input name="password" type="password" />
        </label>
        <button>Sign In</button>
      </form>

      {/* <form onSubmit={handleSubmit(formSubmitHandler)} className="space-y-4">
        <Controller
          name="email"
          control={control}
          rules={{ required: "Email is required." }}
          render={({ field }) => (
            <AuthInput label="Email" error={errors.email} {...field} />
          )}
        />

        <Controller
          name="password"
          control={control}
          rules={{ required: "Password is required." }}
          render={({ field }) => (
            <AuthInput label="Password" error={errors.password} {...field} />
          )}
        />

        <button
          type="submit"
          className="h-12 w-72 rounded-full bg-purple-700 text-lg font-medium outline-none hover:cursor-pointer hover:bg-purple-600"
        >
          Sign in
        </button>
      </form> */}

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
