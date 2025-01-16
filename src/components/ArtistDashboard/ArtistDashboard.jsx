import { useEffect, useState } from "react";
import DashboardNav from "./DashboardNav/DashboardNav";
import DashboardNavButton from "./DashboardNav/DashboarNavButton/DashboardNavButton";
import AllSingles from "./AllSingles/AllSingles";
import AllAlbums from "./AllAlbums/AllAlbums";
import AllTracks from "./AllTracks/AllTracks";
import ArtistProfile from "./ArtistProfile/ArtistProfile";
import { useAuth } from "@/contexts/AuthContext";
import { useCurrentAlbum } from "@/contexts/CurrentAlbumContext";

const dashboardNavTags = [
  "All Singles",
  "All Albums",
  "All Tracks",
  "Artist Profile",
];

function ArtistDashboard() {
  const { loggedInUser } = useAuth();
  const artistId = loggedInUser.is_artist && loggedInUser.id;

  const { setIsOnAlbums, setCurrentAlbum } = useCurrentAlbum();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="mb-20 h-full px-8">
      <DashboardNav>
        {dashboardNavTags.map((el, i) => (
          <DashboardNavButton
            key={i}
            index={i}
            name={el}
            isActive={activeIndex === i}
            onClick={() => {
              setActiveIndex(i);
              if (dashboardNavTags.at(i) === "All Albums") {
                setIsOnAlbums(true);
              } else {
                setIsOnAlbums(false);
                setCurrentAlbum(null);
              }
            }}
          />
        ))}
      </DashboardNav>
      {[
        <AllSingles artistId={artistId} />,
        <AllAlbums artistId={artistId} />,
        <AllTracks />,
        <ArtistProfile />,
      ].at(activeIndex)}
    </div>
  );
}

export default ArtistDashboard;
