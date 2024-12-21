import capitalizeEachWord from "@/helper/capitalizeEachWord";

function MusicCard({ music }) {
  const { name, artist, imageUrl } = music;

  return (
    <div className="flex w-1/3 gap-4">
      <img src={imageUrl} atl={name} width={60} height={60} />
      <div className="flex flex-col justify-center">
        <label>{capitalizeEachWord(name)}</label>
        <span className="text-zinc-400">{capitalizeEachWord(artist)}</span>
      </div>
    </div>
  );
}

export default MusicCard;
