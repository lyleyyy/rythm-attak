"use client";
import Link from "next/link";
import SearchBar from "./SearchBar/SearchBar";
import UserAuth from "./UserAuth/UserAuth";
import Image from "next/image";
import { useEffect } from "react";
import { getUser } from "@/services/apiUsers";

function HeadNav() {
  useEffect(function () {
    async function getAllUsers() {
      await getUser();
    }

    getAllUsers();
  }, []);

  return (
    <div className="mt-2 flex h-14 items-center justify-between px-4">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="logo"
          width={40}
          height={40}
          style={{
            backgroundColor: "white",
            borderRadius: "50%",
            border: "2px solid white",
          }}
        />
      </Link>
      <SearchBar />
      <UserAuth />
    </div>
  );
}

export default HeadNav;
