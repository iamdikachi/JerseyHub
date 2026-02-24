import React from "react";
import { EditIcon, TrashIcon } from "@/components/dashboard/DashboardIcons";
import { Product } from "@/data/mockData";

interface ProductMobileCardsProps {
  products: Product[];
  onEdit?: (product: Product) => void;
  onDelete?: (product: Product) => void;
}

export const ProductMobileCards = ({
  products,
  onEdit,
  onDelete,
}: ProductMobileCardsProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:hidden">
      {products.map((product) => (
        <div
          key={product.id}
          className="rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-sm"
        >
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 overflow-hidden rounded-xl border border-[#E2E8F0]">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-bold text-secondary">
                    {product.name}
                  </h3>
                  <p className="text-[0.6875rem] font-medium text-[#94A3B8]">
                    SKU: {product.sku}
                  </p>
                </div>
                <span className="text-sm font-bold text-secondary">
                  ${product.price.toFixed(2)}
                </span>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <span
                  className={`inline-flex items-center rounded-full px-2 py-0.5 text-[0.625rem] font-bold ring-1 ${
                    product.category === "Club"
                      ? "bg-primary/10 text-primary ring-primary/20"
                      : "bg-purple-50 text-purple-600 ring-purple-100"
                  }`}
                >
                  {product.category}
                </span>
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.625rem] font-bold ring-1 ${
                    product.status === "In Stock"
                      ? "bg-emerald-50 text-emerald-600 ring-emerald-100"
                      : product.status === "Low Stock"
                        ? "bg-amber-50 text-amber-600 ring-amber-100"
                        : "bg-red-50 text-red-600 ring-red-100"
                  }`}
                >
                  {product.status}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 border-t border-[#F1F5F9] pt-4">
            <button
              onClick={() => onEdit?.(product)}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#E2E8F0] py-2 text-xs font-bold text-secondary hover:bg-[#F8FAFC]"
            >
              <EditIcon size={14} />
              <span>Edit</span>
            </button>
            <button
              onClick={() => onDelete?.(product)}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#E2E8F0] py-2 text-xs font-bold text-red-500 hover:bg-red-50 hover:border-red-100"
            >
              <TrashIcon size={14} />
              <span>Delete</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
