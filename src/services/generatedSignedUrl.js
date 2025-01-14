import supabase from "./supabase";

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

export default generatedSignedUrl;
