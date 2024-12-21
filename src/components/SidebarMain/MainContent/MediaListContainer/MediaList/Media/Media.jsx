"use client";
import capitalizeEachWord from "@/helper/capitalizeEachWord";
import MediaCategory from "@/types/MediaCategory";
import IconButton from "@/ui/IconButton";
import { useState } from "react";
import { RiPlayLargeFill } from "react-icons/ri";

function Media({ media, mediaCategory }) {
  const { type, name, artist, imageUrl } = media;
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="relative flex flex-col gap-2 rounded-lg p-2 py-3 transition-all duration-200 ease-in-out hover:bg-zinc-800"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img src={imageUrl} alt={name} className="h-48 w-48" />
      <span>{capitalizeEachWord(name)}</span>
      {mediaCategory === MediaCategory.Song && (
        <span className="text-sm text-zinc-400">
          {capitalizeEachWord(artist)}
        </span>
      )}
      {mediaCategory === MediaCategory.Song && isHover && (
        <IconButton
          position="absolute top-1/2 right-1/2"
          bgColor="bg-purple-700"
          width="w-12"
          height="h-12"
          isHover={true}
          isTranslateCenter={true}
        >
          <RiPlayLargeFill />
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
