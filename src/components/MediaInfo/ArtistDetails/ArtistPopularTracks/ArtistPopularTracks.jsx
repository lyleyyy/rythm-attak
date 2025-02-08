import ArtistPopularTracksContainer from "./ArtistPopularTracksContainer/ArtistPopularTracksContainer";
import ArtistTrackPreview from "./ArtistTrackPreview/ArtistTrackPreview";

function ArtistPopularTracks({ tracks }) {
  return (
    <div className="w-1/2 space-y-4">
      <h3 className="text-xl font-bold">Popular Tracks</h3>

      <ArtistPopularTracksContainer>
        {tracks.length > 0 &&
          tracks.map((track, i) => (
            <ArtistTrackPreview key={track.id} track={track} number={i + 1} />
          ))}
        {tracks.length === 0 && (
          <span>This artist hasn't released any tracks yet.</span>
        )}
      </ArtistPopularTracksContainer>
    </div>
  );
}

export default ArtistPopularTracks;
