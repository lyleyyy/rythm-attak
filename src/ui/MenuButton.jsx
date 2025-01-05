import { TbUserSquare } from "react-icons/tb";
import { LuMusic4 } from "react-icons/lu";

function MenuButton({
  children,
  label,
  hoverUnderline = true,
  onClick = null,
}) {
  return (
    <button
      className="flex h-12 w-full items-center justify-between rounded px-2 text-sm hover:bg-zinc-600"
      onClick={onClick}
    >
      <span className={hoverUnderline ? "hover:underline" : ""}>
        {children}
      </span>
      <span className="text-lg">
        {label === "profile" ? (
          <TbUserSquare />
        ) : label === "subscribe" ? (
          <LuMusic4 />
        ) : null}
      </span>
    </button>
  );
}

export default MenuButton;
