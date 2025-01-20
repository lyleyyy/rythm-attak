import { useState } from "react";
import Image from "next/image";
import IconButton from "@/ui/IconButton";
import { RxCross2 } from "react-icons/rx";

function SidebarTrackPreview({ track }) {
  const [isHoverOn, setIsHoverOn] = useState(false);

  const {
    track_number: trackNumber,
    track_name: trackName,
    cover_url: trackCoverUrl,
    audio_url: audioUrl,
    duration,
  } = track;

  return (
    <div
      className={`flex w-full items-center justify-between rounded py-1 ${isHoverOn && "hover:bg-zinc-700 hover:shadow-lg"}`}
      onMouseEnter={() => setIsHoverOn(true)}
      onMouseLeave={() => setIsHoverOn(false)}
    >
      <span className="flex w-1/12 justify-center">{trackNumber}</span>
      <span className="flex w-1/12">
        <Image src={trackCoverUrl} alt={trackName} width={50} height={50} />
      </span>
      <span className="w-7/12">{trackName}</span>
      <span className="w-1/12">{duration}</span>
      <span className="w-1/12">
        {isHoverOn && (
          <IconButton iconSize="text-xl">
            <RxCross2 />
          </IconButton>
        )}
      </span>
    </div>
  );
}

export default SidebarTrackPreview;
