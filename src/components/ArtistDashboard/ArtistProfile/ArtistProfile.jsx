import { useState } from "react";
import Image from "next/image";
import PlainButton from "@/ui/PlainButton";
import ThemeButton from "@/ui/ThemeButton";
import UpdatingOverlay from "@/ui/UpdatingOverlay";
import {
  updateArtistBanner,
  updateAvatar,
  updateBiography,
} from "@/services/apiUser";

function ArtistProfile({ loggedInUser, setIsUserInfoUpdated }) {
  const { id, name, image, banner_url, biography } = loggedInUser;

  const [bannerUrl, setBannerUrl] = useState(banner_url);
  const [artistBiography, setArtistBiography] = useState(biography);
  const [isEditing, setIsEditing] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState(image);
  const [isUpdating, setIsUpdating] = useState(null);

  async function bannerSubmitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const bannerFile = formData.get("banner");

    setIsUpdating("banner");
    const updatedBannerUrl = await updateArtistBanner(bannerFile, id);
    setBannerUrl(updatedBannerUrl);
    setIsUserInfoUpdated((isUserInfoUpdated) => !isUserInfoUpdated);
  }

  async function biographySubmitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const biography = formData.get("biography");

    setIsUpdating("biography");
    const updatedBiography = await updateBiography(id, biography);
    setArtistBiography(updatedBiography);
    setIsEditing(false);
    setIsUpdating(null);
  }

  async function avatarSubmitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const avatar = formData.get("avatar");

    setIsUpdating("avatar");
    const updatedAvatarUrl = await updateAvatar(id, avatar);
    setAvatarUrl(updatedAvatarUrl);
    setIsUserInfoUpdated((isUserInfoUpdated) => !isUserInfoUpdated);
  }

  return (
    <div
      className={`flex flex-col gap-8 ${isUpdating && "pointer-events-none"}`}
    >
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => bannerSubmitHandler(e)}
      >
        <label className="text-xl">Banner</label>
        <div className="flex gap-16">
          <div className="relative h-[300px] w-[1375px] rounded-sm">
            {isUpdating === "banner" && <UpdatingOverlay />}
            <Image
              className="rounded-sm"
              src={
                bannerUrl
                  ? bannerUrl
                  : process.env.NEXT_PUBLIC_USER_BANNER_DEFAULT
              }
              alt={name}
              loading="lazy"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              // priority={true}
              style={{ objectFit: "cover" }}
              onLoad={() =>
                // setUpdatingOverlay(false);
                setIsUpdating(null)
              }
            />
          </div>

          <div className="flex flex-col gap-4">
            <label>
              *Choose an 2500 x 750 image (.jpg, .jpeg, .png) to upload as your
              banner.
            </label>
            <input
              type="file"
              name="banner"
              accept=".jpg, .jpeg, .png"
              required
            />
            <ThemeButton>Update</ThemeButton>
          </div>
        </div>
      </form>

      <div className="flex gap-16">
        <form
          className={`flex w-full flex-col gap-4 ${isEditing && "justify-between"}`}
          onSubmit={(e) => biographySubmitHandler(e)}
        >
          <label className="text-xl">Biography</label>
          {!isEditing && (
            <div className="flex flex-col gap-4">
              <p>
                {artistBiography ||
                  "You don't have a biography yet. Please update it."}
              </p>
              <PlainButton onClick={() => setIsEditing(true)}>Edit</PlainButton>
            </div>
          )}

          {isEditing && (
            <>
              <textarea
                className="h-2/3 rounded border border-white bg-black p-2 text-lg focus:outline-none"
                name="biography"
                placeholder="Your biography..."
                defaultValue={artistBiography}
                required
              />
              <div className="space-x-8">
                <ThemeButton>Update</ThemeButton>
                <PlainButton onClick={() => setIsEditing(false)}>
                  Cancel
                </PlainButton>
              </div>
            </>
          )}
        </form>

        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => avatarSubmitHandler(e)}
        >
          <div className="flex flex-col gap-4">
            <label className="text-xl">Avatar</label>
            <span className="relative h-[100px] w-[100px] rounded-full">
              {isUpdating === "avatar" && (
                <UpdatingOverlay isBorderRadiusFull={true} />
              )}
              <Image
                className="rounded-full"
                src={
                  avatarUrl
                    ? avatarUrl
                    : process.env.NEXT_PUBLIC_USER_AVATAR_DEFAULT
                }
                alt={name}
                loading="lazy"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
                onLoad={() => {
                  // setUpdatingOverlay(false);
                  setIsUpdating(null);
                }}
              />
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <label>
              *Choose an image (.jpg, .jpeg, .png) to upload as your banner.
            </label>
            <input
              type="file"
              name="avatar"
              accept=".jpg, .jpeg, .png"
              required
            />
            <ThemeButton>Update</ThemeButton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ArtistProfile;
