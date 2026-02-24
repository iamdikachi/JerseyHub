"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DashboardIcon,
  ProductsIcon,
  OrdersIcon,
  InventoryIcon,
  CustomersIcon,
  SettingsIcon,
  HelpCenterIcon,
  LogOutIcon,
  ShieldIcon,
} from "./DashboardIcons";

const navItems = [
  { label: "Dashboard", icon: DashboardIcon, href: "/dashboard" },
  { label: "Products", icon: ProductsIcon, href: "/products" },
  { label: "Orders", icon: OrdersIcon, href: "/orders", badge: 12 },
  { label: "Inventory", icon: InventoryIcon, href: "/inventory" },
  { label: "Customers", icon: CustomersIcon, href: "/customers" },
];

const systemItems = [
  { label: "Settings", icon: SettingsIcon, href: "/settings" },
  { label: "Help Center", icon: HelpCenterIcon, href: "/help" },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <aside
      className={`fixed left-0 top-0 z-50 h-screen w-64 border-r border-[#E2E8F0] bg-white transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}
    >
      <div className="flex h-full flex-col px-4 py-6">
        {/* Brand Logo & Close Button */}
        <div className="mb-10 flex items-center justify-between px-2">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary shadow-sm ring-4 ring-primary/5">
              <ShieldIcon size={20} color="white" opacity="1" />
            </div>
            <div>
              <h2 className="text-lg font-bold tracking-tight text-secondary">
                JerseyHub
              </h2>
              <p className="text-[0.625rem] font-bold uppercase tracking-widest text-[#94A3B8]">
                Admin Console
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-[#94A3B8] hover:bg-[#F8FAFC] lg:hidden"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`group flex items-center justify-between rounded-xl px-3 py-2.5 transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#334155]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon
                    size={20}
                    className={
                      isActive
                        ? "text-white"
                        : "group-hover:text-primary transition-colors"
                    }
                  />
                  <span className="text-sm font-semibold">{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`flex h-5 min-w-[20px] items-center justify-center rounded-full px-1 text-[0.625rem] font-bold ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-primary text-white"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* System Navigation */}
        <div className="mt-8">
          <p className="mb-4 px-3 text-[0.625rem] font-bold uppercase tracking-widest text-[#94A3B8]">
            System
          </p>
          <div className="space-y-1">
            {systemItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-[#64748B] transition-all duration-200 hover:bg-[#F8FAFC] hover:text-[#334155]"
              >
                <item.icon
                  size={20}
                  className="group-hover:text-primary transition-colors"
                />
                <span className="text-sm font-semibold">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* User Profile Section */}
        <div className="mt-auto pt-6">
          <div className="flex items-center justify-between rounded-2xl bg-[#F8FAFC] p-3 ring-1 ring-[#E2E8F0]">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 overflow-hidden rounded-full border-2 border-white shadow-sm ring-1 ring-primary/10">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin"
                  alt="Admin User"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="overflow-hidden">
                <p className="truncate text-xs font-bold text-secondary">
                  Admin User
                </p>
                <p className="truncate text-[0.625rem] font-medium text-[#64748B]">
                  admin@jerseyhub.com
                </p>
              </div>
            </div>
            <button className="rounded-lg p-1.5 text-[#94A3B8] transition-colors hover:bg-white hover:text-red-500 hover:shadow-sm">
              <LogOutIcon size={18} />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
