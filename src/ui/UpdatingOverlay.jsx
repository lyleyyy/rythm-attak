function UpdatingOverlay({ isBorderRadiusFull = false }) {
  return (
    <div
      className={`absolute z-50 flex h-full w-full items-center justify-center ${isBorderRadiusFull ? "rounded-full" : "rounded-sm"} bg-black bg-opacity-40 text-white backdrop-blur-md`}
    >
      Updating...
    </div>
  );
}

export default UpdatingOverlay;
