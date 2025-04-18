import { useState } from "react";
import Image from "next/image";
import IconButton from "@/ui/IconButton";
import { useCurrentAlbum } from "@/contexts/CurrentAlbumContext";
import { deleteTrack } from "@/services/apiTrack";
import { updateAlbumTrackCountAndPlayTime } from "@/services/apiAlbum";
import ModalContainer from "@/ui/ModalContainer";
import useModalToggle from "@/hooks/useModalToggle";
import ConfirmationModal from "@/components/Modals/ConfirmationModal/ConfirmationModal";
import convertSecsToHrsMinsSecs from "@/helper/convertSecsToHrsMinsSecs";
import { RxCross2 } from "react-icons/rx";

function SidebarTrackPreview({ track }) {
  const [isHoverOn, setIsHoverOn] = useState(false);
  const { currentAlbum, setUploadDeleteRefresh } = useCurrentAlbum();
  const [isModalOpen, setIsModalOpen] = useModalToggle();

  const {
    id,
    track_number: trackNumber,
    track_name: trackName,
    cover_url: trackCoverUrl,
    audio_url: audioUrl,
    duration,
    cover_path_name: coverPathName,
    audio_path_name: audioPathName,
  } = track;

  function onClickHandler() {
    setIsModalOpen(true);
  }

  async function deleteTrackHandler() {
    await updateAlbumTrackCountAndPlayTime(currentAlbum.id, -1, -duration);
    const res = await deleteTrack(id, coverPathName, audioPathName);
    if (res === "deleted")
      setUploadDeleteRefresh((uploadDeleteRefresh) => !uploadDeleteRefresh);
  }

  return (
    <div
      className={`flex w-full items-center justify-between rounded py-1 pl-1 ${isHoverOn && "hover:bg-zinc-700 hover:shadow-lg"}`}
      onMouseEnter={() => setIsHoverOn(true)}
      onMouseLeave={() => setIsHoverOn(false)}
    >
      <span className="flex w-1/12 justify-center">{trackNumber}</span>
      <span className="flex w-1/12">
        <Image src={trackCoverUrl} alt={trackName} width={50} height={50} />
      </span>
      <span className="w-7/12">
        {trackName.length > 25 ? trackName.slice(0, 25) + "..." : trackName}
      </span>
      <span className="w-1/12">{convertSecsToHrsMinsSecs(duration)}</span>
      <span className="w-1/12">
        {isHoverOn && (
          <IconButton iconSize="text-xl" onClick={onClickHandler}>
            <RxCross2 />
          </IconButton>
        )}
      </span>

      {isModalOpen && (
        <ModalContainer>
          <ConfirmationModal
            confirmation="DELETE"
            action={deleteTrackHandler}
            closeModal={() => setIsModalOpen(false)}
          />
        </ModalContainer>
      )}
    </div>
  );
}

export default SidebarTrackPreview;
