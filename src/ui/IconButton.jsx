function IconButton({
  iconSize,
  isHover = false,
  hoverBgColor,
  hoverTextColor,
  children,
  position = "",
  bgColor = "",
  textColor = "",
  width = "w-8",
  height = "h-8",
  isTranslateCenter = false,
  onClick = null,
}) {
  return (
    <button
      className={`${position} ${iconSize} ${bgColor} ${textColor} flex ${width} ${height} items-center justify-center rounded-full transition-all duration-300 ease-in-out ${hoverBgColor} ${hoverTextColor} ${isHover && "transition-all duration-100 ease-in-out hover:scale-105"} ${isTranslateCenter && "-translate-y-1/2 translate-x-1/2"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default IconButton;
