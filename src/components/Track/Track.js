import capitalizeEachWord from "@/helper/capitalizeEachWord";
import MediaCategory from "@/types/MediaCategory";
import IconButton from "@/ui/IconButton";
import ThemePlayButton from "@/ui/ThemePlayButton";
import Image from "next/image";
import Link from "next/link";
import { GrAddCircle } from "react-icons/gr";
import { GoHeartFill } from "react-icons/go";

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

function Track({ id }) {
  const track = songsList.find((track) => track.id.toString() === id);
  const { imageUrl, name, artist } = track;

  const imageStyle = {
    borderRadius: "50%",
    border: "1px solid #fff",
  };

  return (
    <div className="mb-20 space-y-4">
      <div className="flex gap-6 bg-zinc-800 p-4 pt-20">
        <div className="shadow-lg shadow-black">
          <Image src={imageUrl} alt="" width={200} height={200} />
        </div>
        <div className="flex flex-col justify-end gap-1 text-zinc-400">
          <span className="text-md font-bold text-white">Song</span>
          <h1 className="text-6xl font-bold text-white">{name}</h1>
          <div className="flex items-center justify-start gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/images/artists/nicole-willis.jpg"
                alt="artist"
                width={30}
                height={30}
                style={{ borderRadius: "50%" }}
              />
              <Link
                href="/artist/:id"
                className="hover:text-white hover:underline"
              >
                {capitalizeEachWord(artist)}
              </Link>
            </div>
            <div className="text-zinc-400">
              <label>Date: </label>
              <span className="font-normal">2024</span>
            </div>
            <div>
              <label>Duration: </label>
              <span>2:49</span>
            </div>
            <div>
              <label>Playcounts: </label>
              <span>5,567,900</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="mb-8 flex items-center gap-8">
          <ThemePlayButton />
          <IconButton>
            <GrAddCircle className="text-3xl text-zinc-400 hover:text-white" />
          </IconButton>
          <IconButton>
            <GoHeartFill className="text-3xl text-zinc-400 hover:text-white" />
          </IconButton>
        </div>
        <div className="flex gap-4">
          <Image
            src="/images/artists/nicole-willis.jpg"
            alt=""
            width={100}
            height={100}
            style={{ borderRadius: "50%" }}
          />
          <div className="flex flex-col justify-center">
            <span>Artist</span>
            <span className="font-bold hover:underline">
              {capitalizeEachWord(artist)}
            </span>
          </div>
        </div>
      </div>
      <section className="p-4 text-zinc-400">
        <h3 className="text-xl">Track Story</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </section>
    </div>
  );
}

export default Track;
