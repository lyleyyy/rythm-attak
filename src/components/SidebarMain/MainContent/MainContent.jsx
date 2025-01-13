"use client";
import MediaCategory from "@/types/MediaCategory";
import MediaListContainer from "./MediaListContainer/MediaListContainer";
import { useAuth } from "@/contexts/AuthContext";
import ArtistDashboard from "@/components/ArtistDashboard/ArtistDashboard";

const songsList = [
  {
    id: 1,
    type: MediaCategory.Track,
    name: "Feeling Free",
    artist: "nicole willis",
    imageUrl: "/images/song-covers/feelingfree.jpg",
  },
  {
    id: 2,
    type: MediaCategory.Track,
    name: "Hero Senki: Battle",
    artist: "gilliam jaeger",
    imageUrl: "/images/song-covers/herosenki.jpeg",
  },
  {
    id: 3,
    type: MediaCategory.Track,
    name: "Something About Us",
    artist: "Draft Punk",
    imageUrl: "/images/song-covers/Daft Punk - Something About Us.jpeg",
  },
  {
    id: 4,
    type: MediaCategory.Track,
    name: "the computer",
    artist: "Victor Jay",
    imageUrl:
      "/images/song-covers/the computer sound of genesis Victor Jay.jpg",
  },
  {
    id: 5,
    type: MediaCategory.Track,
    name: "The Bamboos",
    artist: "Kylie Auldist",
    imageUrl: "/images/song-covers/The Bamboos feat. Kylie Auldist.jpeg",
  },
  {
    id: 6,
    type: MediaCategory.Track,
    name: "A.I.É.",
    artist: "La Compagnie Créole",
    imageUrl: "/images/song-covers/La Compagnie AIE.jpeg",
  },
];

const artistsList = [
  {
    id: 1,
    type: MediaCategory.Artist,
    name: "nicole willis",
    imageUrl: "/images/artists/nicole-willis.jpg",
  },
  {
    id: 2,
    type: MediaCategory.Artist,
    name: "gilliam jaeger",
    imageUrl: "/images/artists/gilliam-yeager.jpg",
  },
  {
    id: 3,
    type: MediaCategory.Artist,
    name: "draft punk",
    imageUrl: "/images/artists/daftpunk.jpg",
  },
  {
    id: 4,
    type: MediaCategory.Artist,
    name: "victor jay",
    imageUrl: "/images/artists/victor jay.jpeg",
  },
  {
    id: 5,
    type: MediaCategory.Artist,
    name: "Kylie Auldist",
    imageUrl: "/images/artists/Kylie Auldist.jpg",
  },
  {
    id: 6,
    type: MediaCategory.Artist,
    name: "La Compagnie Créole",
    imageUrl: "/images/artists/La Compagnie Créole.jpeg",
  },
];

function MainContent() {
  const { loggedInUser } = useAuth();

  if (loggedInUser && loggedInUser.is_artist) return <ArtistDashboard />;

  return (
    <div className="mb-20 space-y-10 p-4">
      <MediaListContainer label="Popular songs" mediaList={songsList} />
      <MediaListContainer label="Trending artists" mediaList={artistsList} />
      <MediaListContainer label="Funk Musics" mediaList={songsList} />
      <MediaListContainer label="RA Picks" mediaList={songsList} />
    </div>
  );
}

export default MainContent;
