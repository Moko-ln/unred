export interface dataCardShoesType {
  id: number;
  title: string;
  price: number;
  model: string;
  description: string;
  image: string;
  slug: string;
  variation: string[];
  size: string[];
}

export interface buttonCartType {
  id: number;
  sm?: Boolean;
  lg?: Boolean;
}

export interface shopSwipperType {
  title: string;
  data?: string[];
}
