import IconButton from "@/ui/IconButton";
import { RxCross2 } from "react-icons/rx";

function ModalCloseBtn({ onClick }) {
  return (
    <span className="absolute right-0 top-0">
      <IconButton onClick={onClick}>
        <RxCross2 />
      </IconButton>
    </span>
  );
}

export default ModalCloseBtn;
