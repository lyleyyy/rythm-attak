import IconButton from "@/ui/IconButton";
import { RxCross2 } from "react-icons/rx";

function RegisterModal({ onClick }) {
  return (
    <div className="fixed left-0 top-0 z-50 h-screen w-screen bg-black">
      <span className="absolute right-0 top-0">
        <IconButton onClick={onClick}>
          <RxCross2 />
        </IconButton>
      </span>
      <form></form>
    </div>
  );
}

export default RegisterModal;
