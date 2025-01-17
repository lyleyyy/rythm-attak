import IconButton from "@/ui/IconButton";
import { RxCross2 } from "react-icons/rx";

function AlbumTrackInput({ onClick }) {
  return (
    <div className="flex items-center justify-between gap-8 p-4">
      <span className="text-lg">1</span>
      <div className="flex flex-col gap-1">
        <label>Track Number</label>
        <input
          type="number"
          className="rounded border-2 border-white bg-black p-1 focus:border-purple-600 focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label>Track Name</label>
        <input
          type="text"
          className="rounded border-2 border-white bg-black p-1 focus:border-purple-600 focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label>Track Audio</label>
        <input type="file" accept="audio/mp3, audio/aac" className="p-1" />
      </div>
      <IconButton
        iconSize="text-2xl"
        textColor="text-zinc-400"
        onClick={onClick}
      >
        <RxCross2 />
      </IconButton>
    </div>
  );
}

export default AlbumTrackInput;
