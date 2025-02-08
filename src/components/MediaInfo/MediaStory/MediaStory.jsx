function MediaStory({ trackStory, albumStory, biography }) {
  return (
    <section className={`${biography && "w-1/3"} p-4 text-zinc-400`}>
      <h3 className="text-xl">
        {trackStory && "Track Story"}
        {albumStory && "Album Story"}
        {biography && "Biography"}
      </h3>
      <p>{trackStory || albumStory || biography}</p>
    </section>
  );
}

export default MediaStory;
