import capitalizeEachWord from "@/helper/capitalizeEachWord";
import MediaCategory from "@/types/MediaCategory";
import ThemePlayButton from "@/ui/ThemePlayButton";
import Button from "@/ui/Button";
import TrackPreview from "../TrackPreview/TrackPreview";

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

const tracksList = [
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

function Artist({ id }) {
  const artist = artistsList.find((artist) => artist.id.toString() === id);
  console.log(artist);
  const { imageUrl, name } = artist;

  const imageStyle = {
    borderRadius: "50%",
    border: "1px solid #fff",
  };

  return (
    <div className="mb-20 space-y-4">
      <div className="relative flex h-72 gap-6 bg-[url('/images/artists-covers/NicoleWillisWw4fPortfolio.jpg')] bg-cover p-4 pt-20">
        <div className="flex flex-col justify-end gap-1 text-zinc-400">
          <h1 className="text-7xl font-bold text-white">
            {capitalizeEachWord(name)}
          </h1>
          <span className="pl-1 text-zinc-300">
            5,678,923 Monthly Listeners
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-8">
          <ThemePlayButton />
          <Button
            borderColor="border-zinc-400"
            width="w-24"
            bgColor=""
            borderRadius="rounded-3xl"
            borderWidth={true}
            textColor="text-zinc-400"
            hoverTextColor="hover:text-white hover:border-white"
            isHover={true}
          >
            Follow
          </Button>
          <Button isHover={true} width="w-28">
            Subscribe
          </Button>
        </div>
      </div>
      <div className="flex gap-4 p-4">
        <div className="w-1/2">
          <h3 className="text-xl">Popular Tracks</h3>
          <div>
            {tracksList.map((track) => (
              <TrackPreview index={track.id} track={track} key={track.id} />
            ))}
          </div>
        </div>
        <section className="w-1/2">
          <h3 className="text-xl">About ArtistName</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Artist;
