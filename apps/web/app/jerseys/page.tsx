import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FilterSidebar from "../../components/product/FilterSidebar";
import ProductCard from "../../components/product/ProductCard";
import { products } from "../../data/product";


export default function JerseysPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container py-8 lg:py-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[0.8125rem] text-gray-400 mb-8 px-1">
          <a href="/" className="hover:text-primary transition-all">
            Home
          </a>
          <span className="opacity-50">/</span>
          <span className="text-secondary font-semibold">All Jerseys</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Filters Sidebar */}
          <FilterSidebar />

          {/* Product Listing Section */}
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-10">
              <div>
                <h1 className="text-[2rem] lg:text-[2.75rem] font-black text-secondary tracking-tight leading-none mb-3">
                  All Football Jerseys
                </h1>
                <p className="text-[0.9375rem] text-gray-400 font-medium">
                  Showing 1-12 of 86 products
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[0.875rem] text-gray-400 font-semibold whitespace-nowrap">
                  Sort by:
                </span>
                <div className="relative group">
                  <select className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-2.5 pr-10 text-[0.875rem] font-bold text-secondary focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 cursor-pointer transition-all">
                    <option>Newest Arrivals</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Most Popular</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-hover:text-primary transition-colors">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2.5 4.5L6 8L9.5 4.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12">
              {products.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>

            {/* Pagination / Load More Section */}
            <div className="mt-20 flex flex-col items-center gap-8">
              <div className="w-full max-w-[340px] flex flex-col items-center gap-4">
                <p className="text-[0.875rem] text-gray-500 font-bold whitespace-nowrap">
                  Showing 6 of 86 products
                </p>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden p-0.5">
                  <div
                    className="h-full bg-primary rounded-full shadow-sm transition-all duration-700 ease-out"
                    style={{ width: "15%" }}
                  />
                </div>
              </div>
              <button className="px-12 py-4 bg-white border border-gray-200 text-secondary font-black rounded-xl hover:border-primary hover:text-primary hover:bg-gray-50 transition-all shadow-sm active:scale-95">
                Load More Jerseys
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
