import IconButton from "@/ui/IconButton";
import { PiVinylRecordDuotone } from "react-icons/pi";
import { RiAddLargeFill } from "react-icons/ri";

function SidebarHeader() {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center justify-center gap-2 text-center font-bold">
        <div className="text-xl">
          <PiVinylRecordDuotone />
        </div>
        <div>Your Music Library</div>
      </div>
      <IconButton
        iconSize="text-xl"
        hoverBgColor="hover:bg-white"
        hoverTextColor="hover:text-black"
      >
        <RiAddLargeFill />
      </IconButton>
    </div>
  );
}

export default SidebarHeader;
