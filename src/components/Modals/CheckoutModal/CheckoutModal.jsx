import CheckoutForm from "@/components/CheckoutForm/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import loadstripe from "@/services/loadstripe";
import convertToSubcurrency from "@/lib/convertToSubcurrency";

function CheckoutModal() {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-screen flex-col items-center gap-8 bg-zinc-900 pt-8">
      <Elements
        stripe={loadstripe}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(14.99),
          currency: "eur",
        }}
      >
        <CheckoutForm amount={14.99} />
      </Elements>
    </div>
  );
}

export default CheckoutModal;
