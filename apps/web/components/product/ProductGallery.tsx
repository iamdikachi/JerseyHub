"use client";

import { useState } from "react";

interface ProductGalleryProps {
  images: string[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-square bg-gray-100 rounded-3xl overflow-hidden flex items-center justify-center p-8">
        <img
          src={images[activeImage]}
          alt="Product"
          className="w-full h-full object-contain"
        />
        <div className="absolute top-6 left-6">
          <span className="bg-[#1C1C1E] text-white text-[0.7rem] font-bold px-3 py-1.5 rounded-sm uppercase tracking-wider">
            Best Seller
          </span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveImage(idx)}
            className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all ${
              activeImage === idx
                ? "border-primary"
                : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <img
              src={img}
              alt={`Thumb ${idx}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
        {/* Placeholder for Video */}
        <button className="aspect-square rounded-2xl bg-gray-50 flex items-center justify-center border-2 border-transparent opacity-60 hover:opacity-100">
          <div className="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M8 5v14l11-7z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}
