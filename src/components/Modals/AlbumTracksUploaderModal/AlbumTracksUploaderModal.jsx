import ThemeButton from "@/ui/ThemeButton";
import AlbumTrackInput from "./AlbumTrackInput/AlbumTrackInput";
import IconButton from "@/ui/IconButton";
import { RiAddLargeFill } from "react-icons/ri";

function AlbumTracksUploaderModal() {
  function addAlbumTrackInput(e) {
    e.preventDefault();
    console.log("add waya");
  }

  function deleteAlbumTrackInput(e) {
    e.preventDefault();
    console.log("delete waya");
  }

  return (
    <form className="flex h-3/4 w-3/5 flex-col items-center justify-between rounded bg-black p-6">
      <div className="flex flex-col items-center gap-2">
        <AlbumTrackInput />
        <IconButton
          iconSize="text-3xl"
          textColor="text-zinc-400"
          mt="mt-6"
          onClick={addAlbumTrackInput}
        >
          <RiAddLargeFill />
        </IconButton>
      </div>
      <ThemeButton>Upload</ThemeButton>
    </form>
  );
}

export default AlbumTracksUploaderModal;
