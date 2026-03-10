"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Modules", href: "#modules" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Who It's For", href: "#for-schools" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 backdrop-blur-xl shadow-xl shadow-blue-100/40 border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span
            className={`font-black text-xl tracking-tight ${scrolled ? "text-gray-900" : "text-white"}`}
          >
            School{" "}
            <span
              className={scrolled ? "text-gradient-orange" : "text-yellow-300"}
            >
              Bus
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-bold px-4 py-2 rounded-full transition-all ${
                scrolled
                  ? "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                  : "text-white/85 hover:bg-white/15 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={process.env.NEXT_PUBLIC_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm font-bold px-4 py-2 rounded-full transition-all ${
              scrolled
                ? "text-gray-600 hover:text-orange-500"
                : "text-white/75 hover:text-white"
            }`}
          >
            Log In
          </a>
          <a
            href="#contact"
            className={`btn-fun text-sm font-black px-5 py-2.5 rounded-full ${
              scrolled
                ? "bg-linear-to-r from-orange-500 to-orange-400 text-white"
                : "bg-yellow-400 text-yellow-900"
            }`}
          >
            Get Started
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 rounded-xl ${scrolled ? "text-gray-700 bg-gray-100" : "text-white bg-white/15"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div
            className={`w-5 h-0.5 bg-current mb-1.5 transition-all duration-200 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <div
            className={`w-5 h-0.5 bg-current mb-1.5 transition-all duration-200 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
          />
          <div
            className={`w-5 h-0.5 bg-current transition-all duration-200 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/98 backdrop-blur-xl border-t-4 border-orange-400 px-4 py-5 flex flex-col gap-2 shadow-2xl">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-800 font-bold py-3 px-4 rounded-2xl hover:bg-orange-50 hover:text-orange-600 transition-all"
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateX(0)" : "translateX(-12px)",
                transition: `opacity 300ms ${100 + i * 60}ms, transform 300ms ${100 + i * 60}ms`,
              }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-fun bg-linear-to-r from-orange-500 to-orange-400 text-white text-center font-black px-4 py-3.5 rounded-2xl mt-2"
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateX(0)" : "translateX(-12px)",
              transition: `opacity 300ms ${100 + navLinks.length * 60}ms, transform 300ms ${100 + navLinks.length * 60}ms`,
            }}
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
