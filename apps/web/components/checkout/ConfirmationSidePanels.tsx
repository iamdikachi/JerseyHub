"use client";

import Link from "next/link";

export function PaymentSummary() {
  // Mock data as cart is cleared on confirmation
  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
      <h3 className="text-[1.125rem] font-black text-secondary mb-6">
        Payment Summary
      </h3>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center text-[0.9375rem] font-medium">
          <span className="text-gray-400">Subtotal</span>
          <span className="text-secondary font-bold">$144.00</span>
        </div>
        <div className="flex justify-between items-center text-[0.9375rem] font-medium">
          <span className="text-gray-400">Shipping (Standard)</span>
          <span className="text-[#10B981] font-bold">Free</span>
        </div>
        <div className="flex justify-between items-center text-[0.9375rem] font-medium pb-6 border-b border-gray-50">
          <span className="text-gray-400">Taxes</span>
          <span className="text-secondary font-bold">$14.40</span>
        </div>

        <div className="flex justify-between items-center pt-2">
          <span className="text-[1.125rem] font-black text-secondary">
            Total Paid
          </span>
          <span className="text-[1.5rem] font-black text-secondary">
            $158.40
          </span>
        </div>
      </div>

      <div className="mt-8 bg-gray-50 rounded-2xl p-4 flex items-center justify-center gap-2 opacity-60">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0110 0v4" />
        </svg>
        <span className="text-[0.75rem] font-bold text-secondary uppercase tracking-wider text-center">
          Securely paid via Stripe
        </span>
      </div>
    </div>
  );
}

export function TrackOrder() {
  return (
    <div className="bg-[#EEF4FF] border border-[#D9E6FF] rounded-3xl p-8 flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <rect x="1" y="3" width="15" height="13" />
            <path d="M16 8h4l3 3v5h-7V8z" />
            <circle cx="5.5" cy="18.5" r="2.5" />
            <circle cx="18.5" cy="18.5" r="2.5" />
          </svg>
        </div>
        <h3 className="text-[1.125rem] font-black text-secondary">
          Track Your Order
        </h3>
      </div>

      <p className="text-[0.875rem] font-medium text-primary/70 leading-relaxed">
        Want to know where your jersey is? You can track your package instantly
        as a guest.
      </p>

      <Link
        href="/track"
        className="w-full h-14 bg-primary text-white font-black text-[0.9375rem] rounded-xl flex items-center justify-center gap-3 shadow-lg shadow-blue-100 hover:bg-primary-hover transition-all active:scale-[0.98]"
      >
        Track Order Status
      </Link>

      <p className="text-[0.75rem] font-medium text-primary/40 text-center">
        You'll need your email and order number #JH-8392
      </p>

      <div className="pt-6 border-t border-primary/10 mt-2 flex flex-col items-center gap-4">
        <p className="text-[0.8125rem] font-medium text-gray-500">
          Don't want to track manually next time?
        </p>
        <button className="text-[0.875rem] font-black text-primary hover:text-primary-hover transition-colors">
          Create an account to save this order
        </button>
      </div>
    </div>
  );
}
