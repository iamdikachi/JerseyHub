export default function Hero() {
  return (
    <section className="container mt-6 mb-12">
      <div
        className="relative h-[480px] md:h-[600px] flex items-center bg-cover bg-center text-white rounded-4xl overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent z-10"></div>
        <div className="relative z-20 px-8 md:px-12 w-full mt-auto pb-12">
          <div className="inline-block px-4 py-1.5 bg-[#0548D1] rounded-full text-[0.7rem] font-bold tracking-wider mb-6">
            NEW SEASON DROP
          </div>
          <h1 className="text-[2.25rem] md:text-[4.5rem] font-extrabold leading-[1.05] mb-4 max-w-[600px]">
            Wear the Legacy.
            <br />
            <span className="opacity-95">2024/25 Kits.</span>
          </h1>
          <p className="text-[0.9375rem] md:text-[1.125rem] text-gray-200 max-w-[480px] mb-8 leading-snug">
            Discover the latest arrivals and authentic vintage classics.
            Customize your jersey with official player fonts.
          </p>
          <div className="flex items-center gap-3">
            <button className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0548D1] text-white font-bold rounded-xl shadow-lg shadow-blue-900/40 hover:bg-primary-hover transition-all text-[0.9375rem]">
              Shop Now
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path
                  d="M4 10H16M16 10L12 6M16 10L12 14"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="px-6 py-3.5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all text-[0.9375rem]">
              View Lookbook
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
