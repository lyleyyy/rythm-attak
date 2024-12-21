function PlayerController({ children }) {
  return (
    <div className="flex w-1/3 flex-col items-center justify-center gap-4">
      {children}
    </div>
  );
}

export default PlayerController;
