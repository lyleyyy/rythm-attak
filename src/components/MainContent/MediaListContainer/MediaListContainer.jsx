import Link from "next/link";
import MediaList from "./MediaList/MediaList";

function MediaListContainer({ label, mediaList, mediaCategory }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <h2 className="text-bold text-3xl">{label}</h2>
        <Link href="#" className="hover:underline">
          Show All
        </Link>
      </div>
      <MediaList mediaList={mediaList} mediaCategory={mediaCategory} />
    </div>
  );
}

export default MediaListContainer;
