"use client";

import React, { useState, useMemo } from "react";
import { orders as allOrders } from "@/data/mockData";
import { OrderHeader } from "@/components/dashboard/orders/OrderHeader";
import { OrderStats } from "@/components/dashboard/orders/OrderStats";
import { OrderFilters } from "@/components/dashboard/orders/OrderFilters";
import { OrderTable } from "@/components/dashboard/orders/OrderTable";
import { OrderDetailsSidebar } from "@/components/dashboard/orders/OrderDetailsSidebar";

export default function OrdersPage(): React.ReactNode {
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(
    allOrders?.[0]?.id ?? null,
  );
  const [filter, setFilter] = useState("All");

  const filteredOrders = useMemo(() => {
    if (!allOrders) return [];
    return allOrders.filter((order) => {
      if (filter === "All") return true;
      return order.status === filter;
    });
  }, [filter]);

  const selectedOrder = useMemo(() => {
    if (!selectedOrderId || !allOrders) return null;
    return allOrders.find((o) => o.id === selectedOrderId) || null;
  }, [selectedOrderId]);

  return (
    <div className="flex flex-col gap-6 lg:flex-row">
      <div className="flex-1 space-y-6 overflow-hidden">
        <OrderHeader onCreateOrder={() => console.log("Create Order")} />

        <OrderStats />

        <OrderFilters
          filter={filter}
          onFilterChange={(f) => {
            setFilter(f);
          }}
        />

        <OrderTable
          orders={filteredOrders}
          selectedOrderId={selectedOrderId}
          onOrderSelect={setSelectedOrderId}
        />
      </div>

      <OrderDetailsSidebar
        order={selectedOrder}
        onClose={() => setSelectedOrderId(null)}
        onMarkShipped={(id) => console.log("Mark Shipped", id)}
      />
    </div>
  );
}
