"use client";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import {
  PaymentSummary,
  TrackOrder,
} from "../../../components/checkout/ConfirmationSidePanels";
import Link from "next/link";

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />

      <main className="container py-12 lg:py-20 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Content */}
          <div className="flex-1 flex flex-col gap-10">
            {/* Success Header */}
            <div className="flex flex-col items-start gap-6">
              <div className="w-16 h-16 bg-[#D1FAE5] rounded-full flex items-center justify-center text-[#10B981]">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="text-[2.5rem] font-black text-secondary leading-tight">
                  Order Confirmed!
                </h1>
                <p className="text-[1.125rem] text-gray-400 font-medium max-w-[480px]">
                  Thank you for shopping with JerseyHub. Your order has been
                  placed successfully and is being prepared for shipment.
                </p>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl px-5 py-3 flex items-center gap-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="text-primary"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <div className="text-[0.875rem] font-medium text-gray-500">
                  Confirmation sent to{" "}
                  <span className="font-bold text-secondary">
                    alex.doe@example.com
                  </span>
                </div>
              </div>
            </div>

            {/* Order Details Card */}
            <div className="bg-white border border-gray-100 rounded-[2rem] overflow-hidden shadow-sm">
              <div className="p-8 border-b border-gray-50 flex justify-between items-center">
                <div className="flex flex-col gap-1">
                  <span className="text-[0.75rem] font-black text-gray-300 uppercase tracking-widest">
                    Order Number
                  </span>
                  <span className="text-[1.25rem] font-black text-secondary">
                    #JH-8392
                  </span>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-[0.875rem] font-medium text-gray-400">
                    Order Date:{" "}
                    <span className="text-secondary font-bold">
                      Oct 24, 2023
                    </span>
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col gap-8">
                <h3 className="text-[1.125rem] font-black text-secondary">
                  Items in your order
                </h3>

                <div className="flex flex-col gap-8">
                  {/* Item 1 */}
                  <div className="flex gap-6 items-center">
                    <div className="w-24 h-24 bg-gray-50 rounded-2xl flex-none p-4 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop"
                        alt="Jersey"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="flex justify-between">
                        <h4 className="text-[1rem] font-bold text-secondary">
                          2024 Home Kit - Manchester
                        </h4>
                        <div className="flex gap-8 text-[1rem]">
                          <span className="text-gray-400">Qty: 1</span>
                          <span className="font-black text-secondary">
                            $120.00
                          </span>
                        </div>
                      </div>
                      <div className="text-[0.875rem] text-gray-400 font-medium">
                        Size: Large
                      </div>
                      <div className="flex items-center gap-2 bg-[#F8FAFC] self-start px-3 py-1.5 rounded-lg border border-gray-100">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          className="text-primary"
                        >
                          <path d="M6 9V2h12v7" />
                          <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
                          <path d="M6 14h12v8H6z" />
                        </svg>
                        <span className="text-[0.75rem] font-bold text-secondary uppercase">
                          Custom: RASHFORD 10
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex gap-6 items-center pt-8 border-t border-gray-50">
                    <div className="w-24 h-24 bg-gray-50 rounded-2xl flex-none p-4 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=800&auto=format&fit=crop"
                        alt="Manchester Utd"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="flex justify-between">
                        <h4 className="text-[1rem] font-bold text-secondary">
                          Manchester United Home Kit
                        </h4>
                        <div className="flex gap-8 text-[1rem]">
                          <span className="text-gray-400">Qty: 1</span>
                          <span className="font-black text-secondary">
                            $95.00
                          </span>
                        </div>
                      </div>
                      <div className="text-[0.875rem] text-gray-400 font-medium">
                        Size: Medium
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-10 mt-4">
              <Link
                href="/jerseys"
                className="h-14 px-8 border-2 border-gray-100 rounded-xl flex items-center justify-center gap-3 text-secondary font-black text-[0.9375rem] hover:border-secondary transition-all"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Continue Shopping
              </Link>
              <button className="text-[0.9375rem] font-bold text-primary hover:text-primary-hover transition-colors underline underline-offset-8">
                Need Help? Contact Support
              </button>
            </div>
          </div>

          {/* Side Panels */}
          <div className="lg:w-[400px] flex flex-col gap-8">
            <PaymentSummary />
            <TrackOrder />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
