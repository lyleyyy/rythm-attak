import Button from "@/ui/Button";

function SidebarAppInstruction({ heading, instruction, buttonContent }) {
  return (
    <div className="flex flex-col gap-2 rounded-lg bg-zinc-800 p-4">
      <h3 className="text-lg font-bold">{heading}</h3>
      <span className="mb-4">{instruction}</span>
      <Button bgColor="bg-white" textColor="text-black" isHover={true}>
        {buttonContent}
      </Button>
    </div>
  );
}

export default SidebarAppInstruction;
