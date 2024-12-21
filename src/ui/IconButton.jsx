function IconButton({
  iconSize,
  isHover = false,
  hoverBgColor,
  hoverTextColor,
  children,
  position = "",
}) {
  return (
    <button
      className={`${position} ${iconSize} flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ease-in-out ${hoverBgColor} ${hoverTextColor}`}
    >
      {children}
    </button>
  );
}

export default IconButton;
