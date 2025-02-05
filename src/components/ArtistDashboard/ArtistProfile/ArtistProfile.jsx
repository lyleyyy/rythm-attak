import { useState } from "react";
import Image from "next/image";
import PlainButton from "@/ui/PlainButton";
import ThemeButton from "@/ui/ThemeButton";
import { updateArtistBanner, updateBiography } from "@/services/apiArtist";
import UpdatingOverlay from "@/ui/UpdatingOverlay";

function ArtistProfile({ loggedInUser }) {
  const { id, name, image: avatarUrl, banner_url, biography } = loggedInUser;

  const [isEditing, setIsEditing] = useState(false);
  const [bannerUrl, setBannerUrl] = useState(banner_url);
  const [artistBiography, setArtistBiography] = useState(biography);
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatingOverlay, setUpdatingOverlay] = useState(false);

  async function bannerSubmitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const bannerFile = formData.get("banner");

    setIsUpdating(true);
    setUpdatingOverlay(true);
    const updatedBannerUrl = await updateArtistBanner(bannerFile, id);
    setBannerUrl(updatedBannerUrl);
  }

  async function biographyUpdateHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const biography = formData.get("biography");

    setIsUpdating(true);
    const updatedBiography = await updateBiography(id, biography);
    setArtistBiography(updatedBiography);
    setIsEditing(false);
    setIsUpdating(false);
  }

  return (
    <div
      className={`flex flex-col gap-8 ${isUpdating && "pointer-events-none"}`}
    >
      <form className="flex flex-col gap-4" onSubmit={bannerSubmitHandler}>
        <label className="text-xl">Banner</label>
        <div className="flex gap-16">
          <div className="relative h-[300px] w-[1375px] rounded-sm">
            {updatingOverlay && <UpdatingOverlay />}
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
              onLoad={() => {
                setUpdatingOverlay(false);
                setIsUpdating(false);
              }}
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
          onSubmit={biographyUpdateHandler}
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
            <label>
              *Choose an image (.jpg, .jpeg, .png) to upload as your banner.
            </label>
            <input type="file" accept=".jpg, .jpeg, .png" required />
            <ThemeButton>Update</ThemeButton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ArtistProfile;
