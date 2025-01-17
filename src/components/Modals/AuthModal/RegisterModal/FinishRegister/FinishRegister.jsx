import { FcOk } from "react-icons/fc";
import { BiSolidErrorCircle } from "react-icons/bi";
import ThemeButton from "@/ui/ThemeButton";
import PlainButton from "@/ui/PlainButton";

function FinishRegister({ label, closeModal }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {label === "success" && (
        <>
          <FcOk className="text-6xl" />
          <span className="w-76 mb-24 text-center text-xl">
            You’ve signed up successfully! <br />
            Please sign in to start exploring.
          </span>
        </>
      )}
      {label === "fail" && (
        <>
          <BiSolidErrorCircle className="rounded-full bg-white text-6xl text-red-600" />
          <span className="w-76 mb-24 text-center text-xl">
            Oops! Something went wrong on our end. <br />
            Please try it again later.
          </span>
        </>
      )}

      {label === "success" && (
        <ThemeButton width="w-52" onClick={closeModal}>
          Continue Your Journey
        </ThemeButton>
      )}
      {label === "fail" && (
        <PlainButton onClick={closeModal}>Close</PlainButton>
      )}
    </div>
  );
}

export default FinishRegister;
