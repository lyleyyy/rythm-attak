import sanitizedFilePathName from "@/utils/sanitizedFilePathName";
import supabase from "./supabase";
import uploadFile from "./uploadFile";

export async function uploadTrack(
  trackName,
  artistId,
  trackDuration,
  isSingle,
  trackStory,
  singleCover,
  trackAudio,
) {
  try {
    // upload to storage
    let coverUrl = null;
    if (singleCover.name) {
      coverUrl = await uploadFile(
        "track_cover",
        singleCover,
        sanitizedFilePathName(singleCover, trackName),
      );
      // console.log(coverUrl, "coverUrl");
    }

    const audioUrl = await uploadFile(
      "track_audio",
      trackAudio,
      sanitizedFilePathName(trackAudio, trackName),
    );
    // console.log(audioUrl, "trackUrl");

    // write into database
    const { data, error } = await supabase
      .from("tracks")
      .insert([
        {
          track_name: trackName,
          artist_id: artistId,
          duration: trackDuration,
          is_single: isSingle,
          track_story: trackStory,
          cover_url: coverUrl,
          audio_url: audioUrl,
        },
      ])
      .select();

    if (error) throw new Error("Write into database issue: " + error);
    // console.log(data, "write into database success");
    return data;
  } catch (err) {
    // need to check and operate:
    // if (coverUrl) delete uploaded cover, if (trackUrl) delete uploaded track audio
  }
}

export async function getAllSinglesOfArtist(artistId) {
  try {
    let { data: singles, error } = await supabase
      .from("tracks")
      .select("*")
      .eq("artist_id", artistId)
      .eq("is_single", true);

    if (error) throw new Error("Singles not found.");
    return singles;
  } catch (err) {
    console.error("getAllSinglesOfArtist issue: " + err);
  }
}

export async function getAllAlbumsOfArtist(artistId) {
  try {
    let { data: albums, error } = await supabase
      .from("albums")
      .select("*")
      .eq("artist_id", artistId);

    if (error) throw new Error("Albums not found.");
    return albums;
  } catch (err) {
    console.error("getAllAlbumsOfArtist issue: " + err);
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
