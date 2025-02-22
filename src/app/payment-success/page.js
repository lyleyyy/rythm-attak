import PaymentSuccessModal from "@/components/Modals/PaymentSuccessModal/PaymentSuccessModal";

export default async function PaymentSuccess({ searchParams }) {
  const { amount } = await searchParams;

  return <PaymentSuccessModal amount={amount} />;
}
