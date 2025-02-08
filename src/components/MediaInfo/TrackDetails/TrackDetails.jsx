"use client";
import { useEffect, useState } from "react";
import MediaDetailsHeader from "../MediaDetailsHeader/MediaDetailsHeader";
import MediaController from "../MediaController/MediaController";
import MediaOwner from "../MediaOwner/MediaOwner";
import MediaStory from "../MediaStory/MediaStory";
import { getTrackById } from "@/services/apiTrack";
import { getUserById } from "@/services/apiUser";

function TrackDetails({ id }) {
  const [track, setTrack] = useState(null);
  const [artist, setArtist] = useState(null);

  useEffect(function () {
    async function fetchTrackInfo() {
      const track = await getTrackById(id);
      const artist = await getUserById(track.artist_id);
      setTrack(track);
      setArtist(artist);
    }

    fetchTrackInfo();
  }, []);

  if (!track || !artist) return null;

  const {
    track_name: trackName,
    cover_url: coverUrl,
    is_single: isSingle,
    publish_date: publishDate,
    play_counts: playCounts,
    duration,
    track_story: trackStory,
  } = track;

  const { id: artistId, name: artistName, image: avatarUrl } = artist;

  return (
    <div className="mb-20 space-y-4">
      <MediaDetailsHeader
        type="Track"
        coverUrl={coverUrl}
        name={trackName}
        publishDate={publishDate}
        duration={duration}
        playCounts={playCounts}
        artistName={artistName}
        avatarUrl={avatarUrl}
      />

      <MediaController />
      <MediaOwner
        avatarUrl={avatarUrl}
        artistId={artistId}
        artistName={artistName}
      />
      {isSingle && <MediaStory trackStory={trackStory} />}
    </div>
  );
}

export default TrackDetails;
