"use client";

import { useCart } from "../../context/CartContext";

export default function CheckoutSummary() {
  const { items, subtotal } = useCart();
  const shipping = 0;
  const taxes = subtotal * 0.1; // Demo: 10% tax
  const total = subtotal + shipping + taxes;

  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm h-fit sticky top-24">
      <h2 className="text-[1.25rem] font-black text-secondary mb-8">
        Order Summary
      </h2>

      <div className="flex flex-col gap-6 mb-8 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
        {items.map((item) => (
          <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4">
            <div className="relative w-20 h-20 bg-gray-50 rounded-2xl flex-none overflow-hidden p-2">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-contain"
              />
              <div className="absolute -top-1.5 -right-1.5 w-6 h-6 bg-primary text-white text-[0.75rem] font-bold flex items-center justify-center rounded-full border-2 border-white shadow-sm">
                {item.quantity}
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center gap-1">
              <div className="flex justify-between items-start">
                <h4 className="text-[0.875rem] font-bold text-secondary line-clamp-1">
                  {item.name}
                </h4>
                <span className="text-[0.875rem] font-bold text-secondary ml-4">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
              <div className="text-[0.75rem] font-medium text-gray-400">
                Size: {item.selectedSize.toUpperCase()}
              </div>
              {item.customizations && (
                <div className="flex flex-col gap-0.5 mt-1">
                  {item.customizations.name && (
                    <div className="flex justify-between text-[0.6875rem] font-medium">
                      <span className="text-gray-400">
                        Custom Print:{" "}
                        <span className="text-secondary font-bold uppercase">
                          {item.customizations.name.value}
                        </span>{" "}
                        | #{item.customizations.number?.value}
                      </span>
                      <span className="text-primary font-bold">
                        +$
                        {(
                          item.customizations.name.price +
                          (item.customizations.number?.price || 0)
                        ).toFixed(2)}
                      </span>
                    </div>
                  )}
                  {item.customizations.patch && (
                    <div className="flex justify-between text-[0.6875rem] font-medium">
                      <span className="text-gray-400">
                        Badge:{" "}
                        <span className="text-secondary font-bold">
                          {item.customizations.patch.value}
                        </span>
                      </span>
                      <span className="text-primary font-bold">
                        +${item.customizations.patch.price.toFixed(2)}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 pt-8 border-t border-gray-100">
        <div className="flex justify-between items-center text-[0.9375rem] font-medium">
          <span className="text-gray-400">Subtotal</span>
          <span className="text-secondary font-bold">
            ${subtotal.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between items-center text-[0.9375rem] font-medium">
          <span className="text-gray-400">Shipping</span>
          <span className="text-[#10B981] font-bold">Free</span>
        </div>
        <div className="flex justify-between items-center text-[0.9375rem] font-medium">
          <span className="text-gray-400">Taxes</span>
          <span className="text-secondary font-bold">${taxes.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center text-[1.5rem] mt-4 pt-4 border-t border-dashed border-gray-100">
          <span className="font-black text-secondary">Total</span>
          <span className="font-black text-primary">${total.toFixed(2)}</span>
        </div>
      </div>

      <button className="w-full h-16 bg-primary text-white font-black text-[1.125rem] rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-blue-200 hover:bg-primary-hover transition-all active:scale-[0.98] mt-8">
        Pay ${total.toFixed(2)} Now
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>

      <div className="mt-8 flex flex-col items-center gap-6">
        <div className="flex items-center gap-2 opacity-30">
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
          <span className="text-[0.75rem] font-bold text-secondary uppercase tracking-widest">
            Encrypted & Secure
          </span>
        </div>
        <div className="flex gap-4 opacity-20 grayscale">
          <span className="text-[0.625rem] font-black italic">VISA</span>
          <span className="text-[0.625rem] font-black italic">Mastercard</span>
          <span className="text-[0.625rem] font-black italic">STRIPE</span>
        </div>
        <button className="text-[0.8125rem] font-bold text-gray-400 hover:text-secondary transition-colors underline underline-offset-4">
          Need help with your order?
        </button>
      </div>
    </div>
  );
}
