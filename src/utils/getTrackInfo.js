import { Howl, Howler } from "howler";

function getTrackInfo(trackAudioFile) {
  console.log(trackAudioFile, "Waya!");
  console.log(trackAudioFile.name.slice(-3));
  const fileURL = URL.createObjectURL(trackAudioFile);
  console.log(fileURL.slice(5), "???????");
  const track = new Howl({
    src: [fileURL.slice(5)],
    format: [trackAudioFile.name.slice(-3)], // 或者其他格式，如 'ogg'
  });

  console.log(track, "howlTrack");
}

export default getTrackInfo;
