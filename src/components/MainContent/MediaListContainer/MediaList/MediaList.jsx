import Media from "./Media/Media";

function MediaList({ mediaList, mediaCategory }) {
  return (
    <div className="flex items-center justify-start">
      {mediaList.map((media) => (
        <Media key={media.id} media={media} mediaCategory={mediaCategory} />
      ))}
    </div>
  );
}

export default MediaList;
