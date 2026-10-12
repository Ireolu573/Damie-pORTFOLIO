import { site } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" style={{ marginTop: 56, borderTop: "1px solid var(--ink)" }}>
      <div className="gh">
        <h2>Meet Dami</h2>
      </div>
      <div className={"about" + (site.avatar ? " pic" : "")}>
        {site.avatar && (
          <div className="me">
            <img src={site.avatar} alt="Dami" />
          </div>
        )}
        <div>
          {site.bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <ul className="facts">
            {site.facts.map((f, i) => (
              <li key={i}>
                {f.label ? <span>{f.label}</span> : null}
                {f.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
