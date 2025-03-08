import Media from "@/components/SidebarMain/MainContent/MediaListContainer/MediaList/MediaCard/MediaCard";

function MediaList({ mediaList }) {
  return (
    <div className="flex flex-wrap items-center justify-start">
      {mediaList.map((media) => (
        <Media key={media.id} media={media} />
      ))}
    </div>
  );
}

export default MediaList;
