"use client";

import { useCart } from "../../context/CartContext";
import CartItem from "./CartItem";

import Link from "next/link";

export default function CartDrawer() {
  const { items, isOpen, closeCart, subtotal, itemCount } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[2000] animate-in fade-in duration-300"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-[440px] bg-white z-[2001] shadow-2xl flex flex-col animate-in slide-in-from-right duration-500 ease-out">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <h2 className="text-[1.25rem] font-black text-secondary">
              Your Cart
            </h2>
            <span className="text-[0.75rem] font-bold text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">
              ({itemCount} Items)
            </span>
          </div>
          <button
            onClick={closeCart}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-50 text-gray-400 transition-colors"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 custom-scrollbar">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center opacity-40 gap-4">
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6z" />
                <path d="M3 6h18M16 10a4 4 0 01-8 0" />
              </svg>
              <p className="text-[1.125rem] font-bold">Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-4">
                {items.map((item, idx) => (
                  <CartItem
                    key={`${item.id}-${item.selectedSize}`}
                    item={item}
                  />
                ))}
              </div>

              {/* Shipping Progress */}
              <div className="bg-[#EEF4FF] rounded-2xl p-4 flex flex-col gap-3 border border-[#D9E6FF]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                    <svg
                      width="18"
                      height="18"
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
                  <div>
                    <div className="text-[0.875rem] font-black text-secondary">
                      Free Shipping Unlocked!
                    </div>
                    <div className="text-[0.75rem] text-primary/70 font-medium">
                      You've qualified for free standard shipping.
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-gray-100 flex flex-col gap-6 bg-white">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center text-[0.9375rem]">
                <span className="text-gray-400 font-medium">Subtotal</span>
                <span className="text-secondary font-black">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center text-[0.9375rem]">
                <span className="text-gray-400 font-medium">Shipping</span>
                <span className="text-[#10B981] font-black">Free</span>
              </div>
              <div className="flex justify-between items-center text-[1.25rem] mt-2">
                <span className="text-secondary font-black">Total</span>
                <span className="text-secondary font-black">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
            </div>

            <Link
              href="/checkout"
              onClick={closeCart}
              className="w-full h-16 bg-primary text-white font-black text-[1.125rem] rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-blue-200 hover:bg-primary-hover transition-all active:scale-[0.98]"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path d="M12 22a10 10 0 100-20 10 10 0 000 20z" />
                <path d="M12 8v4" />
                <rect x="9" y="11" width="6" height="5" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              Secure Checkout
            </Link>

            <div className="flex flex-col items-center gap-4">
              <button
                onClick={closeCart}
                className="text-[0.875rem] font-bold text-gray-400 hover:text-secondary flex items-center gap-2 transition-colors"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Continue Shopping
              </button>

              <div className="flex items-center gap-4 opacity-30 grayscale mt-2">
                <div className="w-10 h-6 bg-gray-200 rounded" />
                <div className="w-10 h-6 bg-gray-200 rounded" />
                <div className="w-10 h-6 bg-gray-200 rounded" />
                <div className="flex items-center gap-1 text-[0.625rem] font-bold">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                  SSL Encrypted
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
