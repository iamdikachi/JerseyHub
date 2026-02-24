export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  era: string;
  price: number;
  stock: number;
  status: "In Stock" | "Low Stock" | "Out of Stock";
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Man Utd Home 23/24",
    sku: "MU-2324-H",
    category: "Club",
    era: "2023/24",
    price: 85.00,
    stock: 120,
    status: "In Stock",
    image: "https://images.footballfanatics.com/manchester-united/manchester-united-adidas-home-shirt-2023-24_ss4_p-13374853+u-8v625y6t0v6x6z6h6q6g+v-07e05e8e8e8e8e8e8e8e.jpg?_hv=2&w=900"
  },
  {
    id: "2",
    name: "Brazil World Cup 2002",
    sku: "BR-2002-WC",
    category: "National Team",
    era: "2000s",
    price: 150.00,
    stock: 0,
    status: "Out of Stock",
    image: "https://classicfootballshirts.com/cdn/shop/files/brazil-2002-home-shirt-vocal-no-9-ronaldo-m-2.jpg?v=1711648437"
  },
  {
    id: "3",
    name: "Chelsea Away 98/99",
    sku: "CH-9899-A",
    category: "Club",
    era: "1990s",
    price: 120.00,
    stock: 3,
    status: "Low Stock",
    image: "https://i.ebayimg.com/images/g/lVAAAOSw~oRkd7T2/s-l1200.jpg"
  },
  {
    id: "4",
    name: "Real Madrid Home 16/17",
    sku: "RM-1617-H",
    category: "Club",
    era: "2010s",
    price: 90.00,
    stock: 42,
    status: "In Stock",
    image: "https://i.ebayimg.com/images/g/R6IAAOSw9GZkd7T2/s-l1200.jpg"
  },
  {
    id: "5",
    name: "France Euro 2000",
    sku: "FR-2000-E",
    category: "National Team",
    era: "2000s",
    price: 110.00,
    stock: 8,
    status: "In Stock",
    image: "https://i.ebayimg.com/images/g/Z7IAAOSw~oRkd7T2/s-l1200.jpg"
  },
  {
    id: "6",
    name: "Juventus Home 15/16",
    sku: "JV-1516-H",
    category: "Club",
    era: "2010s",
    price: 75.00,
    stock: 15,
    status: "In Stock",
    image: "https://i.ebayimg.com/images/g/R-IAAOSw~oRkd7T2/s-l1200.jpg"
  }
];

export interface OrderItem {
  id: string;
  name: string;
  size: string;
  qty: number;
  price: number;
  image: string;
  cust?: {
    name: string;
    number: string;
    badge: string;
  };
}

export interface Order {
  id: string;
  customer: {
    name: string;
    email: string;
    avatar: string;
    address: string;
  };
  date: string;
  time: string;
  total: number;
  status: "Pending" | "Paid" | "Processing" | "Shipped" | "Delivered";
  items: OrderItem[];
  needsAction?: boolean;
}

export const orders: Order[] = [
  {
    id: "10234",
    customer: {
      name: "Alex Martin",
      email: "alex.m@example.com",
      avatar: "AM",
      address: "123 Trafford Road, Apt 4B, Manchester, M16 0RA, UK"
    },
    date: "Oct 24, 2023",
    time: "10:42 AM",
    total: 120.00,
    status: "Pending",
    items: [
      {
        id: "p1",
        name: "Man Utd Home Kit 23/24",
        size: "L",
        qty: 1,
        price: 120.00,
        image: "https://images.footballfanatics.com/manchester-united/manchester-united-adidas-home-shirt-2023-24_ss4_p-13374853+u-8v625y6t0v6x6z6h6q6g+v-07e05e8e8e8e8e8e8e8e.jpg?_hv=2&w=900",
        cust: { name: "RASHFORD", number: "10", badge: "Premier League" }
      }
    ],
    needsAction: true
  },
  {
    id: "10233",
    customer: {
      name: "Sarah Johnson",
      email: "sarah.j@test.com",
      avatar: "SJ",
      address: "45 London Road, London, SE1 7PB, UK"
    },
    date: "Oct 24, 2023",
    time: "09:15 AM",
    total: 85.00,
    status: "Paid",
    items: [
      {
        id: "p2",
        name: "Brazil World Cup 2002",
        size: "M",
        qty: 1,
        price: 85.00,
        image: "https://classicfootballshirts.com/cdn/shop/files/brazil-2002-home-shirt-vocal-no-9-ronaldo-m-2.jpg?v=1711648437"
      }
    ]
  },
  {
    id: "10232",
    customer: {
      name: "Mike Brown",
      email: "mike.b@email.com",
      avatar: "MB",
      address: "88 Castle St, Edinburgh, EH2 3AB, UK"
    },
    date: "Oct 23, 2023",
    time: "04:30 PM",
    total: 210.00,
    status: "Processing",
    items: [
      {
        id: "p3",
        name: "Chelsea Away 98/99",
        size: "XL",
        qty: 1,
        price: 120.00,
        image: "https://i.ebayimg.com/images/g/lVAAAOSw~oRkd7T2/s-l1200.jpg"
      },
      {
        id: "p4",
        name: "Real Madrid Home 16/17",
        size: "L",
        qty: 1,
        price: 90.00,
        image: "https://i.ebayimg.com/images/g/R6IAAOSw9GZkd7T2/s-l1200.jpg"
      }
    ]
  },
  {
    id: "10231",
    customer: {
      name: "Lisa Wong",
      email: "lisa.w@site.com",
      avatar: "LW",
      address: "12 Dragon Way, Cardiff, CF10 1DD, UK"
    },
    date: "Oct 23, 2023",
    time: "11:20 AM",
    total: 95.00,
    status: "Shipped",
    items: [
      {
        id: "p5",
        name: "France Euro 2000",
        size: "S",
        qty: 1,
        price: 95.00,
        image: "https://i.ebayimg.com/images/g/Z7IAAOSw~oRkd7T2/s-l1200.jpg"
      }
    ]
  },
  {
    id: "10230",
    customer: {
      name: "David Green",
      email: "david.g@domain.com",
      avatar: "DG",
      address: "77 Green Lane, Birmingham, B1 1AA, UK"
    },
    date: "Oct 22, 2023",
    time: "02:45 PM",
    total: 150.00,
    status: "Delivered",
    items: [
      {
        id: "p6",
        name: "Juventus Home 15/16",
        size: "M",
        qty: 2,
        price: 75.00,
        image: "https://i.ebayimg.com/images/g/R-IAAOSw~oRkd7T2/s-l1200.jpg"
      }
    ]
  }
];
