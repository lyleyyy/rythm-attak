import { useState } from "react";
import SinglesContainer from "./SinglesContainer/SinglesContainer";
import TracksUploader from "./TracksUploader/TracksUploader";
import Button from "@/ui/Button";
import ModalContainer from "@/ui/ModalContainer";

function AllSingles() {
  const [isTrackUploaderModalOpen, setIsTrackUploaderModalOpen] =
    useState(false);

  return (
    <div className="">
      <Button onClick={() => setIsTrackUploaderModalOpen(true)}>
        Track Upload
      </Button>
      {isTrackUploaderModalOpen && (
        <ModalContainer onClick={() => setIsTrackUploaderModalOpen(false)}>
          <TracksUploader />
        </ModalContainer>
      )}
      <SinglesContainer />
    </div>
  );
}

export default AllSingles;
