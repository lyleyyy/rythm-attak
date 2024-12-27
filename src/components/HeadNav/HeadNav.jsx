import Link from "next/link";
import SearchBar from "./SearchBar/SearchBar";
import UserAuth from "./UserAuth/UserAuth";

function HeadNav() {
  return (
    <div className="mt-2 flex h-14 items-center justify-between px-4">
      <Link href="/">
        <img
          src="/logo.png"
          alt="logo"
          className="h-[50px] w-[50px] rounded-full bg-white object-cover"
        />
      </Link>
      <SearchBar />
      <UserAuth />
    </div>
  );
}

export default HeadNav;
