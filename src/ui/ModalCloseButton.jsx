import IconButton from "@/ui/IconButton";
import { RxCross2 } from "react-icons/rx";

function ModalCloseButton({ onClick }) {
  return (
    <span className="absolute right-2 top-2">
      <IconButton onClick={onClick} iconSize="text-2xl">
        <RxCross2 />
      </IconButton>
    </span>
  );
}

export default ModalCloseButton;
