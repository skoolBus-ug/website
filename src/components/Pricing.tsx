import FlatIcon from "@/components/FlatIcon";
import ScrollReveal from "./ScrollReveal";

const moduleGroups = [
  {
    key: "transport",
    label: "Transport & Safety",
    icon: "bus",
    grad: "from-orange-400 to-amber-400",
    modules: ["Bus Tracking", "Pickup Management", "Emergency Response", "Visitor Management"],
  },
  {
    key: "academics",
    label: "Academics",
    icon: "book-open-cover",
    grad: "from-blue-500 to-indigo-500",
    modules: ["Academics & Report Cards", "Attendance", "Timetable", "Forms & Assignments"],
  },
  {
    key: "finance",
    label: "Finance & Admin",
    icon: "credit-card",
    grad: "from-green-500 to-emerald-500",
    modules: ["Fees Management", "Registration", "Staff Management", "Inventory"],
  },
  {
    key: "campus",
    label: "Campus Life",
    icon: "home",
    grad: "from-purple-500 to-fuchsia-500",
    modules: ["Dormitory", "Health", "Canteen", "Events", "Discipline", "Library"],
  },
  {
    key: "communication",
    label: "Communication",
    icon: "megaphone",
    grad: "from-yellow-400 to-orange-400",
    modules: ["Announcements & Messaging"],
  },
];

const plans = [
  {
    name: "Basic",
    price: "Free",
    period: "",
    tagline: "Day schools getting started with bus management",
    badge: null,
    headerGrad: "from-slate-600 to-slate-700",
    iconGrad: "from-slate-400 to-slate-500",
    accentColor: "teal",
    includedGroups: ["transport", "communication"],
    moduleCount: 5,
    extras: [
      "Up to 1 bus route",
      "Up to 30 parent accounts",
      "Parent mobile app",
      "Email support",
    ],
    ctaLabel: "Get Started Free",
    ctaClass: "btn-fun border-2 border-gray-200 text-gray-700 hover:bg-gray-50 font-black",
    featured: false,
  },
  {
    name: "Pro",
    price: "UGX 300,000",
    period: "/ term",
    tagline: "Complete management for day schools",
    badge: "Most Popular",
    headerGrad: "from-blue-600 to-indigo-700",
    iconGrad: "from-yellow-400 to-amber-400",
    accentColor: "blue",
    includedGroups: ["transport", "academics", "finance", "communication"],
    moduleCount: 13,
    extras: [
      "Unlimited bus routes & parents",
      "Full admin dashboard & reports",
      "Parent & staff mobile apps",
      "Priority email & phone support",
    ],
    ctaLabel: "Get Started",
    ctaClass: "btn-fun bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-black",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "UGX 500,000",
    period: "/ term",
    tagline: "All modules for full boarding schools",
    badge: null,
    headerGrad: "from-purple-600 to-violet-700",
    iconGrad: "from-purple-400 to-violet-400",
    accentColor: "purple",
    includedGroups: ["transport", "academics", "finance", "campus", "communication"],
    moduleCount: 19,
    extras: [
      "Everything in Pro",
      "Dormitory & boarding management",
      "Health clinic & canteen",
      "Dedicated onboarding manager",
    ],
    ctaLabel: "Get Started",
    ctaClass: "btn-fun bg-purple-600 hover:bg-purple-500 text-white font-black",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.04] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">

        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 font-black text-xs uppercase tracking-widest px-5 py-2.5 rounded-full mb-6 border border-blue-200">
              <FlatIcon name="dollar" size={14} /> Pricing
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-4">
              Affordable for <span className="bg-yellow-400 text-gray-900 px-2 rounded-lg">every school</span>
            </h2>
            <p className="text-gray-500 text-lg font-semibold max-w-2xl mx-auto">
              Pick the plan that fits your school. Basic covers bus management — Pro adds full academic and financial management — Enterprise adds boarding and campus modules.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 150}>
              <div
                className={`relative rounded-3xl border-2 flex flex-col shadow-lg overflow-hidden card-lift bg-white ${
                  plan.featured ? "border-blue-200 md:-mt-4 ring-4 ring-blue-400/20 shadow-2xl" : "border-gray-100"
                }`}
              >
                {/* Header */}
                <div className={`bg-linear-to-br ${plan.headerGrad} p-7 relative overflow-hidden`}>
                  {plan.badge && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs font-black px-3 py-1 rounded-full shadow-sm">
                      {plan.badge}
                    </div>
                  )}
                  <div className={`w-12 h-12 bg-linear-to-br ${plan.iconGrad} rounded-2xl flex items-center justify-center shadow-md mb-4`}>
                    <span className="text-white font-black text-lg">{plan.moduleCount}</span>
                  </div>
                  <h3 className="font-black text-2xl text-white">{plan.name}</h3>
                  <p className="text-white/70 text-sm font-semibold mt-1 leading-snug">{plan.tagline}</p>
                </div>

                <div className="p-6 flex flex-col flex-1">

                  {/* Price */}
                  <div className="flex items-end gap-1.5 pb-5 mb-5 border-b border-gray-100">
                    <span className="text-3xl font-black leading-none text-gray-900">{plan.price}</span>
                    {plan.period && <span className="text-sm mb-0.5 font-bold text-gray-400">{plan.period}</span>}
                  </div>

                  {/* Module groups */}
                  <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Modules</p>
                  <div className="space-y-2 mb-5">
                    {moduleGroups.map((g) => {
                      const included = plan.includedGroups.includes(g.key);
                      return (
                        <div
                          key={g.key}
                          className={`rounded-xl border transition-all ${
                            included
                              ? "bg-gray-50 border-gray-100"
                              : "border-transparent opacity-30"
                          }`}
                        >
                          <div className="flex items-center gap-2.5 px-3 py-2">
                            <div className={`w-7 h-7 bg-linear-to-br ${g.grad} rounded-lg flex items-center justify-center shrink-0`}>
                              <FlatIcon name={g.icon} size={13} className="text-white" />
                            </div>
                            <span className={`text-sm font-bold flex-1 ${included ? "text-gray-700" : "text-gray-400"}`}>
                              {g.label}
                              <span className="ml-1 text-xs font-semibold text-gray-400">({g.modules.length})</span>
                            </span>
                            {included
                              ? <FlatIcon name="check" size={14} className="text-green-500 shrink-0" />
                              : <FlatIcon name="lock" size={12} className="text-gray-300 shrink-0" />
                            }
                          </div>
                          {included && (
                            <div className="px-3 pb-2 pl-12 flex flex-wrap gap-1">
                              {g.modules.map((m) => (
                                <span key={m} className="text-[10px] font-semibold text-gray-400 bg-white border border-gray-100 px-2 py-0.5 rounded-full">{m}</span>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Extras */}
                  <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Also includes</p>
                  <ul className="space-y-2 flex-1 mb-7">
                    {plan.extras.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm font-semibold text-gray-500">
                        <FlatIcon name="check" size={14} className="text-green-500 shrink-0 mt-0.5" /> {f}
                      </li>
                    ))}
                  </ul>

                  <a href="#contact" className={`block text-center py-4 rounded-2xl transition-all text-sm ${plan.ctaClass}`}>
                    {plan.ctaLabel}
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <p className="text-center text-gray-400 text-sm font-semibold mt-10">
            No long-term contracts &nbsp;·&nbsp; Pay per term &nbsp;·&nbsp; Cancel any time &nbsp;·&nbsp; Free setup on all plans
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
