import Button from "@/ui/Button";
import ModalCloseBtn from "../../ModalCloseBtn/ModalCloseBtn";
import AuthModalContainer from "../AuthModalContainer/AuthModalContainer";
import AuthModalHeader from "../AuthModalHeader/AuthModalHeader";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { Controller, useForm } from "react-hook-form";
import AuthInput from "../AuthInput/AuthInput";

function SigninModal({ onClick }) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Email: "",
      Password: "",
    },
    mode: "onBlur",
  });

  function formSubmitHandler(data) {
    console.log(data);
  }

  return (
    <AuthModalContainer>
      <ModalCloseBtn onClick={onClick} />
      <AuthModalHeader>Sign in to RythmAttak</AuthModalHeader>
      <div className="flex flex-col gap-4">
        <Button
          width="w-72"
          height="h-12"
          bgColor="bg-black"
          borderRadius="rounded-full"
          borderWidth={true}
          borderColor="border-zinc-600"
          hoverBorder="hover:border-white"
        >
          <span className="flex h-full w-full items-center justify-start gap-8 pl-4">
            <FcGoogle className="text-2xl" />
            Sign in with Google
          </span>
        </Button>
        <Button
          width="w-72"
          height="h-12"
          bgColor="bg-black"
          borderRadius="rounded-full"
          borderWidth={true}
          borderColor="border-zinc-600"
          hoverBorder="hover:border-white"
        >
          <span className="flex h-full w-full items-center justify-start gap-8 pl-4">
            <FaFacebook className="rounded-full bg-white text-2xl text-blue-500" />
            Sign in with Facebook
          </span>
        </Button>
      </div>
      <hr className="h-px w-1/5 rounded border-0 bg-zinc-400" />

      <form onSubmit={handleSubmit(formSubmitHandler)} className="space-y-4">
        <Controller
          name="Email"
          control={control}
          rules={{ required: "Email is required." }}
          render={({ field }) => (
            <AuthInput label="Email" error={errors.Email} {...field} />
          )}
        />

        <Controller
          name="Password"
          control={control}
          rules={{ required: "Password is required." }}
          render={({ field }) => (
            <AuthInput label="Password" error={errors.Password} {...field} />
          )}
        />

        <button
          type="submit"
          className="h-12 w-72 rounded-full bg-purple-700 text-lg font-medium outline-none hover:cursor-pointer hover:bg-purple-600"
        >
          Sign in
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
