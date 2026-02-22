import { ProductCardProps } from "../../types/product";




const tagStyles = {
  sale: "bg-accent text-white",
  retro: "bg-[#1C1C1E] text-white",
  customizable: "bg-white text-secondary border border-gray-200",
  new: "bg-[#1C1C1E] text-white",
  bestseller: "bg-[#FF3B30] text-white",
  limited: "bg-[#0A0A0A] text-white",
};



export default function ProductCard({
  name,
  price,
  season,
  tag,
  image,
  tagType,
  colors,
}: ProductCardProps) {
  return (
    <div className="flex flex-col gap-3 cursor-pointer group">
      <div className="relative aspect-square bg-[#F5F5F7] rounded-lg overflow-hidden flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="w-[85%] h-[85%] object-contain transition-transform duration-500 group-hover:scale-110"
        />
        {tag && (
          <span
            className={`absolute top-3 left-3 px-2 py-1 text-[0.625rem] font-bold uppercase tracking-wider rounded-sm flex items-center gap-1 leading-none ${
              tagStyles[tagType || "sale"]
            }`}
          >
            {tagType === "customizable" && (
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <path
                  d="M1 9.5V11H2.5L8.5 5L7 3.5L1 9.5Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.5 4L8 1.5L9.5 0.5C10 0 11 0 11.5 0.5C12 1 12 2 11.5 2.5L10.5 4Z"
                  fill="currentColor"
                />
              </svg>
            )}
            <span>{tag}</span>
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1 px-1">
        <p className="text-[0.6875rem] font-medium text-gray-400 uppercase tracking-tight">
          {season}
        </p>
        <h3 className="text-[0.9375rem] font-bold text-secondary leading-tight">
          {name}
        </h3>
        <div className="flex justify-between items-center mt-1">
          <span className="text-[0.9375rem] font-extrabold text-secondary">
            {price}
          </span>
          {colors && colors.length > 0 && (
            <div className="flex gap-1.5">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className="w-2.5 h-2.5 rounded-full border border-gray-200"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
