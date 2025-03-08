"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import MediaListContainer from "./MediaListContainer/MediaListContainer";
import ArtistDashboard from "@/components/ArtistDashboard/ArtistDashboard";
import { getPopularSingles, getPopularTracks } from "@/services/apiTracks";
import { getPopularAlbums } from "@/services/apiAlbums";
import { getTrendingArtists } from "@/services/apiArtists";

function MainContent() {
  const { loggedInUser } = useAuth();

  if (loggedInUser && loggedInUser.is_artist) return <ArtistDashboard />;

  const [popularSingles, setPopularSingles] = useState(null);
  const [popularAlbums, setPopularAlbums] = useState(null);
  const [trendingArtists, setTrendingArtists] = useState(null);
  const [popularTracks, setPopularTracks] = useState(null);

  useEffect(function () {
    async function getMedias() {
      const singles = await getPopularSingles(6);
      setPopularSingles(singles);
      const albums = await getPopularAlbums(6);
      setPopularAlbums(albums);
      const artist = await getTrendingArtists(6);
      setTrendingArtists(artist);
      const tracks = await getPopularTracks(6);
      setPopularTracks(tracks);
    }

    getMedias();
  }, []);

  if (!popularSingles || !popularAlbums || !trendingArtists || !popularTracks)
    return null;

  return (
    <div className="mb-20 space-y-10 p-4">
      <MediaListContainer
        mediaType="track"
        label="Popular Singles"
        mediaList={popularSingles}
      />
      <MediaListContainer
        mediaType="album"
        label="Popular Albums"
        mediaList={popularAlbums}
      />
      <MediaListContainer
        mediaType="artist"
        label="Trending Artists"
        mediaList={trendingArtists}
      />
      <MediaListContainer
        mediaType="track"
        label="RA Picks"
        mediaList={popularTracks}
      />
    </div>
  );
}

export default MainContent;
