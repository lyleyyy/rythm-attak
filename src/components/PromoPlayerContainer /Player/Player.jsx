"use client";
import { Howl } from "howler";
import { useEffect, useRef, useState } from "react";
import { RiPlayLargeFill, RiShuffleFill, RiRepeatFill } from "react-icons/ri";
import {
  IoPause,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
} from "react-icons/io5";
import { FaVolumeUp } from "react-icons/fa";
import IconButton from "@/ui/IconButton";
import PlayerPlayButton from "./PlayerPlayButton/PlayerPlayButton";
import PlayerControllerContainer from "./PlayerController/PlayerController";
import PlayerTrackPreview from "./PlayerTrackPreview/PlayerTrackPreview";
import PlayerTrackTimer from "./PlayerTrackTimer/PlayerTrackTimer";
import PlayerVolumeBar from "./PlayerVolumeBar/PlayerVolumeBar";
import PlayerUserOperation from "./PlayerUserOperation/PlayerUserOperation";
import * as Slider from "@radix-ui/react-slider";

const track = {
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
    src: track.url,
    // src: "https://rzybqapngtswcbfvwpgw.supabase.co/storage/v1/object/sign/track_audio/lyleLemenTree_audio_1736765850377_78.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ0cmFja19hdWRpby9seWxlTGVtZW5UcmVlX2F1ZGlvXzE3MzY3NjU4NTAzNzdfNzgubXAzIiwiaWF0IjoxNzM2NzY1ODUxLCJleHAiOjQ4NTg4Mjk4NTF9.4yKrpT407M1Vv40nfrPQ2LoQhzxEknOrkTdR5CG3OzE",
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
      <PlayerTrackPreview track={track} />
      <PlayerControllerContainer>
        <div className="flex items-center justify-center gap-4">
          <IconButton iconSize="text-lg">
            <RiShuffleFill />
          </IconButton>
          <IconButton iconSize="text-lg">
            <IoPlaySkipBackSharp />
          </IconButton>
          <PlayerPlayButton onClick={onClickHandler}>
            {isPlaying ? <IoPause /> : <RiPlayLargeFill />}
          </PlayerPlayButton>
          <IconButton iconSize="text-lg">
            <IoPlaySkipForwardSharp />
          </IconButton>
          <IconButton iconSize="text-lg">
            <RiRepeatFill />
          </IconButton>
          <IconButton iconSize="text-lg" position="fixed translate-x-40">
            {isHoverVolume && <PlayerVolumeBar />}
            <FaVolumeUp
              onMouseEnter={() => setIsHoverVolume(true)}
              onMouseLeave={() => setIsHoverVolume(false)}
            />
          </IconButton>
        </div>
        <div className="flex w-full items-center justify-center gap-2 text-center">
          <PlayerTrackTimer loadStatus={loadStatus} timer={playerTimer} />
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
          <PlayerTrackTimer loadStatus={loadStatus} timer={duration} />
        </div>
      </PlayerControllerContainer>
      <PlayerUserOperation />
    </div>
  );
}

export default Player;
