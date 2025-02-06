import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import UserMenuModal from "@/components/Modals/UserMenuModal/UserMenuModal";

function UserPreview({ loggedInUser }) {
  const { image } = loggedInUser;
  const imageUrl = image || "/default_avatar.png";
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);

  const modalRef = useRef(null);

  useEffect(
    function () {
      if (isUserModalOpen) {
        function handleClickOutside(e) {
          if (modalRef.current && !modalRef.current.contains(e.target))
            setIsUserModalOpen(false);
        }

        document.addEventListener("click", handleClickOutside);

        return () => document.removeEventListener("click", handleClickOutside);
      }
    },
    [isUserModalOpen],
  );

  return (
    <>
      <Image
        src={imageUrl}
        alt="user_icon"
        width={50}
        height={50}
        className="rounded-full hover:scale-105 hover:cursor-pointer"
        style={{
          objectFit: "cover",
          width: "50px",
          height: "50px",
        }}
        onClick={() => setIsUserModalOpen(true)}
      />

      {isUserModalOpen && <UserMenuModal ref={modalRef} />}
    </>
  );
}

export default UserPreview;
