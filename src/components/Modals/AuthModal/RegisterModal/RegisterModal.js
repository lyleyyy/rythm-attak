import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import AuthInput from "../AuthInput/AuthInput";
import ModalCloseBtn from "../../ModalCloseBtn/ModalCloseBtn";
import AuthModalHeader from "../AuthModalHeader/AuthModalHeader";
import { useState } from "react";
import Button from "@/ui/Button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import SeparateLine from "../SeparateLine/SeparateLine";
import AuthModalContainer from "../AuthModalContainer/AuthModalContainer";

function RegisterModal({ onClick }) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Email: "",
      Password: "",
      Name: "",
    },
    mode: "onBlur",
  });

  const [step, setStep] = useState(1);

  function onClickHandler() {
    setStep((step) => step + 1);
  }

  function formSubmitHandler(data) {
    console.log(data);
  }

  return (
    <AuthModalContainer>
      <ModalCloseBtn onClick={onClick} />
      <AuthModalHeader>
        Start your musical journey <br />
        with unlimited discovery!
      </AuthModalHeader>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(formSubmitHandler)}
      >
        {step === 1 && (
          <>
            <Controller
              name="Email"
              control={control}
              rules={{
                required: "Email is required.",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format",
                },
              }}
              render={({ field }) => (
                <AuthInput label="Email" error={errors.Email} {...field} />
              )}
            />
          </>
        )}

        {step === 2 && (
          <>
            <Controller
              name="Password"
              control={control}
              rules={{
                required: "Password is required.",
                pattern: {
                  value:
                    /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*,\._])[0-9a-zA-Z!@#$%^&*,\\._]/,
                  message:
                    "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
                },
              }}
              render={({ field }) => (
                <AuthInput
                  label="Password"
                  error={errors.Password}
                  {...field}
                />
              )}
            />
          </>
        )}

        {step === 3 && (
          <>
            <Controller
              name="Name"
              control={control}
              rules={{
                required: "Name is required.",
              }}
              render={({ field }) => (
                <AuthInput label="Name" error={errors.Name} {...field} />
              )}
            />
          </>
        )}

        {(step === 1 || step === 2) && (
          <button
            // here i set key for all inputs and buttons, is because i wanna avoid the same component for render caching and to destroy the previous rendering, so the variation of input field wont be cached and validation of previous state wont be carried to the next state
            key={`step${step}`}
            className="h-12 w-72 rounded-full bg-purple-700 text-lg font-medium outline-none hover:cursor-pointer hover:bg-purple-600"
            onClick={onClickHandler}
          >
            Continue
          </button>
        )}

        {step === 3 && (
          <button
            type="submit"
            className="h-12 w-72 rounded-full bg-purple-700 text-lg font-medium outline-none hover:cursor-pointer hover:bg-purple-600"
          >
            Register
          </button>
        )}
      </form>

      <SeparateLine />

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
            Sign up with Google
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
            Sign up with Facebook
          </span>
        </Button>
      </div>

      <div className="flex w-72 flex-col gap-4 text-zinc-400">
        <span>
          Already have account? Sign in{" "}
          <Link href="/" className="text-white underline">
            here
          </Link>
        </span>
        <span className="text-sm">
          This site is protected by reCAPTCHA and the Google{" "}
          <Link
            href="https://policies.google.com/privacy"
            className="underline"
            target="_blank"
          >
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link
            href="https://policies.google.com/terms"
            className="underline"
            target="_blank"
          >
            Terms of Service
          </Link>{" "}
          apply.
        </span>
      </div>
    </AuthModalContainer>
  );
}

export default RegisterModal;
