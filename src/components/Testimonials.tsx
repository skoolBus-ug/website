import FlatIcon from "@/components/FlatIcon";
import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";

const testimonials = [
  { name: "Mr. David Mukasa",   role: "School Administrator",  initials: "DM", grad: "from-emerald-500 to-teal-500",    quote: "We used registers, WhatsApp groups, and spreadsheets. School Bus replaced ALL of them. Fees, attendance, transport, dorm — everything in one place now." },
  { name: "Grace Nakato",       role: "Parent · 2 kids",       initials: "GN", grad: "from-amber-400 to-orange-400",    quote: "Before School Bus I had to call the driver every morning. Now I track the bus, see when my children board, and even pay fees — all in one app!" },
  { name: "Sarah Nambi",        role: "Bus Driver",            initials: "SN", grad: "from-teal-500 to-cyan-400",       quote: "I tap start, drive, and mark children as I go. Parents stop calling me while I am driving. The app does all the communication for me!" },
  { name: "Nurse Florence",     role: "School Nurse",          initials: "NF", grad: "from-pink-500 to-rose-400",       quote: "I used to keep paper cards for every student. Now I log every consultation in the app and admin can pull health reports any time!" },
  { name: "Mr. Joseph Ochieng", role: "Parent & Board Member", initials: "JO", grad: "from-orange-500 to-amber-400",    quote: "I can see fee collection rates, dorm inspection scores, and bus utilisation in one report. School Bus brought real accountability to our school!" },
  { name: "John Ssempijja",     role: "Dorm Master",           initials: "JS", grad: "from-emerald-600 to-green-500",   quote: "Running nightly attendance used to take 45 minutes. With School Bus it takes under 5 minutes. The inspection reports write themselves!" },
];

const statsData = [
  { val: "500+",    label: "Schools enrolled",       icon: "building",  grad: "from-amber-400 to-orange-400"  },
  { val: "19",      label: "Modules in one platform", icon: "apps",      grad: "from-emerald-500 to-teal-500"   },
  { val: "10,000+", label: "Happy users",             icon: "smile",     grad: "from-teal-500 to-cyan-400" },
  { val: "99.9%",   label: "Platform uptime",         icon: "bolt",      grad: "from-orange-500 to-rose-500"},
];

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(150deg, #022c22 0%, #064e3b 45%, #059669 100%)" }}>
      <div className="absolute inset-0 bg-dots-white opacity-[0.04] pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #f59e0b, transparent 70%)" }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #0d9488, transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">

        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 font-black text-xs uppercase tracking-widest px-5 py-2.5 rounded-full mb-6">
              <FlatIcon name="comment" size={14} /> What schools are saying
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
              Trusted by schools <span className="bg-amber-400 text-emerald-900 px-2 rounded-lg">across Uganda</span>
            </h2>
            <p className="text-emerald-100/65 text-lg font-semibold max-w-lg mx-auto">
              Parents, drivers, nurses, and administrators — hear it from the people using School Bus every day.
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonial cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 100}>
              <div className="bg-white/8 border border-white/10 rounded-2xl p-6 flex flex-col group hover:bg-white/12 hover:border-white/20 transition-all h-full">

                {/* Author row */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-12 h-12 bg-linear-to-br ${t.grad} rounded-2xl flex items-center justify-center text-white font-black text-sm shrink-0 shadow-md group-hover:scale-110 transition-transform duration-200`}>
                    {t.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-black text-sm leading-none">{t.name}</p>
                    <p className="text-emerald-300 text-xs font-semibold mt-1">{t.role}</p>
                  </div>
                  <div className="flex gap-0.5 shrink-0">
                    {[...Array(5)].map((_, i) => <span key={i} className="text-amber-400 text-xs">★</span>)}
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 mb-4" />

                {/* Quote */}
                <p className="text-emerald-100/65 text-sm font-semibold leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t-2 border-white/10 pt-14">
          {statsData.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 100}>
              <div className="text-center bg-white/8 rounded-3xl p-4 sm:p-7 border-2 border-white/10 hover:bg-white/12 transition-all group">
                <div className={`w-10 h-10 sm:w-14 sm:h-14 bg-linear-to-br ${s.grad} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-110 transition-transform`}>
                  <FlatIcon name={s.icon} size={20} className="text-white sm:hidden" />
                  <FlatIcon name={s.icon} size={28} className="text-white hidden sm:block" />
                </div>
                <AnimatedCounter value={s.val} className="text-2xl sm:text-4xl font-black text-gradient-yellow leading-none mb-2 block" />
                <div className="text-emerald-200 text-xs sm:text-sm font-semibold">{s.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
