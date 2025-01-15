import supabase from "./supabase";

export async function getAllSinglesOfArtist(artistId) {
  try {
    let { data: singles, error } = await supabase
      .from("tracks")
      .select("*")
      .eq("artist_id", artistId)
      .eq("is_single", true)
      .order("created_at", { ascending: false });

    if (error) throw new Error("Singles not found.");
    return singles;
  } catch (err) {
    console.error("getAllSinglesOfArtist issue: " + err);
  }
}

export async function getAllTracksOfArtist(artistId) {
  try {
    let { data: tracks, error } = await supabase
      .from("tracks")
      .select("*")
      .eq("artist_id", artistId);

    if (error) throw new Error("Tracks not found.");
    return tracks;
  } catch (err) {
    console.error("getAllTracksOfArtist issue: " + err);
  }
}
