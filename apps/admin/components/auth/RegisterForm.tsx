"use client";

import React, { useState } from "react";
import InputField from "./InputField";
import {
  EmailIcon,
  LockIcon,
  UserIcon,
  ArrowRightIcon,
  ShieldIcon,
} from "./AuthIcons";

interface RegisterFormProps {
  onSuccess?: () => void;
  onToggleLogin: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onToggleLogin }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [invitationCode, setInvitationCode] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Connect to auth API
    setTimeout(() => setLoading(false), 1800);
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-700">
      <div className="mb-4 overflow-hidden text-center">
        <h2 className="text-lg font-bold tracking-tight text-secondary">
          Register Account
        </h2>
        <p className="mt-0.5 text-[0.8125rem] font-medium text-[#64748B]">
          Enter details and secure code
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <InputField
          id="reg-name"
          label="Full Name"
          value={fullName}
          onChange={setFullName}
          placeholder="Full Name"
          icon={<UserIcon />}
          autoComplete="name"
        />

        <InputField
          id="reg-email"
          label="Work Email"
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="Work Email"
          icon={<EmailIcon />}
          autoComplete="email"
        />

        {/* Password row */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <InputField
            id="reg-password"
            label="Password"
            value={password}
            onChange={setPassword}
            placeholder="Password"
            icon={<LockIcon />}
            autoComplete="new-password"
            isPassword
            showPw={showPassword}
            togglePw={() => setShowPassword(!showPassword)}
          />
          <InputField
            id="reg-confirm-password"
            label="Confirm Password"
            value={confirmPassword}
            onChange={setConfirmPassword}
            placeholder="Confirm"
            icon={<LockIcon />}
            autoComplete="new-password"
            isPassword
            showPw={showConfirmPassword}
            togglePw={() => setShowConfirmPassword(!showConfirmPassword)}
          />
        </div>

        {/* Invitation Code box */}
        <div className="rounded-xl border border-[#DBEAFE] bg-[#F0F7FF] p-3 text-left ring-2 ring-[#F0F7FF]">
          <div className="mb-1.5 flex items-center gap-2">
            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-primary">
              <ShieldIcon size={12} color="white" opacity="0.8" />
            </div>
            <span className="text-[0.625rem] font-bold tracking-tight text-primary">
              INVITATION CODE
            </span>
          </div>
          <input
            id="invitationCode"
            type="text"
            value={invitationCode}
            onChange={(e) => setInvitationCode(e.target.value.toUpperCase())}
            placeholder="ENTER CODE"
            required
            className="w-full rounded-lg border border-[#BFDBFE] bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary placeholder-[#94A3B8] outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
        </div>

        <button
          id="register-submit"
          type="submit"
          disabled={loading}
          className="group mt-1 flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-2.5 text-[0.8125rem] font-bold text-white shadow-sm transition-all hover:bg-primary-hover hover:shadow-md active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? (
            <>
              <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              <span>Setting up...</span>
            </>
          ) : (
            <>
              <span>Initialize Account</span>
              <div className="transition-transform duration-200 group-hover:translate-x-1">
                <ArrowRightIcon size={14} />
              </div>
            </>
          )}
        </button>
      </form>

      <div className="mt-4 flex items-center gap-3">
        <div className="h-px flex-1 bg-[#E2E8F0]" />
        <span className="text-[0.625rem] font-bold uppercase tracking-widest text-[#94A3B8]">
          OR
        </span>
        <div className="h-px flex-1 bg-[#E2E8F0]" />
      </div>

      <button
        type="button"
        onClick={onToggleLogin}
        className="mt-3 w-full rounded-lg border border-[#E2E8F0] bg-white py-2 text-[0.75rem] font-bold text-[#475569] transition-all hover:border-[#CBD5E1] hover:bg-[#F8FAFC] active:scale-[0.98]"
      >
        Sign In Instead
      </button>
    </div>
  );
};

export default RegisterForm;
