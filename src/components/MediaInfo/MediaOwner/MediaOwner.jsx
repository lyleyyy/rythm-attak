import Image from "next/image";
import Link from "next/link";

function MediaOwner({ avatarUrl, artistId, artistName }) {
  return (
    <div className="flex gap-4 p-4">
      <Image
        src={avatarUrl}
        alt=""
        width={100}
        height={100}
        style={{ borderRadius: "50%" }}
      />

      <div className="flex flex-col justify-center">
        <span>Artist</span>
        <Link
          href={`/artist/${artistId}`}
          className="hover:text-white hover:underline"
        >
          {artistName}
        </Link>
      </div>
    </div>
  );
}

export default MediaOwner;
