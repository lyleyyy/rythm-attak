import { useEffect, useRef, useState } from "react";
import ThemeButton from "@/ui/ThemeButton";
import AlbumTrackInput from "./AlbumTrackInput/AlbumTrackInput";
import IconButton from "@/ui/IconButton";
import { RiAddLargeFill } from "react-icons/ri";
import { useAuth } from "@/contexts/AuthContext";
import { uploadTracksToAlbum } from "@/services/apiAlbum";
import { useCurrentAlbum } from "@/contexts/CurrentAlbumContext";
import getTrackDuration from "@/utils/getTrackDuration";

function AlbumTracksUploaderModal({ setIsModalOpen }) {
  const { loggedInUser, isArtist } = useAuth();
  const { currentAlbum } = useCurrentAlbum();
  const [inputs, setInputs] = useState([{ id: Date.now() }]);
  const [isUploading, setIsUploading] = useState(false);

  const inputsContainerRef = useRef(null);

  useEffect(() => {
    if (inputsContainerRef.current) {
      inputsContainerRef.current.scrollTop =
        inputsContainerRef.current.scrollHeight;
    }
  }, [inputs]);

  function addAlbumTrackInput(e) {
    e.preventDefault();
    setInputs(() => [...inputs, { id: Date.now() }]);
  }

  function deleteAlbumTrackInput(e, id) {
    e.preventDefault();
    setInputs(() => [...inputs.filter((el, i) => el.id !== id)]);
  }

  async function onSubmitHandler(e) {
    e.preventDefault();
    if (!loggedInUser || !isArtist) return;
    setIsUploading(true);

    const formData = new FormData(e.currentTarget);
    const albumTrackNumbers = formData.getAll("track number");
    const albumTrackNames = formData.getAll("track name");
    const albumTrackAudios = formData.getAll("audio");
    const tracksDuration = await Promise.all(
      albumTrackAudios.map((audio) => getTrackDuration(audio)),
    );

    const albumTracks = [];
    for (let i = 0; i < albumTrackNumbers.length; i++) {
      albumTracks.push({
        trackName: albumTrackNames[i],
        artistId: loggedInUser.id,
        trackDuration: tracksDuration[i],
        isSingle: false,
        trackStory: null,
        trackCover: currentAlbum.album_cover_url,
        trackAudio: albumTrackAudios[i],
        trackNumber: albumTrackNumbers[i],
        albumId: currentAlbum.id,
      });
    }

    // console.log(albumTracks);

    await uploadTracksToAlbum(albumTracks);

    // if success

    setIsUploading(false);
    setIsModalOpen(false);
  }

  return (
    <form
      className={`flex h-3/4 w-3/5 flex-col items-center justify-between gap-8 rounded bg-black p-6 ${isUploading && "pointer-events-none"}`}
      onSubmit={onSubmitHandler}
    >
      <div
        className="flex flex-1 flex-col items-center gap-2 overflow-y-auto"
        ref={inputsContainerRef}
      >
        {inputs.map((el, index) => (
          <AlbumTrackInput
            key={el.id}
            index={index}
            onClick={(e) => deleteAlbumTrackInput(e, el.id)}
          />
        ))}
      </div>
      <IconButton iconSize="text-3xl" onClick={addAlbumTrackInput}>
        <RiAddLargeFill />
      </IconButton>
      <ThemeButton type="submit" disabled={isUploading}>
        {!isUploading && "Upload"}
        {isUploading && "Uploading..."}
      </ThemeButton>
    </form>
  );
}

export default AlbumTracksUploaderModal;
