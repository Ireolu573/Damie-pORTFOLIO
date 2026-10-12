import { useEffect, useState } from "react";
import { site } from "./data/portfolio";
import { applyTheme } from "./theme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Lightbox, { type View } from "./components/Lightbox";
import Hero from "./sections/Hero";
import Groups from "./sections/Groups";
import About from "./sections/About";
import Contact from "./sections/Contact";

export default function App() {
  const [view, setView] = useState<View>(null);
  useEffect(() => applyTheme(site.theme), []);

  return (
    <div className="wrap">
      <Header />
      <main id="top">
        <Hero onOpen={setView} />
        <Groups onOpen={setView} />
        <About />
        <Contact />
      </main>
      <Footer />
      <Lightbox view={view} onClose={() => setView(null)} />
    </div>
  );
}
