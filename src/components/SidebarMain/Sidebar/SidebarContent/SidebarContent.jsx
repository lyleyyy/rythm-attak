"use client";
import { useEffect, useState } from "react";
import SidebarAppInstruction from "./SidebarAppInstruction/SidebarAppInstruction";
import { getTracksOfAlbum } from "@/services/apiAlbum";
import SidebarTracksPreviewContainer from "./SidebarTrackPreviewContainer/SidebarTracksPreviewContainer";
import SidebarTrackPreview from "./SidebarTrackPreview/SidebarTrackPreview";

function SidebarContent({ loggedInUser, isArtist, currentAlbum }) {
  const [tracksCurrentAlbum, setTracksCurrentAlbum] = useState([]);

  useEffect(
    function () {
      async function getTracksOfCurrentAlbum() {
        if (!(loggedInUser && isArtist && currentAlbum)) return;

        try {
          if (loggedInUser && isArtist && currentAlbum) {
            const albumId = currentAlbum.id;
            const res = await getTracksOfAlbum(albumId);
            setTracksCurrentAlbum(res);
          }
        } catch (err) {
          console.error(err);
        }
      }

      getTracksOfCurrentAlbum();
    },
    [currentAlbum],
  );

  if (loggedInUser && isArtist && currentAlbum === null)
    return (
      <span className="h-full">
        You have not selected any album yet.
        <br />
        Please create or select an album first.
      </span>
    );

  if (loggedInUser && isArtist && currentAlbum) {
    return (
      <SidebarTracksPreviewContainer>
        {tracksCurrentAlbum.length > 0 &&
          tracksCurrentAlbum.map((track) => (
            <SidebarTrackPreview key={track.id} track={track} />
          ))}
        {tracksCurrentAlbum.length === 0 && (
          <span>
            You dont have any tracks for this album yet. Please click upload to
            upload some tracks.
          </span>
        )}
      </SidebarTracksPreviewContainer>
    );
  }

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
