export default function Footer() {
  return (
    <footer className="bg-[#F9F9FB] pt-16 pb-8">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12 mb-12">
          <div className="max-w-[320px]">
            <div className="flex items-center gap-2 font-heading font-extrabold text-[1.125rem] mb-4">
              <div className="w-6 h-6 bg-secondary rounded-sm flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" />
                  <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" />
                </svg>
              </div>
              <span>JerseyHub</span>
            </div>
            <p className="text-[0.8125rem] text-gray-400">
              The premier destination for authentic football kits, retro
              classics, and fan apparel.
            </p>
          </div>

          <div className="w-full max-w-[400px]">
            <h3 className="text-[1rem] mb-4">Stay in the loop</h3>
            <div className="flex gap-2 mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-200 rounded-md text-[0.875rem]"
              />
              <button className="px-6 py-2 bg-primary text-white font-bold rounded-md text-[0.875rem]">
                Subscribe
              </button>
            </div>
            <p className="text-[0.625rem] text-gray-400">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between gap-4 pt-8 border-t border-gray-200">
          <p className="text-[0.8125rem] text-gray-400">
            © 2024 JerseyHub. All rights reserved.
          </p>
          <div className="flex gap-6 text-[0.8125rem] text-gray-400">
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
