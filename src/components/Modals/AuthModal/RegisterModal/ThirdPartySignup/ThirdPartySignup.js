import Button from "@/ui/Button";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

function ThirdPartySignup() {
  return (
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
  );
}

export default ThirdPartySignup;
