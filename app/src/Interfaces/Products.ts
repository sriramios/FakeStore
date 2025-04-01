export interface Product {
  id: number;
  title: String;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
  units: number;
}

export interface Rating {
  rate: number;
  count: number;
}
