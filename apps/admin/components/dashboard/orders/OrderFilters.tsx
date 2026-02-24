import React from "react";
import {
  ClockIcon,
  TruckIcon,
  CheckIcon,
} from "@/components/dashboard/DashboardIcons";

interface OrderFiltersProps {
  filter: string;
  onFilterChange: (filter: string) => void;
}

export const OrderFilters = ({ filter, onFilterChange }: OrderFiltersProps) => {
  const filterChips = [
    { label: "All Orders", icon: undefined, count: undefined },
    { label: "Pending", icon: ClockIcon, count: 42 },
    { label: "Processing", icon: undefined, count: undefined },
    { label: "Shipped", icon: TruckIcon, count: undefined },
    { label: "Delivered", icon: CheckIcon, count: undefined },
  ];

  return (
    <div className="flex flex-wrap items-center gap-2">
      {filterChips.map((chip) => {
        const chipValue = chip.label === "All Orders" ? "All" : chip.label;
        const isActive = filter === chipValue;

        return (
          <button
            key={chip.label}
            onClick={() => onFilterChange(chipValue)}
            className={`flex h-10 items-center gap-2 rounded-xl px-4 text-xs font-bold transition-all ${
              isActive
                ? "bg-primary text-white shadow-lg shadow-primary/20"
                : "bg-white text-[#64748B] ring-1 ring-[#E2E8F0] hover:bg-[#F8FAFC]"
            }`}
          >
            {chip.icon && <chip.icon size={14} />}
            <span>{chip.label}</span>
            {chip.count && (
              <span
                className={`ml-1 flex h-5 min-w-[20px] items-center justify-center rounded-full px-1.5 text-[0.625rem] ${
                  isActive ? "bg-white/20" : "bg-primary/10 text-primary"
                }`}
              >
                {chip.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
