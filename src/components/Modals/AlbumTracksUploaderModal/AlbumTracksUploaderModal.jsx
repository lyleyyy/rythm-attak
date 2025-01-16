import DragDrop from "@/components/ArtistDashboard/DragDrop/DragDrop";

function AlbumTracksUploaderModal() {
  return (
    <div className="flex h-3/4 w-1/3 flex-col items-center rounded bg-black">
      <div className="flex">
        <div className="flex flex-col">
          <label>Track Name</label>
          <input className="rounded border border-white bg-black" />
        </div>
        <input type="file" />
      </div>
    </div>
  );
}

export default AlbumTracksUploaderModal;
