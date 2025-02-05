import sanitizedFilePathName from "@/utils/sanitizedFilePathName";
import uploadFile from "./uploadFile";
import supabase from "./supabase";

export async function updateArtistBanner(bannerFile, id) {
  try {
    // delete previous banner in storage
    await deleteBanner(id);

    // upload to storage
    const bannerPathName = sanitizedFilePathName(bannerFile, "banner");
    const bannerUrl = await uploadFile(
      "artist_banners",
      bannerFile,
      bannerPathName,
    );

    // write into database
    const { data, error } = await supabase
      .schema("next_auth")
      .from("users")
      .update({ banner_url: bannerUrl, banner_path_name: bannerPathName })
      .eq("id", id)
      .select();

    if (error) throw new Error("Write into database issue: " + error);

    return bannerUrl;
  } catch (err) {
    // need to check and operate:
    // if (coverUrl) delete uploaded cover
  }
}

async function deleteBanner(id) {
  try {
    const { data, error } = await supabase
      .schema("next_auth")
      .from("users")
      .select("banner_url,banner_path_name")
      .eq("id", id);

    const { banner_url: bannerUrl, banner_path_name: bannerPathName } = data[0];

    if (bannerUrl && bannerPathName)
      await supabase.storage.from("artist_banners").remove([bannerPathName]);

    if (error) throw new Error("deleteBanner issue: " + error);

    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function updateBiography(id, biography) {
  try {
    // write into database
    const { data, error } = await supabase
      .schema("next_auth")
      .from("users")
      .update({ biography: biography })
      .eq("id", id)
      .select();

    if (error) throw new Error("updateBiography issue: " + error);

    const updatedBiography = data[0].biography;
    return updatedBiography;
  } catch (err) {
    console.error(err);
  }
}
