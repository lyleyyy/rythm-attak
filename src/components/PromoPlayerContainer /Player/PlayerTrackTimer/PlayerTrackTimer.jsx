import convertSecsToHrsMinsSecs from "@/helper/convertSecsToHrsMinsSecs";

function PlayerTrackTimer({ loadStatus, timer }) {
  return (
    <span className="w-[40px] pb-0.5 text-sm text-zinc-400">
      {loadStatus === "loaded" ? convertSecsToHrsMinsSecs(timer) : "-:--"}
    </span>
  );
}

export default PlayerTrackTimer;
