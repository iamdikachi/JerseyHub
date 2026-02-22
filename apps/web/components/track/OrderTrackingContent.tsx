"use client";

import Link from "next/link";

export default function OrderTrackingContent() {
  const steps = [
    { label: "Ordered", status: "completed", icon: "check" },
    { label: "Processing", status: "completed", icon: "check" },
    { label: "Customizing", status: "active", icon: "settings" },
    { label: "Shipped", status: "upcoming", icon: "truck" },
    { label: "Delivered", status: "upcoming", icon: "home" },
  ];

  const Icon = ({ name, active }: { name: string; active: boolean }) => {
    switch (name) {
      case "check":
        return (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        );
      case "settings":
        return (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className={active ? "animate-spin-slow" : ""}
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
          </svg>
        );
      case "truck":
        return (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <rect x="1" y="3" width="15" height="13" />
            <path d="M16 8h4l3 3v5h-7V8z" />
            <circle cx="5.5" cy="18.5" r="2.5" />
            <circle cx="18.5" cy="18.5" r="2.5" />
          </svg>
        );
      case "home":
        return (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Status Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 px-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-[1.5rem] font-black text-secondary">
            Order #JH-88592
          </h2>
          <p className="text-[0.9375rem] text-gray-400 font-medium">
            Placed on October 24, 2023
          </p>
        </div>
        <button className="flex items-center gap-2 text-primary font-bold text-[0.9375rem] hover:text-primary-hover transition-colors">
          View Invoice
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
          </svg>
        </button>
      </div>

      {/* Progress Card */}
      <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 lg:p-12 shadow-sm">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 bg-[#D1FAE5] text-[#10B981] rounded-full text-[0.875rem] font-black flex items-center gap-2">
              <span className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" />
              In Production
            </div>
            <span className="text-gray-300">|</span>
            <span className="text-[0.9375rem] font-medium text-gray-500">
              Est. Delivery:{" "}
              <span className="text-secondary font-bold">Nov 02 - Nov 05</span>
            </span>
          </div>
          <button className="text-gray-300 hover:text-secondary transition-colors">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
            </svg>
          </button>
        </div>

        {/* Timeline */}
        <div className="relative flex justify-between items-center px-4 overflow-x-auto pb-4 custom-scrollbar lg:overflow-visible lg:px-10">
          {/* Progress Line */}
          <div className="absolute left-[8%] right-[8%] top-5 h-1 bg-[#F1F5F9] -z-10" />
          <div className="absolute left-[8%] w-[42%] top-5 h-1 bg-primary -z-10" />

          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-4 min-w-[100px]"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                  step.status === "completed"
                    ? "bg-primary text-white scale-110"
                    : step.status === "active"
                      ? "bg-white border-4 border-primary text-primary scale-125 shadow-lg shadow-blue-100"
                      : "bg-[#F1F5F9] text-gray-300"
                }`}
              >
                <Icon name={step.icon} active={step.status === "active"} />
              </div>
              <span
                className={`text-[0.8125rem] font-black uppercase tracking-widest ${
                  step.status === "upcoming"
                    ? "text-gray-300"
                    : step.status === "active"
                      ? "text-primary"
                      : "text-secondary"
                }`}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>

        {/* Tracking Code Banner */}
        <div className="mt-16 bg-[#F8FAFC] border border-gray-100 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white border border-gray-100 rounded-xl flex items-center justify-center text-gray-400">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <rect x="1" y="3" width="15" height="13" />
                <path d="M16 8h4l3 3v5h-7V8z" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </div>
            <div>
              <h4 className="text-[0.9375rem] font-black text-secondary">
                Tracking Number
              </h4>
              <p className="text-[0.75rem] text-gray-400 font-medium tracking-wide">
                Carrier details will be available once your order ships.
              </p>
            </div>
          </div>
          <button
            disabled
            className="h-12 px-8 bg-gray-100 text-gray-400 font-bold text-[0.875rem] rounded-xl cursor-not-allowed"
          >
            Track Package
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Order Items */}
        <div className="lg:col-span-8 bg-white border border-gray-100 rounded-[2.5rem] p-10 shadow-sm">
          <h3 className="text-[1.25rem] font-bold text-secondary mb-8">
            Order Items
          </h3>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="w-32 h-32 bg-[#00424D] rounded-3xl flex-none p-4 relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop"
                alt="Kit"
                className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="flex-1 flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1">
                  <h4 className="text-[1.125rem] font-black text-secondary">
                    2023/24 Home Kit
                  </h4>
                  <p className="text-[0.875rem] text-gray-400 font-medium">
                    Men's Authentic / Size L
                  </p>
                </div>
                <span className="text-[1.125rem] font-black text-secondary">
                  $120.00
                </span>
              </div>

              <div className="bg-[#F8FAFC] border border-gray-50 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="text-primary"
                  >
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                  <span className="text-[0.6875rem] font-black text-primary uppercase tracking-widest">
                    Customization Details
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <span className="block text-[0.625rem] font-bold text-gray-300 uppercase mb-1">
                      Name
                    </span>
                    <span className="text-[0.875rem] font-black text-secondary uppercase tracking-wider">
                      MESSI
                    </span>
                  </div>
                  <div>
                    <span className="block text-[0.625rem] font-bold text-gray-300 uppercase mb-1">
                      Number
                    </span>
                    <span className="text-[0.875rem] font-black text-secondary">
                      10
                    </span>
                  </div>
                  <div>
                    <span className="block text-[0.625rem] font-bold text-gray-300 uppercase mb-1">
                      Patches
                    </span>
                    <span className="text-[0.875rem] font-black text-secondary">
                      Champions Gold
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shipping & Support */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          <div className="bg-white border border-gray-100 rounded-4xl p-8 shadow-sm">
            <h3 className="text-[1.125rem] font-bold text-secondary mb-6">
              Shipping To
            </h3>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 flex-none">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[0.9375rem] font-black text-secondary">
                  Leo Messi
                </span>
                <p className="text-[0.8125rem] text-gray-400 font-medium leading-relaxed">
                  123 Stadium Avenue
                  <br />
                  Miami, FL 33101
                  <br />
                  United States
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-4xl p-8 shadow-sm flex flex-col gap-6">
            <h3 className="text-[1.125rem] font-bold text-secondary">
              Need Help?
            </h3>
            <div className="flex flex-col gap-4">
              <button className="flex items-center gap-3 text-[0.875rem] font-bold text-gray-500 hover:text-primary transition-colors group">
                <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                  </svg>
                </div>
                Live Chat Support
              </button>
              <button className="flex items-center gap-3 text-[0.875rem] font-bold text-gray-500 hover:text-primary transition-colors group">
                <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                support@jerseyhub.com
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
