import { site } from "../data/portfolio";
import type { Item } from "../data/types";
import type { View } from "../components/Lightbox";

const pad = (n: number) => String(n).padStart(2, "0");

export default function Groups({ onOpen }: { onOpen: (v: View) => void }) {
  const open = (it: Item, groupName: string) =>
    onOpen({
      caption: `${it.title || groupName} · ${groupName}`,
      body: it.videoUrl ? (
        <a className="btn main" style={{ position: "relative" }} href={it.videoUrl} target="_blank" rel="noopener noreferrer">
          Watch video
        </a>
      ) : (
        <img src={it.image} alt={it.title || groupName} />
      ),
    });

  return (
    <div id="groups">
      {site.groups.map((g, gi) =>
        g.items.length === 0 ? null : (
          <section className="grp" id={`g${gi}`} key={g.name + gi}>
            <div className="gh">
              <span className="num">{pad(gi + 1)}</span>
              <h2>{g.name}</h2>
            </div>
            <div className="grid">
              {g.items.map((it, i) => (
                <button type="button" className="tile" key={i} onClick={() => open(it, g.name)} aria-label={`Open ${it.title || "item"}`}>
                  {it.image ? <img src={it.image} alt={it.title || g.name} loading="lazy" /> : <div className="ph">▶ Watch video</div>}
                  {it.title && (
                    <div className="cap">
                      <strong>{it.title}</strong>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </section>
        )
      )}
    </div>
  );
}
