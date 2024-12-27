import Track from "@/components/Track/Track";

function TrackPage({ params }) {
  const { id } = params;

  return <Track id={id} />;
}

export default TrackPage;
