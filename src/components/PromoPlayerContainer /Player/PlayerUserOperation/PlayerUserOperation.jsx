import IconButton from "@/ui/IconButton";
import { GoHeartFill } from "react-icons/go";
import { MdPersonAddAlt1 } from "react-icons/md";

function PlayerUserOperation() {
  return (
    <div className="flex w-1/4 items-center justify-center gap-4">
      <IconButton iconSize="text-xl">
        <GoHeartFill />
      </IconButton>
      <IconButton iconSize="text-2xl">
        <MdPersonAddAlt1 />
      </IconButton>
    </div>
  );
}

export default PlayerUserOperation;
