import useModalToggle from "@/hooks/useModalToggle";
import ThemeButton from "@/ui/ThemeButton";
import ModalContainer from "@/ui/ModalContainer";
import ArtistMediasContainer from "../ArtistMediasContainer/ArtistMediasContainer";
import { useEffect, useState } from "react";
import LoadingSpinner from "@/ui/LoadingSpinner";
import { getAllAlbumsOfArtist } from "@/services/apiAlbums";
import ArtistAlbumCard from "./ArtistAlbumCard/ArtistAlbumCard";
import MediaUploaderModal from "../../Modals/MediaUploaderModal/MediaUploaderModal";
import { useCurrentAlbum } from "@/contexts/CurrentAlbumContext";

function AllAlbums({ artistId }) {
  const [albums, setAlbums] = useState(null);
  const [isModalOpen, setIsModalOpen] = useModalToggle();
  const [isCreateFinished, setIsCreateFinished] = useState(false);
  const [isDeleteFinished, setIsDeleteFinished] = useState(false);
  const [isPublishFinished, setIsPublishFinished] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const { setCurrentAlbum } = useCurrentAlbum();

  useEffect(
    function () {
      async function fetchMediasOfArtist() {
        try {
          const albums = await getAllAlbumsOfArtist(artistId);
          setAlbums(albums);
        } catch (err) {
          console.error(err);
        }
      }

      fetchMediasOfArtist();
      setIsDeleteFinished(false);
      setIsCreateFinished(false);
      setIsPublishFinished(false);
    },
    [isCreateFinished, isDeleteFinished, isPublishFinished],
  );

  function clickSelectHandler(e, index) {
    if (!["svg", "path", "BUTTON"].includes(e.target.tagName)) {
      setSelectedAlbum(index);
      setCurrentAlbum(albums.at(index));
    }
  }

  return (
    <div className="flex flex-col gap-10">
      <ThemeButton onClick={() => setIsModalOpen(true)}>
        Create Album
      </ThemeButton>
      {isModalOpen && (
        <ModalContainer onClick={() => setIsModalOpen(false)}>
          <MediaUploaderModal
            isAlbum={true}
            closeModal={() => setIsModalOpen(false)}
            setIsCreateFinished={setIsCreateFinished}
          />
        </ModalContainer>
      )}

      <ArtistMediasContainer>
        {!albums && <LoadingSpinner />}
        {albums &&
          albums.map((album, index) => (
            <ArtistAlbumCard
              key={album.id}
              album={album}
              isSelected={selectedAlbum === index}
              setIsDeleteFinished={setIsDeleteFinished}
              setIsPublishFinished={setIsPublishFinished}
              onClick={(e) => clickSelectHandler(e, index)}
            />
          ))}
      </ArtistMediasContainer>
    </div>
  );
}

export default AllAlbums;
