"use client";
import { useEffect, useState } from "react";
import MediaController from "../MediaController/MediaController";
import MediaDetailsHeader from "../MediaDetailsHeader/MediaDetailsHeader";
import MediaOwner from "../MediaOwner/MediaOwner";
import MediaStory from "../MediaStory/MediaStory";
import { getAlbumById } from "@/services/apiAlbum";
import { getUserById } from "@/services/apiUser";

function AlbumDetails({ id }) {
  const [album, setAlbum] = useState(null);
  const [artist, setArtist] = useState(null);

  useEffect(function () {
    async function fetchAlbumInfo() {
      const album = await getAlbumById(id);
      const artist = await getUserById(album.artist_id);
      setAlbum(album);
      setArtist(artist);
    }

    fetchAlbumInfo();
  }, []);

  if (!album || !artist) return null;

  const {
    album_name: albumName,
    album_cover_url: coverUrl,
    publish_date: publishDate,
    track_count: trackCount,
    total_playtime: totalPlaytime,
    album_story: albumStory,
  } = album;

  const { id: artistId, name: artistName, image: avatarUrl } = artist;

  return (
    <div className="mb-20 space-y-4">
      <MediaDetailsHeader
        type="Album"
        coverUrl={coverUrl}
        name={albumName}
        publishDate={publishDate}
        trackCount={trackCount}
        totalPlaytime={totalPlaytime}
        artistName={artistName}
        avatarUrl={avatarUrl}
      />

      <MediaController type="Album" />
      <MediaOwner
        avatarUrl={avatarUrl}
        artistId={artistId}
        artistName={artistName}
      />
      <MediaStory albumStory={albumStory} />
    </div>
  );
}

export default AlbumDetails;
