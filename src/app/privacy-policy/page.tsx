import type { Metadata } from "next";
import Link from "next/link";
import FlatIcon from "@/components/FlatIcon";

export const metadata: Metadata = {
  title: "Privacy Policy — School Bus",
  description: "How School Bus collects, uses, and protects your personal information in compliance with Uganda's Data Protection and Privacy Act, 2019.",
};

const sections = [
  {
    title: "1. Legal Framework",
    body: [
      "This Privacy Policy is issued in compliance with the **Data Protection and Privacy Act, 2019** (Chapter 97, Laws of Uganda), which regulates the collection and processing of personal information in Uganda.",
      "School Bus operates as both a **data processor** and, in certain contexts, a **data controller** as defined under Part I, Section 2 of the Act. Schools that use our platform are the primary data controllers for student, parent, and staff data.",
      "In accordance with **Section 6** of the Act, each school using School Bus shall designate a data protection officer responsible for ensuring compliance with the Act within their institution.",
      "School Bus has appointed an internal data protection officer in line with the requirements of the **Personal Data Protection Office** established under **Section 4** of the Act.",
    ],
  },
  {
    title: "2. Principles We Follow",
    body: [
      "In accordance with **Section 3** of the Data Protection and Privacy Act, School Bus adheres to the following data protection principles:",
      "**Accountability:** We are accountable to every data subject for personal data we collect, process, hold, or use (Section 3(1)(a)).",
      "**Lawfulness & Fairness:** We collect and process data fairly and lawfully, only with valid consent or lawful basis (Section 3(1)(b)).",
      "**Minimality:** We collect only adequate, relevant, and not excessive personal data as required under **Section 14** — we do not process data in excess of what is needed.",
      "**Purpose Limitation:** Data is collected for specific, explicitly defined purposes related to school management (Section 12).",
      "**Data Quality:** We ensure personal data is complete, accurate, up-to-date, and not misleading (Section 15).",
      "**Transparency:** Data subjects are informed about data collection before it occurs, as required by **Section 13** of the Act.",
      "**Security:** We maintain appropriate technical and organisational safeguards as required by **Part IV** of the Act (Sections 20–23).",
    ],
  },
  {
    title: "3. Consent & Lawful Basis for Collection",
    body: [
      "Under **Section 7** of the Act, we do not collect or process personal data without the prior consent of the data subject, except where collection is authorised by law or necessary for the performance of a contract.",
      "Schools provide consent on behalf of their institution when registering. Parents and staff consent when they create accounts and accept these terms.",
      "**Children's data (Section 8):** We do not collect personal data relating to children directly. All student data is collected and managed by the school (the data controller) with the prior consent of parents or guardians, as required by the Act.",
      "**Special personal data (Section 9):** Health records processed through the School Nurse module constitute special personal data. This data is collected only with explicit consent and is processed solely for the legitimate activities of the school, in compliance with Section 9(3).",
    ],
  },
  {
    title: "4. Information We Collect",
    body: [
      "**School & Administrator Data:** School name, administrator name, email address, phone number, and school location — used to set up and manage your school account.",
      "**Student & Parent Data:** Student names, class details, and parent/guardian contact information (name and phone number) as provided by the school. We do not collect student national ID numbers or financial account details.",
      "**Driver & Staff Data:** Names, phone numbers, assigned routes, and role information for drivers and school staff who use the platform.",
      "**Usage Data:** Information about how you use the platform, including pages visited, features used, and device type — used to improve the product.",
      "**Location Data:** For bus tracking, the driver app collects GPS location data while a route is active. Location data is only transmitted during an active school route and is not stored beyond the session.",
      "Before collecting any data, we provide data subjects with the information required by **Section 13** of the Act, including the purpose, categories of data, retention period, and their rights.",
    ],
  },
  {
    title: "5. How We Use Your Information",
    body: [
      "To operate the School Bus platform and provide all requested features (transport tracking, fees, academics, health, etc.).",
      "To send push notifications and SMS alerts to parents about bus arrivals, child boarding, and school announcements.",
      "To generate reports for school administrators on attendance, fees, health, and other modules.",
      "To contact schools about support requests, account issues, or service updates.",
      "To improve the platform through analysis of aggregated, anonymised usage data.",
      "In accordance with **Section 17**, we do not further process personal data for purposes incompatible with the original purpose of collection.",
      "We do **not** sell, rent, or share your personal information with third parties for marketing purposes. **Section 37** of the Act makes the sale of personal data a criminal offence punishable by up to 10 years' imprisonment.",
    ],
  },
  {
    title: "6. Data Sharing",
    body: [
      "**Within the school:** Data is shared between authorised school staff (administrators, teachers, nurses, dorm masters) based on the modules they have access to, in compliance with role-based access requirements.",
      "**Parents:** Parents only see information relevant to their own child — bus location, boarding confirmations, attendance, fees, and health alerts.",
      "**Service providers:** We use trusted third-party services (cloud hosting, SMS gateways, push notification providers) solely to deliver the School Bus service. These providers are contractually bound to protect your data as required by **Section 21** of the Act.",
      "**Legal compliance:** We may disclose information if required to do so by Ugandan law or a valid court order, as permitted by Section 7(2) of the Act.",
      "**Cross-border processing (Section 19):** Where data is processed or stored outside Uganda, we ensure the receiving country has adequate data protection measures at least equivalent to those provided by this Act, or that the data subject has consented.",
    ],
  },
  {
    title: "7. Data Security (Part IV of the Act)",
    body: [
      "In compliance with **Section 20**, we secure the integrity of personal data by adopting appropriate, reasonable, technical and organisational measures to prevent loss, damage, unauthorised destruction, and unlawful access.",
      "All data is transmitted over HTTPS (TLS encryption). Passwords are hashed and never stored in plain text.",
      "Access to school data is role-based — each user can only see data relevant to their role.",
      "We regularly verify that our security safeguards are effectively implemented and update them in response to new risks (Section 20(2)).",
      "Our data processors are contractually required to establish and maintain confidentiality and security measures as required by **Section 21**.",
      "**Data breach notification (Section 23):** In the event of a security breach involving unauthorised access to personal data, we will immediately notify the National Information Technology Authority – Uganda (NITA-U) and, where directed by NITA-U, notify affected data subjects in the manner prescribed by the Act.",
      "Despite our precautions, no system is completely secure. We encourage schools to use strong passwords and to deactivate accounts of staff who leave.",
    ],
  },
  {
    title: "8. Data Retention (Section 18)",
    body: [
      "In compliance with **Section 18** of the Act, we do not retain personal data longer than necessary to achieve the purpose for which it was collected.",
      "Active accounts retain data for as long as the school subscription is active — this retention is necessary for the performance of the service contract (Section 18(1)(c)).",
      "Upon account cancellation, school data is retained for 90 days to allow data export and to afford data subjects an opportunity to request access (Section 18(3)(b)). After this period, data is permanently deleted.",
      "GPS location data from bus routes is not permanently stored — it is used in real time for tracking and discarded after the route ends.",
      "Data is destroyed in a manner that prevents its reconstruction in an intelligible form, as required by **Section 18(5)**.",
    ],
  },
  {
    title: "9. Your Rights Under the Act (Part V)",
    body: [
      "The Data Protection and Privacy Act grants you the following rights as a data subject:",
      "**Right to access (Section 24):** You may request confirmation of whether we hold personal data about you, a description of that data, and the identity of third parties who have accessed it. We will respond within 30 days.",
      "**Right to prevent processing (Section 25):** You may require us to stop processing your personal data if it causes unwarranted substantial damage or distress.",
      "**Right to prevent direct marketing (Section 26):** You may require us to stop processing your data for direct marketing purposes at any time.",
      "**Right regarding automated decisions (Section 27):** You may require that decisions significantly affecting you are not based solely on automated processing.",
      "**Right to correction (Section 16):** You may request correction or deletion of inaccurate, irrelevant, excessive, or outdated personal data.",
      "**Right to rectification, erasure & destruction (Section 28):** You may complain to NITA-U if you believe your personal data is inaccurate, and NITA-U may order rectification, blocking, erasure, or destruction.",
      "To exercise any of these rights, contact us through the in-app Help Centre, the contact form on our website, or write to the personal data protection office under NITA-U.",
    ],
  },
  {
    title: "10. Complaints",
    body: [
      "Under **Part VII** of the Act, if you believe your rights have been infringed or that School Bus is in violation of the Act, you may:",
      "Make a complaint to the **Personal Data Protection Office** under the National Information Technology Authority – Uganda (NITA-U) as established under Section 4 of the Act.",
      "NITA-U will investigate every complaint and may direct us to remedy any breach (Section 32).",
      "You are also entitled to apply to a competent court for compensation if you suffer damage or distress through any contravention of the Act (**Section 33**).",
      "Appeals against decisions of NITA-U may be made to the Minister responsible for information and communications technology within 30 days (Section 34).",
    ],
  },
  {
    title: "11. Data Protection Register",
    body: [
      "In compliance with **Part VI, Section 29** of the Act, School Bus is registered with the Personal Data Protection Office under NITA-U in the Data Protection Register.",
      "Information about our registration is available for public inspection as required by **Section 30** of the Act.",
    ],
  },
  {
    title: "12. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in the law or our practices. When we do, we will notify school administrators via email and in-app notification.",
      "Continued use of School Bus after changes take effect constitutes acceptance of the revised policy.",
    ],
  },
  {
    title: "13. Contact",
    body: [
      "If you have any questions about this Privacy Policy, how we handle your data, or wish to exercise your rights under the Data Protection and Privacy Act, please contact us through the Help Centre or via the contact form on our website.",
      "You may also contact the **Personal Data Protection Office** at the National Information Technology Authority – Uganda (NITA-U) directly for any data protection concerns.",
    ],
  },
];

