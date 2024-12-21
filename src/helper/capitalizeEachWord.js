function capitalizeEachWord(inputString) {
  if (typeof inputString !== "string") return;

  return inputString
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default capitalizeEachWord;
