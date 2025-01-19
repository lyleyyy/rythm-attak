import UserMenuOption from "@/components/Modals/UserMenuModal/UserMenuOption/UserMenuOption";
import { signOut } from "next-auth/react";

function UserMenuModal({ ref }) {
  return (
    <div
      className="absolute right-3 top-16 z-50 mt-1 flex w-48 flex-col items-start rounded bg-zinc-800 p-1 shadow-2xl"
      ref={ref}
    >
      <UserMenuOption label="profile">Profile</UserMenuOption>
      <UserMenuOption label="subscribe">RA Premium</UserMenuOption>
      <hr className="my-2 w-full bg-zinc-300" />
      <UserMenuOption
        hoverUnderline={false}
        onClick={() => signOut({ callbackUrl: "http://localhost:3000/" })}
      >
        Log out
      </UserMenuOption>
    </div>
  );
}

export default UserMenuModal;
