import FlatIcon from "@/components/FlatIcon";

const stats = [
  { val: "500+",    suffix: "",  label: "Schools enrolled",        icon: "building",  grad: "from-orange-400 to-amber-400"   },
  { val: "20",      suffix: "",  label: "Modules in one platform", icon: "apps",      grad: "from-blue-500 to-indigo-500"    },
  { val: "10,000+", suffix: "",  label: "Happy families",          icon: "users",     grad: "from-green-500 to-emerald-400"  },
  { val: "99.9",    suffix: "%", label: "Platform uptime",         icon: "bolt",      grad: "from-purple-500 to-fuchsia-500" },
  { val: "24hr",    suffix: "",  label: "Onboarding guarantee",    icon: "time-forward", grad: "from-pink-500 to-rose-400"      },
];

export default function StatsBar() {
  return (
    <section className="py-16 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #1e1b4b 100%)" }}>
      <div className="absolute inset-0 bg-dots-white pointer-events-none" />
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ background: "radial-gradient(circle, #f97316, transparent)" }} />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-10 translate-x-1/2 translate-y-1/2 pointer-events-none" style={{ background: "radial-gradient(circle, #8b5cf6, transparent)" }} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {stats.map((s, i) => (
            <div key={s.label} className="text-center group" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className={`w-14 h-14 bg-linear-to-br ${s.grad} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                <FlatIcon name={s.icon} size={28} className="text-white" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-gradient-yellow leading-none mb-1.5">
                {s.val}{s.suffix && <span className="text-xl">{s.suffix}</span>}
              </div>
              <div className="text-blue-200 text-xs font-bold leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
