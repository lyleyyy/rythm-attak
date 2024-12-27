import { GoHeartFill } from "react-icons/go";
import { MdPersonAddAlt1 } from "react-icons/md";
import { LuMusic4 } from "react-icons/lu";
import { FaBell } from "react-icons/fa";
import Link from "next/link";

function PlayerUserOperation() {
  return (
    <div className="flex w-1/4 items-center justify-center gap-4">
      <Link href="#" className="text-xl">
        <GoHeartFill />
      </Link>
      <Link href="#" className="text-2xl">
        <MdPersonAddAlt1 />
      </Link>
      <Link href="#" className="text-xl">
        <LuMusic4 />
      </Link>
      <Link href="#" className="text-xl">
        <FaBell />
      </Link>
    </div>
  );
}

export default PlayerUserOperation;
