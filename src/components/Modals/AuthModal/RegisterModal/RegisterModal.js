import { useForm, Controller } from "react-hook-form";
import AuthInput from "../AuthInput/AuthInput";
import ModalCloseBtn from "../../ModalCloseBtn/ModalCloseBtn";
import AuthModalHeader from "../AuthModalHeader/AuthModalHeader";
import { useState } from "react";
import SeparateLine from "../SeparateLine/SeparateLine";
import AuthModalContainer from "../AuthModalContainer/AuthModalContainer";
import { createUser } from "@/services/apiUsers";
import RegisterModalFooter from "./RegisterModalFooter/RegisterModalFooter";
import ThirdPartySignup from "./ThirdPartySignup/ThirdPartySignup";
import FinishRegister from "./FinishRegister/FinishRegister";

function RegisterModal({ closeModal }) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
    mode: "onBlur",
  });

  const [step, setStep] = useState(1);
  const [isFinishRegister, setIsFinishRegister] = useState(false);
  const [isSignupSuccess, setIsSignupSuccess] = useState(false);

  function onClickHandler() {
    setStep((step) => step + 1);
  }

  async function formSubmitHandler(data) {
    try {
      const res = await createUser(data);
      // console.log("User created successfully:", res);
      setIsFinishRegister(true);
      setIsSignupSuccess(true);
    } catch (err) {
      // console.error("Error during registration:", err.message);
      // alert(err.message);
      setIsFinishRegister(true);
      setIsSignupSuccess(false);
    }
  }

  return (
    <AuthModalContainer>
      <ModalCloseBtn onClick={closeModal} />
      {!isFinishRegister && (
        <>
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
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is required.",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email format",
                    },
                  }}
                  render={({ field }) => (
                    <AuthInput label="Email" error={errors.email} {...field} />
                  )}
                />
              </>
            )}

            {step === 2 && (
              <>
                <Controller
                  name="password"
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
                      error={errors.password}
                      {...field}
                    />
                  )}
                />
              </>
            )}

            {step === 3 && (
              <>
                <Controller
                  name="name"
                  control={control}
                  rules={{
                    required: "Name is required.",
                  }}
                  render={({ field }) => (
                    <AuthInput label="Name" error={errors.name} {...field} />
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
          <ThirdPartySignup />
          <RegisterModalFooter />
        </>
      )}

      {isFinishRegister && (
        <FinishRegister
          label={isSignupSuccess ? "success" : "fail"}
          closeModal={closeModal}
        />
      )}
    </AuthModalContainer>
  );
}

export default RegisterModal;
