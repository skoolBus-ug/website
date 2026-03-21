import Link from "next/link";
import AppStoreBadges from "./AppStoreBadges";
import FlatIcon from "@/components/FlatIcon";

const links: Record<string, { label: string; href: string }[]> = {
  Modules: [
    { label: "Transport & Tracking", href: "/modules/bus-tracking" },
    { label: "Academics",            href: "/modules/academics" },
    { label: "Fees Management",      href: "/modules/fees-management" },
    { label: "Health",               href: "/modules/health" },
    { label: "Dormitory",            href: "/modules/dormitory" },
    { label: "Library",              href: "/modules/library" },
    { label: "Canteen",              href: "/modules/canteen" },
  ],
  Platform: [
    { label: "How It Works",  href: "/#how-it-works" },
    { label: "Pricing",       href: "/#pricing" },
    { label: "All Modules",   href: "/modules" },
    { label: "For Schools",   href: "/#for-schools" },
  ],
  Company: [
    { label: "About Us",    href: "/#contact" },
    { label: "FAQ",          href: "/#faq" },
    { label: "Privacy",      href: "/privacy-policy" },
    { label: "Terms",        href: "/terms-of-service" },
  ],
  Support: [
    { label: "Contact Us",  href: "/#contact" },
    { label: "Mobile App",  href: "/#contact" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "linear-gradient(180deg, #022c22 0%, #0a1f1a 100%)" }} className="text-stone-400">

      {/* App download strip */}
      <div className="border-b border-white/8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-black text-xl mb-1">Take School Bus everywhere!</p>
            <p className="text-stone-400 text-sm font-semibold">Available on iOS and Android for parents, drivers, and staff.</p>
          </div>
          <AppStoreBadges dark />
        </div>
      </div>

      {/* Main */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-10 mb-12">
          <div className="col-span-2 md:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
                <FlatIcon name="bus" size={20} className="text-white" />
              </div>
              <span className="text-white font-black text-2xl">School <span className="text-gradient-teal">Bus</span></span>
            </div>
            <p className="text-sm font-semibold leading-relaxed mb-5">
              The complete school management platform for Ugandan schools — 19 modules, one subscription.
            </p>
          </div>

          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-white font-black text-sm mb-4 uppercase tracking-wide">{group}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm font-semibold hover:text-emerald-400 transition-colors">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Module chips */}
        <div className="border-t border-white/8 pt-8 pb-6">
          <p className="text-[11px] text-stone-500 uppercase tracking-widest mb-3 font-black">All 19 Modules</p>
          <div className="flex flex-wrap gap-2">
            {["Transport","Visitors","Pickup","Emergency","Academics","Attendance","Timetable","Forms","Fees","Registration","Staff","Inventory","Dormitory","Health","Canteen","Events","Discipline","Library","Communication"].map((m) => (
              <span key={m} className="text-xs bg-white/5 text-stone-400 border border-white/8 px-2.5 py-1 rounded-full font-semibold hover:bg-white/10 hover:text-white transition-colors cursor-default">{m}</span>
            ))}
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-500 font-semibold">
          <p>© {new Date().getFullYear()} School Bus. All rights reserved. Made in Uganda.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-emerald-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
