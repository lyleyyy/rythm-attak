"use client";
import { getUserById } from "@/services/apiUser";
import { createContext, useContext, useEffect, useState } from "react";

const CurrentPlayingContext = createContext();

function CurrentPlayingProvider({ children }) {
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const [currentPlayingArtistName, setCurrentPlayingArtistName] =
    useState(null);

  return (
    <CurrentPlayingContext.Provider
      value={{
        currentPlaying,
        setCurrentPlaying,
        currentPlayingArtistName,
        setCurrentPlayingArtistName,
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
