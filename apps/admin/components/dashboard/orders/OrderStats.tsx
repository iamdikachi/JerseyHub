import React from "react";
import {
  OrdersIcon,
  ClockIcon,
  RevenueIcon,
  ReturnIcon,
  TrendUpIcon,
} from "@/components/dashboard/DashboardIcons";

export const OrderStats = () => {
  const stats = [
    {
      label: "Total Orders",
      value: "1,248",
      trend: "+12% this week",
      icon: OrdersIcon,
      color: "blue",
      trendColor: "emerald",
    },
    {
      label: "Pending Shipment",
      value: "42",
      highlight: "Needs Action",
      icon: ClockIcon,
      color: "orange",
      border: true,
    },
    {
      label: "Revenue Today",
      value: "$12,450",
      trend: "+8% vs yesterday",
      icon: RevenueIcon,
      color: "emerald",
      trendColor: "emerald",
    },
    {
      label: "Returns",
      value: "3",
      trend: "-2%",
      icon: ReturnIcon,
      color: "rose",
      trendColor: "slate",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`relative overflow-hidden rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#E2E8F0] transition-all hover:shadow-md ${
            stat.border ? "ring-2 ring-primary shadow-primary/5" : ""
          }`}
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[0.625rem] font-bold uppercase tracking-widest text-[#94A3B8]">
                {stat.label}
              </p>
              <h3 className="mt-1 text-2xl font-black text-secondary">
                {stat.value}
              </h3>
              {stat.trend && (
                <div
                  className={`mt-2 flex items-center gap-1 text-[0.6875rem] font-bold ${
                    stat.trendColor === "emerald"
                      ? "text-emerald-500"
                      : "text-slate-400"
                  }`}
                >
                  {stat.trendColor === "emerald" && <TrendUpIcon size={12} />}
                  {stat.trend}
                </div>
              )}
              {stat.highlight && (
                <span className="mt-2 inline-flex items-center rounded-lg bg-orange-50 px-2 py-0.5 text-[0.625rem] font-bold text-orange-600 ring-1 ring-orange-100 italic">
                  {stat.highlight}
                </span>
              )}
            </div>
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
                stat.color === "blue"
                  ? "bg-blue-50 text-blue-500"
                  : stat.color === "orange"
                    ? "bg-orange-50 text-orange-500"
                    : stat.color === "emerald"
                      ? "bg-emerald-50 text-emerald-500"
                      : "bg-rose-50 text-rose-500"
              }`}
            >
              <stat.icon size={24} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