function renderBody(text: string) {
  // Bold **text** → <strong>
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i} className="text-stone-800 font-bold">{part}</strong> : part
  );
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(180deg, #022c22 0%, #064e3b 20%, #fafaf9 20%)" }}>

      {/* Top bar */}
      <div className="max-w-4xl mx-auto px-6 sm:px-10 pt-8 pb-0">
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-emerald-600 rounded-xl flex items-center justify-center">
              <FlatIcon name="bus" size={18} className="text-white" />
            </div>
            <span className="text-white font-black text-xl">School <span className="text-amber-300">Bus</span></span>
          </Link>
          <Link href="/" className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm font-bold transition-colors">
            <FlatIcon name="arrow-left" size={14} /> Back to home
          </Link>
        </div>
      </div>

      {/* Content card */}
      <div className="max-w-4xl mx-auto px-6 sm:px-10 pb-24">
        <div className="bg-white rounded-3xl shadow-2xl border border-stone-100 overflow-hidden">

          {/* Header */}
          <div className="px-10 py-10 border-b border-stone-100">
            <div className="flex items-center gap-3 mb-4">
              <p className="text-xs font-black text-emerald-600 uppercase tracking-widest">Legal</p>
              <span className="text-xs font-bold text-stone-400">·</span>
              <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Data Protection & Privacy Act, 2019</p>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-stone-900 mb-3">Privacy Policy</h1>
            <p className="text-stone-500 font-semibold text-sm">Last updated: March 2026 &nbsp;·&nbsp; Effective immediately</p>
            <p className="text-stone-500 font-semibold text-sm mt-4 max-w-2xl leading-relaxed">
              School Bus (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting the privacy of schools, parents, staff, and students who use our platform. This policy explains what data we collect, how we use it, and your rights under the <strong className="text-stone-700">Data Protection and Privacy Act, 2019 (Chapter 97)</strong> of Uganda.
            </p>

            {/* Legal reference banner */}
            <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-2xl px-5 py-4 flex items-start gap-3">
              <FlatIcon name="shield" size={18} className="text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-emerald-800 font-black text-sm mb-1">Compliant with Uganda&apos;s Data Protection and Privacy Act</p>
                <p className="text-emerald-600 text-xs font-semibold leading-relaxed">
                  This policy is issued pursuant to the Data Protection and Privacy Act, 2019 (Cap. 97), assented to on 25 February 2019 and commenced on 3 May 2019. The Act is enforced by the Personal Data Protection Office under the National Information Technology Authority – Uganda (NITA-U).
                </p>
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="px-10 py-10 space-y-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-lg font-black text-stone-900 mb-4">{s.title}</h2>
                <ul className="space-y-3">
                  {s.body.map((b, i) => (
                    <li key={i} className="text-stone-500 font-semibold text-sm leading-relaxed flex gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-2" />
                      <span>{renderBody(b)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Legal reference footer */}
          <div className="px-10 py-6 bg-stone-50 border-t border-stone-100">
            <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3">Legal References</p>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="bg-white border border-stone-200 rounded-xl px-4 py-3">
                <p className="text-xs font-black text-stone-700">Data Protection and Privacy Act, 2019</p>
                <p className="text-xs text-stone-400 font-semibold">Chapter 97, Laws of Uganda</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-xl px-4 py-3">
                <p className="text-xs font-black text-stone-700">Enforced by NITA-U</p>
                <p className="text-xs text-stone-400 font-semibold">National Information Technology Authority – Uganda</p>
              </div>
            </div>
          </div>

          {/* Footer strip */}
          <div className="px-10 py-6 bg-stone-50 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs font-semibold text-stone-400">© {new Date().getFullYear()} School Bus. All rights reserved.</p>
            <Link href="/terms-of-service" className="text-xs font-black text-emerald-600 hover:underline">
              View Terms of Service →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
