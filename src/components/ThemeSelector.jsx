import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const themes = [
  {
    id: "realistic",
    name: "Realistic+",
    desc: "Subtle enhancement with soft smoothing and punchy contrast.",
    gradient: "from-sky-500 to-indigo-600",
  },
  {
    id: "anime",
    name: "Anime",
    desc: "Bold lines, high saturation, and cel‑style pop.",
    gradient: "from-pink-500 to-fuchsia-600",
  },
  {
    id: "cinematic",
    name: "Cinematic",
    desc: "Teal & orange vibe with a filmic finish.",
    gradient: "from-amber-500 to-rose-600",
  },
];

export default function ThemeSelector({ selected, onChange }) {
  return (
    <section id="themes" className="py-12 sm:py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Themes</h2>
          <div className="text-sm text-slate-500 flex items-center gap-2">
            <Sparkles className="h-4 w-4" /> Instant preview
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {themes.map((t, i) => (
            <motion.button
              key={t.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => onChange?.(t.id)}
              className={`text-left rounded-2xl p-[1px] bg-gradient-to-br ${t.gradient} focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500`}
            >
              <div className={`h-full w-full rounded-2xl bg-white p-4 sm:p-5 border ${
                selected === t.id ? "border-transparent ring-2 ring-offset-2 ring-indigo-500" : "border-slate-200"
              }`}>
                <div className="h-28 rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 mb-4" />
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-slate-600 mt-1">{t.desc}</div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
