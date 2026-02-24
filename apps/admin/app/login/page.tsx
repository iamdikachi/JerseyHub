"use client";

import React from "react";
import LoginForm from "@/components/auth/LoginForm";
import { ShieldIcon } from "@/components/auth/AuthIcons";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleToggleRegister = () => {
    router.push("/register");
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-[#F8FAFC] px-4 py-4 selection:bg-primary/10 selection:text-primary">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-[5%] -left-[5%] h-[20%] w-[30%] rounded-full bg-primary/5 blur-[60px]" />
        <div className="absolute -bottom-[5%] -right-[5%] h-[20%] w-[30%] rounded-full bg-accent/5 blur-[60px]" />
      </div>

      <div className="relative z-10 w-full max-w-[380px]">
        {/* ── Brand ── */}
        <div className="mb-4 flex flex-col items-center text-center">
          <div className="group mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-[#E2E8F0] transition-all duration-300 hover:shadow-md">
            <div className="flex h-7 w-7 items-center justify-center rounded bg-primary shadow-sm transition-transform duration-300 group-hover:scale-110">
              <ShieldIcon size={16} />
            </div>
          </div>
          <h1 className="text-lg font-bold tracking-tight text-secondary">
            JerseyHub Admin
          </h1>
          <div className="mt-1 flex items-center gap-1.5 rounded-full border border-primary/10 bg-primary/5 px-2 py-0.5 text-[0.625rem] font-bold uppercase tracking-wider text-primary">
            <span className="relative flex h-1 w-1">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-1 w-1 rounded-full bg-primary"></span>
            </span>
            Secure
          </div>
        </div>

        {/* ── Card ── */}
        <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-1 shadow-sm ring-1 ring-black/2">
          <div className="px-6 py-6 sm:px-8">
            <LoginForm onToggleRegister={handleToggleRegister} />
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="mt-4 flex items-center justify-center gap-4 text-[0.625rem] font-bold uppercase tracking-widest text-[#94A3B8]">
          <span className="opacity-80 transition-opacity hover:opacity-100">
            AES-256
          </span>
          <span className="opacity-80 transition-opacity hover:opacity-100">
            SSL
          </span>
        </div>
      </div>
    </div>
  );
}
