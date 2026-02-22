import { ProductCardProps } from "./product";

export interface CartCustomization {
  number?: { value: string; price: number };
  name?: { value: string; price: number };
  patch?: { value: string; price: number };
}

export interface CartItem extends ProductCardProps {
  selectedSize: string;
  quantity: number;
  customizations?: CartCustomization;
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
  subtotal: number;
  total: number;
}
