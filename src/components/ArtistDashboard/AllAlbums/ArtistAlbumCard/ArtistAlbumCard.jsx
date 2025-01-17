import ConfirmationModal from "@/components/Modals/ConfirmationModal/ConfirmationModal";
import useModalToggle from "@/hooks/useModalToggle";
import ThemeButton from "@/ui/ThemeButton";
import IconButton from "@/ui/IconButton";
import MediaOperationButton from "@/ui/MediaOperationButton";
import MediaOperationButtonsContainer from "@/ui/MediaOperationButtonsContainer";
import ModalContainer from "@/ui/ModalContainer";
import Image from "next/image";
import { useState } from "react";
import { RiPlayLargeFill } from "react-icons/ri";

function ArtistAlbumCard({
  album,
  isSelected,
  setIsDeleteFinished,
  setIsPublishFinished,
  onClick,
}) {
  const {
    id,
    album_name: albumName,
    album_story: albumStory,
    album_cover_url: albumCoverUrl,
    is_published: isPublished,
  } = album;

  const [isModalOpen, setIsModalOpen] = useModalToggle();
  const [isHover, setIsHover] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [confirmation, setConfirmation] = useState("");

  return (
    <div
      className={`relative flex flex-col gap-2 rounded-lg p-2 transition-all duration-200 ease-in-out ${!isSelected && "hover:bg-zinc-800"} ${isSelected && "bg-zinc-700"}`}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      onClick={onClick}
    >
      <div style={{ width: "180px", height: "180px", position: "relative" }}>
        <Image
          src={albumCoverUrl}
          alt={albumName}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      <h3>
        {albumName.length > 15 ? albumName.slice(0, 15) + "..." : albumName}
      </h3>

      {(isHover || isSelected) && !isPublished && (
        <MediaOperationButtonsContainer>
          <MediaOperationButton info={true} />
          <MediaOperationButton edit={true} />
          <MediaOperationButton remove={true} />
        </MediaOperationButtonsContainer>
      )}

      {(isHover || isSelected) && isPublished && (
        <MediaOperationButtonsContainer>
          <MediaOperationButton info={true} />
        </MediaOperationButtonsContainer>
      )}

      {(isHover || isSelected) && (
        <IconButton
          position="absolute top-1/2 right-1/2"
          bgColor="bg-purple-700"
          width="w-12"
          height="h-12"
          isHover={true}
          isTranslateCenter={true}
        >
          <RiPlayLargeFill />
        </IconButton>
      )}

      <span className="flex w-full justify-center">
        <ThemeButton disabled={isPublished || isPublishing}>
          {!isPublishing && isPublished ? "Published" : "Publish"}
          {isPublishing && "Publishing..."}
        </ThemeButton>
      </span>

      {isModalOpen && (
        <ModalContainer onClick={() => setIsModalOpen(false)}>
          <ConfirmationModal
            confirmation={confirmation}
            action={
              confirmation === "publish"
                ? publishTrack
                : confirmation === "remove"
                  ? removeTrack
                  : null
            }
            closeModal={() => setIsModalOpen(false)}
          />
        </ModalContainer>
      )}
    </div>
  );
}

export default ArtistAlbumCard;
