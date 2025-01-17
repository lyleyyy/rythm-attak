function BorderedButton({
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
      className={`border-2 border-white bg-black text-white ${height} ${width} ${borderRadius} text-center font-medium hover:bg-white hover:text-black ${disabled && "disabled:cursor-not-allowed disabled:bg-gray-500"}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default BorderedButton;
