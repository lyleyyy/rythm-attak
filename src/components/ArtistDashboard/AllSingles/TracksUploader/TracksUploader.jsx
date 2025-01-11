import Button from "@/ui/Button";
import DragDrop from "../../DragDrop/DragDrop";
import { uploadTrack } from "@/services/apiTracks";
import getTrackInfo from "@/utils/getTrackInfo";

function TracksUploader() {
  async function onSubmitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const singleCover = formData.get("single cover");
    const trackAudio = formData.get("track");
    const trackName = formData.get("track name");
    const trackStory = formData.get("track story");

    getTrackInfo(trackAudio);

    // await uploadTrack(singleCover, trackAudio, trackName, trackStory);
  }

  return (
    <form
      className="flex h-5/6 w-1/2 flex-col items-center space-y-4 rounded-lg bg-black p-8"
      onSubmit={onSubmitHandler}
    >
      <div className="flex h-[300px] w-3/4 justify-between">
        <DragDrop label="Single Cover" name="single cover" />
        <DragDrop label="Track" name="track" />
      </div>

      <div className="h-2/5 w-3/4 space-y-4">
        <div className="flex h-1/4 w-1/2 flex-col gap-2">
          <label className="text-lg font-medium">Track Name</label>
          <input
            name="track name"
            className="w-full rounded border-2 border-white bg-black p-1 focus:outline-0"
            placeholder="Your track name"
            required
          />
        </div>

        <div className="flex h-2/3 w-full flex-col gap-2">
          <label className="text-lg font-medium">Track Story</label>
          <textarea
            name="track story"
            className="h-full w-full rounded border-2 border-white bg-black p-1 focus:outline-0"
            placeholder="Your track story"
            required
          />
        </div>
      </div>

      <Button type="submit">Upload</Button>
    </form>
  );
}

export default TracksUploader;
