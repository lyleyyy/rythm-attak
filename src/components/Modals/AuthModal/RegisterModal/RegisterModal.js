import { useForm, Controller } from "react-hook-form";
import AuthInput from "../AuthInput/AuthInput";
import ModalCloseBtn from "../../ModalCloseBtn/ModalCloseBtn";
import AuthModalHeader from "../AuthModalHeader/AuthModalHeader";
import { useState } from "react";
import SeparateLine from "../SeparateLine/SeparateLine";
import AuthModalContainer from "../AuthModalContainer/AuthModalContainer";
import { createUser } from "@/services/apiUsers";
import RegisterModalFooter from "./RegisterModalFooter/RegisterModalFooter";
import FinishRegister from "./FinishRegister/FinishRegister";
import OAuthForm from "../OAuthForm";
import UserTypeSelector from "./UserTypeSelector/UserTypeSelector";

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
      biography: "",
    },
    mode: "onBlur",
  });

  const [userType, setUserType] = useState("");
  const [step, setStep] = useState(1);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [isFinishRegister, setIsFinishRegister] = useState(false);
  const [isSignupSuccess, setIsSignupSuccess] = useState(false);

  function onClickHandler() {
    setStep((step) => step + 1);
  }

  async function formSubmitHandler(data) {
    setIsSigningUp(true);

    try {
      await createUser(data);
      setIsFinishRegister(true);
      setIsSignupSuccess(true);
    } catch (err) {
      setIsFinishRegister(true);
      setIsSignupSuccess(false);
    }
  }

  if (userType === "")
    return (
      <AuthModalContainer>
        <ModalCloseBtn onClick={closeModal} />
        <AuthModalHeader>
          Choose how you&apos;d like to register.
          <br />
          <br />
          As a <span className="rounded bg-white px-1 text-black">User</span>,
          you&apos;ll have access to stream music.
          <br />
          <br />
          As an{" "}
          <span className="rounded bg-purple-700 px-1 text-white">Artist</span>
          , you&apos;ll be able to upload <br />
          and share your own music with others.
        </AuthModalHeader>
        <UserTypeSelector
          onClickUser={() => setUserType("user")}
          onClickArtist={() => setUserType("artist")}
        />
      </AuthModalContainer>
    );

  if (userType === "user")
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
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email format",
                      },
                    }}
                    render={({ field }) => (
                      <AuthInput
                        label="Email"
                        error={errors.email}
                        {...field}
                      />
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
                  className="h-12 w-72 rounded-full bg-purple-700 text-lg font-medium outline-none hover:cursor-pointer hover:bg-purple-600 disabled:cursor-not-allowed disabled:bg-gray-400"
                  disabled={isSigningUp}
                >
                  Register
                </button>
              )}
            </form>
            <SeparateLine />
            <OAuthForm provider="google" />
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

  if (userType === "artist")
    return (
      <AuthModalContainer>
        <ModalCloseBtn onClick={closeModal} />
        {!isFinishRegister && (
          <>
            <AuthModalHeader>
              Create your music <br />
              Express your style <br />
              Impact the world!
            </AuthModalHeader>
            <form
              className="flex flex-col items-center gap-4"
              onSubmit={handleSubmit(formSubmitHandler)}
            >
              <div className="flex gap-8">
                <div className="space-y-4">
                  <Controller
                    name="email"
                    control={control}
                    rules={{
                      required: "Email is required.",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email format",
                      },
                    }}
                    render={({ field }) => (
                      <AuthInput
                        label="Email"
                        error={errors.email}
                        {...field}
                      />
                    )}
                  />

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
                </div>

                <div>
                  <Controller
                    name="biography"
                    control={control}
                    // rules={{
                    //   required: "Biography is required.",
                    // }}
                    render={({ field }) => (
                      <AuthInput
                        label="Biography"
                        error={errors.biography}
                        {...field}
                      />
                    )}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="h-12 w-72 rounded-full bg-purple-700 text-lg font-medium outline-none hover:cursor-pointer hover:bg-purple-600 disabled:cursor-not-allowed disabled:bg-gray-400"
                disabled={isSigningUp}
              >
                Register
              </button>
            </form>
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
