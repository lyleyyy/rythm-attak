import Link from "next/link";
import MediaList from "./MediaList/MediaList";

function MediaListContainer({ mediaType, label, mediaList }) {
  const hrefParameter =
    mediaType === "track"
      ? "/alltracks"
      : mediaType === "album"
        ? "/allalbums"
        : mediaType === "artist"
          ? "/allartists"
          : "#";

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <h2 className="text-3xl font-medium">{label}</h2>
        <Link href={hrefParameter} className="hover:underline">
          Show All
        </Link>
      </div>
      <MediaList mediaList={mediaList} />
    </div>
  );
}

export default MediaListContainer;
