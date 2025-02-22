import ThemeButton from "@/ui/ThemeButton";
import Link from "next/link";
import { FaRegCheckCircle } from "react-icons/fa";

function PaymentSuccessModal({ amount }) {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-screen flex-col items-center justify-center bg-zinc-900">
      <div className="flex h-2/3 w-[350px] flex-col items-center justify-between gap-10 rounded-lg bg-white p-8 text-black">
        <div className="flex flex-col items-center gap-4">
          <span className="text-6xl text-green-600">
            <FaRegCheckCircle />
          </span>
          <h3 className="text-2xl">Payment Successful!</h3>
          <span className="text-center text-sm text-zinc-500">
            Your payment €{amount} has been completed.
          </span>
        </div>
        <ThemeButton width="w-full">
          <Link href="http://localhost:3000">Back to Home</Link>
        </ThemeButton>
      </div>
    </div>
  );
}

export default PaymentSuccessModal;
