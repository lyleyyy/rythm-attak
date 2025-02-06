import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useCurrentAlbum } from "@/contexts/CurrentAlbumContext";
import DashboardNav from "./DashboardNav/DashboardNav";
import DashboardNavButton from "./DashboardNav/DashboarNavButton/DashboardNavButton";
import AllSingles from "./AllSingles/AllSingles";
import AllAlbums from "./AllAlbums/AllAlbums";
import AllTracks from "./AllTracks/AllTracks";
import ArtistProfile from "./ArtistProfile/ArtistProfile";

const dashboardNavTags = [
  "All Singles",
  "All Albums",
  "All Tracks",
  "Artist Profile",
];

function ArtistDashboard() {
  const { loggedInUser, setIsUserInfoUpdated } = useAuth();
  const artistId = loggedInUser.is_artist && loggedInUser.id;

  const { setCurrentAlbum } = useCurrentAlbum();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="mb-12 px-8">
      <DashboardNav>
        {dashboardNavTags.map((el, i) => (
          <DashboardNavButton
            key={i}
            index={i}
            name={el}
            isActive={activeIndex === i}
            onClick={() => {
              setActiveIndex(i);
              if (dashboardNavTags.at(i) !== "All Albums") {
                setCurrentAlbum(null);
              }
            }}
          />
        ))}
      </DashboardNav>
      {[
        <AllSingles artistId={artistId} />,
        <AllAlbums artistId={artistId} />,
        <AllTracks artistId={artistId} />,
        <ArtistProfile
          loggedInUser={loggedInUser}
          setIsUserInfoUpdated={setIsUserInfoUpdated}
        />,
      ].at(activeIndex)}
    </div>
  );
}

export default ArtistDashboard;
