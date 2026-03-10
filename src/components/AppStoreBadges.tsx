export default function AppStoreBadges({ dark = false }: { dark?: boolean }) {
  const base = dark
    ? "group inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border-2 border-white/20 hover:border-white/35 text-white px-5 py-3.5 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-xl cursor-pointer backdrop-blur-sm"
    : "group inline-flex items-center gap-3 bg-gray-950 hover:bg-gray-800 border-2 border-gray-800 hover:border-gray-700 text-white px-5 py-3.5 rounded-2xl transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl cursor-pointer";

  return (
    <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
      {/* Apple App Store */}
      <a href="#" className={base} aria-label="Download on the App Store">
        <svg viewBox="0 0 24 24" className="w-7 h-7 shrink-0 fill-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        <div>
          <p className="text-[10px] leading-none uppercase tracking-widest opacity-60 group-hover:opacity-80 transition-opacity">Download on the</p>
          <p className="font-black text-[15px] leading-tight mt-0.5">App Store</p>
        </div>
      </a>

      {/* Google Play */}
      <a href="#" className={base} aria-label="Get it on Google Play">
        <svg viewBox="0 0 24 24" className="w-7 h-7 shrink-0" xmlns="http://www.w3.org/2000/svg">
          <path fill="#EA4335" d="M2.5 21.7V2.3c0-.2.1-.4.2-.5l10.6 10.6L2.7 22.2c-.1-.1-.2-.3-.2-.5z" />
          <path fill="#FBBC04" d="m20.5 12.9-2.8 1.6-3.1-3.1 3.1-3.1 2.8 1.6c.8.5.8 1.5 0 2z" />
          <path fill="#4285F4" d="M2.7 1.8 13.3 12.4 3.5 12 2.7 2.3l.2-.5h-.2z" />
          <path fill="#34A853" d="M2.7 22.2 13.3 11.6l4.3 4.3-12 6.9c-.5.3-1.1.3-1.5.1l-1.4-1.4z" />
        </svg>
        <div>
          <p className="text-[10px] leading-none uppercase tracking-widest opacity-60 group-hover:opacity-80 transition-opacity">Get it on</p>
          <p className="font-black text-[15px] leading-tight mt-0.5">Google Play</p>
        </div>
      </a>
    </div>
  );
}
