import { MARQUEE_ITEMS } from "../data/landingData";

function MarqueeTrack() {
  return (
    <div className="flex shrink-0 min-w-full items-center justify-around gap-10 pr-10">
      {MARQUEE_ITEMS.map((item) => (
        <div key={item} className="contents">
          <span className="text-sm lg:text-xl font-bold whitespace-nowrap">{item}</span>
          <span className="opacity-70">✳</span>
        </div>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div
      className="marquee bg-indigo-600 text-white overflow-hidden py-3.5 lg:py-4"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee">
        <MarqueeTrack />
        <MarqueeTrack />
      </div>
    </div>
  );
}

