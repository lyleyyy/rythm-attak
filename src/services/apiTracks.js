import sanitizedFilePathName from "@/utils/sanitizedFilePathName";
import supabase from "./supabase";

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
      console.log(coverUrl, "coverUrl");
    }

    const audioUrl = await uploadFile(
      "track_audio",
      trackAudio,
      sanitizedFilePathName(trackAudio, trackName),
    );
    console.log(audioUrl, "trackUrl");

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
    console.log(data, "write into database success");
  } catch (err) {
    // need to check and operate:
    // if (coverUrl) delete uploaded cover, if (trackUrl) delete uploaded track audio
  }
}

async function uploadFile(bucketName, file, filePath) {
  const { data, error } = await supabase.storage
    .from(bucketName)
    .upload(filePath, file);

  if (error) {
    throw new Error("UploadFile issue: " + error + filePath);
  } else {
    return await generatedSignedUrl(bucketName, data.path);
  }
}

async function generatedSignedUrl(bucketName, filePath) {
  const { data, error } = await supabase.storage
    .from(bucketName)
    .createSignedUrl(filePath, 60 * 60 * 24 * 365 * 99);

  if (error) {
    throw new Error("Generate signed Url issue: " + error + filePath);
  } else {
    return data.signedUrl;
  }
}
