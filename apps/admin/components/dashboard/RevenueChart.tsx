"use client";

import React from "react";

export const RevenueChart = () => {
  return (
    <div className="relative h-full w-full">
      <svg
        viewBox="0 0 800 300"
        className="h-full w-full overflow-visible"
        preserveAspectRatio="none"
      >
        {/* Grid Lines */}
        {[0, 1, 2, 3].map((i) => (
          <line
            key={i}
            x1="0"
            y1={i * 100}
            x2="800"
            y2={i * 100}
            stroke="#F1F5F9"
            strokeWidth="1"
          />
        ))}

        {/* Gradient Area */}
        <defs>
          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          d="M0,250 C100,240 150,210 200,205 C250,200 300,260 350,230 C400,200 450,130 500,150 C550,170 600,180 650,150 C700,120 750,100 800,80 L800,300 L0,300 Z"
          fill="url(#chartGradient)"
        />

        {/* Main Line */}
        <path
          d="M0,250 C100,240 150,210 200,205 C250,200 300,260 350,230 C400,200 450,130 500,150 C550,170 600,180 650,150 C700,120 750,100 800,80"
          fill="none"
          stroke="#2563EB"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-in fade-in duration-1000"
        />

        {/* Data Points */}
        {[
          { x: 200, y: 205 },
          { x: 350, y: 230 },
          { x: 500, y: 150 },
          { x: 650, y: 150 },
          { x: 800, y: 80 },
        ].map((pt, i) => (
          <g key={i} className="group cursor-pointer">
            <circle
              cx={pt.x}
              cy={pt.y}
              r="6"
              fill="white"
              stroke="#2563EB"
              strokeWidth="2"
              className="transition-all duration-300 group-hover:r-8 group-hover:stroke-width-3"
            />
            {/* Tooltip highlight for specific point from screenshot ($42,500 at pt 500,150) */}
            {pt.x === 500 && (
              <g>
                <rect
                  x="470"
                  y="110"
                  width="60"
                  height="24"
                  rx="6"
                  fill="#0F172A"
                />
                <text
                  x="500"
                  y="126"
                  textAnchor="middle"
                  fill="white"
                  fontSize="10"
                  fontWeight="bold"
                >
                  $42,500
                </text>
                <line
                  x1="500"
                  y1="134"
                  x2="500"
                  y2="150"
                  stroke="#0F172A"
                  strokeWidth="1"
                />
              </g>
            )}
          </g>
        ))}
      </svg>
      {/* Legend / Info */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2 pt-4 text-[10px] font-bold text-[#94A3B8]">
        <span>WEEK 1</span>
        <span>WEEK 2</span>
        <span>WEEK 3</span>
        <span>WEEK 4</span>
      </div>
    </div>
  );
};
