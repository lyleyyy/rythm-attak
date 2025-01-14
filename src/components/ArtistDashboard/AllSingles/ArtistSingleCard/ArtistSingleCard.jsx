import { updateTrackPublish } from "@/services/apiTrack";
import Button from "@/ui/Button";
import IconButton from "@/ui/IconButton";
import Image from "next/image";
import { useState } from "react";
import { RiPlayLargeFill } from "react-icons/ri";

function ArtistSingleCard({ single }) {
  const {
    id,
    created_at: createdAt,
    track_name: trackName,
    artist_id: artistId,
    duration,
    play_counts: playCounts,
    track_story: trackStory,
    cover_url: coverUrl,
    audio_url: audioUrl,
    is_published,
    likes,
  } = single;

  const [isPlayable, setIsPlayable] = useState(false);
  const [isPublished, setIsPublished] = useState(is_published);
  const [isPublishing, setIsPublishing] = useState(false);

  async function clickForPublish() {
    setIsPublishing(true);

    try {
      const res = await updateTrackPublish(id, artistId);
      setIsPublished(res.at(0).is_published);
      setIsPublishing(false);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div
      className="relative flex flex-col gap-2 rounded-lg p-2 transition-all duration-200 ease-in-out hover:bg-zinc-800"
      onMouseEnter={() => setIsPlayable(true)}
      onMouseLeave={() => setIsPlayable(false)}
    >
      <div style={{ width: "180px", height: "180px", position: "relative" }}>
        <Image
          src={coverUrl}
          alt={trackName}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <h3>
        {trackName.length > 15 ? trackName.slice(0, 15) + "..." : trackName}
      </h3>

      {isPlayable && (
        <IconButton
          position="absolute top-1/2 right-1/2"
          bgColor="bg-purple-700"
          width="w-12"
          height="h-12"
          isHover={true}
          isTranslateCenter={true}
        >
          <RiPlayLargeFill />
        </IconButton>
      )}

      <div className="flex w-full justify-center">
        <Button
          hoverBgColor="hover:bg-purple-600"
          onClick={clickForPublish}
          disabled={isPublished}
        >
          {!isPublishing && (isPublished ? "Published" : "Publish")}
          {isPublishing && "Publishing"}
        </Button>
      </div>
    </div>
  );
}

export default ArtistSingleCard;
