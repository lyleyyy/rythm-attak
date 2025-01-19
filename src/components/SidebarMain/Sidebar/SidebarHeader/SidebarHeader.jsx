"use client";
import IconButtonHoverBg from "@/ui/IconButtonHoverBg";
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
        <span className="text-xl">
          <PiVinylRecordDuotone />
        </span>
        <h3>
          {loggedInUser && isArtist
            ? "Your Album Tracks"
            : "Your Music Library"}
        </h3>
      </div>

      <IconButtonHoverBg
        iconSize="text-2xl"
        onClick={() =>
          loggedInUser && isArtist && currentAlbum ? setIsModalOpen(true) : null
        }
      >
        {loggedInUser && isArtist && isOnAlbums && currentAlbum ? (
          <MdFileUpload />
        ) : loggedInUser && isArtist ? null : (
          <RiAddLargeFill />
        )}
      </IconButtonHoverBg>

      {loggedInUser && isArtist && isModalOpen && (
        <ModalContainer onClick={() => setIsModalOpen(false)}>
          <AlbumTracksUploaderModal setIsModalOpen={setIsModalOpen} />
        </ModalContainer>
      )}
    </div>
  );
}

export default SidebarHeader;
