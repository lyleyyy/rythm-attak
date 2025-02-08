import Image from "next/image";

function MediaInfoOverview({
  type,
  publishDate,
  duration = null,
  playCounts = null,
  trackCount = null,
  totalPlaytime = null,
  artistName,
  avatarUrl,
}) {
  return (
    <div className="flex items-center justify-start gap-4">
      <div className="flex items-center gap-2">
        <Image
          src={avatarUrl}
          alt="artist"
          width={30}
          height={30}
          style={{ borderRadius: "50%" }}
        />
        <span>{artistName}</span>
      </div>
      <div className="text-zinc-400">
        <label>Date: </label>
        <span className="font-normal">{publishDate.slice(0, 4)}</span>
      </div>

      {type === "Track" && (
        <>
          <div>
            <label>Duration: </label>
            <span>{duration}</span>
          </div>
          <div>
            <label>Playcounts: </label>
            <span>{new Intl.NumberFormat().format(playCounts)}</span>
          </div>
        </>
      )}

      {type === "Album" && (
        <>
          <div>
            <label>Track Count: </label>
            <span>{trackCount + " tracks"}</span>
          </div>
          <div>
            <label>Total Playtime: </label>
            <span>{totalPlaytime}</span>
          </div>
        </>
      )}
    </div>
  );
}

export default MediaInfoOverview;
