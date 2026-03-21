import Image from "next/image";
import downloadImg from "../../public/image2.png";
import AppStoreBadges from "./AppStoreBadges";
import FlatIcon from "@/components/FlatIcon";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: "50K+",  label: "Active parents",  icon: "users",       grad: "from-emerald-500 to-teal-500"   },
  { value: "4.8★",  label: "App Store rating", icon: "star",        grad: "from-amber-400 to-orange-400" },
  { value: "99.9%", label: "Uptime",           icon: "shield",      grad: "from-teal-500 to-cyan-400" },
  { value: "<1s",   label: "Alert speed",      icon: "bolt",        grad: "from-orange-500 to-rose-500"},
];

export default function Download() {
  return (
    <section className="relative overflow-hidden bg-stone-950">
      {/* Top accent line */}
      <div className="h-1 bg-linear-to-r from-emerald-500 via-amber-400 to-emerald-500" />

      {/* Hero area: full-width image with overlay */}
      <div className="relative">
        {/* Background image - full bleed */}
        <div className="absolute inset-0">
          <Image
            src={downloadImg}
            alt="School Bus app interface"
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-linear-to-r from-stone-950 via-stone-950/85 to-stone-950/40" />
          <div className="absolute inset-0 bg-linear-to-t from-stone-950 via-transparent to-stone-950/60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 py-20 sm:py-28">
          <div className="grid lg:grid-cols-5 gap-12 items-center">

            {/* Left content - takes 3 cols */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="left">
                <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 font-black text-xs uppercase tracking-widest px-5 py-2.5 rounded-full mb-8">
                  <FlatIcon name="smartphone" size={14} /> Mobile App
                </div>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1]">
                  Your school,{" "}
                  <span className="relative">
                    <span className="relative z-10">always</span>
                    <span className="absolute bottom-1 left-0 right-0 h-3 bg-emerald-500/30 -skew-x-3 rounded" />
                  </span>{" "}
                  <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-300 to-orange-400">in your pocket</span>
                </h2>

                <p className="text-stone-400 text-lg sm:text-xl leading-relaxed mb-10 max-w-lg">
                  Track buses in real-time, get instant alerts, pay fees, and stay connected with your child&apos;s school — all from one app.
                </p>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {[
                    { icon: "map-marker",    text: "Live tracking" },
                    { icon: "bell",          text: "Push alerts" },
                    { icon: "check-circle",  text: "Boarding confirmations" },
                    { icon: "credit-card",   text: "Fee payments" },
                    { icon: "comment",       text: "Messaging" },
                    { icon: "clipboard-list", text: "Health records" },
                  ].map((f) => (
                    <span key={f.text} className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 text-white/70 text-xs font-semibold hover:bg-white/10 transition-colors">
                      <FlatIcon name={f.icon} size={12} className="text-emerald-400" />
                      {f.text}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <AppStoreBadges dark />
                  <div className="hidden sm:block w-px h-10 bg-white/10" />
                  <p className="text-stone-500 text-xs font-semibold">Free for parents<br />Android 8+ · iOS 14+</p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right - phone mockup overlapping the image - takes 2 cols */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="right" delay={200}>
                <div className="relative flex justify-center">
                  {/* Glow behind phone */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-3xl opacity-20" style={{ background: "radial-gradient(circle, #059669, #fbbf24)" }} />

                  {/* Phone */}
                  <div className="relative z-10">
                    <div className="bg-stone-900 rounded-[3rem] p-2 shadow-[0_50px_100px_rgba(0,0,0,0.6)] border-[3px] border-stone-700 ring-1 ring-white/5">
                      <div className="rounded-[2.5rem] overflow-hidden w-60 h-[30rem] bg-linear-to-b from-stone-900 to-stone-900 relative">
                        {/* Notch */}
                        <div className="flex justify-center pt-2.5 pb-1 relative z-10">
                          <div className="w-28 h-7 bg-black rounded-full relative">
                            <div className="absolute top-1/2 right-5 -translate-y-1/2 w-2.5 h-2.5 bg-stone-800 rounded-full ring-1 ring-stone-700" />
                          </div>
                        </div>
                        <div className="flex justify-between px-5 text-white/40 text-[10px] pb-2">
                          <span className="font-semibold">9:41</span>
                          <div className="flex items-center gap-1.5">
                            <FlatIcon name="signal" size={10} className="text-white/40" />
                            <FlatIcon name="wifi" size={10} className="text-white/40" />
                            <div className="w-6 h-3 border border-white/30 rounded-sm relative">
                              <div className="absolute inset-[2px] bg-green-400 rounded-xs" />
                            </div>
                          </div>
                        </div>

                        {/* App content */}
                        <div className="px-4 pb-3 flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <div className="w-9 h-9 bg-linear-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-md shadow-emerald-500/20">
                              <FlatIcon name="bus" size={18} className="text-white" />
                            </div>
                            <div>
                              <p className="text-white font-black text-sm">School Bus</p>
                              <p className="text-white/40 text-[9px] font-semibold">Mukono Junior</p>
                            </div>
                          </div>
                          <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                            <FlatIcon name="bell" size={14} className="text-white/50" />
                          </div>
                        </div>

                        {/* Status card */}
                        <div className="mx-3 mt-1 bg-linear-to-r from-emerald-500/15 to-teal-500/10 border border-emerald-500/20 rounded-2xl p-3">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                              <span className="text-emerald-400 text-[10px] font-black uppercase tracking-wider">En Route</span>
                            </div>
                            <span className="text-white/50 text-[10px] font-semibold">ETA 4 min</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                              <div className="w-[70%] h-full bg-linear-to-r from-emerald-400 to-teal-400 rounded-full" />
                            </div>
                            <span className="text-white/60 text-[9px] font-bold">70%</span>
                          </div>
                          <p className="text-white/40 text-[9px] mt-1.5">2 stops away · KBC 245T</p>
                        </div>

                        {/* Map preview */}
                        <div className="mx-3 mt-2.5 bg-stone-800/60 rounded-2xl h-24 relative overflow-hidden border border-white/5">
                          <div className="absolute inset-0 opacity-20" style={{ background: "conic-gradient(from 180deg at 50% 50%, #059669 0deg, transparent 120deg, #0d9488 240deg, transparent 360deg)" }} />
                          {/* Route line */}
                          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 100">
                            <path d="M30,70 Q80,20 120,50 T180,30" stroke="url(#routeGrad)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeDasharray="4 3" />
                            <defs>
                              <linearGradient id="routeGrad" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#f59e0b" />
                                <stop offset="100%" stopColor="#059669" />
                              </linearGradient>
                            </defs>
                          </svg>
                          {/* Bus dot */}
                          <div className="absolute top-[45%] left-[55%]">
                            <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/40">
                              <FlatIcon name="bus" size={12} className="text-white" />
                            </div>
                            <div className="absolute -inset-1.5 bg-amber-500/20 rounded-full animate-ping" />
                          </div>
                          {/* School dot */}
                          <div className="absolute top-[25%] right-[12%]">
                            <div className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
                              <FlatIcon name="home" size={8} className="text-white" />
                            </div>
                          </div>
                          {/* Start dot */}
                          <div className="absolute bottom-[22%] left-[12%]">
                            <div className="w-3 h-3 bg-teal-400 rounded-full ring-2 ring-teal-400/30" />
                          </div>
                        </div>

                        {/* Quick actions */}
                        <div className="grid grid-cols-3 gap-2 px-3 mt-2.5">
                          {[
                            { icon: "map-marker", label: "Track",     color: "text-amber-400", bg: "bg-amber-500/15" },
                            { icon: "comment",    label: "Message",   color: "text-emerald-400",   bg: "bg-emerald-500/15" },
                            { icon: "credit-card",label: "Pay Fees",  color: "text-teal-400",  bg: "bg-teal-500/15" },
                          ].map((a) => (
                            <div key={a.label} className={`${a.bg} rounded-xl p-2 flex flex-col items-center gap-1 border border-white/5`}>
                              <FlatIcon name={a.icon} size={14} className={a.color} />
                              <span className="text-white/60 text-[8px] font-bold">{a.label}</span>
                            </div>
                          ))}
                        </div>

                        {/* Bottom nav */}
                        <div className="absolute bottom-0 left-0 right-0 flex justify-around items-center px-5 py-3 bg-black/50 border-t border-white/5 backdrop-blur-md">
                          {[
                            { icon: "home",       label: "Home",    active: true },
                            { icon: "map-marker", label: "Track",   active: false },
                            { icon: "comment",    label: "Chat",    active: false },
                            { icon: "user",       label: "Profile", active: false },
                          ].map((n) => (
                            <div key={n.label} className="flex flex-col items-center gap-0.5">
                              <FlatIcon name={n.icon} size={15} className={n.active ? "text-emerald-400" : "text-white/25"} />
                              <span className={`text-[7px] font-bold ${n.active ? "text-emerald-400" : "text-white/25"}`}>{n.label}</span>
                            </div>
                          ))}
                        </div>

                        {/* Home indicator bar */}
                        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/20 rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Floating notification cards */}
                  <div className="absolute -top-2 -right-4 z-20 bg-white rounded-2xl px-3 py-2 shadow-2xl shadow-black/20 border border-stone-100 flex items-center gap-2 pop-in">
                    <div className="w-8 h-8 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0">
                      <FlatIcon name="check-circle" size={16} className="text-emerald-500" />
                    </div>
                    <div>
                      <p className="text-[11px] font-black text-stone-800">Child boarded!</p>
                      <p className="text-[9px] text-stone-400 font-semibold">Just now · Bus KBC 245T</p>
                    </div>
                  </div>

                  <div className="absolute -bottom-2 -left-6 z-20 bg-stone-900 rounded-2xl px-3 py-2 shadow-2xl shadow-black/30 border border-white/10 flex items-center gap-2 pop-in" style={{ animationDelay: "0.3s" }}>
                    <div className="w-8 h-8 bg-amber-500/20 rounded-xl flex items-center justify-center shrink-0">
                      <FlatIcon name="navigation" size={14} className="text-amber-400" />
                    </div>
                    <div>
                      <p className="text-[11px] font-black text-white">4 min away</p>
                      <p className="text-[9px] text-white/40 font-semibold">Heading to Bukoto Stop</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <ScrollReveal direction="up" delay={300}>
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5">
              {stats.map((s, i) => (
                <div key={s.label} className="py-8 px-6 text-center group" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className={`inline-flex w-10 h-10 bg-linear-to-br ${s.grad} rounded-xl items-center justify-center mb-3 shadow-lg opacity-80 group-hover:opacity-100 transition-opacity`}>
                    <FlatIcon name={s.icon} size={18} className="text-white" />
                  </div>
                  <p className="text-white font-black text-2xl">{s.value}</p>
                  <p className="text-stone-500 text-xs font-semibold mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom transition */}
      <div className="h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
