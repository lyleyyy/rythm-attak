import ConfirmationModal from "@/components/Modals/ConfirmationModal/ConfirmationModal";
import useModalToggle from "@/hooks/useModalToggle";
import ThemeButton from "@/ui/ThemeButton";
import MediaOperationButton from "@/ui/MediaOperationButton";
import MediaOperationButtonsContainer from "@/ui/MediaOperationButtonsContainer";
import ModalContainer from "@/ui/ModalContainer";
import Image from "next/image";
import { useState } from "react";
import ThemePlayButton from "@/ui/ThemePlayButton";
import {
  deleteAlbum,
  getTracksOfAlbum,
  updateAlbumPublish,
} from "@/services/apiAlbum";
import PromptModal from "@/components/Modals/PromptModal/PromptModal";
import { useCurrentAlbum } from "@/contexts/CurrentAlbumContext";

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
    cover_path_name: coverPathName,
  } = album;

  const [isModalOpen, setIsModalOpen] = useModalToggle();
  const [isHover, setIsHover] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [confirmation, setConfirmation] = useState("");
  const [promptNoTracks, setPromptNoTracks] = useState(false);
  const { currentAlbum, setCurrentAlbum } = useCurrentAlbum();

  async function confirmPublish() {
    const albumTracks = await getTracksOfAlbum(id);
    if (albumTracks.length === 0) setPromptNoTracks(true);

    setConfirmation("publish");
    setIsModalOpen(true);
  }

  async function publishAlbum() {
    setIsPublishing(true);

    try {
      await updateAlbumPublish(id);

      setIsPublishing(false);
      setIsPublishFinished(true);
    } catch (err) {
      console.log(err);
    }
  }

  function confirmDelete() {
    setConfirmation("remove");
    setIsModalOpen(true);
  }

  async function removeAlbum() {
    try {
      await deleteAlbum(id, coverPathName);
      if (currentAlbum.id === id) setCurrentAlbum(null);
      setIsDeleteFinished(true);
    } catch (err) {
      console.log(err);
    }
  }

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
          <MediaOperationButton remove={true} onClick={confirmDelete} />
        </MediaOperationButtonsContainer>
      )}

      {(isHover || isSelected) && isPublished && (
        <MediaOperationButtonsContainer>
          <MediaOperationButton info={true} />
        </MediaOperationButtonsContainer>
      )}

      {(isHover || isSelected) && (
        <ThemePlayButton absoluteOffsetCenter={true} />
      )}

      <span className="flex w-full justify-center">
        <ThemeButton
          disabled={isPublished || isPublishing}
          onClick={confirmPublish}
        >
          {!isPublishing && isPublished ? "Published" : "Publish"}
          {isPublishing && "Publishing..."}
        </ThemeButton>
      </span>

      {!promptNoTracks && isModalOpen && (
        <ModalContainer onClick={() => setIsModalOpen(false)}>
          <ConfirmationModal
            confirmation={confirmation}
            action={
              confirmation === "publish"
                ? publishAlbum
                : confirmation === "remove"
                  ? removeAlbum
                  : null
            }
            closeModal={() => setIsModalOpen(false)}
          />
        </ModalContainer>
      )}

      {promptNoTracks && isModalOpen && (
        <ModalContainer onClick={() => setIsModalOpen(false)}>
          <PromptModal
            text="The album cannot be published because it currently has no tracks. Please upload some tracks first, and then try publishing the album."
            onClick={() => setIsModalOpen(false)}
          />
        </ModalContainer>
      )}
    </div>
  );
}

export default ArtistAlbumCard;
