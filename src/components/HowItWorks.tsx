import FlatIcon from "@/components/FlatIcon";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    num: "1",
    icon: "building",
    title: "School signs up",
    desc: "The admin creates an account, adds routes, registers staff, and switches on modules — all in minutes.",
    grad: "from-amber-400 to-orange-400",
    ring: "ring-amber-400/30",
    numColor: "text-amber-200",
  },
  {
    num: "2",
    icon: "users",
    title: "Parents & staff join",
    desc: "Parents download the mobile app. Drivers, nurses, librarians each get their own role-specific login.",
    grad: "from-emerald-500 to-teal-500",
    ring: "ring-emerald-400/30",
    numColor: "text-emerald-200",
  },
  {
    num: "3",
    icon: "smartphone",
    title: "Everyone uses their app",
    desc: "Drivers start bus trips. Nurses log health records. Parents track the bus — all from one platform.",
    grad: "from-teal-500 to-cyan-500",
    ring: "ring-teal-400/30",
    numColor: "text-teal-200",
  },
  {
    num: "4",
    icon: "sparkles",
    title: "School runs itself!",
    desc: "Admins monitor fees, buses, health, attendance and more from one dashboard — in real time.",
    grad: "from-orange-500 to-rose-500",
    ring: "ring-orange-400/30",
    numColor: "text-orange-200",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(150deg, #022c22 0%, #064e3b 45%, #059669 100%)" }}>
      <div className="absolute inset-0 bg-dots-white opacity-[0.04] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 font-black text-xs uppercase tracking-widest px-5 py-2.5 rounded-full mb-6">
              <FlatIcon name="bolt" size={14} /> Super Simple Setup
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
              Up &amp; running in <span className="bg-amber-400 text-emerald-900 px-2 rounded-lg">one day</span>
            </h2>
            <p className="text-emerald-100/65 text-lg font-semibold max-w-lg mx-auto">
              No hardware. No complicated training. Just sign up and go!
            </p>
          </div>
        </ScrollReveal>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Gradient connector line */}
          <div className="hidden lg:block absolute top-13.5 left-[17%] right-[17%] h-1 z-0 rounded-full" style={{ background: "linear-gradient(90deg, #f59e0b, #059669, #0d9488, #f97316)" }} />

          {steps.map((s, i) => (
            <ScrollReveal key={s.num} delay={i * 150}>
              <div className="relative z-10 flex flex-col items-center text-center group">
                {/* Icon block */}
                <div className={`relative w-28 h-28 bg-linear-to-br ${s.grad} rounded-3xl flex items-center justify-center shadow-2xl ring-8 ${s.ring} mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <FlatIcon name={s.icon} size={52} className="text-white" />
                  {/* Step number badge */}
                  <div className="absolute -top-3 -right-3 w-9 h-9 bg-white border-4 border-stone-100 text-stone-800 text-sm font-black rounded-full flex items-center justify-center shadow-lg">
                    {s.num}
                  </div>
                </div>

                {/* Text card */}
                <div className="relative bg-white/8 border border-white/10 rounded-2xl p-5 w-full overflow-hidden">
                  {/* Giant bg number */}
                  <span className={`step-num ${s.numColor} font-black`}>{s.num}</span>
                  <h3 className="font-black text-white text-lg mb-2 relative">{s.title}</h3>
                  <p className="text-emerald-100/65 text-sm leading-relaxed font-semibold relative">{s.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA under steps */}
        <ScrollReveal delay={200}>
          <div className="mt-14 flex justify-center">
            <div className="bg-white/8 border border-white/10 rounded-3xl px-8 py-6 flex flex-col sm:flex-row items-center gap-5 max-w-xl w-full">
              <div className="text-center sm:text-left">
                <p className="font-black text-white text-lg">Ready to get started?</p>
                <p className="text-emerald-100/65 text-sm font-semibold">Our team sets everything up for you — for free!</p>
              </div>
              <a href="#contact" className="btn-fun bg-amber-400 hover:bg-amber-300 text-amber-900 font-black px-8 py-4 rounded-full shrink-0 sm:ml-auto">
                Get Started
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* White wave divider */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0,32 C360,64 1080,0 1440,32 L1440,64 L0,64 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
