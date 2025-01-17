"use client";
import { Howl } from "howler";
import { useEffect, useRef, useState } from "react";
import { RiPlayLargeFill } from "react-icons/ri";
import { IoPause } from "react-icons/io5";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPlaySkipForwardSharp } from "react-icons/io5";
import { RiShuffleFill } from "react-icons/ri";
import { RiRepeatFill } from "react-icons/ri";
import { FaVolumeUp } from "react-icons/fa";
import IconButton from "@/ui/IconButton";
import MusicCard from "./MusicCard/MusicCard";
import PlayerController from "./PlayerController/PlayerController";
import PlayerUserOperation from "./PlayerUserOperation/PlayerUserOperation";
import convertSecsToHrsMinsSecs from "@/helper/convertSecsToHrsMinsSecs";
import * as Slider from "@radix-ui/react-slider";

const music = {
  id: 1,
  type: "song",
  name: "Feeling Free",
  artist: "nicole willis",
  imageUrl: "/images/song-covers/feelingfree.jpg",
  url: "/audios/the computer sound of genesis.mp3",
};

function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playerTimer, setPlayerTimer] = useState(0);
  const [isHoverSlider, setIsHoverSlider] = useState(false);
  const [isHoverVolume, setIsHoverVolume] = useState(false);

  const song = new Howl({
    // src: music.url,
    src: "https://rzybqapngtswcbfvwpgw.supabase.co/storage/v1/object/sign/track_audio/lyleLemenTree_audio_1736765850377_78.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ0cmFja19hdWRpby9seWxlTGVtZW5UcmVlX2F1ZGlvXzE3MzY3NjU4NTAzNzdfNzgubXAzIiwiaWF0IjoxNzM2NzY1ODUxLCJleHAiOjQ4NTg4Mjk4NTF9.4yKrpT407M1Vv40nfrPQ2LoQhzxEknOrkTdR5CG3OzE",
    html5: true,
    preload: false,
    onload: () => setDuration(song.duration()),
    onend: () => setIsPlaying(false),
  });

  const songRef = useRef(song);

  const loadStatus = songRef.current.state();

  function onClickHandler() {
    if (!isPlaying) {
      songRef.current.play();
    } else {
      songRef.current.pause();
    }

    setIsPlaying((isPlaying) => !isPlaying);
  }

  //player timer
  useEffect(
    function () {
      if (isPlaying) {
        const interval = setInterval(() => {
          setPlayerTimer((playerTimer) => playerTimer + 1);
        }, 1000);

        return () => clearInterval(interval);
      }
    },
    [isPlaying],
  );

  //progress bar
  useEffect(
    function () {
      if (isPlaying) {
        const interval = setInterval(() => {
          setProgress((songRef.current.seek() / duration) * 100);
        }, 1000);

        return () => clearInterval(interval);
      }
    },
    [isPlaying, duration],
  );

  function progressChangeHandler(e) {
    const newSeek = (e.at(0) / 100) * duration;
    songRef.current.seek(newSeek);
    setProgress(e);
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
          <IconButton
            iconSize="text-lg"
            textColor="text-zinc-400"
            hoverTextColor="hover:text-white"
            position="fixed translate-x-36"
          >
            {isHoverVolume && (
              <span className="fixed -translate-y-10">wqdqwdqwd</span>
            )}
            <FaVolumeUp
              onMouseEnter={() => setIsHoverVolume(true)}
              onMouseLeave={() => setIsHoverVolume(false)}
            />
          </IconButton>
        </div>
        <div className="flex w-full items-center justify-center gap-2 text-center">
          <span className="w-[40px] pb-0.5 text-sm text-zinc-400">
            {loadStatus === "loaded"
              ? convertSecsToHrsMinsSecs(playerTimer)
              : "-:--"}
          </span>
          <Slider.Root
            className="relative flex h-1 w-3/5 items-center rounded bg-zinc-400 hover:cursor-pointer"
            min={0}
            max={100}
            value={[progress]}
            onValueChange={progressChangeHandler}
            onMouseEnter={() => setIsHoverSlider(true)}
            onMouseLeave={() => setIsHoverSlider(false)}
            disabled={isPlaying ? false : true}
          >
            <Slider.Track className="relative h-full w-full grow rounded-full bg-zinc-400">
              <Slider.Range className="absolute h-full rounded-full bg-white" />
            </Slider.Track>
            <Slider.Thumb
              className={`${isPlaying && isHoverSlider ? "block" : "hidden"} h-3 w-3 rounded-full bg-white`}
            />
          </Slider.Root>
          <span className="w-[40px] pb-0.5 text-sm text-zinc-400">
            {loadStatus === "loaded"
              ? convertSecsToHrsMinsSecs(duration)
              : "-:--"}
          </span>
        </div>
      </PlayerController>
      <PlayerUserOperation />
    </div>
  );
}

export default Player;
