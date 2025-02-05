function sanitizedFilePathName(file, mediaName) {
  const timestamp = Date.now();
  const randomSuffix = Math.floor(Math.random() * 1000);

  const sanitizedPathName =
    mediaName +
    (file.type.includes("image")
      ? "_cover_"
      : file.type.includes("audio")
        ? "_audio_"
        : "") +
    timestamp +
    "_" +
    randomSuffix +
    "." +
    file.name.split(".").at(-1);

  return sanitizedPathName;
}

export default sanitizedFilePathName;
