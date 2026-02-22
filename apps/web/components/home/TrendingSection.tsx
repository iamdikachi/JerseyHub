import { homeProducts as products } from "../../data/product";
import ProductCard from "../product/ProductCard";



export default function TrendingSection() {
  return (
    <section className="container mb-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[1.5rem] font-black text-secondary tracking-tight">
          Trending Now
        </h2>
        <a
          href="/jerseys"
          className="flex items-center gap-1 text-[0.875rem] font-bold text-primary hover:underline transition-all"
        >
          View all jerseys
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M6 12L10 8L6 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-4 gap-y-8">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
}
