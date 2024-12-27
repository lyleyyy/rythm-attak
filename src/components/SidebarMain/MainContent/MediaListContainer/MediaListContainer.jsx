import Link from "next/link";
import MediaList from "./MediaList/MediaList";

function MediaListContainer({ label, mediaList }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <h2 className="text-bold text-3xl">{label}</h2>
        <Link href="#" className="hover:underline">
          Show All
        </Link>
      </div>
      <MediaList mediaList={mediaList} />
    </div>
  );
}

export default MediaListContainer;
