import AlbumDetails from "@/components/MediaInfo/AlbumDetails/AlbumDetails";

async function AlbumPage({ params }) {
  const { id } = await params;

  return <AlbumDetails id={id} />;
}

export default AlbumPage;
