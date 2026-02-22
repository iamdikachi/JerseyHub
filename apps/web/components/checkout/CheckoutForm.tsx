"use client";

import { useState } from "react";

export default function CheckoutForm() {
  const [formData, setFormData] = useState({
    email: "",
    emailUpdates: false,
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    country: "United States",
    postalCode: "",
    phone: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
    nameOnCard: "",
    billingSameAsShipping: true,
  });

  const Input = ({
    label,
    placeholder,
    name,
    span = 1,
  }: {
    label: string;
    placeholder: string;
    name: string;
    span?: number;
  }) => (
    <div className={span === 1 ? "col-span-1" : "col-span-2"}>
      <label className="text-[0.75rem] font-bold text-secondary mb-2 block uppercase tracking-wider">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-14 bg-white border border-gray-100 rounded-xl px-5 text-[0.9375rem] font-medium text-secondary focus:outline-none focus:border-primary transition-all placeholder:text-gray-200"
        value={(formData as any)[name]}
        onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
      />
    </div>
  );

  return (
    <div className="flex flex-col gap-12 max-w-[640px]">
      {/* Guest Checkout Banner */}
      <div className="bg-[#EEF4FF] border border-[#D9E6FF] rounded-2xl p-6 flex items-start gap-4">
        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-none">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <div>
          <h4 className="text-[0.9375rem] font-black text-secondary">
            Guest Checkout
          </h4>
          <p className="text-[0.8125rem] text-primary/70 font-medium">
            No account required. Proceed securely below.
          </p>
        </div>
      </div>

      {/* 1. Contact Information */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-[0.875rem] font-black flex-none">
            1
          </div>
          <h2 className="text-[1.25rem] font-bold text-secondary">
            Contact Information
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <Input
            label="Email Address"
            placeholder="you@example.com"
            name="email"
            span={2}
          />
          <div className="col-span-2 flex items-center gap-3">
            <input
              type="checkbox"
              id="updates"
              className="w-5 h-5 rounded-md border-gray-200 text-primary focus:ring-primary"
              checked={formData.emailUpdates}
              onChange={(e) =>
                setFormData({ ...formData, emailUpdates: e.target.checked })
              }
            />
            <label
              htmlFor="updates"
              className="text-[0.875rem] font-medium text-gray-500"
            >
              Email me with news and jersey drops
            </label>
          </div>
        </div>
      </section>

      {/* 2. Shipping Address */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-[0.875rem] font-black flex-none">
            2
          </div>
          <h2 className="text-[1.25rem] font-bold text-secondary">
            Shipping Address
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <Input label="First Name" placeholder="" name="firstName" />
          <Input label="Last Name" placeholder="" name="lastName" />
          <Input
            label="Address"
            placeholder="Street address"
            name="address"
            span={2}
          />
          <Input
            label="Apartment, suite, etc. (optional)"
            placeholder=""
            name="apartment"
            span={2}
          />
          <Input label="City" placeholder="" name="city" />
          <div className="col-span-1">
            <label className="text-[0.75rem] font-bold text-secondary mb-2 block uppercase tracking-wider">
              Country
            </label>
            <div className="relative">
              <select
                className="w-full h-14 bg-white border border-gray-100 rounded-xl px-5 text-[0.9375rem] font-medium text-secondary focus:outline-none focus:border-primary transition-all appearance-none"
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
              >
                <option>United States</option>
                <option>Nigeria</option>
                <option>United Kingdom</option>
                <option>France</option>
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </div>
          </div>
          <Input label="Postal Code" placeholder="" name="postalCode" />
          <Input
            label="Phone"
            placeholder="For shipping updates"
            name="phone"
          />
        </div>
      </section>

      {/* 3. Payment */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-[0.875rem] font-black flex-none">
            3
          </div>
          <h2 className="text-[1.25rem] font-bold text-secondary">Payment</h2>
        </div>

        <div className="bg-white border border-gray-100 rounded-3xl p-8 flex flex-col gap-8 shadow-sm">
          <div className="flex justify-between items-center">
            <h3 className="text-[1rem] font-bold text-secondary">
              Credit Card
            </h3>
            <div className="flex gap-2">
              <div className="w-10 h-6 bg-gray-50 rounded border border-gray-100 flex items-center justify-center">
                <span className="text-[0.625rem] font-black italic text-gray-300">
                  VISA
                </span>
              </div>
              <div className="w-10 h-6 bg-gray-50 rounded border border-gray-100 flex items-center justify-center">
                <span className="text-[0.625rem] font-black italic text-gray-300">
                  MC
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2">
              <label className="text-[0.75rem] font-bold text-secondary mb-2 block uppercase tracking-wider">
                Card number
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="0000 0000 0000 0000"
                  className="w-full h-14 bg-white border border-gray-100 rounded-xl px-12 text-[0.9375rem] font-medium text-secondary focus:outline-none focus:border-primary transition-all placeholder:text-gray-200"
                  value={formData.cardNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, cardNumber: e.target.value })
                  }
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                    <line x1="1" y1="10" x2="23" y2="10" />
                  </svg>
                </div>
              </div>
            </div>

            <Input
              label="Expiration (MM/YY)"
              placeholder="MM / YY"
              name="expiry"
            />
            <div className="col-span-1">
              <label className="text-[0.75rem] font-bold text-secondary mb-2 block uppercase tracking-wider">
                CVC
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="123"
                  className="w-full h-14 bg-white border border-gray-100 rounded-xl px-5 pr-12 text-[0.9375rem] font-medium text-secondary focus:outline-none focus:border-primary transition-all placeholder:text-gray-200"
                  value={formData.cvc}
                  onChange={(e) =>
                    setFormData({ ...formData, cvc: e.target.value })
                  }
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                </div>
              </div>
            </div>

            <Input
              label="Name on card"
              placeholder=""
              name="nameOnCard"
              span={2}
            />

            <div className="col-span-2 flex items-center gap-3 pt-2">
              <input
                type="checkbox"
                id="billing"
                className="w-5 h-5 rounded-md border-gray-200 text-primary focus:ring-primary"
                checked={formData.billingSameAsShipping}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    billingSameAsShipping: e.target.checked,
                  })
                }
              />
              <label
                htmlFor="billing"
                className="text-[0.875rem] font-medium text-gray-500"
              >
                Billing address same as shipping
              </label>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
