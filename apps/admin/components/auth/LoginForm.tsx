"use client";

import { useRouter } from "next/navigation";
import InputField from "./InputField";
import { EmailIcon, LockIcon, ArrowRightIcon } from "./AuthIcons";
import { useState } from "react";

interface LoginFormProps {
  onSuccess?: () => void;
  onToggleRegister: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onToggleRegister }) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setLoading(false);
    router.push("/dashboard");
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-700">
      <div className="mb-4 overflow-hidden">
        <h2 className="text-lg font-bold tracking-tight text-secondary">
          Welcome back
        </h2>
        <p className="mt-0.5 text-[0.8125rem] font-medium text-[#64748B]">
          Enter credentials to access account
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <InputField
          id="login-email"
          label="Email Address"
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="Email Address"
          icon={<EmailIcon />}
          autoComplete="email"
        />

        <InputField
          id="login-password"
          label="Password"
          value={password}
          onChange={setPassword}
          placeholder="Password"
          icon={<LockIcon />}
          autoComplete="current-password"
          isPassword
          showPw={showPassword}
          togglePw={() => setShowPassword(!showPassword)}
        />

        <div className="flex items-center justify-between">
          <label className="group flex cursor-pointer select-none items-center gap-2">
            <div className="relative flex h-3.5 w-3.5 items-center justify-center">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="peer h-3.5 w-3.5 cursor-pointer appearance-none rounded border border-[#CBD5E1] bg-[#F8FAFC] transition-all checked:border-primary checked:bg-primary focus:outline-none focus:ring-4 focus:ring-primary/5"
              />
              <svg
                className="pointer-events-none absolute hidden h-2.5 w-2.5 text-white peer-checked:block"
                viewBox="0 0 12 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1.5 5.5L4.5 8.5L10.5 1.5" />
              </svg>
            </div>
            <span className="text-[0.6875rem] font-medium text-[#64748B] transition-colors group-hover:text-[#334155]">
              Remember
            </span>
          </label>
          <a
            href="/forgot-password"
            className="text-[0.6875rem] font-semibold text-primary transition-colors hover:text-primary-hover"
          >
            Forgot?
          </a>
        </div>

        <button
          id="login-submit"
          type="submit"
          disabled={loading}
          className="group mt-1 flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-2.5 text-[0.8125rem] font-bold text-white shadow-sm transition-all hover:bg-primary-hover hover:shadow-md active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? (
            <>
              <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              <span>Authenticating...</span>
            </>
          ) : (
            <>
              <span>Sign In</span>
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
        onClick={onToggleRegister}
        className="mt-3 w-full rounded-lg border border-[#E2E8F0] bg-white py-2 text-[0.75rem] font-bold text-[#475569] transition-all hover:border-[#CBD5E1] hover:bg-[#F8FAFC] active:scale-[0.98]"
      >
        Request Access
      </button>
    </div>
  );
};

export default LoginForm;
