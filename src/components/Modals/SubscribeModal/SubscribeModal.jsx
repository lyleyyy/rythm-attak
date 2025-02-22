"use client";
import CheckoutForm from "@/components/CheckoutForm/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import loadstripe from "@/services/loadstripe";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import ModalCloseButton from "@/ui/ModalCloseButton";
import ThemeButton from "@/ui/ThemeButton";
import Image from "next/image";
import { subscribeAction } from "@/services/apiStripe";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

function SubscribeModal({ userId, closeModal }) {
  const router = useRouter();
  const [isCreatingSession, setIsCreatingSession] = useState(false);

  async function handleSubscribe(e) {
    e.preventDefault();

    setIsCreatingSession(true);
    const url = await subscribeAction(userId);
    if (url) router.push(url);
    else console.error("Failed to create subscription session.");
    setIsCreatingSession(false);
  }

  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-screen flex-col items-center justify-center bg-zinc-900">
      <ModalCloseButton onClick={closeModal} />
      {/* <div className="flex h-2/3 w-[350px] items-center justify-center rounded-lg bg-white p-8">
        <Elements
          stripe={loadstripe}
          options={{
            mode: "subscription",
            amount: convertToSubcurrency(1),
            currency: "eur",
          }}
        >
          <CheckoutForm amount={1} />
        </Elements>
      </div> */}
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
        <div className="flex h-full w-1/2 flex-col items-center justify-between gap-4 rounded-r-lg bg-white p-12 text-center text-black">
          <div className="space-y-4">
            <h3 className="text-center text-2xl font-bold">
              Unlock Unlimited Music
              <br />
              Just €14.99/Month!
            </h3>
            <p>
              Subscribe RA now and enjoy unlimited access to our entire music
              library. Stream your favorite tracks anytime, anywhere in high
              quality. Join today and elevate your listening experience!
            </p>
          </div>
          <ThemeButton
            onClick={(e) => handleSubscribe(e)}
            disabled={isCreatingSession}
          >
            Subscribe
          </ThemeButton>
        </div>
      </div>
    </div>
  );
}

export default SubscribeModal;
