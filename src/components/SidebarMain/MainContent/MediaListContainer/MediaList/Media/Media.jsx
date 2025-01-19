"use client";
import { useState } from "react";
import Link from "next/link";
import ThemePlayButton from "@/ui/ThemePlayButton";
import MediaCategory from "@/types/MediaCategory";
import capitalizeEachWord from "@/helper/capitalizeEachWord";

function Media({ media }) {
  let { id, type, name, artist, imageUrl } = media;
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="relative flex flex-col gap-2 rounded-lg p-2 py-3 transition-all duration-200 ease-in-out hover:bg-zinc-800"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="max-h-[188px] max-w-[188px] overflow-hidden">
        <img src={imageUrl} alt={name} className="h-full w-full object-cover" />
      </div>
      <Link
        href={
          type === MediaCategory.Track
            ? `/track/${id}`
            : type === MediaCategory.Artist
              ? `/artist/${id}`
              : `/album/${id}`
        }
        className="hover:underline"
      >
        {capitalizeEachWord(name)}
      </Link>
      {(type === MediaCategory.Track || type === MediaCategory.Album) && (
        <Link
          href="/artist/artistID"
          className="text-sm text-zinc-400 hover:underline"
        >
          {capitalizeEachWord(artist)}
        </Link>
      )}
      {type === MediaCategory.Track && isHover && (
        <ThemePlayButton absoluteOffsetCenter={true} />
      )}

      {type === MediaCategory.Artist && (
        <span className="text-sm text-zinc-400">
          {capitalizeEachWord(type)}
        </span>
      )}
    </div>
  );
}

export default Media;
