import FlatIcon from "@/components/FlatIcon";
import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { val: "500+",    label: "Schools enrolled",       icon: "building" },
  { val: "19",      label: "Modules included",        icon: "apps" },
  { val: "10,000+", label: "Families using the app",  icon: "users" },
  { val: "99.9%",   label: "Platform uptime",         icon: "bolt" },
  { val: "Free",    label: "To get started",          icon: "gift" },
];

export default function MarqueeStrip() {
  return (
    <div className="bg-white border-b border-stone-100 relative overflow-hidden z-10">
      <div className="absolute inset-0 bg-dots opacity-[0.03] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 py-10">

        {/* Tagline */}
        <ScrollReveal>
          <p className="text-center text-xs font-black text-stone-400 uppercase tracking-widest mb-8">
            Trusted by schools across Uganda
          </p>
        </ScrollReveal>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 100}>
              <div className="flex flex-col items-center text-center gap-1.5 group">
                <FlatIcon name={s.icon} size={32} className="mb-1 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
                <AnimatedCounter value={s.val} className="text-4xl font-black text-stone-900 leading-none" />
                <span className="text-sm font-semibold text-stone-500 leading-snug">{s.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
