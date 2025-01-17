import PlainButton from "@/ui/PlainButton";
import ThemeButton from "@/ui/ThemeButton";

function UserTypeSelector({ onClickUser, onClickArtist }) {
  return (
    <div className="flex flex-col gap-4">
      <PlainButton
        width="w-48"
        height="h-12"
        borderWidth={true}
        onClick={onClickUser}
      >
        Sign Up as a User
      </PlainButton>
      <ThemeButton width="w-48" height="h-12" onClick={onClickArtist}>
        Become an Artist
      </ThemeButton>
    </div>
  );
}

export default UserTypeSelector;
