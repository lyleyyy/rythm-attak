import capitalizeEachWord from "@/helper/capitalizeEachWord";

function PlayerTrackPreview({ track }) {
  const { name, artist, imageUrl } = track;

  return (
    <div className="flex w-1/4 gap-4">
      <img src={imageUrl} atl={name} width={60} height={60} />
      <div className="flex flex-col justify-center">
        <label>{capitalizeEachWord(name)}</label>
        <span className="text-zinc-400">{capitalizeEachWord(artist)}</span>
      </div>
    </div>
  );
}

export default PlayerTrackPreview;
