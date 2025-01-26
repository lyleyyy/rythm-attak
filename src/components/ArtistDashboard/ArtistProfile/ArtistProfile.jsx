import { useState } from "react";
import Image from "next/image";
import PlainButton from "@/ui/PlainButton";
import ThemeButton from "@/ui/ThemeButton";

function ArtistProfile({ loggedInUser }) {
  const {
    id,
    name,
    image: avatarUrl,
    banner_url: bannerUrl,
    biography,
  } = loggedInUser;

  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="flex flex-col gap-8">
      <form className="flex flex-col gap-4">
        <label className="text-xl">Banner</label>
        <div className="flex gap-16">
          <Image
            src={
              bannerUrl
                ? bannerUrl
                : process.env.NEXT_PUBLIC_USER_BANNER_DEFAULT
            }
            alt={name}
            width={820}
            height={500}
          />

          <div className="flex flex-col gap-4">
            <label>*Choose an image to upload as your banner.</label>
            <input type="file" />
            <ThemeButton>Update</ThemeButton>
          </div>
        </div>
      </form>

      <div className="flex gap-16">
        <form
          className={`flex w-full flex-col gap-4 ${isEditing && "justify-between"}`}
        >
          <label className="text-xl">Biography</label>
          {!isEditing && (
            <div>
              {biography ? (
                biography
              ) : (
                <p className="h-2/3">
                  You don't have a biography yet. Please update it.
                </p>
              )}
              <PlainButton onClick={() => setIsEditing(true)}>Edit</PlainButton>
            </div>
          )}

          {isEditing && (
            <>
              <textarea
                className="h-2/3 rounded border border-white bg-black p-2 text-lg focus:outline-none"
                placeholder="Your biography..."
              />
              <ThemeButton onClick={() => setIsEditing(false)}>
                Update
              </ThemeButton>
            </>
          )}
        </form>

        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <label className="text-xl">Avatar</label>
            <span
              style={{ width: "100px", height: "100px", position: "relative" }}
            >
              <Image
                src={
                  avatarUrl
                    ? avatarUrl
                    : process.env.NEXT_PUBLIC_USER_AVATAR_DEFAULT
                }
                alt={name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={true}
                style={{ objectFit: "cover" }}
              />
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <label>*Choose an image to upload as your avatar.</label>
            <input type="file" />
            <ThemeButton>Upate</ThemeButton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ArtistProfile;
