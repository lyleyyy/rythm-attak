import convertSecsToHrsMinsSecs from "@/helper/convertSecsToHrsMinsSecs";
import { Howl } from "howler";

async function getTrackDuration(trackAudioFile) {
  const fileUrl = URL.createObjectURL(trackAudioFile);

  return new Promise((resolve, reject) => {
    const track = new Howl({
      src: [fileUrl],
      format: [trackAudioFile.name.slice(-3)],
      html5: true,
      preload: "metadata",
      onload: () => resolve(convertSecsToHrsMinsSecs(track.duration())),
      onloaderror: (id, error) =>
        reject(new Error("Fail to load the audio: " + error)),
    });
  });
}

export default getTrackDuration;
