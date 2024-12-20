function Button({
  borderWidth = false,
  borderColor = "border-white",
  textColor = "",
  bgColor = "bg-purple-700",
  fontWeight = "",
  isHover = false,
  hoverTextColor = "",
  hoverBgColor = "",
  children,
}) {
  return (
    <button
      className={`${borderWidth && "border-2"} ${borderColor} ${textColor} ${bgColor} ${fontWeight} h-10 w-36 rounded-lg text-center ${borderWidth ? "leading-9" : "leading-10"} ${isHover && "transition-all duration-300 ease-in-out hover:scale-105"} ${hoverTextColor} ${hoverBgColor}`}
    >
      {children}
    </button>
  );
}

export default Button;
