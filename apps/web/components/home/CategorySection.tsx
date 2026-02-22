import { categories } from "../../data/category";

export default function CategorySection() {
  return (
    <section className="container mb-16">
      <h2 className="text-[1.5rem] mb-6 text-secondary">Shop by Category</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer bg-gray-100 group"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
              <h3 className="text-white text-[1.25rem] font-bold">
                {cat.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
