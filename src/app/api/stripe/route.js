import { updateUserSubscription } from "@/services/apiUser";
import stripe from "@/services/stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

const webhookKey =
  "whsec_faa6624671acc7815413ae04101d6387d45b54339d51633fc5caad641b58f8f1";

export async function POST(req) {
  const body = await req.text();
  const headersRes = await headers();
  const signature = headersRes.get("Stripe-signature");
  let event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookKey);
  } catch (error) {
    console.error(error);
    return new NextResponse("webhook error", { status: 400 });
  }

  if (
    event.type === "checkout.session.completed" &&
    event.data.object.payment_status === "paid"
  ) {
    const metadata = event.data.object.metadata;
    if (metadata) {
      const userId = metadata.userId;
      console.log(userId, "waya!!!!!!!!!!!!!!!!");
      await updateUserSubscription(userId);
    }
  }

  return new NextResponse(null, { status: 200 });
}
