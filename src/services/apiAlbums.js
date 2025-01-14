import sanitizedFilePathName from "@/utils/sanitizedFilePathName";
import supabase from "./supabase";
import uploadFile from "./uploadFile";

export async function createAlbum(albumName, artistId, albumStory, albumCover) {
  try {
    // upload to storage
    let coverUrl = null;
    if (albumCover.name) {
      coverUrl = await uploadFile(
        "album_covers",
        albumCover,
        sanitizedFilePathName(albumCover, albumName),
      );
      //   console.log(coverUrl, "coverUrl");
    }

    // write into database
    const { data, error } = await supabase
      .from("albums")
      .insert([
        {
          album_name: albumName,
          artist_id: artistId,
          album_story: albumStory,
          album_cover_url: coverUrl,
        },
      ])
      .select();

    if (error) throw new Error("Write into database issue: " + error);
    // console.log(data, "write into database success");
    return data;
  } catch (err) {
    // need to check and operate:
    // if (coverUrl) delete uploaded cover
  }
}
