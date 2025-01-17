import IconButton from "@/ui/IconButton";
import { RxCross2 } from "react-icons/rx";

function AlbumTrackInput({ index, onClick }) {
  return (
    <div className="flex items-center justify-between gap-8 p-4">
      <span className="text-lg">{index + 1}</span>
      <div className="flex flex-col gap-1">
        <label>Track Number</label>
        <input
          type="number"
          name="track number"
          className="rounded border-2 border-white bg-black p-1 focus:border-purple-600 focus:outline-none"
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label>Track Name</label>
        <input
          type="text"
          name="track name"
          className="rounded border-2 border-white bg-black p-1 focus:border-purple-600 focus:outline-none"
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label>Track Audio</label>
        <input
          type="file"
          name="audio"
          accept="audio/mp3, audio/aac"
          className="p-1"
          required
        />
      </div>
      <IconButton
        iconSize="text-2xl"
        textColor="text-zinc-400"
        hoverTextColor="hover:text-white"
        onClick={onClick}
      >
        <RxCross2 />
      </IconButton>
    </div>
  );
}

export default AlbumTrackInput;
