import Reel from "../components/Reel";
import type { View } from "../components/Lightbox";
import { site } from "../data/portfolio";

export default function Hero({ onOpen }: { onOpen: (v: View) => void }) {
  const links = site.groups.map((g, i) => ({ g, i })).filter(({ g }) => g.items.length > 0);

  return (
    <>
      <h1>{site.headline}</h1>
      <p className="sub">{site.tagline}</p>
      <Reel onOpen={onOpen} />
      <div className="chips" id="chips">
        {links.map(({ g, i }) => (
          <a key={g.name + i} href={`#g${i}`}>
            {g.name}
          </a>
        ))}
      </div>
    </>
  );
}
