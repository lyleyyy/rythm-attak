"use client";
import SidebarAppInstruction from "./SidebarAppInstruction/SidebarAppInstruction";

function SidebarContent({ loggedInUser, isArtist, isOnAlbums, currentAlbum }) {
  if (loggedInUser && isArtist && currentAlbum === null)
    return (
      <span className="h-full">
        You have not selected any album yet.
        <br />
        Please create or select an album first.
      </span>
    );

  if (loggedInUser && isArtist && isOnAlbums && currentAlbum)
    return (
      <div className="h-full">{currentAlbum.id + currentAlbum.album_name}</div>
    );

  return (
    <div className="h- flex h-3/4 w-full flex-col gap-4">
      <SidebarAppInstruction
        heading="Create your first playlist"
        instruction="It's easy, we'll help you"
        buttonContent="Create playlist"
      />

      <SidebarAppInstruction
        heading="Let's find some artists to follow"
        instruction="We'll keep you updated on new espisodes"
        buttonContent="Browse"
      />
    </div>
  );
}

export default SidebarContent;
