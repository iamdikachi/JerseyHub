"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CheckoutForm from "../../components/checkout/CheckoutForm";
import CheckoutSummary from "../../components/checkout/CheckoutSummary";
import Link from "next/link";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container py-8 lg:py-16">
        {/* Checkout Breadcrumbs */}
        <div className="flex items-center gap-4 text-[0.875rem] font-bold mb-12">
          <Link
            href="/cart"
            className="text-gray-300 hover:text-secondary transition-colors"
          >
            Cart
          </Link>
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-gray-200"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
          <span className="text-secondary">Checkout</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-gray-200"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
          <span className="text-gray-300">Confirmation</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-7">
            <CheckoutForm />
          </div>

          <div className="lg:col-span-5">
            <CheckoutSummary />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
