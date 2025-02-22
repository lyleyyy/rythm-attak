import stripe from "./stripe";

// why can't detect when it is in .env?
const price_id = "price_1QvNOlPkvssnHZr9e2yZ0ZA6";

export async function subscribeAction(userId) {
  const { url } = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [{ price: price_id, quantity: 1 }],
    metadata: { userId },
    mode: "subscription",
    success_url: `${process.env.NEXT_PUBLIC_URL}/payment-success`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/payment-cancel`,
  });

  return url;
}
