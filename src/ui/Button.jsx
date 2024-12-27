function Button({
  borderWidth = false,
  borderColor = "border-white",
  textColor = "",
  bgColor = "bg-purple-700",
  isHover = false,
  hoverTextColor = "",
  hoverBgColor = "",
  children,
  height = "h-10",
  width = "w-36",
  borderRadius = "rounded-lg",
  onClick = null,
}) {
  return (
    <button
      className={`${borderWidth && "border-2"} ${borderColor} ${textColor} ${bgColor} ${height} ${width} ${borderRadius} text-center ${borderWidth ? "leading-9" : "leading-10"} ${isHover && "transition-all duration-300 ease-in-out hover:scale-105"} ${hoverTextColor} ${hoverBgColor} font-bold`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
