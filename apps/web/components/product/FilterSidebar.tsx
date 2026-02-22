export default function FilterSidebar() {
  return (
    <aside className="w-64 flex-none hidden lg:flex flex-col gap-8">
      {/* Categories */}
      <div>
        <h3 className="text-[1rem] font-bold text-secondary mb-4">
          Categories
        </h3>
        <div className="flex flex-col gap-3">
          {[
            { label: "Club Teams", checked: true },
            { label: "National Teams", checked: false },
            { label: "Training Wear", checked: false },
          ].map((cat) => (
            <label
              key={cat.label}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <div className="relative flex items-center justify-center">
                <input
                  type="checkbox"
                  defaultChecked={cat.checked}
                  className="peer appearance-none w-5 h-5 border-2 border-gray-200 rounded-[4px] checked:bg-primary checked:border-primary transition-all cursor-pointer"
                />
                <svg
                  className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-[0.9375rem] text-secondary font-medium group-hover:text-primary transition-colors">
                {cat.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Gender */}
      <div>
        <h3 className="text-[1rem] font-bold text-secondary mb-4">Gender</h3>
        <div className="flex flex-wrap gap-2">
          {["Men", "Women", "Kids"].map((g) => (
            <button
              key={g}
              className={`px-5 py-2 rounded-full text-[0.8125rem] font-bold transition-all border ${
                g === "Men"
                  ? "bg-primary border-primary text-white shadow-md shadow-blue-200"
                  : "bg-white border-gray-200 text-secondary hover:border-primary hover:text-primary"
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      <div className="h-px bg-gray-100" />

      {/* Era */}
      <div>
        <h3 className="text-[1rem] font-bold text-secondary mb-4">Era</h3>
        <div className="flex flex-col gap-3.5">
          {[
            { label: "Current Season (24/25)", checked: true },
            { label: "Last Season (23/24)", checked: false },
            { label: "Vintage / Retro", checked: false },
          ].map((era) => (
            <label
              key={era.label}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <div className="relative flex items-center justify-center">
                <input
                  type="radio"
                  name="era"
                  defaultChecked={era.checked}
                  className="peer appearance-none w-5 h-5 border-2 border-gray-200 rounded-full checked:border-primary transition-all cursor-pointer"
                />
                <div className="absolute w-2.5 h-2.5 bg-primary rounded-full opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" />
              </div>
              <span className="text-[0.9375rem] text-secondary font-medium group-hover:text-primary transition-colors">
                {era.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="h-px bg-gray-100" />

      {/* Price */}
      <div>
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-[1rem] font-bold text-secondary">Price</h3>
          <span className="text-[0.875rem] font-bold text-primary">
            $0 - $200
          </span>
        </div>
        <div className="relative h-1.5 bg-gray-100 rounded-full mt-6 px-1">
          <div className="absolute left-1 right-1/4 h-full bg-primary rounded-full" />
          <div className="absolute left-[45%] -top-2 w-5 h-5 bg-white border-4 border-primary rounded-full shadow-lg cursor-pointer transform -translate-x-1/2" />
        </div>
        <div className="flex justify-between mt-5">
          <span className="text-[0.75rem] font-medium text-gray-400">$0</span>
          <span className="text-[0.75rem] font-medium text-gray-400">
            $200+
          </span>
        </div>
      </div>

      <div className="h-px bg-gray-100" />

      {/* Size */}
      <div>
        <h3 className="text-[1rem] font-bold text-secondary mb-4">Size</h3>
        <div className="grid grid-cols-4 gap-2">
          {["XS", "S", "M", "L", "XL", "2XL"].map((size) => (
            <button
              key={size}
              className={`h-11 rounded-lg text-[0.8125rem] font-bold border transition-all ${
                size === "M"
                  ? "bg-[#EBF2FF] border-primary text-primary shadow-sm"
                  : "bg-white border-gray-100 text-secondary hover:border-primary hover:text-primary"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
