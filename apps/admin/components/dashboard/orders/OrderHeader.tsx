import React from "react";
import { PlusIcon } from "@/components/dashboard/DashboardIcons";

interface OrderHeaderProps {
  onCreateOrder?: () => void;
}

export const OrderHeader = ({ onCreateOrder }: OrderHeaderProps) => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight text-secondary">
          Order Management
        </h1>
        <p className="mt-1 text-sm font-medium text-[#64748B]">
          Manage inventory, track shipments, and update order status.
        </p>
      </div>
      <button
        onClick={onCreateOrder}
        className="flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-hover hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
      >
        <PlusIcon size={18} strokeWidth={3} />
        <span>Create Order</span>
      </button>
    </div>
  );
};
