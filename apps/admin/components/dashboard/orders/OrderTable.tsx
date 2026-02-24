import React from "react";
import { Order } from "@/data/mockData";

interface OrderTableProps {
  orders: Order[];
  selectedOrderId: string | null;
  onOrderSelect: (orderId: string) => void;
}

export const OrderTable = ({
  orders,
  selectedOrderId,
  onOrderSelect,
}: OrderTableProps) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm ring-1 ring-black/5">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-[#E2E8F0] bg-[#F8FAFC]">
              <th className="px-6 py-4 text-[0.625rem] font-bold uppercase tracking-widest text-[#94A3B8]">
                Order
              </th>
              <th className="px-6 py-4 text-[0.625rem] font-bold uppercase tracking-widest text-[#94A3B8]">
                Customer
              </th>
              <th className="px-6 py-4 text-[0.625rem] font-bold uppercase tracking-widest text-[#94A3B8]">
                Date
              </th>
              <th className="px-6 py-4 text-[0.625rem] font-bold uppercase tracking-widest text-[#94A3B8]">
                Total
              </th>
              <th className="px-6 py-4 text-[0.625rem] font-bold uppercase tracking-widest text-[#94A3B8]">
                Status
              </th>
              <th className="px-6 py-4 text-[0.625rem] font-bold uppercase tracking-widest text-[#94A3B8]">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E2E8F0]">
            {orders.map((order) => {
              const isSelected = selectedOrderId === order.id;
              return (
                <tr
                  key={order.id}
                  onClick={() => onOrderSelect(order.id)}
                  className={`group cursor-pointer transition-colors ${
                    isSelected ? "bg-primary/[0.03]" : "hover:bg-[#F8FAFC]/50"
                  }`}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-sm font-bold ${isSelected ? "text-primary" : "text-secondary"}`}
                      >
                        #{order.id}
                      </span>
                      {order.needsAction && (
                        <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full text-[0.625rem] font-bold ring-2 ring-white shadow-sm ${
                          order.customer.avatar === "AM"
                            ? "bg-blue-100 text-blue-600"
                            : order.customer.avatar === "SJ"
                              ? "bg-emerald-100 text-emerald-600"
                              : "bg-purple-100 text-purple-600"
                        }`}
                      >
                        {order.customer.avatar}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-secondary">
                          {order.customer.name}
                        </span>
                        <span className="text-[0.625rem] font-medium text-[#94A3B8]">
                          {order.customer.email}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[0.6875rem] font-semibold text-[#64748B]">
                    {order.date}
                  </td>
                  <td className="px-6 py-4 text-xs font-black text-secondary">
                    ${order.total.toFixed(2)}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.625rem] font-bold ring-1 ${
                        order.status === "Pending"
                          ? "bg-orange-50 text-orange-600 ring-orange-100"
                          : order.status === "Paid"
                            ? "bg-emerald-50 text-emerald-600 ring-emerald-100"
                            : order.status === "Processing"
                              ? "bg-blue-50 text-blue-600 ring-blue-100"
                              : order.status === "Shipped"
                                ? "bg-purple-50 text-purple-600 ring-purple-100"
                                : "bg-slate-50 text-slate-600 ring-slate-100"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          order.status === "Pending"
                            ? "bg-orange-500"
                            : order.status === "Paid"
                              ? "bg-emerald-500"
                              : order.status === "Processing"
                                ? "bg-blue-500"
                                : order.status === "Shipped"
                                  ? "bg-purple-500"
                                  : "bg-slate-400"
                        }`}
                      />
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-[0.6875rem] font-bold text-primary hover:underline underline-offset-4">
                      View Details
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
