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
import { useCurrentPlaying } from "@/contexts/CurrentPlayingContext";

function Player() {
  const { currentPlaying, currentPlayingArtistName } = useCurrentPlaying();

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playerTimer, setPlayerTimer] = useState(0);
  const [isHoverSlider, setIsHoverSlider] = useState(false);
  const [isHoverVolume, setIsHoverVolume] = useState(false);
  const trackRef = useRef(null);

  useEffect(
    function () {
      if (!currentPlaying || !currentPlaying.audio_url) return;

      if (trackRef.current) {
        trackRef.current.stop();
        trackRef.current.unload();
        setIsPlaying(false);
        setProgress(0);
        setDuration(0);
        setPlayerTimer(0);
      }

      const newTrack = new Howl({
        src: currentPlaying.audio_url,
        html5: true,
        preload: true,
        onload: () => setDuration(newTrack.duration()),
        onend: () => setIsPlaying(false),
      });

      // setTrack(newTrack);
      trackRef.current = newTrack;
    },
    [currentPlaying],
  );

  const loadStatus = trackRef.current ? trackRef.current.state() : null;

  function onClickHandler() {
    if (!trackRef.current) return;

    if (!isPlaying) {
      trackRef.current.play();
    } else {
      trackRef.current.pause();
    }

    setIsPlaying((isPlaying) => !isPlaying);
  }

  //player timer
  useEffect(
    function () {
      if (!isPlaying || !trackRef.current) return;

      const interval = setInterval(() => {
        setPlayerTimer((playerTimer) => playerTimer + 1);
      }, 1000);

      return () => clearInterval(interval);
    },
    [isPlaying],
  );

  //progress bar
  useEffect(
    function () {
      if (!isPlaying || !trackRef.current) return;

      const interval = setInterval(() => {
        setProgress((trackRef.current.seek() / duration) * 100);
      }, 1000);

      return () => clearInterval(interval);
    },
    [isPlaying, duration],
  );

  function progressChangeHandler(e) {
    if (!trackRef.current) return;

    const newSeek = (e.at(0) / 100) * duration;
    trackRef.current.seek(newSeek);
    setProgress(e);
  }

  return (
    <div className="m-2 flex h-24 w-full items-center px-4">
      {!currentPlaying && <div className="flex w-1/4 gap-4"></div>}
      {currentPlaying && (
        <PlayerTrackPreview
          track={currentPlaying}
          artistName={currentPlayingArtistName}
        />
      )}
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
