import type { Metadata } from "next";
import Link from "next/link";
import FlatIcon from "@/components/FlatIcon";

export const metadata: Metadata = {
  title: "Privacy Policy — School Bus",
  description: "How School Bus collects, uses, and protects your personal information.",
};

const sections = [
  {
    title: "1. Information We Collect",
    body: [
      "**School & Administrator Data:** When a school registers on School Bus, we collect the school name, administrator name, email address, phone number, and school location. This information is used to set up and manage your school account.",
      "**Student & Parent Data:** We collect student names, class details, and parent or guardian contact information (name and phone number) as provided by the school. We do not collect student national ID numbers or financial account details.",
      "**Driver & Staff Data:** We collect names, phone numbers, assigned routes, and role information for drivers and school staff who use the platform.",
      "**Usage Data:** We automatically collect information about how you use the platform, including pages visited, features used, and device type. This helps us improve the product.",
      "**Location Data:** For bus tracking, the School Bus driver app collects GPS location data while a route is active. Location data is only transmitted during an active school route and is not stored beyond the session.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    body: [
      "To operate the School Bus platform and provide all requested features (transport tracking, fees, academics, health, etc.).",
      "To send push notifications and SMS alerts to parents about bus arrivals, child boarding, and school announcements.",
      "To generate reports for school administrators on attendance, fees, health, and other modules.",
      "To contact schools about support requests, account issues, or service updates.",
      "To improve the platform through analysis of aggregated, anonymised usage data.",
      "We do **not** sell, rent, or share your personal information with third parties for marketing purposes.",
    ],
  },
  {
    title: "3. Data Sharing",
    body: [
      "**Within the school:** Data is shared between authorised school staff (administrators, teachers, nurses, dorm masters) based on the modules they have access to.",
      "**Parents:** Parents only see information relevant to their own child — bus location, boarding confirmations, attendance, fees, and health alerts.",
      "**Service providers:** We use trusted third-party services (cloud hosting, SMS gateways, push notification providers) solely to deliver the School Bus service. These providers are contractually bound to protect your data.",
      "**Legal compliance:** We may disclose information if required to do so by Ugandan law or a valid court order.",
    ],
  },
  {
    title: "4. Data Security",
    body: [
      "All data is transmitted over HTTPS (TLS encryption). Passwords are hashed and never stored in plain text.",
      "Access to school data is role-based — each user can only see data relevant to their role.",
      "We perform regular backups and store data on servers located within or compliant with applicable data protection standards.",
      "Despite our precautions, no system is completely secure. We encourage schools to use strong passwords and to deactivate accounts of staff who leave.",
    ],
  },
  {
    title: "5. Data Retention",
    body: [
      "Active accounts retain data for as long as the school subscription is active.",
      "Upon account cancellation, school data is retained for 90 days to allow data export, after which it is permanently deleted.",
      "GPS location data from bus routes is not permanently stored — it is used in real time for tracking and discarded after the route ends.",
    ],
  },
  {
    title: "6. Children's Privacy",
    body: [
      "School Bus is a B2B platform used by schools. All student data is managed by the school (the data controller). We process student data strictly under the school's instruction.",
      "We do not knowingly collect personal data directly from children. Parents and guardians interact with the platform through their own accounts.",
    ],
  },
  {
    title: "7. Your Rights",
    body: [
      "**Access:** Schools and parents may request a copy of the data held about them or their child.",
      "**Correction:** You may update your personal information at any time through the app or by contacting support.",
      "**Deletion:** Schools may request deletion of their account and associated data at any time.",
      "To exercise any of these rights, contact us through the in-app Help Centre or the contact form on our website.",
    ],
  },
  {
    title: "8. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. When we do, we will notify school administrators via email and in-app notification. Continued use of School Bus after changes take effect constitutes acceptance of the revised policy.",
    ],
  },
  {
    title: "9. Contact",
    body: [
      "If you have any questions about this Privacy Policy or how we handle your data, please contact us through the Help Centre or via the contact form on our website.",
    ],
  },
];

function renderBody(text: string) {
  // Bold **text** → <strong>
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i} className="text-gray-800 font-bold">{part}</strong> : part
  );
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(180deg, #0f172a 0%, #1e3a8a 20%, #ffffff 20%)" }}>

      {/* Top bar */}
      <div className="max-w-4xl mx-auto px-6 sm:px-10 pt-8 pb-0">
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center">
              <FlatIcon name="bus" size={18} className="text-white" />
            </div>
            <span className="text-white font-black text-xl">School <span className="text-yellow-400">Bus</span></span>
          </Link>
          <Link href="/" className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm font-bold transition-colors">
            <FlatIcon name="arrow-left" size={14} /> Back to home
          </Link>
        </div>
      </div>

      {/* Content card */}
      <div className="max-w-4xl mx-auto px-6 sm:px-10 pb-24">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">

          {/* Header */}
          <div className="px-10 py-10 border-b border-gray-100">
            <p className="text-xs font-black text-blue-600 uppercase tracking-widest mb-3">Legal</p>
            <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Privacy Policy</h1>
            <p className="text-gray-500 font-semibold text-sm">Last updated: March 2026 &nbsp;·&nbsp; Effective immediately</p>
            <p className="text-gray-500 font-semibold text-sm mt-4 max-w-2xl leading-relaxed">
              School Bus ("we", "our", or "us") is committed to protecting the privacy of schools, parents, staff, and students who use our platform. This policy explains what data we collect, how we use it, and your rights.
            </p>
          </div>

          {/* Sections */}
          <div className="px-10 py-10 space-y-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-lg font-black text-gray-900 mb-4">{s.title}</h2>
                <ul className="space-y-3">
                  {s.body.map((b, i) => (
                    <li key={i} className="text-gray-500 font-semibold text-sm leading-relaxed flex gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 mt-2" />
                      <span>{renderBody(b)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer strip */}
          <div className="px-10 py-6 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs font-semibold text-gray-400">© {new Date().getFullYear()} School Bus. All rights reserved.</p>
            <Link href="/terms-of-service" className="text-xs font-black text-blue-600 hover:underline">
              View Terms of Service →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
