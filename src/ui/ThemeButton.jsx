function ThemeButton({
  type = "",
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
      className={`bg-purple-700 text-white ${height} ${width} ${borderRadius} text-center font-medium hover:bg-purple-600 ${disabled && "disabled:cursor-not-allowed disabled:bg-gray-500"}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default ThemeButton;
