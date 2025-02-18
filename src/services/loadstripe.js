import { loadStripe } from "@stripe/stripe-js";

const loadstripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY, {
  betas: ["custom_checkout_beta_5"],
});

export default loadstripe;
