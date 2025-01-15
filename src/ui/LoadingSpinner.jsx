import Image from "next/image";

function LoadingSpinner() {
  return (
    <div className="flex flex-col gap-4">
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

export default LoadingSpinner;
