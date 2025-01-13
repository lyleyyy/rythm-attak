import SinglesContainer from "./SinglesContainer/SinglesContainer";
import TracksUploader from "./TracksUploader/TracksUploader";
import Button from "@/ui/Button";
import ModalContainer from "@/ui/ModalContainer";
import useModalToggle from "@/hooks/useModalToggle";

function AllSingles() {
  const [isModalOpen, setIsModalOpen] = useModalToggle();

  return (
    <div className="">
      <Button onClick={() => setIsModalOpen(true)}>Track Upload</Button>
      {isModalOpen && (
        <ModalContainer onClick={() => setIsModalOpen(false)}>
          <TracksUploader />
        </ModalContainer>
      )}
      <SinglesContainer />
    </div>
  );
}

export default AllSingles;
