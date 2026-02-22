export default function Footer() {
  return (
    <footer className="bg-[#F9F9FB] pt-12 pb-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
          <div className="max-w-[400px]">
            <div className="flex items-center gap-2 font-heading font-extrabold text-[1.125rem] text-secondary mb-3">
              <div className="w-7 h-7 bg-primary rounded-md flex items-center justify-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="white"
                    strokeWidth="2.5"
                  />
                  <path d="M12 2L14.5 9H12L12 2Z" fill="white" />
                  <path d="M12 22L9.5 15H12L12 22Z" fill="white" />
                  <path d="M22 12L15 9.5V12L22 12Z" fill="white" />
                  <path d="M2 12L9 14.5V12L2 12Z" fill="white" />
                  <path
                    d="M7.5 4.5L12 9L16.5 4.5"
                    stroke="white"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M7.5 19.5L12 15L16.5 19.5"
                    stroke="white"
                    strokeWidth="2.5"
                  />
                </svg>
              </div>
              <span>JerseyHub</span>
            </div>
            <p className="text-[0.8125rem] text-gray-500 leading-relaxed">
              The premier destination for authentic football kits, retro
              classics, and fan apparel.
            </p>
          </div>

          <div className="w-full max-w-[380px]">
            <h3 className="text-[0.9375rem] font-bold mb-3 text-secondary">
              Stay in the loop
            </h3>
            <div className="flex w-full h-[46px] border border-gray-200 rounded-lg overflow-hidden mb-2.5 bg-white">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 text-[0.8125rem] text-secondary placeholder:text-gray-400 focus:outline-none"
              />
              <button className="px-5 bg-primary text-white font-bold text-[0.8125rem] hover:bg-primary-hover transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-[0.75rem] text-gray-400">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-100 flex flex-col items-center text-center gap-3">
          <p className="text-[0.8125rem] text-gray-500">
            © 2026 JerseyHub. All rights reserved.
          </p>
          <div className="flex gap-6 text-[0.8125rem] font-medium text-gray-500">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
