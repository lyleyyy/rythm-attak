import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiPlayLargeFill } from "react-icons/ri";

function ArtistTrackPreview({ track, number }) {
  const {
    id,
    track_name: name,
    cover_url: coverUrl,
    play_counts: playCount,
    duration,
  } = track;

  const [isHoverOn, setIsHoverOn] = useState(false);

  return (
    <div
      className={`flex w-full items-center justify-between rounded py-2 pl-2 ${isHoverOn && "hover:bg-zinc-700 hover:shadow-lg"}`}
      onMouseEnter={() => setIsHoverOn(true)}
      onMouseLeave={() => setIsHoverOn(false)}
    >
      <span className="flex w-1/12 justify-center text-lg">
        {isHoverOn && <RiPlayLargeFill />}
        {!isHoverOn && number}
      </span>
      <div className="relative h-[50px] w-1/12 overflow-hidden">
        <Image src={coverUrl} alt={name} fill style={{ objectFit: "cover" }} />
      </div>
      <Link href={`/track/${id}`} className="w-6/12 hover:underline">
        {name}
      </Link>
      <span className="w-2/12">
        {new Intl.NumberFormat().format(playCount)}
      </span>
      <span className="w-1/12">{duration}</span>
    </div>
  );
}

export default ArtistTrackPreview;
