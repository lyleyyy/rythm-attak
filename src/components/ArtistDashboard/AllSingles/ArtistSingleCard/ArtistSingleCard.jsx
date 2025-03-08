import { useState } from "react";
import { deleteTrack, updateTrackPublish } from "@/services/apiTrack";
import ThemeButton from "@/ui/ThemeButton";
import MediaOperationButton from "@/ui/MediaOperationButton";
import Image from "next/image";
import MediaOperationButtonsContainer from "@/ui/MediaOperationButtonsContainer";
import ModalContainer from "@/ui/ModalContainer";
import useModalToggle from "@/hooks/useModalToggle";
import ConfirmationModal from "@/components/Modals/ConfirmationModal/ConfirmationModal";
import ThemePlayButton from "@/ui/ThemePlayButton";

function ArtistSingleCard({
  single,
  setIsDeleteFinished,
  setIsPublishFinished,
}) {
  const {
    id,
    created_at: createdAt,
    track_name: trackName,
    artist_id: artistId,
    duration,
    play_counts: playCounts,
    track_story: trackStory,
    cover_url: coverUrl,
    cover_path_name: coverPathName,
    audio_url: audioUrl,
    audio_path_name: audioPathName,
    is_published: isPublished,
    likes,
  } = single;

  const [isModalOpen, setIsModalOpen] = useModalToggle();
  const [isHover, setIsHover] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [confirmation, setConfirmation] = useState("");

  function confirmPublish() {
    setConfirmation("publish");
    setIsModalOpen(true);
  }

  async function publishTrack() {
    setIsPublishing(true);

    try {
      const res = await updateTrackPublish(id, artistId);
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

  async function removeTrack() {
    try {
      const res = await deleteTrack(id, coverPathName, audioPathName);
      if (res === "deleted") setIsDeleteFinished(true);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div
      className="relative flex flex-col gap-2 rounded-lg p-2 transition-all duration-200 ease-in-out hover:bg-zinc-800"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        className="relative h-[180px] w-[180px]"
        // style={{ width: "180px", height: "180px", position: "relative" }}
      >
        <Image
          src={coverUrl}
          alt={trackName}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      <h3>
        {trackName.length > 20 ? trackName.slice(0, 20) + "..." : trackName}
      </h3>

      {isHover && !isPublished && (
        <MediaOperationButtonsContainer>
          <MediaOperationButton info={true} />
          <MediaOperationButton edit={true} />
          <MediaOperationButton remove={true} onClick={confirmDelete} />
        </MediaOperationButtonsContainer>
      )}

      {isHover && isPublished && (
        <MediaOperationButtonsContainer>
          <MediaOperationButton info={true} />
        </MediaOperationButtonsContainer>
      )}

      {isHover && <ThemePlayButton absoluteOffsetCenter={true} />}

      <span className="flex w-full justify-center">
        <ThemeButton
          onClick={confirmPublish}
          disabled={isPublished || isPublishing}
        >
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

export default ArtistSingleCard;
