function PlayerPlayButton({ children, onClick }) {
  return (
    <button
      className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-300 text-lg text-black transition-all duration-100 ease-in-out hover:bg-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default PlayerPlayButton;
