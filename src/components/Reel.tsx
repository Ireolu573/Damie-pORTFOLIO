import { useEffect, useState } from "react";
import { Play } from "lucide-react";
import { site } from "../data/portfolio";
import type { View } from "./Lightbox";

const pad = (n: number) => String(n).padStart(2, "0");

export default function Reel({ onOpen }: { onOpen: (v: View) => void }) {
  const { reel } = site;
  const [tc, setTc] = useState("00:00:00:00");

  // Decorative running timecode, like a camera display.
  useEffect(() => {
    const t0 = Date.now();
    const id = window.setInterval(() => {
      const d = Date.now() - t0;
      const s = Math.floor(d / 1000);
      setTc(`${pad(Math.floor(s / 3600))}:${pad(Math.floor(s / 60) % 60)}:${pad(s % 60)}:${pad(Math.floor(d / 40) % 25)}`);
    }, 40);
    return () => window.clearInterval(id);
  }, []);

  const caption = "Shot By Dami showreel";
  const open = () => {
    if (reel.video) onOpen({ caption, body: <video controls autoPlay playsInline src={reel.video} /> });
    else if (reel.link)
      onOpen({
        caption,
        body: (
          <a className="btn main" style={{ position: "relative" }} href={reel.link} target="_blank" rel="noopener noreferrer">
            Watch the showreel
          </a>
        ),
      });
  };

  const cover = reel.cover
    ? { background: `linear-gradient(rgba(40,12,30,.3),rgba(40,12,30,.55)),url("${reel.cover}") center/cover` }
    : undefined;
  const note = reel.video || reel.link ? "Tap to watch the reel" : reel.cover ? "" : "Showreel goes here";

  return (
    <button type="button" className={"reel" + (reel.cover ? " cov" : "")} style={cover} onClick={open} aria-label="Play showreel">
      <span className="bar t" />
      <span className="bar b" />
      <span className="rec">
        <b />
        REEL
      </span>
      <span className="play">
        <Play fill="currentColor" size={30} aria-hidden="true" />
      </span>
      <span className="tc">{tc}</span>
      <span className="reelnote">{note}</span>
    </button>
  );
}
