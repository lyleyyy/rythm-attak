import { useState } from "react";
import DashboardNav from "./DashboardNav/DashboardNav";
import DashboardNavButton from "./DashboardNav/DashboarNavButton/DashboardNavButton";
import AllSingles from "./AllSingles/AllSingles";
import AllAlbums from "./AllAlbums/AllAlbums";
import AllTracks from "./AllTracks/AllTracks";
import ArtistAvatarAndCover from "./ArtistAvatarAndCover/ArtistAvatarAndCover";
import Biography from "./Biography/Biography";

const dashboardNavTags = [
  "All Singles",
  "All Albums",
  "All Tracks",
  "Avatar / Cover",
  "Biography",
];

function ArtistDashboard() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-4 px-4">
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
        <AllSingles />,
        <AllAlbums />,
        <AllTracks />,
        <ArtistAvatarAndCover />,
        <Biography />,
      ].at(activeIndex)}
    </div>
  );
}

export default ArtistDashboard;
