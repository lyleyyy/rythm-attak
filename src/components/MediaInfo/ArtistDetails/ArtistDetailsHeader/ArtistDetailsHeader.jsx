function ArtistDetailsHeader({ name, followers, bannerUrl }) {
  return (
    <div
      className={`relative flex h-72 gap-6 bg-cover p-4 pt-20`}
      style={{ backgroundImage: `url(${bannerUrl})` }}
    >
      <div className="flex flex-col justify-end gap-1 text-zinc-400">
        <h1 className="text-7xl font-bold text-white">{name}</h1>
        <span className="pl-1 text-zinc-300">
          {new Intl.NumberFormat().format(followers) + " Followers"}
        </span>
      </div>
    </div>
  );
}

export default ArtistDetailsHeader;
