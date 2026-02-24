"use client";

import React from "react";
import {
  RevenueIcon,
  ActiveOrdersIcon,
  TotalInventoryIcon,
  LowStockIcon,
  TrendUpIcon,
  TrendDownIcon,
} from "@/components/dashboard/DashboardIcons";
import { RevenueChart } from "@/components/dashboard/RevenueChart";

// Mock Data
const stats = [
  {
    label: "Total Revenue",
    value: "$124,500",
    trend: "+12.5%",
    trendType: "up",
    icon: RevenueIcon,
    color: "primary",
  },
  {
    label: "Active Orders",
    value: "45",
    trend: "+5.2%",
    trendType: "up",
    icon: ActiveOrdersIcon,
    color: "blue",
  },
  {
    label: "Total Inventory",
    value: "1,250",
    trend: "-2.1%",
    trendType: "down",
    icon: TotalInventoryIcon,
    color: "purple",
  },
  {
    label: "Low Stock Items",
    value: "3",
    action: "Action Needed",
    icon: LowStockIcon,
    color: "orange",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-secondary">
          Dashboard Overview
        </h1>
        <p className="mt-1 text-sm font-medium text-[#64748B]">
          Welcome back! Here's what's happening with your store today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="group overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#94A3B8]">
                  {stat.label}
                </p>
                <h3 className="mt-1 text-2xl font-extrabold text-secondary">
                  {stat.value}
                </h3>
              </div>
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${
                  stat.color === "primary"
                    ? "bg-primary/5 text-primary"
                    : stat.color === "blue"
                      ? "bg-blue-50 text-blue-600"
                      : stat.color === "purple"
                        ? "bg-purple-50 text-purple-600"
                        : "bg-orange-50 text-orange-600"
                }`}
              >
                <stat.icon />
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2">
              {stat.trend && (
                <div
                  className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.625rem] font-bold ${
                    stat.trendType === "up"
                      ? "bg-green-50 text-green-600"
                      : "bg-red-50 text-red-600"
                  }`}
                >
                  {stat.trendType === "up" ? (
                    <TrendUpIcon />
                  ) : (
                    <TrendDownIcon />
                  )}
                  <span>{stat.trend}</span>
                </div>
              )}
              {stat.action && (
                <div className="rounded-full bg-orange-50 px-2 py-0.5 text-[0.625rem] font-bold text-orange-600 ring-1 ring-orange-200">
                  ! {stat.action}
                </div>
              )}
              <span className="text-[0.6875rem] font-medium text-[#94A3B8]">
                vs last week
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Grid: Revenue Trends & Stock Alerts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Revenue Trends (Placeholder for Chart) */}
        <div className="lg:col-span-2 rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h4 className="text-lg font-bold text-secondary">
                Revenue Trends
              </h4>
              <p className="text-xs font-medium text-[#64748B]">
                Monthly sales performance
              </p>
            </div>
            <select className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-1.5 text-xs font-bold text-secondary outline-none transition-all focus:border-primary">
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
            </select>
          </div>
          <div className="h-64 w-full">
            <RevenueChart />
          </div>
        </div>

        {/* Low Stock Alerts */}
        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h4 className="text-lg font-bold text-secondary">
                Low Stock Alerts
              </h4>
              <p className="text-xs font-medium text-[#64748B]">
                Action required soon
              </p>
            </div>
            <button className="text-xs font-bold text-primary hover:underline">
              View All
            </button>
          </div>

          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="h-12 w-12 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] overflow-hidden flex items-center justify-center p-2">
                  <div className="h-full w-full bg-[#E2E8F0] rounded-sm group-hover:scale-110 transition-transform duration-300"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-secondary truncate">
                    Barcelona Home Kit '24
                  </p>
                  <p className="text-[0.6875rem] font-medium text-[#64748B]">
                    Size: M • SKU: BAR-H-24
                  </p>
                  <p className="mt-1 text-[0.625rem] font-bold text-red-500 uppercase tracking-wider">
                    Only {i * 2} left
                  </p>
                </div>
                <button className="h-8 w-8 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#64748B] hover:bg-primary/5 hover:text-primary transition-all">
                  <ActiveOrdersIcon size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Selling Jerseys Table */}
      <div className="rounded-2xl border border-[#E2E8F0] bg-white overflow-hidden shadow-sm">
        <div className="p-6 border-b border-[#E2E8F0] flex items-center justify-between">
          <h4 className="text-lg font-bold text-secondary">
            Top Selling Jerseys
          </h4>
          <button className="text-xs font-bold text-[#64748B] hover:text-primary transition-colors flex items-center gap-1">
            View All Products <span>→</span>
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
              <tr>
                <th className="px-6 py-4 text-[0.625rem] font-bold uppercase tracking-widest text-[#94A3B8]">
                  Product Name
                </th>
                <th className="px-6 py-4 text-[0.625rem] font-bold uppercase tracking-widest text-[#94A3B8]">
                  Category
                </th>
                <th className="px-6 py-4 text-[0.625rem] font-bold uppercase tracking-widest text-[#94A3B8]">
                  Stock Status
                </th>
                <th className="px-6 py-4 text-[0.625rem] font-bold uppercase tracking-widest text-[#94A3B8]">
                  Price
                </th>
                <th className="px-6 py-4 text-[0.625rem] font-bold uppercase tracking-widest text-[#94A3B8]">
                  Total Sold
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0]">
              {[1, 2, 3, 4].map((i) => (
                <tr
                  key={i}
                  className="hover:bg-[#F8FAFC] transition-colors cursor-pointer group"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-lg bg-[#F1F5F9] border border-[#E2E8F0] shrink-0"></div>
                      <div>
                        <p className="text-sm font-bold text-secondary">
                          Man Utd Home Kit '24
                        </p>
                        <p className="text-[0.6875rem] font-medium text-[#64748B]">
                          SKU: MU-H-24
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-[0.6875rem] font-bold text-primary ring-1 ring-primary/20 backdrop-blur-sm">
                      Premier League
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
                      <span className="text-[0.6875rem] font-bold text-[#475569]">
                        In Stock
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-bold text-secondary">
                      $89.99
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-extrabold text-secondary">
                      1,240
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
