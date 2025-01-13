import { useState } from "react";

function useModalToggle() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return [isModalOpen, setIsModalOpen];
}

export default useModalToggle;
