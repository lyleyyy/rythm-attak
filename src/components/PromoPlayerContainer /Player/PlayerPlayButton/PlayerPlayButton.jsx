function PlayerPlayButton({ children, onClick }) {
  return (
    <button
      className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg text-black transition-all duration-100 ease-in-out"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default PlayerPlayButton;
