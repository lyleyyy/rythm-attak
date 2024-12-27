import { RiPlayLargeFill } from "react-icons/ri";
import IconButton from "./IconButton";

function ThemePlayButton() {
  return (
    <IconButton
      bgColor="bg-purple-700"
      width="w-16"
      height="h-16"
      isHover={true}
    >
      <RiPlayLargeFill className="text-2xl" />
    </IconButton>
  );
}

export default ThemePlayButton;
