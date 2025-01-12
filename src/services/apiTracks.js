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
    // let coverUrl = null;
    // if (singleCover.name)
    //   coverUrl = await uploadFile("track_cover", singleCover);
    // console.log(coverUrl, "coverUrl");

    console.log(trackAudio, "trackAudio");
    // const trackUrl = await uploadFile("track_audio", trackAudio);
    console.log(trackUrl, "trackUrl");
  } catch (err) {}
}

async function uploadFile(bucketName, file) {
  const { data, error } = await supabase.storage
    .from(bucketName)
    .upload(file.path, file);

  if (error) {
    console.log("uploadFile issue");
    console.error(error, "error");
  } else {
    return await generatedSignedUrl(bucketName, data.path);
  }
}

async function generatedSignedUrl(bucketName, filePath) {
  const { data, error } = await supabase.storage
    .from(bucketName)
    .createSignedUrl(filePath, 60 * 60 * 24 * 365 * 99);

  if (error) {
    console.error(error, "error");
  } else {
    return data.signedUrl;
  }
}

async function uploadAudio(trackAudio) {}
