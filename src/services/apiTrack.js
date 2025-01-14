import supabase from "./supabase";

export async function updateTrackPublish(trackId, artistId) {
  try {
    const { data, error } = await supabase
      .from("tracks")
      .update({ is_published: true })
      .eq("id", trackId)
      .eq("artist_id", artistId)
      .select();

    if (error) throw new Error(error);

    return data;
  } catch (err) {
    console.error(err);
  }
}
