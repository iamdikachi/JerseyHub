const tagStyles = {
  sale: "bg-accent",
  retro: "bg-[#1C1C1E]",
  customizable: "bg-white text-secondary border border-gray-200",
};

interface ProductCardProps {
  name: string;
  price: string;
  season?: string;
  tag?: string;
  image: string;
  tagType?: "sale" | "retro" | "customizable";
}

export default function ProductCard({
  name,
  price,
  season,
  tag,
  image,
  tagType,
}: ProductCardProps) {
  return (
    <div className="flex flex-col gap-3 cursor-pointer group">
      <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="w-[90%] h-[90%] object-contain transition-transform duration-300 group-hover:scale-108"
        />
        {tag && (
          <span
            className={`absolute top-3 left-3 px-2 py-1 text-[0.625rem] font-bold uppercase tracking-wider rounded-[2px] flex items-center gap-1 leading-none ${tagStyles[tagType || "sale"]}`}
          >
            {tagType === "customizable" && (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
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
            <span
              className={
                tagType === "customizable" ? "text-secondary" : "text-white"
              }
            >
              {tag}
            </span>
          </span>
        )}
      </div>
      <div className="flex flex-col gap-[2px]">
        <div className="flex justify-between items-start">
          <h3 className="text-[1rem] font-semibold text-secondary">{name}</h3>
          <span className="text-[1rem] font-bold text-primary">{price}</span>
        </div>
        <p className="text-[0.8125rem] text-gray-400">{season}</p>
      </div>
    </div>
  );
}
