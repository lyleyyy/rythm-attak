import { useAuthModal } from "@/contexts/AuthModalContext";
import PlainButton from "@/ui/PlainButton";

function PromotionFooter() {
  const { setIsRegisterModalOpen } = useAuthModal();

  return (
    <div className="bottom-0 m-2 flex h-16 w-full items-center justify-between bg-theme px-4">
      <div>
        <h3 className="font-bold">Preview of RythmAttak</h3>
        <p>Sign up to get preview of unlimited songs. No credit card needed.</p>
      </div>
      <PlainButton onClick={() => setIsRegisterModalOpen(true)}>
        Create Account
      </PlainButton>
    </div>
  );
}

export default PromotionFooter;
