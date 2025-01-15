import Button from "@/ui/Button";
import DragDrop from "../../ArtistDashboard/DragDrop/DragDrop";
import { uploadTrack } from "@/services/apiTrack";
import getTrackDuration from "@/utils/getTrackDuration";
import { useAuth } from "@/contexts/AuthContext";
import { createAlbum } from "@/services/apiAlbum";
import { useState } from "react";

function MediaUploaderModal({
  isSingle = false,
  isAlbum = false,
  closeModal,
  setIsUnloadFinished,
}) {
  const { loggedInUser } = useAuth();
  const [isUploading, setIsUploading] = useState(false);

  async function onSubmitHandler(e) {
    e.preventDefault();
    if (!loggedInUser) return;
    setIsUploading(true);

    const formData = new FormData(e.currentTarget);
    const artistId = loggedInUser.id;

    let res;
    if (isSingle) {
      const trackName = formData.get("track name");
      const trackAudio = formData.get("track");
      const trackDuration = await getTrackDuration(trackAudio);
      const trackStory = formData.get("track story");
      const singleCover = formData.get("single cover");

      res = await uploadTrack(
        trackName,
        artistId,
        trackDuration,
        isSingle,
        trackStory,
        singleCover,
        trackAudio,
      );
    }

    if (isAlbum) {
      const albumName = formData.get("album name");
      const albumStory = formData.get("album story");
      const albumCover = formData.get("album cover");

      res = await createAlbum(albumName, artistId, albumStory, albumCover);
    }

    // console.log(res, "wa!!!!!");
    setIsUnloadFinished(true);
    closeModal();
  }

  return (
    <form
      className="flex h-5/6 w-1/2 flex-col items-center space-y-4 rounded-lg bg-black p-8"
      onSubmit={onSubmitHandler}
    >
      <div className="flex h-[300px] w-3/4 justify-between">
        {isSingle && (
          <>
            <DragDrop label="Single Cover" name="single cover" />
            <DragDrop label="Track" name="track" />
          </>
        )}

        {isAlbum && <DragDrop label="Album Cover" name="album cover" />}
      </div>

      <div className="h-2/5 w-3/4 space-y-4">
        <div className="flex h-1/4 w-1/2 flex-col gap-2">
          <label className="text-lg font-medium">
            {isSingle ? "Track Name" : isAlbum ? "Album Name" : ""}
          </label>
          <input
            name={isSingle ? "track name" : isAlbum ? "album name" : ""}
            className="w-full rounded border-2 border-white bg-black p-1 focus:outline-0"
            placeholder={
              isSingle ? "Your track name" : isAlbum ? "Your album name" : ""
            }
            required
          />
        </div>

        <div className="flex h-2/3 w-full flex-col gap-2">
          <label className="text-lg font-medium">
            {isSingle ? "Track Story" : isAlbum ? "Album Story" : ""}
          </label>
          <textarea
            name={isSingle ? "track story" : isAlbum ? "album story" : ""}
            className="h-full w-full rounded border-2 border-white bg-black p-1 focus:outline-0"
            placeholder={
              isSingle ? "Your track story" : isAlbum ? "Your album story" : ""
            }
            required
          />
        </div>
      </div>

      <Button type="submit" disabled={isUploading}>
        {!isUploading && (isSingle ? "Upload" : isAlbum ? "Create" : "")}
        {isUploading && "Uploading..."}
      </Button>
    </form>
  );
}

export default MediaUploaderModal;
