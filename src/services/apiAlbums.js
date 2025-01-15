import supabase from "./supabase";

export async function getAllAlbumsOfArtist(artistId) {
  try {
    let { data: albums, error } = await supabase
      .from("albums")
      .select("*")
      .eq("artist_id", artistId)
      .order("created_at", { ascending: false });

    if (error) throw new Error("Albums not found.");
    return albums;
  } catch (err) {
    console.error("getAllAlbumsOfArtist issue: " + err);
  }
}
