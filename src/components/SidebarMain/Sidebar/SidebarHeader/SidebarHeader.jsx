"use client";
import IconButton from "@/ui/IconButton";
import { PiVinylRecordDuotone } from "react-icons/pi";
import { RiAddLargeFill } from "react-icons/ri";
import { MdFileUpload } from "react-icons/md";
import ModalContainer from "@/ui/ModalContainer";
import useModalToggle from "@/hooks/useModalToggle";
import AlbumTracksUploaderModal from "@/components/Modals/AlbumTracksUploaderModal/AlbumTracksUploaderModal";

function SidebarHeader({ loggedInUser, isArtist, isOnAlbums, currentAlbum }) {
  const [isModalOpen, setIsModalOpen] = useModalToggle();

  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center justify-center gap-2 text-center font-bold">
        <div className="text-xl">
          <PiVinylRecordDuotone />
        </div>
        <div>
          {loggedInUser && isArtist
            ? "Your Album Tracks"
            : "Your Music Library"}
        </div>
      </div>

      <IconButton
        iconSize="text-xl"
        hoverBgColor="hover:bg-white"
        hoverTextColor="hover:text-black"
        onClick={() => (loggedInUser && isArtist ? setIsModalOpen(true) : null)}
      >
        {loggedInUser && isArtist && isOnAlbums && currentAlbum ? (
          <MdFileUpload className="text-2xl" />
        ) : loggedInUser && isArtist ? null : (
          <RiAddLargeFill />
        )}
      </IconButton>

      {loggedInUser && isArtist && isModalOpen && (
        <ModalContainer onClick={() => setIsModalOpen(false)}>
          <AlbumTracksUploaderModal />
        </ModalContainer>
      )}
    </div>
  );
}

export default SidebarHeader;
