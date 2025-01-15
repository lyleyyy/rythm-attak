import Button from "@/ui/Button";

function ConfirmationModal({ confirmation, action, closeModal }) {
  function onClickYes() {
    action();
    closeModal();
  }

  return (
    <div className="flex h-1/3 w-1/3 flex-col items-center justify-center gap-20 rounded-lg bg-black">
      <span className="text-center text-xl">
        Are you sure you want to{" "}
        <span className="font-bold">{confirmation}</span> this?
        <br />
        This action cannot be undone.
      </span>

      <div className="space-x-8">
        <Button hoverBgColor="hover:bg-purple-600" onClick={onClickYes}>
          Yes
        </Button>
        <Button bgColor="bg-white" textColor="text-black" onClick={closeModal}>
          No
        </Button>
      </div>
    </div>
  );
}

export default ConfirmationModal;
