import Stripe from "stripe";

// why can't detect when it is in .env?
const key =
  "sk_test_51QtsxpPkvssnHZr9cRripXtisW2fxl2IoCEiSQYoUCzb7o55FL4I7VNyjwya5pyLSHGt1RdAbkagzaqMAyLPWkA9005kMPsQWC";

const stripe = new Stripe(key, {
  apiVersion: "2025-01-27.acacia; custom_checkout_beta=v1;",
});

export default stripe;
