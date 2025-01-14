import Media from "@/components/Media/Media";

function MediaList({ mediaList }) {
  return (
    <div className="flex items-center justify-start">
      {mediaList.map((media) => (
        <Media key={media.id} media={media} />
      ))}
    </div>
  );
}

export default MediaList;
