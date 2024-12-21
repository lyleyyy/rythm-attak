"use client";
import { Howl, Howler } from "howler";
import { useEffect, useRef, useState } from "react";
import { RiPlayLargeFill } from "react-icons/ri";
import { IoPause } from "react-icons/io5";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPlaySkipForwardSharp } from "react-icons/io5";
import { RiShuffleFill } from "react-icons/ri";
import { RiRepeatFill } from "react-icons/ri";
import IconButton from "@/ui/IconButton";
import MusicCard from "./MusicCard/MusicCard";
import PlayerController from "./PlayerController/PlayerController";
import PlayerUserOperation from "./PlayerUserOperation/PlayerUserOperation";
import { MAX_MUSIC_DURATION } from "@/constants/music";

const music = {
  id: 1,
  type: "song",
  name: "Feeling Free",
  artist: "nicole willis",
  imageUrl: "/images/song-covers/feelingfree.jpg",
};

function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const song = new Howl({
    src: ["/audios/the computer sound of genesis.mp3"],
    html5: true,
    onload: () => setDuration(song.duration()),
  });

  const songRef = useRef(song);

  function onClickHandler() {
    if (!isPlaying) {
      songRef.current.play();
    } else {
      songRef.current.pause();
    }

    setIsPlaying((isPlaying) => !isPlaying);
  }

  useEffect(
    function () {
      if (isPlaying) {
        const interval = setInterval(() => {
          // console.log(
          //   songRef.current.seek(),
          //   "seek",
          //   duration,
          //   "duration",
          //   (songRef.current.seek() / duration) * 100,
          //   "calProgress",
          // );
          setProgress((songRef.current.seek() / duration) * 100);
        }, 1000);

        return () => clearInterval(interval);
      }
    },
    [isPlaying, duration],
  );

  function progressChangeHandler() {
    console.log(progress, "progs");
  }

  return (
    <div className="m-2 flex h-24 w-full items-center px-4">
      <MusicCard music={music} />
      <PlayerController>
        <div className="flex items-center justify-center gap-4">
          <IconButton
            iconSize="text-lg"
            textColor="text-zinc-400"
            hoverTextColor="hover:text-white"
          >
            <RiShuffleFill />
          </IconButton>
          <IconButton
            iconSize="text-lg"
            textColor="text-zinc-400"
            hoverTextColor="hover:text-white"
          >
            <IoPlaySkipBackSharp />
          </IconButton>
          <IconButton
            onClick={onClickHandler}
            bgColor="bg-white"
            textColor="text-black"
            isHover={true}
            hoverBgColor="hover:bg-zinc-400"
          >
            {isPlaying ? <IoPause /> : <RiPlayLargeFill />}
          </IconButton>
          <IconButton
            iconSize="text-lg"
            textColor="text-zinc-400"
            hoverTextColor="hover:text-white"
          >
            <IoPlaySkipForwardSharp />
          </IconButton>
          <IconButton
            iconSize="text-lg"
            textColor="text-zinc-400"
            hoverTextColor="hover:text-white"
          >
            <RiRepeatFill />
          </IconButton>
        </div>
        <div>
          <input
            type="range"
            min="0"
            max={MAX_MUSIC_DURATION}
            value={progress}
            onChange={progressChangeHandler}
          />
        </div>
      </PlayerController>
      <PlayerUserOperation />
    </div>
  );
}

export default Player;
