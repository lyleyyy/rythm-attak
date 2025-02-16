import useModalToggle from "@/hooks/useModalToggle";
import ThemeButton from "@/ui/ThemeButton";
import Image from "next/image";
import Link from "next/link";
import RegisterModal from "../AuthModal/RegisterModal/RegisterModal";

function AuthRequiredModal({ closeLoginPrompt }) {
  const [isModalOpen, setIsModalOpen] = useModalToggle();

  return (
    <>
      <div className="flex h-1/2 w-1/2 items-center justify-center rounded-lg bg-black">
        <div className="flex w-1/2 justify-center">
          <Image
            className="rounded-full border-2 border-white bg-white"
            src="/logo.png"
            alt="logo"
            width={200}
            height={200}
          />
        </div>
        <div className="flex w-1/2 flex-col items-center justify-center gap-10">
          <h3 className="text-center text-3xl font-bold">
            Start your journey
            <br />
            with a free RA account
          </h3>
          <ThemeButton
            onClick={() => {
              closeLoginPrompt();
              // setIsModalOpen(true);
            }}
          >
            Create Account
          </ThemeButton>
          <span className="mt-10 text-zinc-400">
            Already have account? Sign in{" "}
            <Link href="/" className="text-white underline">
              here
            </Link>
          </span>
        </div>
      </div>

      {/* <RegisterModal closeModal={() => setIsModalOpen(false)} /> */}
    </>
  );
}

export default AuthRequiredModal;
