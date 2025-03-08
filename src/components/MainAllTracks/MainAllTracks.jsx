"use client";
import { useEffect, useState } from "react";
import MediaList from "../SidebarMain/MainContent/MediaListContainer/MediaList/MediaList";
import { getAllTracks } from "@/services/apiTracks";
import LoadingSpinner from "@/ui/LoadingSpinner";

function MainAllTracks() {
  const [allTracks, setAllTracks] = useState(null);

  useEffect(function () {
    async function fetchAllTracks() {
      try {
        const allTracksList = await getAllTracks();
        // console.log(allTracksList);
        setAllTracks(allTracksList);
      } catch (error) {
        // deal with the error
      }
    }

    fetchAllTracks();
  }, []);

  return (
    <div className="flex min-h-[500px] w-full items-center justify-center p-2">
      {!allTracks && <LoadingSpinner />}
      {allTracks && <MediaList mediaList={allTracks} />}
    </div>
  );
}

export default MainAllTracks;
