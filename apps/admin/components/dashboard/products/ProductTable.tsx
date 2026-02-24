import React from "react";
import { EditIcon, TrashIcon } from "@/components/dashboard/DashboardIcons";
import { Product } from "@/data/mockData";

interface ProductTableProps {
  products: Product[];
  onEdit?: (product: Product) => void;
  onDelete?: (product: Product) => void;
}

export const ProductTable = ({
  products,
  onEdit,
  onDelete,
}: ProductTableProps) => {
  return (
    <div className="hidden overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm ring-1 ring-black/5 md:block">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-[#E2E8F0] bg-[#F8FAFC]">
              <th className="px-6 py-4 text-[0.625rem] font-bold uppercase tracking-widest text-[#94A3B8]">
                Image
              </th>
              <th className="px-6 py-4 text-[0.625rem] font-bold uppercase tracking-widest text-[#94A3B8]">
                Product Name
              </th>
              <th className="px-6 py-4 text-[0.625rem] font-bold uppercase tracking-widest text-[#94A3B8]">
                Category
              </th>
              <th className="px-6 py-4 text-[0.625rem] font-bold uppercase tracking-widest text-[#94A3B8]">
                Era
              </th>
              <th className="px-6 py-4 text-[0.625rem] font-bold uppercase tracking-widest text-[#94A3B8]">
                Base Price
              </th>
              <th className="px-6 py-4 text-[0.625rem] font-bold uppercase tracking-widest text-[#94A3B8]">
                Stock Status
              </th>
              <th className="px-6 py-4 text-[0.625rem] font-bold uppercase tracking-widest text-[#94A3B8]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E2E8F0]">
            {products.map((product) => (
              <tr
                key={product.id}
                className="group hover:bg-[#F8FAFC]/50 transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="h-12 w-12 overflow-hidden rounded-lg border border-[#E2E8F0] bg-white shadow-sm transition-transform group-hover:scale-110">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-secondary group-hover:text-primary transition-colors">
                      {product.name}
                    </span>
                    <span className="text-[0.6875rem] font-medium text-[#94A3B8]">
                      SKU: {product.sku}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[0.625rem] font-bold ring-1 backdrop-blur-sm ${
                      product.category === "Club"
                        ? "bg-primary/10 text-primary ring-primary/20"
                        : "bg-purple-50 text-purple-600 ring-purple-100"
                    }`}
                  >
                    {product.category}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-[#64748B]">
                  {product.era}
                </td>
                <td className="px-6 py-4 text-sm font-bold text-secondary">
                  ${product.price.toFixed(2)}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.625rem] font-bold ring-1 ${
                      product.status === "In Stock"
                        ? "bg-emerald-50 text-emerald-600 ring-emerald-100"
                        : product.status === "Low Stock"
                          ? "bg-amber-50 text-amber-600 ring-amber-100"
                          : "bg-red-50 text-red-600 ring-red-100"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        product.status === "In Stock"
                          ? "bg-emerald-500"
                          : product.status === "Low Stock"
                            ? "bg-amber-500"
                            : "bg-red-500"
                      }`}
                    />
                    {product.status} ({product.stock})
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onEdit?.(product)}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E2E8F0] bg-white text-[#94A3B8] transition-all hover:border-primary/20 hover:bg-[#F8FAFC] hover:text-primary hover:shadow-sm"
                    >
                      <EditIcon size={14} />
                    </button>
                    <button
                      onClick={() => onDelete?.(product)}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E2E8F0] bg-white text-[#94A3B8] transition-all hover:border-red-100 hover:bg-red-50 hover:text-red-500 hover:shadow-sm"
                    >
                      <TrashIcon size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
