import React from "react";
import { SearchIcon, ExportIcon } from "@/components/dashboard/DashboardIcons";

interface ProductFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  categoryFilter: string;
  onCategoryChange: (category: string) => void;
  stockFilter: string;
  onStockChange: (status: string) => void;
  onExport?: () => void;
}

export const ProductFilters = ({
  searchQuery,
  onSearchChange,
  categoryFilter,
  onCategoryChange,
  stockFilter,
  onStockChange,
  onExport,
}: ProductFiltersProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-sm lg:flex-row lg:items-center lg:justify-between">
      <div className="relative flex-1 max-w-md group">
        <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8] group-focus-within:text-primary transition-colors">
          <SearchIcon size={18} />
        </div>
        <input
          type="text"
          placeholder="Search by jersey name, club, or SKU..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="h-11 w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] pl-11 pr-4 text-sm outline-none transition-all focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5"
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <select
          value={categoryFilter}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="h-11 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 text-sm font-semibold text-secondary outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/5 cursor-pointer"
        >
          <option value="All">All Categories</option>
          <option value="Club">Club</option>
          <option value="National Team">National Team</option>
        </select>

        <select
          value={stockFilter}
          onChange={(e) => onStockChange(e.target.value)}
          className="h-11 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 text-sm font-semibold text-secondary outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/5 cursor-pointer"
        >
          <option value="All">Stock Status</option>
          <option value="In Stock">In Stock</option>
          <option value="Low Stock">Low Stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>

        <button
          onClick={onExport}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E2E8F0] bg-white text-[#64748B] transition-all hover:border-primary/20 hover:bg-[#F8FAFC] hover:text-primary hover:shadow-sm"
          title="Export Inventory"
        >
          <ExportIcon size={18} />
        </button>
      </div>
    </div>
  );
};
