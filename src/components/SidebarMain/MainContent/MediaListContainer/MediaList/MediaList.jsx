import Media from "@/components/SidebarMain/MainContent/MediaListContainer/MediaList/Media/Media";

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
