"use client";

import { useState } from "react";
import FlatIcon from "@/components/FlatIcon";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    q: "How much does School Bus cost?",
    a: "We have a free Basic plan for schools getting started with bus management (up to 1 route and 30 parents). The Pro plan is UGX 300,000 per term for full academic and financial management, and Enterprise is UGX 500,000 per term for boarding schools with all 19 modules.",
  },
  {
    q: "How long does it take to set up?",
    a: "Our team handles the entire setup for you — typically within 24 hours. We'll import your student data, configure routes, and train your staff. No hardware or complicated installations required.",
  },
  {
    q: "Do parents need to pay for the app?",
    a: "No! The School Bus mobile app is completely free for parents. They can track buses, view attendance, pay fees, and communicate with the school — all at no cost.",
  },
  {
    q: "What devices does School Bus work on?",
    a: "The admin dashboard works on any modern web browser (Chrome, Safari, Firefox, Edge). The mobile app is available for both Android (8+) and iOS (14+) devices.",
  },
  {
    q: "Can we start with just bus tracking and add more modules later?",
    a: "Absolutely! Many schools start with our Basic plan for bus tracking, then upgrade to Pro or Enterprise as they grow. You can switch plans at any time — no long-term contracts.",
  },
  {
    q: "Is our school data secure?",
    a: "Yes. We use industry-standard encryption for all data in transit and at rest. Your school's data is private and never shared with third parties. We also provide role-based access so staff only see what's relevant to their job.",
  },
  {
    q: "What happens if we lose internet connection?",
    a: "School Bus works offline! The app caches important data locally so drivers can continue marking attendance and parents can view cached information. Everything syncs automatically when the connection is restored.",
  },
  {
    q: "Do you offer training for our staff?",
    a: "Yes — free onboarding training is included with every plan. We provide hands-on training sessions for admins, drivers, and other staff. We also have in-app guides and a dedicated support team.",
  },
];

function FAQItem({ q, a, open, toggle }: { q: string; a: string; open: boolean; toggle: () => void }) {
  return (
    <div className={`border-2 rounded-2xl transition-all duration-300 ${open ? "border-emerald-200 bg-emerald-50/50 shadow-sm" : "border-stone-100 bg-white hover:border-stone-200"}`}>
      <button
        onClick={toggle}
        className="w-full flex items-center gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className={`text-base font-black flex-1 transition-colors ${open ? "text-emerald-700" : "text-stone-900"}`}>
          {q}
        </span>
        <FlatIcon
          name="angle-small-down"
          size={20}
          className={`shrink-0 transition-transform duration-300 ${open ? "rotate-180 text-emerald-500" : "text-stone-400"}`}
        />
      </button>
      <div
        className="grid transition-all duration-300 ease-in-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-stone-500 text-sm font-semibold leading-relaxed">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-stone-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-[0.03] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 sm:px-10">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 font-black text-xs uppercase tracking-widest px-5 py-2.5 rounded-full mb-6 border border-emerald-200">
              <FlatIcon name="interrogation" size={14} /> FAQ
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-stone-900 leading-tight mb-4">
              Got <span className="bg-amber-400 text-stone-900 px-2 rounded-lg">questions?</span>
            </h2>
            <p className="text-stone-500 text-lg font-semibold max-w-lg mx-auto">
              Everything you need to know about School Bus. Can&apos;t find the answer? Contact our team.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <FAQItem
                q={faq.q}
                a={faq.a}
                open={openIdx === i}
                toggle={() => setOpenIdx(openIdx === i ? null : i)}
              />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="mt-12 text-center">
            <p className="text-stone-500 text-sm font-semibold mb-4">Still have questions?</p>
            <a
              href="#contact"
              className="btn-fun inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-black px-8 py-4 rounded-full text-sm"
            >
              Contact our team
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
