function PlayerTrackPreview({ track, artistName }) {
  const { cover_url: coverUrl, track_name: trackName } = track;

  return (
    <div className="flex w-1/4 gap-4">
      <img src={coverUrl} atl={trackName} width={60} height={60} />
      <div className="flex flex-col justify-center">
        <label>{trackName}</label>
        <span className="text-zinc-400">{artistName}</span>
      </div>
    </div>
  );
}

export default PlayerTrackPreview;
