import { useEffect, useRef, useState } from "react";
import { Camera, Play, Square } from "lucide-react";

function themeFilter(theme) {
  switch (theme) {
    case "anime":
      return "contrast-[1.3] saturate-[1.5] hue-rotate-[5deg]";
    case "cinematic":
      return "contrast-[1.15] saturate-[1.15] hue-rotate-[325deg]"; // teal/orange tint
    case "realistic":
    default:
      return "contrast-[1.1] saturate-[1.05]";
  }
}

export default function LiveCamera({ theme = "realistic", autoStart = false }) {
  const videoRef = useRef(null);
  const [running, setRunning] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (autoStart && !running) start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoStart]);

  async function start() {
    setError("");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { width: { ideal: 1280 }, height: { ideal: 720 } }, audio: false });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
      setRunning(true);
    } catch (e) {
      setError("Camera access was blocked. Please allow permissions.");
      console.error(e);
    }
  }

  function stop() {
    const vid = videoRef.current;
    const stream = vid && vid.srcObject;
    if (stream && typeof stream.getTracks === "function") {
      stream.getTracks().forEach((t) => t.stop());
    }
    if (vid) vid.srcObject = null;
    setRunning(false);
  }

  return (
    <section id="studio" className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Live Studio</h2>
          <div className="flex items-center gap-2">
            {!running ? (
              <button onClick={start} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800">
                <Play className="h-4 w-4" /> Start
              </button>
            ) : (
              <button onClick={stop} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-50">
                <Square className="h-4 w-4" /> Stop
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900/5 border border-slate-200">
              {!running && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-600">
                  <div className="h-16 w-16 rounded-full bg-white border border-slate-200 grid place-items-center mb-3">
                    <Camera className="h-7 w-7" />
                  </div>
                  <p className="text-sm">Start your camera to preview live</p>
                </div>
              )}
              <video
                ref={videoRef}
                className={`h-full w-full object-cover ${themeFilter(theme)}`}
                playsInline
                muted
                autoPlay
              />
              {/* Soft gradient overlay for polish (doesn't block video interaction) */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>
            {error && (
              <p className="mt-3 text-sm text-rose-600">{error}</p>
            )}
          </div>
          <div className="lg:col-span-1">
            <div className="rounded-2xl border border-slate-200 p-4 bg-white">
              <h3 className="font-semibold mb-2">Performance</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Runs entirely in your browser for low latency</li>
                <li>• GPU-accelerated CSS filters for smooth frames</li>
                <li>• Toggle themes instantly without refresh</li>
              </ul>
              <div className="mt-4 text-xs text-slate-500">
                Note: This demo applies fast, stylized filters to preview the look. Server-side AI can be added later for full facial transformation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
