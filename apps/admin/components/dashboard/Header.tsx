"use client";

import React from "react";
import { SearchIcon, BellIcon, PlusIcon } from "./DashboardIcons";

export const MenuIcon = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
);

export const Header = ({ onMenuToggle }: { onMenuToggle: () => void }) => {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-[#E2E8F0] bg-white/80 backdrop-blur-md px-4 lg:px-8">
      {/* Mobile Menu Toggle */}
      <button
        onClick={onMenuToggle}
        className="flex h-10 w-10 items-center justify-center rounded-lg text-[#64748B] hover:bg-[#F8FAFC] lg:hidden"
      >
        <MenuIcon size={22} />
      </button>

      {/* Search Bar */}
      <div className="relative hidden w-96 group md:block">
        <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8] group-focus-within:text-primary transition-colors">
          <SearchIcon size={18} />
        </div>
        <input
          type="text"
          placeholder="Search orders, products..."
          className="h-11 w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] pl-11 pr-4 text-sm outline-none transition-all focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 rounded flex h-6 items-center border border-[#E2E8F0] bg-white px-1.5 text-[0.625rem] font-bold text-[#94A3B8]">
          ⌘K
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="group relative flex h-11 w-11 items-center justify-center rounded-xl border border-[#E2E8F0] bg-white transition-all hover:border-primary/20 hover:bg-[#F8FAFC] hover:shadow-sm">
          <BellIcon
            size={20}
            className="text-[#64748B] group-hover:text-primary transition-colors"
          />
          <span className="absolute right-2.5 top-2.5 flex h-2.5 w-2.5 items-center justify-center rounded-full border-2 border-white bg-red-500"></span>
        </button>

        {/* Add Product Button */}
        <button className="flex h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-hover hover:-translate-y-0.5 active:translate-y-0 active:scale-95">
          <PlusIcon size={18} strokeWidth={3} />
          <span>Add Product</span>
        </button>
      </div>
    </header>
  );
};
