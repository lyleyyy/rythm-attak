import Button from "@/ui/Button";

function PromotionFooter() {
  return (
    <div className="bg-theme bottom-0 m-2 flex h-16 w-full items-center justify-between px-4">
      <div>
        <h3 className="font-bold">Preview of RythmAttak</h3>
        <p>Sign up to get preview of unlimited songs. No credit card needed.</p>
      </div>
      <Button
        bgColor="bg-white"
        textColor="text-black"
        isHover={true}
        fontWeight="font-bold"
      >
        Create Account
      </Button>
    </div>
  );
}

export default PromotionFooter;
