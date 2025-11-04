import { useRef, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ThemeSelector from "./components/ThemeSelector";
import LiveCamera from "./components/LiveCamera";

function App() {
  const [theme, setTheme] = useState("realistic");
  const [kickoff, setKickoff] = useState(false);
  const studioRef = useRef(null);

  const startStudio = () => {
    setKickoff(true);
    // smooth scroll to studio
    const el = document.getElementById("studio");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    // reset kickoff after short delay so component can control start/stop later
    setTimeout(() => setKickoff(false), 1000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <Hero onStart={startStudio} />
      <ThemeSelector selected={theme} onChange={setTheme} />
      <div ref={studioRef}>
        <LiveCamera theme={theme} autoStart={kickoff} />
      </div>
      <footer id="how" className="py-10 border-t border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-lg font-semibold mb-2">How it works</h3>
          <p className="text-sm text-slate-600 max-w-3xl">
            Pick a theme and start your camera to see an instant transformation applied with smooth, GPU‑accelerated effects. For production setups, a backend can power advanced face swaps and identity‑safe filters while keeping the interface responsive and lag‑free.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
