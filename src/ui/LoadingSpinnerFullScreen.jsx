import Image from "next/image";

function LoadingSpinnerFullScreen() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-4 bg-zinc-900 text-white">
      <Image
        src="/logo.png"
        alt="ra_logo"
        width={100}
        height={100}
        className="rounded-full border-2 border-white bg-white"
        priority
      />
      <span className="text-2xl">Loading...</span>
    </div>
  );
}

export default LoadingSpinnerFullScreen;
