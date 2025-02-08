import supabase from "./supabase";

export async function getTrendingArtists(numbersOfArtists) {
  try {
    let { data: artists, error } = await supabase
      .schema("next_auth")
      .from("users")
      .select("*")
      .eq("is_artist", true)
      .order("followers", { ascending: false })
      .limit(numbersOfArtists);

    if (error) throw new Error("getTrendingArtist issue: " + error);

    return artists;
  } catch (err) {
    console.error(err);
  }
}
