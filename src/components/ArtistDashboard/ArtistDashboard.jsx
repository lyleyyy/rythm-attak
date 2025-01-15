import { useEffect, useState } from "react";
import DashboardNav from "./DashboardNav/DashboardNav";
import DashboardNavButton from "./DashboardNav/DashboarNavButton/DashboardNavButton";
import AllSingles from "./AllSingles/AllSingles";
import AllAlbums from "./AllAlbums/AllAlbums";
import AllTracks from "./AllTracks/AllTracks";
import ArtistProfile from "./ArtistProfile/ArtistProfile";
import { useAuth } from "@/contexts/AuthContext";
import {
  getAllAlbumsOfArtist,
  getAllSinglesOfArtist,
  getAllTracksOfArtist,
} from "@/services/apiTracks";

const dashboardNavTags = [
  "All Singles",
  "All Albums",
  "All Tracks",
  "Artist Profile",
];

function ArtistDashboard() {
  const { loggedInUser } = useAuth();
  const artistId = loggedInUser.is_artist && loggedInUser.id;

  const [activeIndex, setActiveIndex] = useState(0);
  // const [singles, setSingles] = useState(null);
  const [albums, setAlbums] = useState(null);
  const [tracks, setTracks] = useState(null);

  // useEffect(function () {
  //   async function fetchMediasOfArtist() {
  //     try {
  //       const singles = await getAllSinglesOfArtist(artistId);
  //       // const albums = await getAllAlbumsOfArtist(artistId);
  //       // const tracks = await getAllTracksOfArtist(artistId);

  //       // console.log(singles, "singlessingles");
  //       // console.log(albums, "albumsalbums");
  //       // console.log(tracks, "trackstracks");

  //       setSingles(singles);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }

  //   fetchMediasOfArtist();
  // }, []);

  return (
    <div className="mb-20 h-full px-8">
      <DashboardNav>
        {dashboardNavTags.map((el, i) => (
          <DashboardNavButton
            key={i}
            index={i}
            name={el}
            isActive={activeIndex === i}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </DashboardNav>
      {[
        <AllSingles
          // singles={singles}
          // setSingles={setSingles}
          artistId={artistId}
        />,
        <AllAlbums />,
        <AllTracks />,
        <ArtistProfile />,
      ].at(activeIndex)}
    </div>
  );
}

export default ArtistDashboard;
