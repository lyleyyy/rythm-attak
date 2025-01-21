import ThemeButton from "@/ui/ThemeButton";
import PlainButton from "@/ui/PlainButton";
import { useState } from "react";

function ConfirmationModal({ confirmation, action, closeModal }) {
  const [isExecuting, setIsExecuting] = useState(false);

  async function onClickYes() {
    setIsExecuting(true);
    await action();
    closeModal();
  }

  return (
    <div
      className={`flex h-1/3 w-1/3 flex-col items-center justify-center gap-20 rounded-lg bg-black ${isExecuting && "pointer-events-none"}`}
    >
      <span className="text-center text-xl">
        Are you sure you want to{" "}
        <span className="font-bold">{confirmation}</span> this?
        <br />
        This action cannot be undone.
      </span>

      <div className="space-x-8">
        <ThemeButton onClick={onClickYes} disabled={isExecuting}>
          {isExecuting ? "Executing..." : "Yes"}
        </ThemeButton>
        <PlainButton onClick={closeModal}>No</PlainButton>
      </div>
    </div>
  );
}

export default ConfirmationModal;
