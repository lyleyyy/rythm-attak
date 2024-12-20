import Button from "@/ui/Button";

function UserAuth() {
  return (
    <div className="flex gap-4">
      <Button
        borderWidth={true}
        bgColor="black"
        isHover={true}
        hoverTextColor="hover:text-black"
        hoverBgColor="hover:bg-white"
      >
        Sign in
      </Button>
      <Button>Create Account</Button>
    </div>
  );
}

export default UserAuth;
