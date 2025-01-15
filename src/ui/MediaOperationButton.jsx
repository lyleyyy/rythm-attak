import { TiInfoLarge } from "react-icons/ti";
import { MdOutlineModeEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

function MediaOperationButton({
  info = false,
  edit = false,
  remove = false,
  onClick,
}) {
  return (
    <div
      className="rounded-full bg-zinc-300 bg-opacity-50 p-0.5 text-xl hover:cursor-pointer hover:bg-zinc-200"
      onClick={onClick}
    >
      {info && <TiInfoLarge />}
      {edit && <MdOutlineModeEdit />}
      {remove && <RxCross2 />}
    </div>
  );
}

export default MediaOperationButton;
