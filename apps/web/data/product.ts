import { Product, ProductCardProps } from "../types/product";

export const homeProducts: ProductCardProps[] = [
  {
    id: "rm-home-23",
    name: "Real Madrid Home",
    price: 89.99,
    season: "23/24 Season",
    tag: "Customizable",
    tagType: "customizable" as const,
    colors: ["#FFFFFF", "#001C48"],
    image:
      "https://cdn.shopify.com/s/files/1/0663/7571/9165/files/RM_HOME_23-24.png?v=1686737213",
  },
  {
    id: "ac-milan-90",
    name: "AC Milan Classic",
    price: 110.00,
    season: "1990 Era",
    tag: "Retro",
    tagType: "retro" as const,
    colors: ["#DA291C", "#000000"],
    image:
      "https://cdn.shopify.com/s/files/1/2569/1880/products/Milan_1990_Home.png?v=1602164414",
  },
  {
    id: "brazil-home-24",
    name: "Brazil Home",
    price: 95.00,
    season: "World Cup Edition",
    tag: "New Arrival",
    tagType: "new" as const,
    colors: ["#FFDC02", "#009B3A"],
    image:
      "https://cdn.shopify.com/s/files/1/0014/1931/3201/products/Brazil_2022_Home_copy.png?v=1661175654",
  },
  {
    id: "chelsea-away-23",
    name: "Chelsea Away",
    price: 69.99,
    season: "23/24 Season",
    tag: "Sale",
    tagType: "sale" as const,
    colors: ["#6CAEE0", "#FFFFFF"],
    image:
      "https://cdn.shopify.com/s/files/1/0663/7571/9165/files/CH_AWAY_23-24.png?v=1686737213",
  },
];

export const products: Product[] = [
  {
    id: "arsenal-03-04",
    name: "Arsenal 2003/04 Invincibles Vintage",
    price: 120.00,
    season: "Vintage Collection",
    tag: "Best Seller",
    tagType: "bestseller",
    description: "Relive history with this authentic replica of the 2003/04 home shirt. Worn by legends during the unbeaten Premier League season. Features vintage O2 sponsor branding and the classic gunner crest.",
    rating: 4.9,
    reviewsCount: 124,
    inStock: true,
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519315901367-f34ff9154487?q=80&w=800&auto=format&fit=crop",
    ],
    features: [
      "Official Premier League Badges available",
      "Breathable moisture-wicking fabric",
      "Embroidered club crest",
    ],
    category: "Vintage",
    availableSizes: [
      { value: "s", label: "S", stock: 10 },
      { value: "m", label: "M", stock: 5, isPopular: true },
      { value: "l", label: "L", stock: 8 },
      { value: "xl", label: "XL", stock: 12 },
      { value: "xxl", label: "XXL", stock: 0 },
    ],
  },
  // Adding placeholders for other products to keep the arrays consistent
  {
    id: "man-utd-24-25",
    name: "Manchester United Home",
    price: 95.00,
    season: "24/25 Season",
    tag: "Best Seller",
    tagType: "bestseller",
    description: "The official Manchester United home jersey for the 2024/25 season.",
    rating: 4.8,
    reviewsCount: 89,
    inStock: true,
    image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=800&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=800&auto=format&fit=crop"],
    features: ["AEROREADY technology", "Woven crest"],
    category: "Club Teams",
    availableSizes: [
      { value: "s", label: "S", stock: 10 },
      { value: "m", label: "M", stock: 15 },
    ],
  }
];
