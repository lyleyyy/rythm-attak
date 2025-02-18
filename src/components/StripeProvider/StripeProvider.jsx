"use client";
import { Elements } from "@stripe/react-stripe-js";
import loadstripe from "@/services/loadstripe";

export default function StripeProvider({ children }) {
  return <Elements stripe={loadstripe}>{children}</Elements>;
}
