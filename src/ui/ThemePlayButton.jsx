import { RiPlayLargeFill } from "react-icons/ri";

function ThemePlayButton({ absoluteOffsetCenter, onClick }) {
  return (
    <button
      className={`${absoluteOffsetCenter && "absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2"} flex h-12 w-12 items-center justify-center rounded-full bg-purple-700 transition-all duration-100 ease-in-out hover:scale-105 hover:bg-purple-600`}
      onClick={onClick}
    >
      <RiPlayLargeFill className="text-lg" />
    </button>
  );
}

export default ThemePlayButton;
