import React from "react";
import { PlusIcon } from "@/components/dashboard/DashboardIcons";

interface ProductHeaderProps {
  onAddProduct?: () => void;
}

export const ProductHeader = ({ onAddProduct }: ProductHeaderProps) => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight text-secondary">
          Product Inventory
        </h1>
        <p className="mt-1 text-sm font-medium text-[#64748B]">
          Manage your jersey catalog, stock levels, and pricing.
        </p>
      </div>
      <button
        onClick={onAddProduct}
        className="flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-hover hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
      >
        <PlusIcon size={18} strokeWidth={3} />
        <span>Add New Product</span>
      </button>
    </div>
  );
};
