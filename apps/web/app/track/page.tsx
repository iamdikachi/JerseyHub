"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";
import OrderTrackingContent from "../../components/track";

export default function TrackPage() {
  const [isSearching, setIsSearching] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    // Mock loading
    setTimeout(() => {
      setIsSearching(false);
      setShowResult(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />

      <main className="container py-12 lg:py-20 lg:px-24">
        {/* Lookup Form Section */}
        <section className="max-w-[800px] mx-auto bg-white border border-gray-100 rounded-[2.5rem] p-10 lg:p-16 shadow-sm mb-16">
          <div className="flex flex-col items-center text-center gap-4 mb-12">
            <h1 className="text-[2.25rem] font-black text-secondary">
              Track Your Order
            </h1>
            <p className="text-[1.125rem] text-gray-400 font-medium">
              Enter your order details below to check the status of your
              delivery.
            </p>
          </div>

          <form
            onSubmit={handleTrack}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="flex flex-col gap-2.5">
              <label className="text-[0.75rem] font-bold text-secondary uppercase tracking-widest px-1">
                Order Number
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. JH-88592"
                  className="w-full h-16 bg-[#F8FAFC] border border-gray-100 rounded-2xl px-12 text-[1rem] font-bold text-secondary focus:outline-none focus:border-primary transition-all placeholder:text-gray-200"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  required
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 font-bold">
                  #
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <label className="text-[0.75rem] font-bold text-secondary uppercase tracking-widest px-1">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full h-16 bg-[#F8FAFC] border border-gray-100 rounded-2xl px-12 text-[1rem] font-bold text-secondary focus:outline-none focus:border-primary transition-all placeholder:text-gray-200"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
              </div>
            </div>

            <button
              disabled={isSearching}
              className={`col-span-1 md:col-span-2 h-16 bg-primary text-white font-black text-[1.125rem] rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-blue-200 hover:bg-primary-hover transition-all active:scale-[0.98] ${isSearching ? "opacity-50 cursor-wait" : ""}`}
            >
              {isSearching ? (
                <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  Track Order
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <button className="text-[0.875rem] font-bold text-gray-400 hover:text-secondary underline underline-offset-4 transition-colors">
              Need help finding your order number?
            </button>
          </div>
        </section>

        {/* Dynamic Tracking Content */}
        {showResult && <OrderTrackingContent />}
      </main>

      <Footer />
    </div>
  );
}
