import { motion } from "framer-motion";
import { Camera, Wand2 } from "lucide-react";

export default function Hero({ onStart }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" />
      <div className="relative max-w-6xl mx-auto px-4 pt-16 pb-10 sm:pt-24 sm:pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900"
        >
          AI Face Changer
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-amber-500">in real-time</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-4 text-lg text-slate-600 max-w-2xl"
        >
          Switch your look live on camera with anime or realistic styles. Optimized for smooth, lag‑free performance in the browser.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <button
            onClick={onStart}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 active:scale-[.99] transition"
          >
            <Camera className="h-5 w-5" /> Start camera
          </button>
          <a href="#themes" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50">
            <Wand2 className="h-5 w-5" /> Explore themes
          </a>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute -z-0 inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
    </section>
  );
}
