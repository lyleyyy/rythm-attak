import { MdErrorOutline } from "react-icons/md";

function ErrorMessage() {
  return (
    <div className="flex h-12 w-1/3 items-center gap-2 bg-red-600 pl-4 leading-9">
      <MdErrorOutline className="text-2xl" />
      <span>Email or Password is incorrect.</span>
    </div>
  );
}

export default ErrorMessage;
