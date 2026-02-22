import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ProductGallery from "../../../components/product/ProductGallery";
import CustomizationSection from "../../../components/product/CustomizationSection";
import ProductCard from "../../../components/product/ProductCard";
import { products } from "../../../data/product";
import Link from "next/link";

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = products.find((p) => p.id === "arsenal-03-04"); // Fallback for demo

  if (!product) return <div>Product not found</div>;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container py-8 lg:py-12">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[0.8125rem] text-gray-400 mb-8 opacity-70">
          <Link href="/" className="hover:text-primary transition-all">
            Home
          </Link>
          <span>/</span>
          <Link href="/jerseys" className="hover:text-primary transition-all">
            Premier League
          </Link>
          <span>/</span>
          <span className="text-secondary font-bold">Arsenal 03/04</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          <ProductGallery images={product.gallery} />

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-[2rem] lg:text-[2.75rem] font-black text-secondary leading-tight tracking-[0.01em]">
                {product.name}
              </h1>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-[2.25rem] font-black text-secondary tracking-tight">
                    ${product.price.toFixed(2)}
                  </span>
                  <div className="bg-[#EBFDF5] text-[#10B981] text-[0.75rem] font-bold px-3 py-1 rounded-full border border-[#D1FAE5]">
                    In Stock
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#FFB800"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-[0.9375rem] font-bold text-secondary">
                    {product.rating}
                  </span>
                  <span className="text-[0.875rem] text-gray-400 font-medium">
                    ({product.reviewsCount} reviews)
                  </span>
                </div>
              </div>
            </div>

            <p className="text-[1.0625rem] text-gray-500 leading-relaxed font-medium">
              {product.description}
            </p>

            {/* Size Selector */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <div className="text-[1rem] font-bold text-secondary">
                  Select Size
                </div>
                <button className="text-[0.875rem] font-bold text-primary flex items-center gap-1.5">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="7" width="20" height="10" rx="2" />
                    <path d="M7 7v10M12 7v10M17 7v10" />
                  </svg>
                  Size Guide
                </button>
              </div>
              <div className="grid grid-cols-5 gap-3">
                {product.availableSizes.map((size) => (
                  <button
                    key={size.value}
                    disabled={size.stock === 0}
                    className={`relative h-14 rounded-xl text-[0.9375rem] font-black border transition-all ${
                      size.stock === 0
                        ? "bg-gray-50 border-gray-100 text-gray-200 cursor-not-allowed italic"
                        : size.value === "m"
                          ? "bg-[#EBF2FF] border-primary text-primary shadow-sm"
                          : "bg-white border-gray-200 text-secondary hover:border-primary hover:text-primary"
                    }`}
                  >
                    {size.label}
                    {size.isPopular && (
                      <div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-primary text-white text-[0.625rem] flex items-center justify-center rounded-full font-bold">
                        1
                      </div>
                    )}
                    {size.stock === 0 && (
                      <div className="absolute inset-0 bg-transparent flex items-center justify-center">
                        <div className="w-full h-px bg-gray-200 rotate-45" />
                        <div className="w-full h-px bg-gray-200 -rotate-45" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <CustomizationSection />

            <button className="w-full h-16 bg-primary text-white font-black text-[1.125rem] rounded-2xl flex items-center justify-between px-8 shadow-xl shadow-blue-200 hover:bg-primary-hover active:scale-[0.98] transition-all">
              <div className="flex items-center gap-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6z" />
                  <path d="M3 6h18M16 10a4 4 0 01-8 0" />
                </svg>
                Add to Cart
              </div>
              <span>${product.price.toFixed(2)}</span>
            </button>
            <p className="text-center text-[0.8125rem] text-gray-400 font-medium">
              Free shipping on orders over $100. 30-day returns.
            </p>
          </div>
        </div>

        {/* Similar Products */}
        <section className="border-t border-gray-100 pt-16">
          <h2 className="text-[2.25rem] font-black text-secondary mb-10 tracking-tight">
            You might also like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
