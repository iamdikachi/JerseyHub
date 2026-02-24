import React from "react";
import { PrinterIcon, CloseIcon } from "@/components/dashboard/DashboardIcons";
import { Order } from "@/data/mockData";

interface OrderDetailsSidebarProps {
  order: Order | null;
  onClose: () => void;
  onMarkShipped?: (orderId: string) => void;
}

export const OrderDetailsSidebar = ({
  order,
  onClose,
  onMarkShipped,
}: OrderDetailsSidebarProps) => {
  if (!order) return null;

  const { id, date, time, customer, items, total } = order;

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-secondary/20 backdrop-blur-sm lg:hidden"
        onClick={onClose}
      />
      <div className="fixed bottom-0 left-0 right-0 z-50 max-h-[90vh] overflow-y-auto rounded-t-[2rem] border-t border-[#E2E8F0] bg-white p-6 shadow-2xl transition-all duration-300 animate-in slide-in-from-bottom lg:relative lg:inset-auto lg:z-0 lg:w-[400px] lg:shrink-0 lg:animate-none lg:rounded-2xl lg:border lg:shadow-sm lg:ring-1 lg:ring-black/5">
        <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-4">
          <div>
            <h2 className="text-lg font-black text-secondary">Order #{id}</h2>
            <p className="text-[0.6875rem] font-medium text-[#94A3B8]">
              Placed on {date} at {time}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded-lg p-2 text-[#94A3B8] transition-colors hover:bg-[#F8FAFC] hover:text-secondary">
              <PrinterIcon size={18} />
            </button>
            <button
              className="rounded-lg p-2 text-[#94A3B8] transition-colors hover:bg-[#F8FAFC] hover:text-rose-500"
              onClick={onClose}
            >
              <CloseIcon size={18} />
            </button>
          </div>
        </div>

        <div className="mt-6 space-y-6">
          <section>
            <p className="mb-4 text-[0.625rem] font-black uppercase tracking-widest text-[#94A3B8]">
              Customer Details
            </p>
            <div className="rounded-xl bg-[#F8FAFC] p-4 ring-1 ring-[#E2E8F0]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
                  {customer.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-secondary">
                    {customer.name}
                  </p>
                  <p className="text-[0.6875rem] font-medium text-[#94A3B8]">
                    {customer.email}
                  </p>
                </div>
              </div>
              <div className="mt-4 border-t border-[#E2E8F0] pt-4">
                <p className="text-[0.6875rem] font-black uppercase tracking-widest text-[#94A3B8]">
                  Shipping Address
                </p>
                <p className="mt-1 text-xs font-medium leading-relaxed text-[#64748B]">
                  {customer.address}
                </p>
              </div>
            </div>
          </section>

          <section>
            <p className="mb-4 text-[0.625rem] font-black uppercase tracking-widest text-[#94A3B8]">
              Order Items ({items.length})
            </p>
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 rounded-xl border border-[#E2E8F0] p-3 transition-hover hover:border-primary/20 hover:bg-[#F8FAFC]/50"
                >
                  <div className="h-16 w-16 overflow-hidden rounded-lg border border-[#E2E8F0] shadow-sm">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <h4 className="text-xs font-bold text-secondary">
                        {item.name}
                      </h4>
                      <span className="text-[0.6875rem] font-black text-secondary">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-[0.625rem] font-medium text-[#94A3B8]">
                      Size: {item.size} • Qty: {item.qty}
                    </p>
                    {item.cust && (
                      <div className="mt-2 rounded-lg bg-white p-2 text-[0.625rem] ring-1 ring-[#E2E8F0]">
                        <div className="flex justify-between">
                          <span className="text-[#94A3B8]">Name:</span>
                          <span className="font-bold text-secondary uppercase">
                            {item.cust.name}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#94A3B8]">Number:</span>
                          <span className="font-bold text-secondary">
                            {item.cust.number}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#94A3B8]">Badges:</span>
                          <span className="font-bold text-secondary">
                            {item.cust.badge}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl bg-orange-50/50 p-4 ring-1 ring-orange-100/50">
            <p className="mb-4 text-[0.625rem] font-black uppercase tracking-widest text-[#94A3B8]">
              Fulfillment
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[0.6875rem] font-bold text-orange-600">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[10px] text-white">
                  !
                </div>
                Awaiting Shipment
              </div>
              <div>
                <label className="text-[0.625rem] font-black uppercase tracking-widest text-[#94A3B8]">
                  Carrier
                </label>
                <select className="mt-1 h-10 w-full rounded-lg border border-[#E2E8F0] bg-white px-3 text-xs font-bold text-secondary outline-none focus:ring-2 focus:ring-primary/10">
                  <option>UPS</option>
                  <option>DHL</option>
                  <option>FedEx</option>
                </select>
              </div>
              <div>
                <label className="text-[0.625rem] font-black uppercase tracking-widest text-[#94A3B8]">
                  Tracking Number
                </label>
                <input
                  type="text"
                  placeholder="e.g. 1Z999AA10123456784"
                  className="mt-1 h-10 w-full rounded-lg border border-[#E2E8F0] bg-white px-3 text-xs font-bold text-secondary outline-none focus:ring-2 focus:ring-primary/10"
                />
              </div>
              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={() => onMarkShipped?.(id)}
                  className="flex-1 rounded-lg bg-primary py-2.5 text-xs font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary-hover active:scale-95 transition-all"
                >
                  Mark Shipped
                </button>
                <button className="rounded-lg border border-[#E2E8F0] bg-white px-4 py-2.5 text-xs font-bold text-secondary hover:bg-[#F8FAFC]">
                  Save Draft
                </button>
              </div>
            </div>
          </section>

          <div className="flex items-center justify-between border-t border-[#F1F5F9] pt-6 pb-2">
            <span className="text-sm font-bold text-[#64748B]">
              Total Amount
            </span>
            <span className="text-xl font-black text-secondary">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
