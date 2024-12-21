import capitalizeEachWord from "@/helper/capitalizeEachWord";
import MediaCategory from "@/types/MediaCategory";
import IconButton from "@/ui/IconButton";
import { FaPlay } from "react-icons/fa";

function Media({ media, mediaCategory }) {
  const { type, name, artist, imageUrl } = media;
  return (
    <div className="relative flex flex-col gap-2 rounded-lg p-2 py-3 transition-all duration-200 ease-in-out hover:bg-zinc-800">
      <img src={imageUrl} alt={name} className="h-48 w-48" />
      <span>{capitalizeEachWord(name)}</span>
      {mediaCategory === MediaCategory.Song && (
        <span className="text-sm text-zinc-400">
          {capitalizeEachWord(artist)}
        </span>
      )}
      {mediaCategory === MediaCategory.Song && (
        <IconButton position="absolute right-1.5">
          <FaPlay />
        </IconButton>
      )}

      {mediaCategory === MediaCategory.Artist && (
        <span className="text-sm text-zinc-400">
          {capitalizeEachWord(type)}
        </span>
      )}
    </div>
  );
}

export default Media;
