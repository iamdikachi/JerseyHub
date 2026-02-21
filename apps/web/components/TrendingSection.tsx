import ProductCard from "./ProductCard";

const products = [
  {
    name: "Real Madrid Home",
    price: "$89.99",
    season: "23/24 Season",
    tag: "Customizable",
    tagType: "customizable" as const,
    image:
      "https://cdn.shopify.com/s/files/1/0663/7571/9165/files/RM_HOME_23-24.png?v=1686737213",
  },
  {
    name: "AC Milan Classic",
    price: "$110.00",
    season: "1990 Era",
    tag: "Retro",
    tagType: "retro" as const,
    image:
      "https://cdn.shopify.com/s/files/1/2569/1880/products/Milan_1990_Home.png?v=1602164414",
  },
  {
    name: "Brazil Home",
    price: "$95.00",
    season: "World Cup Edition",
    tag: "Customizable",
    tagType: "customizable" as const,
    image:
      "https://cdn.shopify.com/s/files/1/0014/1931/3201/products/Brazil_2022_Home_copy.png?v=1661175654",
  },
  {
    name: "Chelsea Away",
    price: "$69.99",
    season: "23/24 Season",
    tag: "Sale",
    tagType: "sale" as const,
    image:
      "https://cdn.shopify.com/s/files/1/0663/7571/9165/files/CH_AWAY_23-24.png?v=1686737213",
  },
];

export default function TrendingSection() {
  return (
    <section className="container mb-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[1.5rem] text-secondary">Trending Now</h2>
        <a
          href="/all"
          className="flex items-center gap-1 text-[0.875rem] font-semibold text-primary hover:underline"
        >
          View all
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
