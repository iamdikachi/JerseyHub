"use client";

import { useCart } from "../context/CartContext";
import Link from "next/link";

export default function Header() {
  const { openCart, itemCount } = useCart();

  return (
    <header className="h-[72px] bg-white border-b border-gray-200 sticky top-0 z-[1000] flex items-center">
      <div className="container flex items-center justify-between w-full">
        <div className="flex-none">
          <Link
            href="/"
            className="flex items-center gap-2 font-heading font-extrabold text-[1.25rem] text-secondary"
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-normal">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                <path d="M12 2L14.5 9H12L12 2Z" fill="white" />
                <path d="M12 22L9.5 15H12L12 22Z" fill="white" />
                <path d="M22 12L15 9.5V12L22 12Z" fill="white" />
                <path d="M2 12L9 14.5V12L2 12Z" fill="white" />
                <path
                  d="M7.5 4.5L12 9L16.5 4.5"
                  stroke="white"
                  strokeWidth="2"
                />
                <path
                  d="M7.5 19.5L12 15L16.5 19.5"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <span>JerseyHub</span>
          </Link>
        </div>

        <div className="hidden md:flex flex-1 items-center gap-8 justify-center px-8">
          <div className="relative w-full max-w-[400px]">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 flex pointer-events-none">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                  stroke="#86868B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 19L14.65 14.65"
                  stroke="#86868B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search for teams, players, or eras..."
              className="w-full py-2 pl-10 pr-4 bg-gray-100 border border-transparent rounded-md text-[0.875rem] text-secondary focus:outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-150"
            />
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            <Link
              href="/jerseys"
              className="text-[0.875rem] font-medium text-gray-500 hover:text-primary transition-colors duration-150"
            >
              Clubs
            </Link>
            <Link
              href="/jerseys"
              className="text-[0.875rem] font-medium text-gray-500 hover:text-primary transition-colors duration-150"
            >
              Countries
            </Link>
            <Link
              href="/jerseys"
              className="text-[0.875rem] font-medium text-gray-500 hover:text-primary transition-colors duration-150"
            >
              Vintage
            </Link>
            <Link
              href="#"
              className="text-[0.875rem] font-medium text-gray-500 hover:text-primary transition-colors duration-150"
            >
              Track Order
            </Link>
          </nav>
        </div>

        <div className="flex-none flex items-center h-full">
          <div className="hidden md:flex items-center gap-4 mr-4">
            <div className="flex flex-col items-end text-right">
              <span className="text-[0.625rem] font-bold text-gray-400 tracking-wider">
                SESSION
              </span>
              <span className="text-[0.75rem] font-semibold text-secondary">
                Guest User
              </span>
            </div>
          </div>

          <div className="flex items-center h-[72px]">
            <div className="w-[1px] h-8 bg-gray-100 mx-2"></div>

            <button
              onClick={openCart}
              className="relative w-10 h-10 flex items-center justify-center rounded-md text-secondary hover:bg-gray-100 hover:text-primary transition-all duration-150"
            >
              <svg
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {itemCount > 0 && (
                <div className="absolute top-1.5 right-1.5 w-3.5 h-3.5 bg-primary border-2 border-white rounded-full flex items-center justify-center text-[0.5rem] font-bold text-white">
                  {itemCount}
                </div>
              )}
            </button>

            <button className="w-10 h-10 flex items-center justify-center text-secondary hover:bg-gray-100 rounded-md ml-1 lg:hidden">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12H21M3 6H21M3 18H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
