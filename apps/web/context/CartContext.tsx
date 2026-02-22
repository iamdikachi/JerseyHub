"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { CartItem, CartCustomization } from "../types/cart";
import { ProductCardProps } from "../types/product";

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (
    product: ProductCardProps,
    size: string,
    customizations?: CartCustomization,
  ) => void;
  removeItem: (id: string, size: string) => void;
  updateQuantity: (id: string, size: string, quantity: number) => void;
  subtotal: number;
  total: number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const addItem = (
    product: ProductCardProps,
    size: string,
    customizations?: CartCustomization,
  ) => {
    setItems((prev) => {
      const existingItem = prev.find(
        (item) => item.id === product.id && item.selectedSize === size,
      );
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id && item.selectedSize === size
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [
        ...prev,
        { ...product, selectedSize: size, quantity: 1, customizations },
      ];
    });
    setIsOpen(true);
  };

  const removeItem = (id: string, size: string) => {
    setItems((prev) =>
      prev.filter((item) => !(item.id === id && item.selectedSize === size)),
    );
  };

  const updateQuantity = (id: string, size: string, quantity: number) => {
    if (quantity < 1) return;
    setItems((prev) =>
      prev.map((item) =>
        item.id === id && item.selectedSize === size
          ? { ...item, quantity }
          : item,
      ),
    );
  };

  const subtotal = items.reduce((acc, item) => {
    let itemPrice = item.price;
    if (item.customizations) {
      if (item.customizations.name) itemPrice += item.customizations.name.price;
      if (item.customizations.number)
        itemPrice += item.customizations.number.price;
      if (item.customizations.patch)
        itemPrice += item.customizations.patch.price;
    }
    return acc + itemPrice * item.quantity;
  }, 0);

  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const total = subtotal; // Simplified for now, can add shipping logic later

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        addItem,
        removeItem,
        updateQuantity,
        subtotal,
        total,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
