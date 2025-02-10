import { GoHeartFill } from "react-icons/go";
import { GrAddCircle } from "react-icons/gr";
import IconButton from "@/ui/IconButton";
import ThemePlayButton from "@/ui/ThemePlayButton";
import BorderedButton from "@/ui/BorderedButton";

function MediaController({ type, track }) {
  return (
    <div className="mb-8 flex items-center gap-8 p-4">
      <ThemePlayButton />
      {type === "Track" && (
        <IconButton>
          <GrAddCircle className="text-3xl text-zinc-400 hover:text-white" />
        </IconButton>
      )}

      {type === "Artist" && <BorderedButton>Follow</BorderedButton>}

      <IconButton>
        <GoHeartFill className="text-3xl text-zinc-400 hover:text-white" />
      </IconButton>
    </div>
  );
}

export default MediaController;
