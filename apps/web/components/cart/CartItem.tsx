"use client";

import { CartItem as CartItemType } from "../../types/cart";
import { useCart } from "../../context/CartContext";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();

  const totalBasePrice = item.price;
  const customizationTotal =
    (item.customizations?.name?.price || 0) +
    (item.customizations?.number?.price || 0) +
    (item.customizations?.patch?.price || 0);

  return (
    <div className="flex flex-col gap-4 p-4 bg-white border border-gray-100 rounded-2xl">
      <div className="flex gap-4">
        <div className="w-20 h-20 bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center p-2 flex-none">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-[0.875rem] font-bold text-secondary line-clamp-1">
                {item.name}
              </h4>
              <div className="text-[0.75rem] text-gray-400 mt-0.5 font-medium">
                Size: {item.selectedSize.toUpperCase()} | Base: $
                {item.price.toFixed(2)}
              </div>
            </div>
            <button
              onClick={() => removeItem(item.id, item.selectedSize)}
              className="text-gray-300 hover:text-red-500 transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" />
              </svg>
            </button>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center border border-gray-100 rounded-lg overflow-hidden">
              <button
                onClick={() =>
                  updateQuantity(item.id, item.selectedSize, item.quantity - 1)
                }
                className="w-8 h-8 flex items-center justify-center bg-white text-secondary hover:bg-gray-50 font-bold"
              >
                -
              </button>
              <span className="w-8 h-8 flex items-center justify-center text-[0.8125rem] font-bold text-secondary border-x border-gray-100">
                {item.quantity}
              </span>
              <button
                onClick={() =>
                  updateQuantity(item.id, item.selectedSize, item.quantity + 1)
                }
                className="w-8 h-8 flex items-center justify-center bg-white text-secondary hover:bg-gray-50 font-bold"
              >
                +
              </button>
            </div>
            <span className="text-[1.125rem] font-black text-secondary">
              $
              {((totalBasePrice + customizationTotal) * item.quantity).toFixed(
                2,
              )}
            </span>
          </div>
        </div>
      </div>

      {item.customizations && (
        <div className="border-t border-gray-50 pt-3 flex flex-col gap-2">
          <div className="text-[0.625rem] font-bold text-primary uppercase tracking-widest flex items-center gap-1.5">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
            Customizations
          </div>
          <div className="flex flex-col gap-1">
            {item.customizations.number && (
              <div className="flex justify-between items-center">
                <span className="text-[0.75rem] font-medium text-gray-500">
                  Number:{" "}
                  <span className="text-secondary font-bold">
                    {item.customizations.number.value}
                  </span>
                </span>
                <span className="text-[0.6875rem] font-bold text-primary">
                  +${item.customizations.number.price.toFixed(2)}
                </span>
              </div>
            )}
            {item.customizations.name && (
              <div className="flex justify-between items-center">
                <span className="text-[0.75rem] font-medium text-gray-500">
                  Name:{" "}
                  <span className="text-secondary font-bold uppercase">
                    {item.customizations.name.value}
                  </span>
                </span>
                <span className="text-[0.6875rem] font-bold text-primary">
                  +${item.customizations.name.price.toFixed(2)}
                </span>
              </div>
            )}
            {item.customizations.patch && (
              <div className="flex justify-between items-center">
                <span className="text-[0.75rem] font-medium text-gray-500">
                  Patch:{" "}
                  <span className="text-secondary font-bold">
                    {item.customizations.patch.value}
                  </span>
                </span>
                <span className="text-[0.6875rem] font-bold text-primary">
                  +${item.customizations.patch.price.toFixed(2)}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
