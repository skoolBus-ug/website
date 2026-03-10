import AppStoreBadges from "./AppStoreBadges";
import FlatIcon from "@/components/FlatIcon";
import ScrollReveal from "./ScrollReveal";

const feats = [
  { icon: "map-marker",    text: "Live bus tracking on map",     grad: "from-orange-400 to-amber-400"   },
  { icon: "bell",          text: "Push arrival & safety alerts", grad: "from-blue-500 to-indigo-500"    },
  { icon: "check-circle",  text: "Child boarding confirmations", grad: "from-green-500 to-emerald-400"  },
  { icon: "comment",       text: "Direct messaging with school", grad: "from-purple-500 to-fuchsia-500" },
  { icon: "credit-card",   text: "View invoices & pay fees",     grad: "from-yellow-400 to-orange-400"  },
  { icon: "clipboard-list", text: "Attendance & health records",  grad: "from-pink-500 to-rose-400"      },
];

const phoneStats = [
  { label: "Bus status", value: "On route",  icon: "bus",         color: "text-green-400",  grad: "from-green-500 to-emerald-400"  },
  { label: "Fees",       value: "All paid",  icon: "credit-card", color: "text-blue-400",   grad: "from-blue-500 to-indigo-500"    },
  { label: "Attendance", value: "Present",   icon: "user-check",  color: "text-purple-400", grad: "from-purple-500 to-fuchsia-500" },
  { label: "Health",     value: "All clear", icon: "heart",       color: "text-pink-400",   grad: "from-pink-500 to-rose-400"      },
];

export default function Download() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(150deg, #0f172a 0%, #1e3a8a 45%, #1d4ed8 100%)" }}>
      <div className="absolute inset-0 bg-grid opacity-[0.05] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none blur-3xl" style={{ background: "radial-gradient(circle, #f97316, transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <ScrollReveal direction="left">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 font-black text-xs uppercase tracking-widest px-5 py-2.5 rounded-full mb-6">
                <FlatIcon name="smartphone" size={14} /> Mobile App
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
                Your school, always{" "}
                <span className="bg-yellow-400 text-gray-900 px-2 rounded-lg">in your pocket</span>
              </h2>
              <p className="text-blue-100/70 text-lg font-semibold leading-relaxed mb-8">
                The School Bus mobile app keeps parents, drivers, and staff connected to the school — every moment of every day.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {feats.map((f) => (
                  <li key={f.text} className="card-lift flex items-center gap-2.5 bg-white/8 rounded-2xl px-3 py-3 border border-white/10">
                    <div className={`w-9 h-9 bg-linear-to-br ${f.grad} rounded-xl flex items-center justify-center shrink-0 shadow-sm`}>
                      <FlatIcon name={f.icon} size={18} className="text-white" />
                    </div>
                    <span className="text-white text-xs font-bold leading-snug">{f.text}</span>
                  </li>
                ))}
              </ul>

              <AppStoreBadges dark />
              <p className="text-blue-100/50 text-xs font-semibold mt-4">Free for parents · Android 8+ and iOS 14+</p>
            </div>
          </ScrollReveal>

          {/* Right: phone mockup */}
          <ScrollReveal direction="right" delay={200}>
            <div className="relative flex justify-center">
              {/* Spinning ring */}
              <div className="absolute w-80 h-80 rounded-full border-4 border-dashed border-white/20 spin-slow pointer-events-none" />
              {/* Inner glow */}
              <div className="absolute w-60 h-60 rounded-full pointer-events-none blur-2xl opacity-30" style={{ background: "radial-gradient(circle, #f97316, #fcd34d)" }} />

              {/* Phone shell */}
              <div className="relative z-10 bg-gray-900 rounded-[3rem] p-2 shadow-[0_40px_80px_rgba(0,0,0,0.45)] border-4 border-gray-700">
                <div className="bg-linear-to-b from-blue-900 to-indigo-950 rounded-[2.5rem] overflow-hidden w-52 h-107.5">

                  {/* Notch */}
                  <div className="flex justify-center pt-3 pb-1">
                    <div className="w-20 h-5 bg-black rounded-full" />
                  </div>
                  <div className="flex justify-between px-4 text-white/40 text-[10px] pb-2">
                    <span>9:41</span><span>●●●</span>
                  </div>

                  {/* App header */}
                  <div className="px-4 pb-3 border-b border-white/10">
                    <p className="text-white/50 text-[10px] font-semibold">Mukono Junior School</p>
                    <p className="text-white font-black text-sm">Dashboard</p>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-2 p-3">
                    {phoneStats.map((s) => (
                      <div key={s.label} className="bg-white/8 rounded-2xl p-2.5 flex flex-col gap-1">
                        <div className={`w-6 h-6 bg-linear-to-br ${s.grad} rounded-lg flex items-center justify-center`}>
                          <FlatIcon name={s.icon} size={12} className="text-white" />
                        </div>
                        <p className={`text-[11px] font-black ${s.color} leading-none`}>{s.value}</p>
                        <p className="text-white/40 text-[10px] font-semibold">{s.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Map strip */}
                  <div className="mx-3 bg-green-900/40 rounded-2xl h-20 relative overflow-hidden border border-green-700/20">
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-400/20" />
                    <div className="absolute top-[40%] left-[35%] -translate-x-1/2 -translate-y-1/2">
                      <div className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/50">
                        <FlatIcon name="bus" size={14} className="text-white" />
                      </div>
                      <div className="absolute -inset-1.5 bg-orange-500/20 rounded-full animate-ping" />
                    </div>
                    <span className="absolute top-1.5 left-2 text-white/40 text-[9px] font-mono font-black tracking-wider">LIVE MAP</span>
                    <span className="absolute bottom-1.5 right-2 text-green-400 text-[9px] font-mono font-black">● LIVE</span>
                  </div>

                  {/* Alert */}
                  <div className="mx-3 mt-2 flex items-center gap-2 bg-orange-500/20 border border-orange-400/20 rounded-2xl p-2.5">
                    <div className="w-6 h-6 bg-orange-500/30 rounded-lg flex items-center justify-center shrink-0">
                      <FlatIcon name="bell" size={12} className="text-orange-300" />
                    </div>
                    <div>
                      <p className="text-white text-[11px] font-black">Bus is 2 stops away!</p>
                      <p className="text-white/40 text-[10px]">Head to the stop now</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute top-4 right-0 bg-white rounded-2xl px-3.5 py-2 shadow-xl border-2 border-green-100 flex items-center gap-2 pop-in">
                <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                  <FlatIcon name="check-circle" size={14} className="text-green-500" />
                </div>
                <span className="text-[11px] font-black text-gray-800">Child boarded!</span>
              </div>
              <div className="absolute bottom-8 -left-4 bg-linear-to-r from-orange-500 to-amber-400 rounded-2xl px-3.5 py-2 shadow-xl flex items-center gap-2 pop-in" style={{ animationDelay: "0.3s" }}>
                <FlatIcon name="navigation" size={13} className="text-white shrink-0" />
                <span className="text-[11px] font-black text-white">Arriving in 4 min</span>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0,32 C360,64 1080,0 1440,32 L1440,64 L0,64 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
