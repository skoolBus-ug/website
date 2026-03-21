import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FlatIcon from "@/components/FlatIcon";
import { allModules, findModule, moduleGroups } from "../../../lib/modules";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return allModules.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const result = findModule(slug);
  if (!result) return { title: "Module Not Found — School Bus" };
  const { module: mod } = result;
  return {
    title: `${mod.title} — School Bus`,
    description: mod.longDesc,
  };
}

export default async function ModulePage({ params }: Props) {
  const { slug } = await params;
  const result = findModule(slug);
  if (!result) notFound();

  const { module: mod, group } = result;
  const siblings = group.modules.filter((m) => m.slug !== mod.slug);

  const roleColors: Record<string, string> = {
    "Parents":        "bg-amber-50 border-amber-200 text-amber-700",
    "Administrators": "bg-emerald-50 border-emerald-200 text-emerald-700",
    "Teachers":       "bg-indigo-50 border-indigo-200 text-indigo-700",
    "Drivers":        "bg-teal-50 border-teal-200 text-teal-700",
    "Bursars":        "bg-emerald-50 border-emerald-200 text-emerald-700",
    "Gate Staff":     "bg-amber-50 border-amber-200 text-amber-700",
    "HR":             "bg-violet-50 border-violet-200 text-violet-700",
    "Staff":          "bg-cyan-50 border-cyan-200 text-cyan-700",
    "School Nurses":  "bg-pink-50 border-pink-200 text-pink-700",
    "Dorm Masters":   "bg-purple-50 border-purple-200 text-purple-700",
    "Canteen Managers": "bg-red-50 border-red-200 text-red-700",
    "Store Keepers":  "bg-lime-50 border-lime-200 text-lime-700",
    "Librarians":     "bg-teal-50 border-teal-200 text-teal-700",
    "Students":       "bg-sky-50 border-sky-200 text-sky-700",
    "Class Teachers": "bg-indigo-50 border-indigo-200 text-indigo-700",
  };

  function roleColor(role: string) {
    return roleColors[role] ?? "bg-stone-50 border-stone-200 text-stone-700";
  }

  return (
    <div className="min-h-screen bg-stone-50">

      {/* Navbar */}
      <header className="bg-white border-b border-stone-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-emerald-600 rounded-xl flex items-center justify-center">
              <FlatIcon name="bus" size={18} className="text-white" />
            </div>
            <span className="font-black text-xl text-stone-900">
              School <span className="text-gradient-teal">Bus</span>
            </span>
          </Link>
          <Link
            href="/#contact"
            className="bg-amber-400 hover:bg-amber-300 text-amber-900 font-black text-sm px-5 py-2.5 rounded-full transition-all"
          >
            Get Started Free
          </Link>
        </div>
      </header>

      {/* Hero band */}
      <div className={`relative overflow-hidden bg-linear-to-br ${mod.grad}`}>
        <div className="absolute inset-0 bg-dots-white opacity-[0.06] pointer-events-none" />
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 pointer-events-none blur-3xl bg-white" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/60 text-xs font-bold mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <FlatIcon name="angle-right" size={12} />
            <Link href="/modules" className="hover:text-white transition-colors">Modules</Link>
            <FlatIcon name="angle-right" size={12} />
            <span className="text-white">{mod.title}</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              {/* Category pill */}
              <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 text-white font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-5">
                <FlatIcon name={group.categoryIcon} size={13} /> {group.category}
              </div>

              <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
                {mod.title}
              </h1>
              <p className="text-white/80 text-lg font-semibold leading-relaxed mb-8">
                {mod.longDesc}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/#contact"
                  className="inline-block bg-white text-stone-900 font-black px-7 py-3.5 rounded-full text-sm hover:-translate-y-0.5 transition-all shadow-lg"
                >
                  Get Started Free
                </Link>
                <Link
                  href="/modules"
                  className="inline-flex items-center gap-1.5 bg-white/15 border border-white/25 text-white font-bold px-6 py-3.5 rounded-full text-sm hover:bg-white/25 transition-all"
                >
                  <FlatIcon name="arrow-left" size={14} /> All Modules
                </Link>
              </div>
            </div>

            {/* Icon display */}
            <div className="hidden md:flex justify-center">
              <div className="w-48 h-48 bg-white/15 border border-white/20 rounded-4xl flex items-center justify-center shadow-2xl backdrop-blur-sm">
                <FlatIcon name={mod.icon} size={80} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16 grid lg:grid-cols-3 gap-10">

        {/* Main content */}
        <div className="lg:col-span-2 space-y-10">

          {/* Key features */}
          <div className="bg-white rounded-3xl border border-stone-100 shadow-sm p-8">
            <h2 className="text-xl font-black text-stone-900 mb-6">Key Features</h2>
            <ul className="space-y-4">
              {mod.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className={`w-6 h-6 bg-linear-to-br ${mod.grad} rounded-lg flex items-center justify-center shrink-0 mt-0.5 shadow-sm`}>
                    <FlatIcon name="check" size={13} className="text-white" />
                  </div>
                  <span className="text-stone-600 font-semibold text-sm leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Who benefits */}
          <div className="bg-white rounded-3xl border border-stone-100 shadow-sm p-8">
            <h2 className="text-xl font-black text-stone-900 mb-6">Who Benefits</h2>
            <div className="space-y-4">
              {mod.whoBenefits.map((wb, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className={`shrink-0 text-xs font-black px-3 py-1.5 rounded-full border ${roleColor(wb.role)}`}>
                    {wb.role}
                  </span>
                  <p className="text-stone-500 font-semibold text-sm leading-relaxed pt-1">{wb.benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Siblings — other modules in same category */}
          {siblings.length > 0 && (
            <div className="bg-white rounded-3xl border border-stone-100 shadow-sm p-8">
              <h2 className="text-xl font-black text-stone-900 mb-2">
                More in <span className="text-emerald-600">{group.category}</span>
              </h2>
              <p className="text-stone-400 text-sm font-semibold mb-6">These modules come bundled in the same category</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {siblings.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/modules/${s.slug}`}
                    className="group flex items-start gap-3 p-4 rounded-2xl border border-stone-100 hover:border-emerald-200 hover:bg-emerald-50/50 transition-all"
                  >
                    <div className={`w-10 h-10 bg-linear-to-br ${s.grad} rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform`}>
                      <FlatIcon name={s.icon} size={18} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-black text-stone-900 text-sm">{s.title}</p>
                      <p className="text-stone-400 text-xs font-semibold leading-snug mt-0.5 line-clamp-2">{s.shortDesc}</p>
                    </div>
                    <FlatIcon name="arrow-right" size={14} className="text-stone-300 group-hover:text-emerald-500 shrink-0 mt-1 transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">

          {/* CTA card */}
          <div className={`rounded-3xl p-7 bg-linear-to-br ${mod.grad} shadow-xl text-white`}>
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-5">
              <FlatIcon name={mod.icon} size={24} className="text-white" />
            </div>
            <h3 className="font-black text-xl mb-2">Start using {mod.title}</h3>
            <p className="text-white/75 text-sm font-semibold leading-relaxed mb-6">
              Free to get started. Our team sets everything up within 24 hours — no technical knowledge needed.
            </p>
            <Link
              href="/#contact"
              className="block text-center bg-white text-stone-900 font-black py-3.5 rounded-2xl text-sm hover:bg-amber-50 transition-all"
            >
              Get Started Free
            </Link>
          </div>

          {/* All categories nav */}
          <div className="bg-white rounded-3xl border border-stone-100 shadow-sm p-6">
            <h3 className="font-black text-stone-900 text-sm mb-4 uppercase tracking-wide">All Categories</h3>
            <ul className="space-y-1">
              {moduleGroups.map((g) => (
                <li key={g.categorySlug}>
                  <Link
                    href={`/modules#${g.categorySlug}`}
                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-bold transition-all ${
                      g.category === group.category
                        ? "bg-emerald-50 text-emerald-700"
                        : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                    }`}
                  >
                    <div className={`w-6 h-6 bg-linear-to-br ${g.headerGrad} rounded-lg flex items-center justify-center shrink-0`}>
                      <FlatIcon name={g.categoryIcon} size={12} className="text-white" />
                    </div>
                    {g.category}
                    <span className="ml-auto text-xs font-black text-stone-400">{g.modules.length}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Module count */}
          <div className="bg-emerald-900 rounded-3xl p-6 text-white">
            <p className="text-4xl font-black text-amber-400 leading-none mb-1">19</p>
            <p className="font-black text-white text-sm mb-1">Modules in one platform</p>
            <p className="text-emerald-300/60 text-xs font-semibold">All included in every plan — no add-ons</p>
          </div>
        </div>
      </div>

      {/* Bottom CTA strip */}
      <div className="border-t border-stone-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-black text-stone-900 text-lg">Ready to see {mod.title} in action?</p>
            <p className="text-stone-500 font-semibold text-sm">Get set up in 24 hours. Free to start. No credit card required.</p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/modules"
              className="inline-flex items-center gap-2 border-2 border-stone-200 text-stone-700 font-black px-6 py-3 rounded-full text-sm hover:bg-stone-50 transition-all"
            >
              <FlatIcon name="arrow-left" size={14} /> All Modules
            </Link>
            <Link
              href="/#contact"
              className="bg-amber-400 hover:bg-amber-300 text-amber-900 font-black px-7 py-3 rounded-full text-sm transition-all hover:-translate-y-0.5"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-stone-100 py-8 text-center text-xs font-semibold text-stone-400">
        <p>© {new Date().getFullYear()} School Bus. All rights reserved. &nbsp;·&nbsp;
          <Link href="/privacy-policy" className="hover:text-stone-600 transition-colors">Privacy Policy</Link>
          &nbsp;·&nbsp;
          <Link href="/terms-of-service" className="hover:text-stone-600 transition-colors">Terms of Service</Link>
        </p>
      </footer>
    </div>
  );
}
