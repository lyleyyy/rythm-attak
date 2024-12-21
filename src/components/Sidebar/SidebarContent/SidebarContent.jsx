import SidebarAppInstruction from "./SidebarAppInstruction/SidebarAppInstruction";

function SidebarContent() {
  return (
    <div className="h- flex h-3/4 w-full flex-col gap-4">
      <SidebarAppInstruction
        heading="Create your first playlist"
        instruction="It's easy, we'll help you"
        buttonContent="Create playlist"
      />
      <SidebarAppInstruction
        heading="Let's find some artists to follow"
        instruction="We'll keep you updated on new espisodes"
        buttonContent="Browse"
      />
    </div>
  );
}

export default SidebarContent;
