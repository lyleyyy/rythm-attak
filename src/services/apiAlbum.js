import sanitizedFilePathName from "@/utils/sanitizedFilePathName";
import supabase from "./supabase";
import uploadFile from "./uploadFile";
import { deleteTrack, updateTrackPublish, uploadTrack } from "./apiTrack";

export async function createAlbum(albumName, artistId, albumStory, albumCover) {
  try {
    // upload to storage
    let coverUrl = null;
    let coverPathName = null;
    if (albumCover.name) {
      coverPathName = sanitizedFilePathName(albumCover, albumName);
      coverUrl = await uploadFile("album_covers", albumCover, coverPathName);
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
          cover_path_name: coverPathName,
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

export async function getAlbum(albumId) {
  try {
    let { data: album, error } = await supabase
      .from("albums")
      .select("*")
      .eq("album_id", albumId);

    if (error) throw new Error("Album not found.");

    return album;
  } catch (err) {
    console.error("getAlbum issue: " + err);
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

export async function deleteAlbum(albumId, coverPathName) {
  try {
    const albumTracks = await getTracksOfAlbum(albumId);
    if (albumTracks.length > 0)
      await Promise.all(
        albumTracks.map((track) => {
          const {
            id: trackId,
            cover_path_name: coverPathName,
            audio_path_name: audioPathName,
          } = track;
          deleteTrack(trackId, coverPathName, audioPathName);
        }),
      );

    await deleteAlbumCover(coverPathName);

    const { data, error } = await supabase
      .from("albums")
      .delete()
      .eq("id", albumId);

    if (error) throw new Error("deleteAlbum issue: " + error);

    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function updateAlbumPublish(albumId) {
  try {
    const albumTracks = await getTracksOfAlbum(albumId);
    if (albumTracks.length > 0)
      await Promise.all(
        albumTracks.map((track) => {
          updateTrackPublish(track.id);
        }),
      );

    const { data, error } = await supabase
      .from("albums")
      .update({ is_published: true, publish_date: new Date().toISOString() })
      .eq("id", albumId)
      .select();

    if (error) throw new Error("updateAlbumPublish issue: " + error);

    return data;
  } catch (err) {
    console.error(err);
  }
}

async function deleteAlbumCover(coverPathName) {
  try {
    const { data, error } = await supabase.storage
      .from("album_covers")
      .remove([coverPathName]);

    if (error) throw new Error("deleteAlbumCover issue: " + error);
    return data;
  } catch (err) {
    console.error(err);
  }
}
