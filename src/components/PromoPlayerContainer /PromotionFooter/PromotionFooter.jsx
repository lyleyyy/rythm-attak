import RegisterModal from "@/components/Modals/AuthModal/RegisterModal/RegisterModal";
import PlainButton from "@/ui/PlainButton";
import useModalToggle from "@/hooks/useModalToggle";

function PromotionFooter() {
  const [isModalOpen, setIsModalOpen] = useModalToggle();

  return (
    <>
      <div className="bottom-0 m-2 flex h-16 w-full items-center justify-between bg-theme px-4">
        <div>
          <h3 className="font-bold">Preview of RythmAttak</h3>
          <p>
            Sign up to get preview of unlimited songs. No credit card needed.
          </p>
        </div>
        <PlainButton onClick={() => setIsModalOpen(true)}>
          Create Account
        </PlainButton>
      </div>

      {isModalOpen && (
        <RegisterModal closeModal={() => setIsModalOpen(false)} />
      )}
    </>
  );
}

export default PromotionFooter;
