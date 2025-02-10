"use client";
import { createContext, useContext, useState } from "react";

const CurrentPlayingContext = createContext();

function CurrentPlayingProvider({ children }) {
  const [currentPlayTrack, setCurrentPlayTrack] = useState(null);
  const [currentPlayArtistName, setCurrentPlayArtistName] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPlayTrackRef, setCurrentPlayTrackRef] = useState(null);

  return (
    <CurrentPlayingContext.Provider
      value={{
        currentPlayTrack,
        setCurrentPlayTrack,
        currentPlayArtistName,
        setCurrentPlayArtistName,
        isPlaying,
        setIsPlaying,
        currentPlayTrackRef,
        setCurrentPlayTrackRef,
      }}
    >
      {children}
    </CurrentPlayingContext.Provider>
  );
}

function useCurrentPlaying() {
  const context = useContext(CurrentPlayingContext);
  if (context === undefined) return;
  return context;
}

export { CurrentPlayingProvider, useCurrentPlaying };
