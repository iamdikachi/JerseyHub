export type TagType = "sale" | "retro" | "customizable" | "new" | "bestseller" | "limited";

export interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  season?: string;
  tag?: string;
  image: string;
  tagType?: TagType;
  colors?: string[];
}

export interface SizeOption {
  value: string;
  stock: number;
  label: string;
  isPopular?: boolean;
}

export interface Product extends ProductCardProps {
  description: string;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  gallery: string[];
  features: string[];
  category: string;
  availableSizes: SizeOption[];
}