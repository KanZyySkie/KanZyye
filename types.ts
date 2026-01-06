
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  tag?: string;
  accentColor?: string;
}

export interface CartItem extends Product {
  quantity: number;
  options?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  isMember: boolean;
}

export interface Order {
  id: string;
  date: string;
  status: 'Selesai' | 'Proses' | 'Dibatalkan';
  items: CartItem[];
  total: number;
}
