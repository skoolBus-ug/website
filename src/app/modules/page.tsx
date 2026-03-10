import type { Metadata } from "next";
import Link from "next/link";
import FlatIcon from "@/components/FlatIcon";
import { moduleGroups } from "../../lib/modules";

export const metadata: Metadata = {
  title: "All Modules — School Bus",
  description: "Explore all 19 modules in the School Bus platform — transport, academics, fees, health, dormitory, library, and more.",
};

export default function ModulesPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navbar */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center">
              <FlatIcon name="bus" size={18} className="text-white" />
            </div>
            <span className="font-black text-xl text-gray-900">
              School <span className="text-orange-500">Bus</span>
            </span>
          </Link>
          <Link
            href="/#contact"
            className="bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-black text-sm px-5 py-2.5 rounded-full transition-all"
          >
            Get Started Free
          </Link>
        </div>
      </header>

      {/* Hero */}
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(150deg, #0f172a 0%, #1e3a8a 45%, #1d4ed8 100%)" }}>
        <div className="absolute inset-0 bg-grid opacity-[0.05] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 font-black text-xs uppercase tracking-widest px-5 py-2.5 rounded-full mb-6">
            19 Modules · One Platform
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Everything your school{" "}
            <span className="bg-yellow-400 text-gray-900 px-2 rounded-lg">needs</span>
          </h1>
          <p className="text-blue-100/70 text-lg font-semibold max-w-2xl mx-auto">
            From the school gate to the dormitory — every part of school life managed in one platform built for Ugandan schools.
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-8">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">All Modules</span>
        </p>
      </div>

      {/* Module groups */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12 space-y-12">
        {moduleGroups.map((group) => (
          <div key={group.category}>
            {/* Group header */}
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-10 h-10 bg-linear-to-br ${group.headerGrad} rounded-xl flex items-center justify-center shadow-md`}>
                <FlatIcon name={group.categoryIcon} size={20} className="text-white" />
              </div>
              <div>
                <h2 className="font-black text-xl text-gray-900">{group.category}</h2>
                <p className="text-gray-500 text-sm font-semibold">{group.tagline}</p>
              </div>
            </div>

            {/* Module cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {group.modules.map((mod) => (
                <Link
                  key={mod.slug}
                  href={`/modules/${mod.slug}`}
                  className="group bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-linear-to-br ${mod.grad} rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-200`}>
                      <FlatIcon name={mod.icon} size={24} className="text-white" />
                    </div>
                    <span className="text-xs font-black text-gray-300">{mod.num}</span>
                  </div>
                  <h3 className="font-black text-gray-900 text-base mb-1.5">{mod.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-semibold flex-1">{mod.shortDesc}</p>
                  <div className="mt-4 flex items-center gap-1 text-blue-600 text-xs font-black group-hover:gap-2 transition-all">
                    Learn more <FlatIcon name="arrow-right" size={13} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 pb-20">
        <div className="rounded-3xl overflow-hidden shadow-xl" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #1d4ed8 100%)" }}>
          <div className="px-10 py-14 text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Get all 19 modules{" "}
              <span className="bg-yellow-400 text-gray-900 px-2 rounded-lg">free to start</span>
            </h2>
            <p className="text-blue-100/70 font-semibold mb-8 max-w-lg mx-auto">
              No credit card. No long-term contract. Our team sets everything up within 24 hours.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-black px-10 py-4 rounded-full text-base transition-all hover:-translate-y-1 shadow-lg"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 text-center text-xs font-semibold text-gray-400">
        <p>© {new Date().getFullYear()} School Bus. All rights reserved. &nbsp;·&nbsp;
          <Link href="/privacy-policy" className="hover:text-gray-600 transition-colors">Privacy Policy</Link>
          &nbsp;·&nbsp;
          <Link href="/terms-of-service" className="hover:text-gray-600 transition-colors">Terms of Service</Link>
        </p>
      </footer>
    </div>
  );
}
