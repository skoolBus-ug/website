import AppStoreBadges from "./AppStoreBadges";
import FlatIcon from "@/components/FlatIcon";

const links = {
  Modules:  ["Transport & Tracking","Academics","Fees Management","Health","Dormitory","Library","Canteen"],
  Platform: ["How It Works","Pricing","Security","Integrations"],
  Company:  ["About Us","Blog","Careers","Press"],
  Support:  ["Help Centre","Contact Us","Mobile App"],
};

export default function Footer() {
  return (
    <footer style={{ background: "linear-gradient(180deg, #030712 0%, #0f172a 100%)" }} className="text-slate-400">

      {/* App download strip */}
      <div className="border-b border-white/8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-black text-xl mb-1">Take School Bus everywhere!</p>
            <p className="text-slate-400 text-sm font-semibold">Available on iOS and Android for parents, drivers, and staff.</p>
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
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <FlatIcon name="bus" size={20} className="text-white" />
              </div>
              <span className="text-white font-black text-2xl">School <span className="text-gradient-orange">Bus</span></span>
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
                  <li key={item}>
                    <a href="#" className="text-sm font-semibold hover:text-orange-400 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Module chips */}
        <div className="border-t border-white/8 pt-8 pb-6">
          <p className="text-[11px] text-slate-500 uppercase tracking-widest mb-3 font-black">All 19 Modules</p>
          <div className="flex flex-wrap gap-2">
            {["Transport","Visitors","Pickup","Emergency","Academics","Attendance","Timetable","Forms","Fees","Registration","Staff","Inventory","Dormitory","Health","Canteen","Events","Discipline","Library","Communication"].map((m) => (
              <span key={m} className="text-xs bg-white/5 text-slate-400 border border-white/8 px-2.5 py-1 rounded-full font-semibold hover:bg-white/10 hover:text-white transition-colors cursor-default">{m}</span>
            ))}
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-semibold">
          <p>© {new Date().getFullYear()} School Bus. All rights reserved. Made in Uganda.</p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-orange-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
