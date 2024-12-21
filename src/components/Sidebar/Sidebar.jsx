import Button from "@/ui/Button";
import SidebarContent from "./SidebarContent/SidebarContent";
import SidebarFooter from "./SidebarFooter/SidebarFooter";
import SidebarHeader from "./SidebarHeader/SidebarHeader";

function Sidebar() {
  return (
    <div className="flex w-1/4 flex-col gap-4 rounded-xl bg-zinc-900 p-4">
      <SidebarHeader />
      <SidebarContent />
      <SidebarFooter />
    </div>
  );
}

export default Sidebar;
