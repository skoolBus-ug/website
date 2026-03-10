import type { Metadata } from "next";
import Link from "next/link";
import FlatIcon from "@/components/FlatIcon";

export const metadata: Metadata = {
  title: "Terms of Service — School Bus",
  description: "The terms and conditions governing use of the School Bus platform.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: [
      "By registering a school on School Bus or using any part of the platform (web app, mobile app, or API), you agree to be bound by these Terms of Service. If you do not agree, you must not use the platform.",
      "These terms apply to all users of School Bus, including school administrators, teachers, parents, drivers, and any other staff members added to a school account.",
    ],
  },
  {
    title: "2. Description of Service",
    body: [
      "School Bus is a school management platform that provides modules for transport tracking, academics, fees management, attendance, health, dormitory, library, canteen, events, discipline, and communication.",
      "The platform is provided as a Software-as-a-Service (SaaS) product. Features available to a school depend on the subscription plan selected (Basic, Pro, or Enterprise).",
      "We reserve the right to add, modify, or discontinue features at any time. We will provide reasonable notice of significant changes.",
    ],
  },
  {
    title: "3. Account Registration & School Responsibility",
    body: [
      "Each school must register a single account. The person who registers is the primary account administrator and is responsible for all activity under that account.",
      "Schools are responsible for ensuring that all staff, parents, and drivers added to the platform use it lawfully and in accordance with these terms.",
      "You must provide accurate information during registration and keep it up to date. Impersonating another school or person is prohibited.",
      "You are responsible for keeping your login credentials secure. Notify us immediately if you suspect unauthorised access to your account.",
    ],
  },
  {
    title: "4. Subscription & Payment",
    body: [
      "The Basic plan is free with no time limit. Pro and Enterprise plans are billed per school term (approximately 3 months).",
      "Payment is due at the start of each term. Access to paid features will be suspended if payment is not received within 7 days of the due date.",
      "All prices are in Ugandan Shillings (UGX) and are inclusive of any applicable taxes unless stated otherwise.",
      "We do not offer refunds for partial terms. If you downgrade or cancel, you retain access to your current plan until the end of the paid term.",
      "We reserve the right to change pricing with 30 days' notice. Continued use after the notice period constitutes acceptance of the new pricing.",
    ],
  },
  {
    title: "5. Acceptable Use",
    body: [
      "You may only use School Bus for legitimate school management purposes.",
      "You must not use the platform to send spam, harass users, upload malicious content, or attempt to gain unauthorised access to any part of the system.",
      "You must not reverse-engineer, decompile, or attempt to extract the source code of the platform.",
      "You must not resell or sublicense access to the platform to third parties without written permission from School Bus.",
      "Violations of these acceptable use rules may result in immediate account suspension or termination without refund.",
    ],
  },
  {
    title: "6. Data Ownership & Privacy",
    body: [
      "All data entered into School Bus by your school — including student records, fee records, attendance, and health data — belongs to your school.",
      "School Bus processes your data solely to provide the service. We do not sell or share your data with third parties for any commercial purpose.",
      "Your use of the platform is also governed by our Privacy Policy, which is incorporated into these terms by reference.",
      "Upon account termination, you may export your data within 90 days. After that period, data is permanently deleted.",
    ],
  },
  {
    title: "7. Intellectual Property",
    body: [
      "The School Bus platform, including its software, design, branding, and all content created by us, is owned by School Bus and protected by applicable intellectual property laws.",
      "Your school retains ownership of all data and content you upload. You grant School Bus a limited licence to process that data solely to deliver the service.",
      "You may not use the School Bus name, logo, or branding without our prior written consent.",
    ],
  },
  {
    title: "8. Uptime & Service Availability",
    body: [
      "We aim for 99.9% platform uptime. Scheduled maintenance will be communicated in advance wherever possible.",
      "We are not liable for downtime caused by factors outside our control, including internet outages, third-party service failures, or force majeure events.",
      "The GPS bus tracking feature depends on the driver's device having an active internet connection. We do not guarantee tracking accuracy in areas with poor network coverage.",
    ],
  },
  {
    title: "9. Limitation of Liability",
    body: [
      "School Bus is a management tool. We are not responsible for the physical safety of students, the conduct of drivers, or decisions made by school staff.",
      "To the maximum extent permitted by law, School Bus's total liability for any claim arising from your use of the platform is limited to the amount you paid in the 3 months preceding the claim.",
      "We are not liable for indirect, incidental, or consequential damages, including loss of data, loss of revenue, or reputational harm.",
    ],
  },
  {
    title: "10. Termination",
    body: [
      "Either party may terminate the agreement at any time. Schools may cancel their subscription through the account settings or by contacting support.",
      "We may suspend or terminate your account immediately if you breach these terms, fail to pay, or engage in activity that we reasonably believe is harmful to other users or the platform.",
      "On termination, your access to the platform ceases and your data will be retained for 90 days before permanent deletion.",
    ],
  },
  {
    title: "11. Governing Law",
    body: [
      "These Terms of Service are governed by the laws of the Republic of Uganda. Any disputes will be subject to the exclusive jurisdiction of the courts of Uganda.",
      "If any provision of these terms is found to be unenforceable, the remaining provisions will continue in full force and effect.",
    ],
  },
  {
    title: "12. Changes to These Terms",
    body: [
      "We may update these terms from time to time. School administrators will be notified by email and in-app notification at least 14 days before changes take effect.",
      "Continued use of School Bus after the effective date of changes constitutes your acceptance of the revised terms.",
    ],
  },
];

function renderBody(text: string) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i} className="text-gray-800 font-bold">{part}</strong> : part
  );
}

export default function TermsOfService() {
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
            <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Terms of Service</h1>
            <p className="text-gray-500 font-semibold text-sm">Last updated: March 2026 &nbsp;·&nbsp; Effective immediately</p>
            <p className="text-gray-500 font-semibold text-sm mt-4 max-w-2xl leading-relaxed">
              Please read these Terms of Service carefully before using the School Bus platform. These terms form a legally binding agreement between your school and School Bus.
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
            <Link href="/privacy-policy" className="text-xs font-black text-blue-600 hover:underline">
              View Privacy Policy →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
