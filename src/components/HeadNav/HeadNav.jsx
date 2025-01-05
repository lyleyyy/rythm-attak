"use client";
import Link from "next/link";
import SearchBar from "./SearchBar/SearchBar";
import UserAuth from "./UserAuth/UserAuth";
import Image from "next/image";

function HeadNav() {
  return (
    <div className="mt-2 flex h-14 w-full items-center justify-between px-4">
      <Link href="/" className="w-1/3">
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
