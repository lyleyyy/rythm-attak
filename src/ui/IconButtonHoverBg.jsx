function IconButtonHoverBg({ children, iconSize, onClick }) {
  return (
    <button
      className={`${iconSize} flex items-center justify-center rounded-full p-1 text-white transition-all duration-100 ease-in-out hover:bg-zinc-100 hover:text-black`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default IconButtonHoverBg;
