import ArtistDetails from "@/components/MediaInfo/ArtistDetails/ArtistDetails";

async function ArtistPage({ params }) {
  const { id } = await params;

  return <ArtistDetails id={id} />;
}

export default ArtistPage;
