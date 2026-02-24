"use client";

import React, { useState, useMemo } from "react";
import { products as allProducts } from "@/data/mockData";
import { ProductHeader } from "@/components/dashboard/products/ProductHeader";
import { ProductFilters } from "@/components/dashboard/products/ProductFilters";
import { ProductTable } from "@/components/dashboard/products/ProductTable";
import { ProductMobileCards } from "@/components/dashboard/products/ProductMobileCards";
import { Pagination } from "@/components/dashboard/products/Pagination";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [stockFilter, setStockFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 6;

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        categoryFilter === "All" || product.category === categoryFilter;

      const matchesStock =
        stockFilter === "All" || product.status === stockFilter;

      return matchesSearch && matchesCategory && matchesStock;
    });
  }, [searchQuery, categoryFilter, stockFilter]);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * resultsPerPage;
    return filteredProducts.slice(start, start + resultsPerPage);
  }, [filteredProducts, currentPage]);

  return (
    <div className="space-y-6">
      <ProductHeader onAddProduct={() => console.log("Add Product")} />

      <ProductFilters
        searchQuery={searchQuery}
        onSearchChange={(q) => {
          setSearchQuery(q);
          setCurrentPage(1);
        }}
        categoryFilter={categoryFilter}
        onCategoryChange={(c) => {
          setCategoryFilter(c);
          setCurrentPage(1);
        }}
        stockFilter={stockFilter}
        onStockChange={(s) => {
          setStockFilter(s);
          setCurrentPage(1);
        }}
        onExport={() => console.log("Export")}
      />

      <ProductTable
        products={paginatedProducts}
        onEdit={(p) => console.log("Edit", p)}
        onDelete={(p) => console.log("Delete", p)}
      />

      <ProductMobileCards
        products={paginatedProducts}
        onEdit={(p) => console.log("Edit", p)}
        onDelete={(p) => console.log("Delete", p)}
      />

      <Pagination
        currentPage={currentPage}
        totalResults={filteredProducts.length}
        resultsPerPage={resultsPerPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
