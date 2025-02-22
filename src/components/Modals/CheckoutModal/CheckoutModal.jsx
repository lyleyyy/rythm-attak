import CheckoutForm from "@/components/CheckoutForm/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import loadstripe from "@/services/loadstripe";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import ModalCloseButton from "@/ui/ModalCloseButton";

function CheckoutModal({ closeModal }) {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-screen flex-col items-center justify-center bg-zinc-900">
      <ModalCloseButton onClick={closeModal} />
      <div className="flex h-2/3 w-[350px] items-center justify-center rounded-lg bg-white p-8">
        <Elements
          stripe={loadstripe}
          options={{
            mode: "payment",
            amount: convertToSubcurrency(1),
            currency: "eur",
          }}
        >
          <CheckoutForm amount={1} />
        </Elements>
      </div>
    </div>
  );
}

export default CheckoutModal;
