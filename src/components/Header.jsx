import { Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border-b border-white/40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 flex items-center justify-center text-white shadow-inner">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="font-semibold text-lg tracking-tight">VibeFace</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-700">
          <a href="#themes" className="hover:text-slate-900">Themes</a>
          <a href="#studio" className="hover:text-slate-900">Studio</a>
          <a href="#how" className="hover:text-slate-900">How it works</a>
        </nav>
        <a
          href="#studio"
          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 text-white text-sm hover:bg-slate-800 active:scale-[.99] transition"
        >
          Try it now
        </a>
      </div>
    </header>
  );
}
