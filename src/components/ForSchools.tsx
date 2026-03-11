import FlatIcon from "@/components/FlatIcon";
import ScrollReveal from "./ScrollReveal";

const roles = [
  {
    id: "parents",
    label: "For Parents",
    labelIcon: "users",
    headline: "Peace of mind, every school day",
    desc: "Know exactly where your child is — from the moment they board the bus to when they're safely in class.",
    grad: "from-orange-500 to-amber-400",
    headerGrad: "from-orange-500/15 to-amber-400/5",
    iconColor: "text-orange-500",
    iconBg: "bg-orange-50",
    border: "border-orange-100",
    ctaBg: "bg-linear-to-r from-orange-500 to-amber-400",
    points: [
      { icon: "bus", text: "Track the school bus live on a map" },
      { icon: "bell", text: "Alerts when the bus is 2 stops away" },
      {
        icon: "check-circle",
        text: "Confirmed when your child boards & arrives",
      },
      { icon: "credit-card", text: "Pay fees and view balance anytime" },
      { icon: "clipboard-list", text: "Attendance and academic report cards" },
      { icon: "lock", text: "Authorise trusted pickup persons" },
    ],
  },
  {
    id: "schools",
    label: "For Administrators",
    labelIcon: "building",
    headline: "Total visibility, zero blind spots",
    desc: "One dashboard to oversee every corner of your school — buses, fees, staff, students and more.",
    grad: "from-blue-600 to-indigo-600",
    headerGrad: "from-blue-600/15 to-indigo-600/5",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
    border: "border-blue-100",
    ctaBg: "bg-linear-to-r from-blue-600 to-indigo-600",
    points: [
      {
        icon: "chart-histogram",
        text: "Live overview of all 19 modules in one place",
      },
      { icon: "bus", text: "Monitor entire bus fleet in real time" },
      {
        icon: "document",
        text: "Fees, attendance & payroll reports on demand",
      },
      { icon: "users", text: "Manage students, staff, routes & dorm rooms" },
      { icon: "megaphone", text: "Send announcements to any group instantly" },
      { icon: "eye", text: "Visitor log and gate access control" },
    ],
  },
  {
    id: "staff",
    label: "For Staff",
    labelIcon: "user-check",
    headline: "Role-specific tools, zero confusion",
    desc: "Every staff member sees only what they need — purpose-built for their exact job.",
    grad: "from-green-600 to-emerald-500",
    headerGrad: "from-green-600/15 to-emerald-500/5",
    iconColor: "text-green-600",
    iconBg: "bg-green-50",
    border: "border-green-100",
    ctaBg: "bg-linear-to-r from-green-600 to-emerald-500",
    points: [
      {
        icon: "bus",
        text: "Drivers: start trips and mark boarding with one tap",
      },
      {
        icon: "stethoscope",
        text: "Nurses: log consultations and medication records",
      },
      {
        icon: "book-open-cover",
        text: "Teachers: enter marks and manage timetables",
      },
      { icon: "bed", text: "Dorm masters: nightly attendance in under 5 min" },
      {
        icon: "utensils",
        text: "Canteen staff: track daily meals and stock levels",
      },
      { icon: "lock", text: "Gate guards: log every visitor and pickup" },
    ],
  },
];

const roleChips = [
  "Parents",
  "School Administrators",
  "Bus Drivers",
  "Teachers",
  "School Nurses",
  "Librarians",
  "Dorm Masters",
  "Canteen Staff",
  "Gate Guards",
  "Bursars",
];

export default function ForSchools() {
  return (
    <section
      id="for-schools"
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-[0.04] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 font-black text-xs uppercase tracking-widest px-5 py-2.5 rounded-full mb-6 border border-blue-200">
              <FlatIcon name="users" size={14} /> Built for Every Role
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-4">
              One platform,{" "}
              <span className="bg-yellow-400 text-gray-900 px-2 rounded-lg">
                every person
              </span>{" "}
              in your school
            </h2>
            <p className="text-gray-500 text-lg font-semibold max-w-2xl mx-auto mb-8">
              From the school gate to the dormitory — every role gets dedicated
              tools built exactly for their job.
            </p>

            {/* Role chips */}
            <div className="flex flex-wrap justify-center gap-2">
              {roleChips.map((r) => (
                <span
                  key={r}
                  className="text-xs font-bold text-gray-500 bg-gray-50 border border-gray-200 px-3.5 py-1.5 rounded-full"
                >
                  {r}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {roles.map((role, i) => (
            <ScrollReveal key={role.id} delay={i * 150}>
              <div
                className={`bg-white border-2 ${role.border} rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 h-full`}
              >
                {/* Gradient header */}
                <div
                  className={`bg-linear-to-br ${role.headerGrad} px-7 pt-7 pb-6 border-b ${role.border} relative`}
                >
                  {/* Large background icon */}
                  <div className="absolute -right-4 -bottom-4 opacity-[0.07]">
                    <FlatIcon
                      name={role.labelIcon}
                      size={120}
                      className={role.iconColor}
                    />
                  </div>
                  <div
                    className={`inline-flex items-center gap-2 ${role.iconBg} ${role.iconColor} text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-4`}
                  >
                    <FlatIcon name={role.labelIcon} size={12} /> {role.label}
                  </div>
                  <h3 className="text-gray-900 font-black text-xl leading-tight mb-2">
                    {role.headline}
                  </h3>
                  <p className="text-gray-500 text-sm font-semibold leading-relaxed">
                    {role.desc}
                  </p>
                </div>

                {/* Feature list */}
                <div className="p-6">
                  <ul className="space-y-3 mb-7">
                    {role.points.map((pt) => (
                      <li key={pt.text} className="flex items-start gap-3">
                        <div
                          className={`w-6 h-6 ${role.iconBg} rounded-lg flex items-center justify-center shrink-0 mt-0.5`}
                        >
                          <FlatIcon
                            name={pt.icon}
                            size={13}
                            className={role.iconColor}
                          />
                        </div>
                        <span className="text-gray-600 text-sm font-semibold leading-snug">
                          {pt.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`btn-fun w-full flex items-center justify-center gap-2 text-white font-black py-3.5 rounded-2xl text-sm ${role.ctaBg}`}
                  >
                    Get Started <FlatIcon name="arrow-right" size={14} />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
