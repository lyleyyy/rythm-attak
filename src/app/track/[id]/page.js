import TrackDetails from "@/components/MediaInfo/TrackDetails/TrackDetails";

async function TrackPage({ params }) {
  const { id } = await params;

  return <TrackDetails id={id} />;
}

export default TrackPage;
