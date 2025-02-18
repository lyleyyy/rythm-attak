import stripe from "@/services/stripe";

export async function POST(req, res) {
  //   console.log("waya!");
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "EUR",
            product_data: {
              name: "RA Premium",
            },
            unit_amount: 14.99,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      ui_mode: "custom",
      // The URL of your payment completion page
      return_url: "http://localhost:3000/",
    });

    // res.status(200).json({ clientSecret: session.client_secret });
    res.json({ clientSecret: session.client_secret });
  } catch (err) {
    // console.error("stripe create check out route: " + err);
    res.status(500).json({ error: err.message });
  }
}
