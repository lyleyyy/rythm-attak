import MediaUploader from "../../Modals/MediaUploaderModal/MediaUploaderModal";
import Button from "@/ui/Button";
import ModalContainer from "@/ui/ModalContainer";
import useModalToggle from "@/hooks/useModalToggle";
import ArtistSingleCard from "./ArtistSingleCard/ArtistSingleCard";
import ArtistMediasContainer from "../ArtistMediasContainer/ArtistMediasContainer";
import { useEffect, useState } from "react";
import { getAllSinglesOfArtist } from "@/services/apiTracks";

function AllSingles({ artistId }) {
  const [singles, setSingles] = useState(null);
  const [isModalOpen, setIsModalOpen] = useModalToggle();
  const [isUploadFinished, setIsUnloadFinished] = useState(false);
  const [isDeleteFinished, setIsDeleteFinished] = useState(false);
  const [isPublishFinished, setIsPublishFinished] = useState(false);

  useEffect(
    function () {
      async function fetchMediasOfArtist() {
        try {
          const singles = await getAllSinglesOfArtist(artistId);
          setSingles(singles);
        } catch (err) {
          console.error(err);
        }
      }

      fetchMediasOfArtist();
      setIsDeleteFinished(false);
      setIsUnloadFinished(false);
      setIsPublishFinished(false);
    },
    [isUploadFinished, isDeleteFinished, isPublishFinished],
  );

  return (
    <div className="flex flex-col gap-10">
      <Button
        hoverBgColor="hover:bg-purple-600"
        onClick={() => setIsModalOpen(true)}
      >
        Track Upload
      </Button>
      {isModalOpen && (
        <ModalContainer onClick={() => setIsModalOpen(false)}>
          <MediaUploader
            isSingle={true}
            closeModal={() => setIsModalOpen(false)}
            setIsUnloadFinished={setIsUnloadFinished}
          />
        </ModalContainer>
      )}

      <ArtistMediasContainer>
        {!singles && "Loadinggggggg....."}
        {singles &&
          singles.map((single) => (
            <ArtistSingleCard
              key={single.id}
              single={single}
              setIsDeleteFinished={setIsDeleteFinished}
              setIsPublishFinished={setIsPublishFinished}
            />
          ))}
      </ArtistMediasContainer>
    </div>
  );
}

export default AllSingles;
