"use client";
import { useState, useEffect } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import ThemeButton from "@/ui/ThemeButton";

function CheckoutForm({ amount }) {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(
    function () {
      fetch("/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    },
    [amount],
  );

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    if (!stripe || !elements) return;

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `http://localhost:3000/payment-success?amount=${amount}`,
      },
    });

    if (error) {
      setErrorMessage(error.message);
    }

    setLoading(false);
  }

  if (!stripe || !elements || !clientSecret) {
    return (
      <div className="flex items-center justify-center text-zinc-700">
        <div
          className="text-surface inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          {/* <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 text-black ![clip:rect(0,0,0,0)]">
        Loading...
      </span> */}
        </div>
      </div>
    );
  }

  return (
    <form className="flex flex-col items-center gap-28">
      {clientSecret && (
        <>
          <PaymentElement />
          <ThemeButton width="w-full" onClick={(e) => handleSubmit(e)}>
            Pay €{amount}
          </ThemeButton>
        </>
      )}
    </form>
  );
}

export default CheckoutForm;
