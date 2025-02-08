import Image from "next/image";
import MediaInfoOverview from "./MediaInfoOverview/MediaInfoOverview";

function MediaDetailsHeader({
  type,
  coverUrl,
  name,
  publishDate,
  duration,
  playCounts,
  trackCount,
  totalPlaytime,
  artistName,
  avatarUrl,
}) {
  return (
    <div className="flex gap-6 bg-zinc-800 p-4">
      <div className="relative h-[200px] w-[200px] shadow-lg shadow-black">
        <Image src={coverUrl} alt={name} fill style={{ objectFit: "cover" }} />
      </div>
      <div className="flex flex-col justify-end gap-2 text-zinc-400">
        <span className="text-lg font-bold text-white">{type}</span>
        <h1 className="text-6xl font-bold text-white">{name}</h1>
        <MediaInfoOverview
          type={type}
          publishDate={publishDate}
          duration={duration}
          playCounts={playCounts}
          trackCount={trackCount}
          totalPlaytime={totalPlaytime}
          artistName={artistName}
          avatarUrl={avatarUrl}
        />
      </div>
    </div>
  );
}

export default MediaDetailsHeader;
