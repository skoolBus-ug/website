import Link from "next/link";
import FlatIcon from "@/components/FlatIcon";
import { moduleGroups } from "../lib/modules";
import ScrollReveal from "./ScrollReveal";

export default function Features() {
  return (
    <section id="modules" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-[0.03] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">

        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 font-black text-xs uppercase tracking-widest px-5 py-2.5 rounded-full mb-6 border border-emerald-200">
              19 Modules
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-stone-900 leading-tight mb-4">
              Everything your school <span className="bg-amber-400 text-stone-900 px-2 rounded-lg">needs</span> in one place
            </h2>
            <p className="text-stone-500 text-lg font-semibold max-w-xl mx-auto">
              Not just a bus tracker — a complete school management system built for Ugandan schools.
            </p>
          </div>
        </ScrollReveal>

        {/* Compact category grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {moduleGroups.map((group, i) => (
            <ScrollReveal key={group.category} delay={i * 100}>
              <div
                className={`bg-linear-to-br ${group.bg} rounded-2xl border ${group.border} p-5 h-full`}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 bg-linear-to-br ${group.headerGrad} rounded-xl flex items-center justify-center shrink-0 shadow-sm`}>
                    <FlatIcon name={group.categoryIcon} size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-black text-stone-900 text-sm leading-none">{group.category}</p>
                    <p className="text-stone-400 text-xs font-semibold mt-0.5">{group.tagline}</p>
                  </div>
                </div>

                {/* Module chips */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {group.modules.map((mod) => (
                    <Link
                      key={mod.slug}
                      href={`/modules/${mod.slug}`}
                      className="inline-flex items-center gap-1.5 bg-white border border-stone-100 text-stone-700 font-semibold text-xs px-3 py-1.5 rounded-full hover:border-emerald-300 hover:text-emerald-700 hover:shadow-sm transition-all"
                    >
                      <FlatIcon name={mod.icon} size={11} className="text-stone-400 shrink-0" />
                      {mod.title}
                    </Link>
                  ))}
                </div>

                {/* Count + link */}
                <div className="flex items-center justify-between pt-3 border-t border-black/5">
                  <span className="text-xs font-black text-stone-400 uppercase tracking-wide">
                    {group.modules.length} module{group.modules.length !== 1 ? "s" : ""}
                  </span>
                  <Link
                    href={`/modules#${group.categorySlug}`}
                    className="text-xs font-black text-emerald-600 hover:text-emerald-800 flex items-center gap-1 transition-colors"
                  >
                    View all <FlatIcon name="arrow-right" size={11} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={200}>
          <div className="mt-10 text-center">
            <Link
              href="/modules"
              className="btn-fun inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-black px-8 py-4 rounded-full text-base mr-3"
            >
              Explore all modules →
            </Link>
            <Link
              href="#contact"
              className="btn-fun inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-amber-900 font-black px-8 py-4 rounded-full text-base"
            >
              Start free today
            </Link>
            <p className="text-stone-400 text-sm font-semibold mt-3">No credit card required · Setup in 24 hours</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
