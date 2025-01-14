import MediaUploader from "../MediaUploader/MediaUploader";
import Button from "@/ui/Button";
import ModalContainer from "@/ui/ModalContainer";
import useModalToggle from "@/hooks/useModalToggle";
import ArtistSingleCard from "./ArtistSingleCard/ArtistSingleCard";
import ArtistMediasContainer from "../ArtistMediasContainer/ArtistMediasContainer";
import { useEffect, useState } from "react";
import { getAllSinglesOfArtist } from "@/services/apiTracks";

function AllSingles({ singles, setSingles, artistId }) {
  const [isModalOpen, setIsModalOpen] = useModalToggle();
  const [isUploadFinished, setIsUnloadFinished] = useState(false);

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
    },
    [isUploadFinished],
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
            <ArtistSingleCard key={single.id} single={single} />
          ))}
      </ArtistMediasContainer>
    </div>
  );
}

export default AllSingles;
