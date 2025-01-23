import sanitizedFilePathName from "@/utils/sanitizedFilePathName";
import supabase from "./supabase";
import uploadFile from "./uploadFile";
import { uploadTrack } from "./apiTrack";

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

export async function uploadTracksToAlbum(albumTracks) {
  try {
    const res = await Promise.all(
      albumTracks.map((albumTrack) => {
        const {
          trackName,
          artistId,
          trackDuration,
          isSingle,
          trackStory,
          trackCover,
          trackAudio,
          trackNumber,
          albumId,
        } = albumTrack;

        return uploadTrack(
          trackName,
          artistId,
          trackDuration,
          isSingle,
          trackStory,
          trackCover,
          trackAudio,
          trackNumber,
          albumId,
        );
      }),
    );

    // console.log(res, "hmmm??????");
    if (res.at(0).length >= 1) return "uploadTracksToAlbum success";
  } catch (err) {
    console.error(err);
  }
}

export async function getTracksOfAlbum(albumId) {
  try {
    let { data: tracks, error } = await supabase
      .from("tracks")
      .select("*")
      .eq("album_id", albumId)
      .order("track_number", { ascending: true });

    if (error) throw new Error("Tracks not found for current album.");
    return tracks;
  } catch (err) {
    console.error("getTracksOfAlbum issue: " + err);
  }
}

export async function updateAlbumPublish(albumId) {
  try {
    const { data, error } = await supabase
      .from("albums")
      .update({ is_published: true })
      .eq("id", albumId)
      .select();

    if (error) throw new Error(error);

    return data;
  } catch (err) {
    console.error(err);
  }
}
