"use client";

import { useState } from "react";

export default function CustomizationSection() {
  const [addName, setAddName] = useState(false);
  const [addBadges, setAddBadges] = useState(false);

  return (
    <div className="bg-[#F8F9FA] rounded-3xl p-6 flex flex-col gap-6">
      <div className="flex items-center gap-2 text-primary font-bold text-[0.9375rem]">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 2L2 7L12 12L22 7L12 2Z" />
          <path d="M2 17L12 22L22 17" />
          <path d="M2 12L12 17L22 12" />
        </svg>
        Jersey Customization
      </div>

      <div className="flex flex-col gap-4">
        {/* Name & Number Toggle */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[1rem] font-bold text-secondary">
              Add Name & Number
            </div>
            <div className="text-[0.75rem] text-gray-400">
              Official Premier League Font (+$15.00)
            </div>
          </div>
          <button
            onClick={() => setAddName(!addName)}
            className={`w-12 h-6 rounded-full transition-colors relative ${addName ? "bg-primary" : "bg-gray-200"}`}
          >
            <div
              className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${addName ? "right-1" : "left-1"}`}
            />
          </button>
        </div>

        {addName && (
          <div className="grid grid-cols-3 gap-4 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="col-span-2">
              <label className="text-[0.625rem] font-bold text-gray-400 uppercase mb-1 block tracking-wider">
                Name (Max 15)
              </label>
              <input
                placeholder="HENRY"
                className="w-full h-11 bg-white border border-gray-100 rounded-xl px-4 text-[0.875rem] font-bold uppercase placeholder:text-gray-200 focus:outline-none focus:border-primary transition-all"
              />
            </div>
            <div>
              <label className="text-[0.625rem] font-bold text-gray-400 uppercase mb-1 block tracking-wider">
                Number
              </label>
              <input
                placeholder="14"
                className="w-full h-11 bg-white border border-gray-100 rounded-xl px-4 text-[0.875rem] font-bold placeholder:text-gray-200 focus:outline-none focus:border-primary transition-all"
              />
            </div>
          </div>
        )}

        <div className="h-px bg-gray-200" />

        {/* League Badges Toggle */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[1rem] font-bold text-secondary">
              Add League Badges
            </div>
            <div className="text-[0.75rem] text-gray-400">
              Official Sleeve Patches (+$5.00)
            </div>
          </div>
          <button
            onClick={() => setAddBadges(!addBadges)}
            className={`w-12 h-6 rounded-full transition-colors relative ${addBadges ? "bg-primary" : "bg-gray-200"}`}
          >
            <div
              className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${addBadges ? "right-1" : "left-1"}`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
