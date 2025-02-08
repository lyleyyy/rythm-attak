import { useEffect, useState } from "react";
import Image from "next/image";
import MediaOperationButtonsContainer from "@/ui/MediaOperationButtonsContainer";
import MediaOperationButton from "@/ui/MediaOperationButton";
import ThemePlayButton from "@/ui/ThemePlayButton";
import isoDateToEuropeanDateFormat from "@/helper/isoDateToEuropeanDateFormat";
import { getAlbumById } from "@/services/apiAlbum";

function ArtistTrackCard({ track }) {
  const {
    id,
    track_name: trackName,
    cover_url: coverUrl,
    is_single: isSingle,
    album_id: albumId,
    publish_date: publishDate,
    play_counts: playCounts,
    duration,
  } = track;

  const [isHover, setIsHover] = useState(false);
  const [albumName, setAlbumName] = useState(null);

  useEffect(function () {
    async function getAlbumName() {
      let album;
      if (albumId) {
        album = await getAlbumById(albumId);
        setAlbumName(album.album_name);
      }
    }

    getAlbumName();
  }, []);

  if (!albumName) return null;

  return (
    <div
      className="relative flex flex-col gap-2 rounded-lg p-2 transition-all duration-200 ease-in-out hover:bg-zinc-800"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div style={{ width: "200px", height: "200px", position: "relative" }}>
        <Image
          src={coverUrl}
          alt={trackName}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={true}
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="flex flex-col">
        <span>
          Name:{" "}
          {trackName.length > 15 ? trackName.slice(0, 15) + "..." : trackName}
        </span>
        <span>
          {isSingle
            ? "Single Track"
            : `Album: ${albumName && (albumName.length > 15 ? albumName.slice(0, 15) + "..." : albumName)}`}
        </span>
        <span>Duration: {duration}</span>
        <span>Publish Date: {isoDateToEuropeanDateFormat(publishDate)}</span>
        <span>Play Count: {playCounts}</span>
      </div>

      {isHover && (
        <MediaOperationButtonsContainer>
          <MediaOperationButton info={true} />
        </MediaOperationButtonsContainer>
      )}

      {isHover && <ThemePlayButton absoluteOffsetCenter={true} />}
    </div>
  );
}

export default ArtistTrackCard;
