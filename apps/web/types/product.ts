export interface ProductCardProps {
  name: string;
  price: string;
  season?: string;
  tag?: string;
  image: string;
  tagType?:
    | "sale"
    | "retro"
    | "customizable"
    | "new"
    | "bestseller"
    | "limited";
  colors?: string[];
}