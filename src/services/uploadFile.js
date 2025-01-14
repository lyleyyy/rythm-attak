import supabase from "./supabase";
import generatedSignedUrl from "./generatedSignedUrl";

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

export default uploadFile;
