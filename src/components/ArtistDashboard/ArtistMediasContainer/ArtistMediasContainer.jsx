function ArtistMediasContainer({ children }) {
  return (
    <div className="flex flex-wrap justify-start gap-x-1.5 gap-y-4">
      {children}
    </div>
  );
}

export default ArtistMediasContainer;
