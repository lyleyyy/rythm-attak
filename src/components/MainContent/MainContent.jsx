import MediaCategory from "@/types/MediaCategory";
import MainContentFooter from "./MainContentFooter/MainContentFooter";
import MediaListContainer from "./MediaListContainer/MediaListContainer";

const songsList = [
  {
    id: 1,
    type: "song",
    name: "Feeling Free",
    artist: "nicole willis",
    imageUrl: "/images/song-covers/feelingfree.jpg",
  },
  {
    id: 2,
    type: "song",
    name: "Hero Senki: Battle",
    artist: "gilliam jaeger",
    imageUrl: "/images/song-covers/herosenki.jpg",
  },
  {
    id: 3,
    type: "song",
    name: "Hero Senki: Battle",
    artist: "gilliam jaeger",
    imageUrl: "/images/song-covers/herosenki.jpg",
  },
  {
    id: 4,
    type: "song",
    name: "Hero Senki: Battle",
    artist: "gilliam jaeger",
    imageUrl: "/images/song-covers/herosenki.jpg",
  },
  {
    id: 5,
    type: "song",
    name: "Hero Senki: Battle",
    artist: "gilliam jaeger",
    imageUrl: "/images/song-covers/herosenki.jpg",
  },
  {
    id: 6,
    type: "song",
    name: "Hero Senki: Battle",
    artist: "gilliam jaeger",
    imageUrl: "/images/song-covers/herosenki.jpg",
  },
];

const artistsList = [
  {
    id: 1,
    type: "artist",
    name: "nicole willis",
    imageUrl: "/images/artists/nicole-willis.jpg",
  },
  {
    id: 2,
    type: "artist",
    name: "gilliam jaeger",
    imageUrl: "/images/artists/gilliam-yeager.jpg",
  },
];

function MainContent() {
  return (
    <div className="w-3/4 space-y-10 rounded-xl bg-zinc-900 p-4">
      <MediaListContainer
        label="Popular songs"
        mediaList={songsList}
        mediaCategory={MediaCategory.Song}
      />
      <MediaListContainer
        label="Trending artists"
        mediaList={artistsList}
        mediaCategory={MediaCategory.Artist}
      />
      <MainContentFooter />
    </div>
  );
}

export default MainContent;
