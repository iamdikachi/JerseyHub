export default function Hero() {
  return (
    <section className="container mt-4 mb-10">
      <div
        className="relative h-[400px] md:h-[600px] flex flex-col justify-end bg-cover bg-center text-white rounded-3xl overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent z-10"></div>
        <div className="relative z-20 px-6 md:px-12 pb-8 md:pb-16 w-full">
          <div className="inline-block px-2.5 py-1 bg-[#0548D1] rounded-full text-[0.625rem] font-bold tracking-wider mb-4">
            NEW SEASON DROP
          </div>
          <h1 className="text-[1.625rem] md:text-[4.5rem] font-extrabold leading-[1.1] mb-3 max-w-[600px]">
            Wear the Legacy.
            <br />
            <span className="opacity-95 text-[1.375rem] md:text-[4rem]">
              2024/25 Kits.
            </span>
          </h1>
          <p className="text-[0.75rem] md:text-[1.125rem] text-gray-200 max-w-[320px] md:max-w-[480px] mb-6 leading-relaxed">
            Discover the latest arrivals and authentic vintage classics.
            Customize your jersey with official player fonts.
          </p>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <button className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-[#0548D1] text-white font-bold rounded-lg shadow-lg shadow-blue-900/40 hover:bg-primary-hover transition-all text-[0.75rem] whitespace-nowrap flex-none">
              Shop Now
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                <path
                  d="M4 10H16M16 10L12 6M16 10L12 14"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-lg hover:bg-white/20 transition-all text-[0.75rem] whitespace-nowrap flex-none">
              View Lookbook
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
