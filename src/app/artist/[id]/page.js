import Artist from "@/components/Artist/Artist";

function ArtistPage({ params }) {
  const { id } = params;

  return <Artist id={id}>ArtistPage, ID: {id}</Artist>;
}

export default ArtistPage;
