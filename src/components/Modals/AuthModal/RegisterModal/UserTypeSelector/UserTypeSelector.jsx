import Button from "@/ui/Button";

function UserTypeSelector({ onClickUser, onClickArtist }) {
  return (
    <div className="flex flex-col gap-4">
      <Button
        width="w-48"
        height="h-12"
        borderWidth={true}
        bgColor="bg-black"
        textColor="text-white"
        hoverBgColor="hover:bg-white"
        hoverTextColor="hover:text-black"
        onClick={onClickUser}
      >
        Sign Up as a User
      </Button>
      <Button
        width="w-48"
        height="h-12"
        hoverBgColor="hover:bg-purple-600"
        onClick={onClickArtist}
      >
        Become an Artist
      </Button>
    </div>
  );
}

export default UserTypeSelector;
