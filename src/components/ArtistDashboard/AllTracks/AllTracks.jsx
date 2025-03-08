import { useEffect, useState } from "react";
import { getAllTracksOfArtist } from "@/services/apiTracks";
import ArtistTrackCard from "./ArtistTrackCard/ArtistTrackCard";
import ArtistMediasContainer from "../ArtistMediasContainer/ArtistMediasContainer";
import LoadingSpinner from "@/ui/LoadingSpinner";

function AllTracks({ artistId }) {
  const [tracks, setTracks] = useState(null);

  useEffect(function () {
    async function fetchMediasOfArtist() {
      try {
        const tracks = await getAllTracksOfArtist(artistId);
        setTracks(tracks);
      } catch (err) {
        console.error(err);
      }
    }

    fetchMediasOfArtist();
  }, []);

  return (
    <ArtistMediasContainer>
      {!tracks && <LoadingSpinner />}
      {tracks &&
        tracks.map((track) => <ArtistTrackCard key={track.id} track={track} />)}
    </ArtistMediasContainer>
  );
}

export default AllTracks;
