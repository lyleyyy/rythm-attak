import PlainButton from "@/ui/PlainButton";

function PromptModal({ text, onClick }) {
  return (
    <div className="flex h-1/3 w-1/3 flex-col items-center justify-center gap-20 rounded-lg bg-black">
      <p className="w-2/3 text-xl">{text}</p>
      <PlainButton onClick={onClick}>Close</PlainButton>
    </div>
  );
}

export default PromptModal;
