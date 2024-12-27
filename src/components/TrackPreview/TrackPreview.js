"use client";
import IconButton from "@/ui/IconButton";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiPlayLargeFill } from "react-icons/ri";

function TrackPreview({ index, track }) {
  const { imageUrl, name } = track;
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="flex items-center justify-evenly gap-6 rounded-lg px-4 py-2 text-zinc-400 hover:bg-zinc-800"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <span className="flex w-1 items-center justify-center">
        {isHover ? (
          <IconButton textColor="text-white">
            <RiPlayLargeFill />
          </IconButton>
        ) : (
          index
        )}
      </span>

      <span className="w-10">
        <Image
          src={imageUrl}
          alt={name}
          width={40}
          height={40}
          style={{ borderRadius: "5px" }}
        />
      </span>
      <span className="w-56 text-white">
        <Link href="/track/:id" className="hover:underline">
          {name}
        </Link>
      </span>
      <span className="w-24">5,966,982</span>
      <span className="w-24">2:49</span>
    </div>
  );
}

export default TrackPreview;
