function IconButton({ children, iconSize, position, onClick }) {
  return (
    <button
      className={`${iconSize} ${position} flex items-center justify-center rounded-full text-zinc-400 transition-all duration-100 ease-in-out hover:text-white`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default IconButton;
