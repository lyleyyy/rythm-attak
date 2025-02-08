"use client";
import { useEffect, useState } from "react";
import MediaController from "../MediaController/MediaController";
import ArtistDetailsHeader from "./ArtistDetailsHeader/ArtistDetailsHeader";
import { getUserById } from "@/services/apiUser";
import MediaStory from "../MediaStory/MediaStory";
import { getArtistPopularTracks } from "@/services/apiTracks";
import ArtistPopularTracks from "./ArtistPopularTracks/ArtistPopularTracks";

function ArtistDetails({ id }) {
  const [artist, setArtist] = useState(null);
  const [popularTracks, setPopularTracks] = useState(null);

  useEffect(function () {
    async function fectchArtist() {
      const artist = await getUserById(id);
      const tracks = await getArtistPopularTracks(id);
      setArtist(artist);
      setPopularTracks(tracks);
    }

    fectchArtist();
  }, []);

  if (!artist || !popularTracks) return null;

  const { name, followers, banner_url: bannerUrl, biography } = artist;

  return (
    <div className="mb-20 space-y-4">
      <ArtistDetailsHeader
        name={name}
        followers={followers}
        bannerUrl={bannerUrl}
      />
      <MediaController type="Artist" />
      <div className="flex gap-4 p-4">
        <ArtistPopularTracks tracks={popularTracks} />
        <MediaStory biography={biography} />
      </div>
    </div>
  );
}

export default ArtistDetails;
