function PlainButton({
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
      className={`bg-zinc-200 text-black ${height} ${width} ${borderRadius} text-center font-medium hover:bg-white ${disabled && "disabled:cursor-not-allowed disabled:bg-gray-500"}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default PlainButton;
