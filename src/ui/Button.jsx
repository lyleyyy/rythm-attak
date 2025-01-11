function Button({
  type = "",
  borderWidth = false,
  borderColor = "border-white",
  textColor = "",
  bgColor = "bg-purple-700",
  isHover = false,
  hoverTextColor = "",
  hoverBgColor = "",
  hoverBorder = "",
  children,
  height = "h-10",
  width = "w-36",
  borderRadius = "rounded-lg",
  onClick = null,
  disabled = false,
}) {
  return (
    <button
      type={type}
      className={`${borderWidth && "border-2"} ${borderColor} ${textColor} ${bgColor} ${height} ${width} ${borderRadius} text-center ${borderWidth ? "leading-9" : "leading-10"} ${hoverBorder} ${isHover && "transition-all duration-300 ease-in-out hover:scale-105"} ${hoverTextColor} ${hoverBgColor} font-medium ${disabled && "disabled:cursor-not-allowed disabled:bg-gray-500"}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
