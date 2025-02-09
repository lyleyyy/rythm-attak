"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import ThemePlayButton from "@/ui/ThemePlayButton";
import MediaCategory from "@/types/MediaCategory";
import capitalizeEachWord from "@/helper/capitalizeEachWord";
import Image from "next/image";
import { getUserById } from "@/services/apiUser";
import { useCurrentPlaying } from "@/contexts/CurrentPlayingContext";

function MediaCard({ media }) {
  const { setCurrentPlaying, setCurrentPlayingArtistName } =
    useCurrentPlaying();

  let type;
  if (media.track_name) {
    type = MediaCategory.Track;
  }

  if (media.album_name) {
    type = MediaCategory.Album;
  }

  if (media.name) {
    type = MediaCategory.Artist;
  }

  const id = media.id;
  const imageUrl = media.cover_url || media.album_cover_url || media.image;
  const name = media.track_name || media.album_name || media.name;
  const [isHover, setIsHover] = useState(false);
  const [artistName, setArtistName] = useState(null);

  useEffect(function () {
    async function getArtistName() {
      if (type === MediaCategory.Artist) return;

      const artistId = media.artist_id;
      const artist = await getUserById(artistId);
      setArtistName(artist.name);
    }

    getArtistName();
  }, []);

  return (
    <div
      className="relative flex flex-col gap-2 rounded-lg p-2 transition-all duration-200 ease-in-out hover:bg-zinc-800"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="relative h-[190px] w-[190px] overflow-hidden">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={true}
            style={{ objectFit: "cover" }}
          />
        )}
      </div>

      <div className="flex flex-col">
        <Link
          href={
            type === MediaCategory.Track
              ? `/track/${id}`
              : type === MediaCategory.Album
                ? `/album/${id}`
                : `/artist/${id}`
          }
          className="hover:underline"
        >
          {capitalizeEachWord(name)}
        </Link>

        {(type === MediaCategory.Track || type === MediaCategory.Album) && (
          <Link
            href={`/artist/${media.artist_id}`}
            className="text-sm text-zinc-400 hover:underline"
          >
            {artistName}
          </Link>
        )}

        {type === MediaCategory.Artist && (
          <span className="text-sm text-zinc-400">Artist</span>
        )}

        {type !== MediaCategory.Artist && isHover && (
          <ThemePlayButton
            absoluteOffsetCenter={true}
            onClick={() => {
              setCurrentPlaying(media.track_name ? media : null);
              setCurrentPlayingArtistName(artistName);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default MediaCard;
