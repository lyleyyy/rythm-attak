import sanitizedFilePathName from "@/utils/sanitizedFilePathName";
import supabase from "./supabase";
import uploadFile from "./uploadFile";

export async function uploadTrack(
  trackName,
  artistId,
  trackDuration,
  isSingle,
  trackStory,
  trackCover,
  trackAudio,
  trackNumber = null,
  albumId = null,
) {
  try {
    // upload to storage
    let coverUrl = null;
    let coverPathName = null;
    if (isSingle) {
      coverPathName = sanitizedFilePathName(trackCover, trackName);
      coverUrl = await uploadFile("track_cover", trackCover, coverPathName);
      // console.log(coverUrl, "coverUrl");
    } else {
      coverUrl = trackCover;
    }

    const audioPathName = sanitizedFilePathName(trackAudio, trackName);
    const audioUrl = await uploadFile("track_audio", trackAudio, audioPathName);
    // console.log(audioUrl, "trackUrl");

    // write into database
    const { data, error } = await supabase
      .from("tracks")
      .insert([
        {
          track_name: trackName,
          artist_id: artistId,
          is_single: isSingle,
          duration: trackDuration,
          track_story: trackStory,
          cover_url: coverUrl,
          audio_url: audioUrl,
          cover_path_name: coverPathName,
          audio_path_name: audioPathName,
          track_number: trackNumber,
          album_id: albumId,
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

export async function deleteTrack(trackId, coverPathName, audioPathName) {
  try {
    // remove the cover and audio files in storage (pathnames)
    if (coverPathName) await deleteTrackCover(coverPathName);
    await deleteTrackAudio(audioPathName);

    // delete table row (trackId)
    const { error } = await supabase.from("tracks").delete().eq("id", trackId);

    if (error) throw new Error("deleteTrack database table issue: " + error);

    return "deleted";
  } catch (err) {
    console.error(err);
  }
}

async function deleteTrackCover(coverPathName) {
  try {
    const { data, error } = await supabase.storage
      .from("track_cover")
      .remove([coverPathName]);

    if (error) throw new Error("deleteTrackCover issue: " + error);
    return data;
  } catch (err) {
    console.error(err);
  }
}

async function deleteTrackAudio(audioPathName) {
  try {
    const { data, error } = await supabase.storage
      .from("track_audio")
      .remove([audioPathName]);

    if (error) throw new Error("deleteTrackAudio issue: " + error);
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function updateTrackPublish(trackId) {
  try {
    const { data, error } = await supabase
      .from("tracks")
      .update({ is_published: true, publish_date: new Date().toISOString() })
      .eq("id", trackId)
      // .eq("artist_id", artistId)
      .select();

    if (error) throw new Error(error);

    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getTrackById(id) {
  try {
    let { data, error } = await supabase
      .from("tracks")
      .select("*")
      .eq("id", id);

    if (error) throw new Error("Track not found.");

    return data[0];
  } catch (err) {
    console.error("getTrackById issue: " + err);
  }
}
