import useModalToggle from "@/hooks/useModalToggle";
import Button from "@/ui/Button";
import ModalContainer from "@/ui/ModalContainer";

function AllAlbums() {
  const [isModalOpen, setIsModalOpen] = useModalToggle();

  return (
    <div className="">
      <Button onClick={() => setIsModalOpen(true)}>Album Upload</Button>
      {isModalOpen && (
        <ModalContainer onClick={() => setIsModalOpen(false)}>
          {/* <AlbumUploader /> */}
        </ModalContainer>
      )}
      {/* <SinglesContainer /> */}
    </div>
  );
}

export default AllAlbums;
