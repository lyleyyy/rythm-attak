import supabase from "./supabase";

export async function getAllTracks() {
  try {
    let { data: allTracks, error } = await supabase
      .from("tracks")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw new Error("Tracks not found.");
    return allTracks;
  } catch (err) {
    console.error("getAllTracks issue: " + err);
  }
}

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

export async function getPopularSingles(numberOfSingles) {
  try {
    let { data: tracks, error } = await supabase
      .from("tracks")
      .select("*")
      .eq("is_single", true)
      .eq("is_published", true)
      .order("play_counts", { ascending: false })
      .limit(numberOfSingles);

    if (error) throw new Error("Singles not found.");

    return tracks;
  } catch (err) {
    console.error("getPopularSingles issue: " + err);
  }
}

export async function getPopularTracks(numberOfTracks) {
  try {
    let { data: tracks, error } = await supabase
      .from("tracks")
      .select("*")
      .eq("is_published", true)
      .order("play_counts", { ascending: false })
      .limit(numberOfTracks);

    if (error) throw new Error("Tracks not found.");

    return tracks;
  } catch (err) {
    console.error("getPopularTracks issue: " + err);
  }
}

export async function getArtistPopularTracks(id) {
  try {
    let { data: tracks, error } = await supabase
      .from("tracks")
      .select("*")
      .eq("artist_id", id)
      .order("play_counts", { ascending: false })
      .limit(6);

    if (error) throw new Error("Tracks not found.");

    return tracks;
  } catch (err) {
    console.error("getArtistPopularTracks issue: " + err);
  }
}

export async function searchTracks(keyword) {
  console.log(keyword, "waya!!!");
}
