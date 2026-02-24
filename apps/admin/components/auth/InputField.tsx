import React from "react";

interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  icon: React.ReactNode;
  autoComplete?: string;
  isPassword?: boolean;
  showPw?: boolean;
  togglePw?: () => void;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  icon,
  autoComplete,
  isPassword,
  showPw,
  togglePw,
  required = true,
}) => {
  return (
    <div className="group relative">
      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8] transition-all duration-200 group-focus-within:scale-105 group-focus-within:text-primary">
        {icon}
      </span>
      <input
        id={id}
        type={isPassword ? (showPw ? "text" : "password") : type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        aria-label={label}
        autoComplete={autoComplete}
        className={`w-full rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] py-2 pl-9 text-sm text-secondary placeholder-[#94A3B8] outline-none transition-all duration-200 hover:border-[#CBD5E1] focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5 ${
          isPassword ? "pr-9" : "pr-4"
        }`}
      />
      {isPassword && togglePw && (
        <button
          type="button"
          onClick={togglePw}
          aria-label={showPw ? "Hide password" : "Show password"}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 rounded-lg p-1 text-[#94A3B8] transition-colors hover:bg-[#F1F5F9] hover:text-[#475569] focus:outline-none"
        >
          {showPw ? (
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
              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
              <line x1="1" y1="1" x2="23" y2="23" />
            </svg>
          ) : (
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
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          )}
        </button>
      )}
    </div>
  );
};

export default InputField;
