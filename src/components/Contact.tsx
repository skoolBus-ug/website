"use client";

import { useState } from "react";
import FlatIcon from "@/components/FlatIcon";
import ScrollReveal from "./ScrollReveal";

const bullets = [
  { icon: "check-circle", text: "Free onboarding & setup" },
  { icon: "apps",         text: "All 19 modules included" },
  { icon: "bolt",         text: "24-hour response guarantee" },
  { icon: "unlock",       text: "No long-term contracts" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      schoolName: formData.get("schoolName") as string,
      role: formData.get("role") as string,
      message: formData.get("message") as string,
    };

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      if (apiUrl) {
        const res = await fetch(`${apiUrl}/api/contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error("Submission failed");
      }
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(150deg, #0f172a 0%, #1e3a8a 45%, #1d4ed8 100%)" }}>
      <div className="absolute inset-0 bg-grid opacity-[0.05] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #fcd34d, transparent 70%)" }} />

      <div className="relative max-w-5xl mx-auto px-6 sm:px-10">

        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 font-black text-xs uppercase tracking-widest px-5 py-2.5 rounded-full mb-6">
              <FlatIcon name="paper-plane" size={14} /> Open a School Account
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
              Apply to open your <span className="bg-yellow-400 text-gray-900 px-2 rounded-lg">school account</span>
            </h2>
            <p className="text-blue-100/70 text-lg font-semibold max-w-lg mx-auto">
              For school administrators. Submit your application and our team will contact you within 24 hours to complete your school setup.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <div className="grid md:grid-cols-5">

              {/* Left panel */}
              <div className="md:col-span-2 p-8 flex flex-col relative overflow-hidden bg-white/8 border-r border-white/10">
                <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full opacity-20 blur-3xl" style={{ background: "radial-gradient(circle, #fcd34d, transparent)" }} />

                <div className="relative flex flex-col h-full">
                  {/* Logo */}
                  <div className="flex items-center gap-2.5 mb-8">
                    <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center">
                      <FlatIcon name="bus" size={20} className="text-white" />
                    </div>
                    <span className="text-white font-black text-xl">School <span className="text-yellow-300">Bus</span></span>
                  </div>

                  <h3 className="text-xl font-black text-white mb-2 leading-tight">
                    Ready to get started?
                  </h3>
                  <p className="text-blue-100/70 text-sm font-semibold leading-relaxed mb-7">
                    Free to start. No credit card. Our team does the setup for you.
                  </p>

                  <div className="space-y-2.5 mb-auto">
                    {bullets.map((b) => (
                      <div key={b.text} className="flex items-center gap-3 bg-white/8 rounded-2xl px-4 py-3 border border-white/10">
                        <FlatIcon name={b.icon} size={15} className="text-green-400 shrink-0" />
                        <span className="text-white text-sm font-bold">{b.text}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>

              {/* Right form */}
              <div className="md:col-span-3 bg-white p-8 sm:p-10">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-3xl flex items-center justify-center mb-6">
                      <FlatIcon name="check-circle" size={40} className="text-green-500" />
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">Application received!</h3>
                    <p className="text-gray-500 font-semibold max-w-xs text-sm leading-relaxed">
                      Our team will review your application and contact you within 24 hours to complete your school setup.
                    </p>
                    <div className="mt-8 flex items-center gap-2 bg-green-50 border border-green-200 rounded-2xl px-5 py-3">
                      <FlatIcon name="check-circle" size={16} className="text-green-500" />
                      <span className="text-green-700 text-sm font-bold">We&apos;ll be in touch soon</span>
                    </div>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-black text-gray-900 mb-1">School account application</h3>
                    <p className="text-gray-400 text-sm font-semibold mb-7">Complete the form below. We review every application and reach out within 24 hours.</p>

                    {error && (
                      <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-xl px-4 py-3 mb-5">
                        <FlatIcon name="exclamation" size={16} className="text-red-500 shrink-0" />
                        <span className="text-red-700 text-sm font-semibold">{error}</span>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
                      {[
                        { label: "Your name",    name: "name",  type: "text", placeholder: "e.g. Grace Nakato"        },
                        { label: "Phone number", name: "phone", type: "tel",  placeholder: "+256 700 000 000"          },
                        { label: "School name",  name: "schoolName", type: "text", placeholder: "e.g. Mukono Junior School" },
                      ].map((f) => (
                        <div key={f.label}>
                          <label className="block text-xs font-black text-gray-500 mb-1.5 uppercase tracking-wide">{f.label}</label>
                          <input
                            name={f.name}
                            type={f.type}
                            required
                            disabled={loading}
                            placeholder={f.placeholder}
                            className="w-full border-2 border-gray-200 bg-gray-50 rounded-xl px-4 py-3 text-sm font-semibold text-gray-800 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all placeholder:text-gray-300 disabled:opacity-60"
                          />
                        </div>
                      ))}
                      <div>
                        <label className="block text-xs font-black text-gray-500 mb-1.5 uppercase tracking-wide">Your role</label>
                        <select name="role" required disabled={loading} className="w-full border-2 border-gray-200 bg-gray-50 rounded-xl px-4 py-3 text-sm font-semibold text-gray-800 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all disabled:opacity-60">
                          <option value="">Select role</option>
                          <option>School Administrator</option>
                          <option>Head Teacher / Principal</option>
                          <option>School Owner / Director</option>
                          <option>Bursar / Accountant</option>
                          <option>IT / Systems Manager</option>
                        </select>
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-black text-gray-500 mb-1.5 uppercase tracking-wide">Message (optional)</label>
                        <textarea name="message" rows={3} disabled={loading} placeholder="e.g. number of students, modules you need, questions..." className="w-full border-2 border-gray-200 bg-gray-50 rounded-xl px-4 py-3 text-sm font-semibold text-gray-800 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 resize-none transition-all placeholder:text-gray-300 disabled:opacity-60" />
                      </div>
                      <div className="sm:col-span-2">
                        <button
                          type="submit"
                          disabled={loading}
                          className="btn-fun w-full bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-black py-4 rounded-full text-base flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {loading ? (
                            <>
                              <FlatIcon name="loading" size={16} className="animate-spin" /> Submitting...
                            </>
                          ) : (
                            <>
                              <FlatIcon name="paper-plane" size={16} /> Submit Application
                            </>
                          )}
                        </button>
                        <p className="text-center text-gray-400 text-xs font-semibold mt-3 flex items-center justify-center gap-1.5">
                          <FlatIcon name="lock" size={11} /> Your information is kept private
                        </p>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
