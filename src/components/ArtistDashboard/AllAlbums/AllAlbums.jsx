import useModalToggle from "@/hooks/useModalToggle";
import Button from "@/ui/Button";
import ModalContainer from "@/ui/ModalContainer";
import MediaUploader from "../MediaUploader/MediaUploader";

function AllAlbums() {
  const [isModalOpen, setIsModalOpen] = useModalToggle();

  return (
    <div className="">
      <Button onClick={() => setIsModalOpen(true)}>Create Album</Button>
      {isModalOpen && (
        <ModalContainer onClick={() => setIsModalOpen(false)}>
          <MediaUploader isAlbum={true} />
        </ModalContainer>
      )}
    </div>
  );
}

export default AllAlbums;
