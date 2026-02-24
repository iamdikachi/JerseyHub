import React from "react";

interface PaginationProps {
  currentPage: number;
  totalResults: number;
  resultsPerPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  currentPage,
  totalResults,
  resultsPerPage,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalResults / resultsPerPage);
  const startResult = (currentPage - 1) * resultsPerPage + 1;
  const endResult = Math.min(currentPage * resultsPerPage, totalResults);

  return (
    <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-6 py-4 shadow-sm sm:flex-row">
      <p className="text-[0.6875rem] font-bold text-[#94A3B8] uppercase tracking-widest">
        Showing{" "}
        <span className="text-secondary">
          {startResult} to {endResult}
        </span>{" "}
        of <span className="text-secondary">{totalResults}</span> results
      </p>
      <div className="flex items-center gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E2E8F0] bg-white text-[#94A3B8] transition-all hover:bg-[#F8FAFC] disabled:opacity-50"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <div className="flex items-center gap-1">
          {[...Array(Math.min(totalPages, 3))].map((_, i) => {
            const pageNum = i + 1;
            return (
              <button
                key={pageNum}
                onClick={() => onPageChange(pageNum)}
                className={`h-8 w-8 rounded-lg text-xs font-bold transition-all ${
                  currentPage === pageNum
                    ? "bg-primary text-white shadow-sm"
                    : "text-[#64748B] hover:bg-[#F1F5F9]"
                }`}
              >
                {pageNum}
              </button>
            );
          })}
          {totalPages > 3 && <span className="px-1 text-[#94A3B8]">...</span>}
          {totalPages > 3 && (
            <button
              onClick={() => onPageChange(totalPages)}
              className={`h-8 w-8 rounded-lg text-xs font-bold transition-all ${
                currentPage === totalPages
                  ? "bg-primary text-white shadow-sm"
                  : "text-[#64748B] hover:bg-[#F1F5F9]"
              }`}
            >
              {totalPages}
            </button>
          )}
        </div>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E2E8F0] bg-white text-[#94A3B8] transition-all hover:bg-[#F8FAFC] disabled:opacity-50"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
};
