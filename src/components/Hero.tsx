import Image from "next/image";
import AppStoreBadges from "./AppStoreBadges";
import FlatIcon from "@/components/FlatIcon";

const stats = [
  { value: "500+", label: "Schools" },
  { value: "10k+", label: "Families" },
  { value: "19",   label: "Modules" },
  { value: "Free", label: "To start" },
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(150deg, #0f172a 0%, #1e3a8a 50%, #1d4ed8 100%)" }}
    >
      {/* Background decoration */}
      <div className="absolute top-[-10%] right-[-5%] w-175 h-175 rounded-full opacity-15 pointer-events-none blur-3xl" style={{ background: "radial-gradient(circle, #fcd34d, #f97316)" }} />
      <div className="absolute bottom-[30%] left-[-10%] w-125 h-125 rounded-full opacity-10 pointer-events-none blur-3xl" style={{ background: "radial-gradient(circle, #818cf8, #4f46e5)" }} />
      <div className="absolute inset-0 bg-grid opacity-[0.04] pointer-events-none" />

      {/* ── Centered text content ── */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 pt-24 pb-8 text-center">

        {/* Live badge */}
        <div className="inline-flex items-center gap-2.5 bg-white/10 border border-white/20 text-white/90 text-xs font-black px-5 py-2.5 rounded-full mb-5">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
          </span>
          Uganda's #1 School Management Platform
        </div>

        {/* Headline */}
        <h1 className="font-black tracking-tight mb-4" style={{ lineHeight: 1.06 }}>
          <span className="block text-4xl sm:text-5xl text-white">Run your entire</span>
          <span className="inline-block text-4xl sm:text-5xl text-gray-900 bg-yellow-400 px-3 rounded-xl mt-2 leading-tight">
            school from one place
          </span>
        </h1>

        <p className="text-blue-100/65 text-base font-semibold leading-relaxed mb-6 max-w-2xl mx-auto">
          Bus tracking, academics, fees, health, dormitory, library and more — all under one roof, built for Ugandan schools.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 justify-center mb-6">
          <a href="#contact" className="btn-fun bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-black px-8 py-3.5 rounded-full text-sm inline-flex items-center gap-2">
            Get Started Free <FlatIcon name="arrow-right" size={14} />
          </a>
          <a href="#modules" className="btn-fun border-2 border-white/25 text-white hover:bg-white/10 font-black px-7 py-3.5 rounded-full text-sm">
            See All Modules →
          </a>
        </div>

        {/* Stats + app stores inline */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center">
            {stats.map((s, i) => (
              <div key={s.label} className={`flex flex-col items-center px-3 sm:px-5 ${i > 0 ? "border-l border-white/15" : ""}`}>
                <span className="text-xl font-black text-white leading-none">{s.value}</span>
                <span className="text-blue-200/50 text-xs font-semibold mt-0.5">{s.label}</span>
              </div>
            ))}
          </div>
          <div className="w-px h-8 bg-white/15 hidden sm:block" />
          <AppStoreBadges dark />
        </div>
      </div>

      {/* ── Dashboard screenshot — clipped to visible top portion ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10">

        {/* Floating cards — outside clip so they're never cut off */}
        <div className="absolute -left-4 sm:-left-8 top-16 z-20 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-gray-100 hidden sm:flex items-center gap-3 pop-in" style={{ animationDelay: "0.3s" }}>
          <div className="w-9 h-9 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
            <FlatIcon name="bus" size={18} className="text-green-600" />
          </div>
          <div>
            <p className="text-[12px] font-black text-gray-900 leading-none">3 buses live</p>
            <p className="text-[10px] text-green-600 font-semibold mt-0.5">All on route ✓</p>
          </div>
        </div>

        <div className="absolute -right-4 sm:-right-8 top-[18%] z-20 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-gray-100 hidden sm:flex items-center gap-3 pop-in" style={{ animationDelay: "0.6s" }}>
          <div className="w-9 h-9 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
            <FlatIcon name="dollar" size={18} className="text-blue-600" />
          </div>
          <div>
            <p className="text-[12px] font-black text-gray-900 leading-none">94% fees collected</p>
            <p className="text-[10px] text-blue-600 font-semibold mt-0.5">This term</p>
          </div>
        </div>

        <div className="absolute -right-4 sm:-right-8 top-[52%] z-20 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-gray-100 hidden sm:flex items-center gap-3 pop-in" style={{ animationDelay: "0.9s" }}>
          <div className="w-9 h-9 bg-purple-100 rounded-xl flex items-center justify-center shrink-0">
            <FlatIcon name="book-open-cover" size={18} className="text-purple-600" />
          </div>
          <div>
            <p className="text-[12px] font-black text-gray-900 leading-none">312 students present</p>
            <p className="text-[10px] text-purple-600 font-semibold mt-0.5">Today</p>
          </div>
        </div>

        <div className="absolute -left-4 sm:-left-8 top-[50%] z-20 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-gray-100 hidden sm:flex items-center gap-3 pop-in" style={{ animationDelay: "1.1s" }}>
          <div className="w-9 h-9 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
            <FlatIcon name="user-check" size={18} className="text-orange-600" />
          </div>
          <div>
            <p className="text-[12px] font-black text-gray-900 leading-none">98% attendance</p>
            <p className="text-[10px] text-orange-500 font-semibold mt-0.5">This week</p>
          </div>
        </div>

        {/* Clipped frame — only top ~55% of screenshot is in DOM height */}
        <div className="relative overflow-hidden rounded-t-2xl" style={{ maxHeight: "420px" }}>

          {/* Glow behind frame */}
          <div
            className="absolute -inset-4 rounded-3xl blur-3xl opacity-25 pointer-events-none"
            style={{ background: "linear-gradient(135deg, #fcd34d 0%, #f97316 40%, #6366f1 100%)" }}
          />

          {/* Browser frame */}
          <div
            className="relative rounded-2xl overflow-hidden border border-white/10"
            style={{
              boxShadow: "0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)",
              transform: "perspective(1400px) rotateX(4deg)",
              transformOrigin: "top center",
            }}
          >
            <div className="bg-gray-900/95 px-4 py-3 flex items-center gap-3">
              <div className="flex gap-1.5 shrink-0">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 bg-gray-800 rounded-lg px-3 py-1.5 flex items-center gap-2 max-w-sm mx-auto">
                <span className="text-green-400 text-[11px]">●</span>
                <span className="text-gray-400 text-[11px] font-mono">app.schoolbus.ug</span>
              </div>
            </div>
            <Image
              src="/image.png"
              alt="School Bus admin dashboard"
              width={1280}
              height={800}
              className="w-full h-auto block"
              priority
            />
          </div>

          {/* Fade out bottom of visible screenshot */}
          <div
            className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none z-10"
            style={{ background: "linear-gradient(to bottom, transparent, white)" }}
          />
        </div>
      </div>
    </section>
  );
}
