"use client";
import { createContext, useContext, useState } from "react";

const CurrentAlbumContext = createContext();

function CurrentAlbumProvider({ children }) {
  const [currentAlbum, setCurrentAlbum] = useState(null);

  return (
    <CurrentAlbumContext.Provider value={{ currentAlbum, setCurrentAlbum }}>
      {children}
    </CurrentAlbumContext.Provider>
  );
}

function useCurrentAlbum() {
  const context = useContext(CurrentAlbumContext);
  if (context === undefined) return;
  return context;
}

export { CurrentAlbumProvider, useCurrentAlbum };
