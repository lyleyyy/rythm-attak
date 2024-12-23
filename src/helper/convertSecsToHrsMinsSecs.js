function convertSecsToHrsMinsSecs(secs) {
  const hours = Math.floor(secs / 3600);
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);

  return `${hours === 0 ? "" : hours + ":"}${minutes === 0 ? "0" : minutes}:${seconds === "0" ? "00" : seconds < 10 ? "0" + seconds : seconds}`;
}

export default convertSecsToHrsMinsSecs;
