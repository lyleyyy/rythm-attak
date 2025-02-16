"use client";
import IconButtonHoverBg from "@/ui/IconButtonHoverBg";
import { PiVinylRecordDuotone } from "react-icons/pi";
import { RiAddLargeFill } from "react-icons/ri";
import { MdFileUpload } from "react-icons/md";
import ModalContainer from "@/ui/ModalContainer";
import useModalToggle from "@/hooks/useModalToggle";
import AlbumTracksUploaderModal from "@/components/Modals/AlbumTracksUploaderModal/AlbumTracksUploaderModal";
import useLoginPrompt from "@/hooks/useLoginPrompt";
import AuthRequiredModal from "@/components/Modals/AuthRequiredModal/AuthRequiredModal";

function SidebarHeader({ loggedInUser, isArtist, currentAlbum }) {
  const [isModalOpen, setIsModalOpen] = useModalToggle();
  const { isLoginPromptOpen, openLoginPrompt, closeLoginPrompt } =
    useLoginPrompt();

  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center justify-center gap-2 text-center font-bold">
        <span className="text-xl">
          <PiVinylRecordDuotone />
        </span>
        <h3>
          {loggedInUser && isArtist
            ? "Your Album Tracks"
            : "Your Music Library"}
        </h3>
      </div>

      {!isArtist && (
        <IconButtonHoverBg
          iconSize="text-2xl"
          onClick={() => !loggedInUser && openLoginPrompt()}
        >
          <RiAddLargeFill />
        </IconButtonHoverBg>
      )}

      {isLoginPromptOpen && (
        <ModalContainer onClick={closeLoginPrompt}>
          <AuthRequiredModal closeLoginPrompt={closeLoginPrompt} />
        </ModalContainer>
      )}

      {loggedInUser && isArtist && currentAlbum && (
        <IconButtonHoverBg
          iconSize="text-2xl"
          onClick={() => setIsModalOpen(true)}
        >
          <MdFileUpload />
        </IconButtonHoverBg>
      )}

      {loggedInUser && isArtist && isModalOpen && (
        <ModalContainer onClick={() => setIsModalOpen(false)}>
          <AlbumTracksUploaderModal setIsModalOpen={setIsModalOpen} />
        </ModalContainer>
      )}
    </div>
  );
}

export default SidebarHeader;
