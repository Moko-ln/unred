import {number, object, string} from "prop-types";
import React from "react";

export interface dataCardShoesType {
  id: number;
  title: string;
  price: number;
  model: string;
  description?: string;
  image: string;
  slug: string;
  variation?: variationType[];
}

export interface variationType {
  id:number;
  color:string;
  classColor:string;
  images:string[]
  detail?: detailType[];
}

export interface detailType {
  classColor: string;
  id:number;
  size:number;
  stocks:number
}

export interface dataShoesType {
  shoes: dataCardShoesType[];
}

export interface filterType {
  filter: object;
}
export interface setFilterType {
  setFilter: React.Dispatch<React.SetStateAction<filterType>>;
}
export interface buttonCartType {
  id: number;
}

export interface shopSwipperType {
  title: string;
}

export interface modelDataTYpe {
  id: number;
  title:string;
}

export interface sortByType {
  id: number;
  title: string;
}

export interface wishListPropsType {
  wishlist: {
    items: any[]
  }
}

export interface commandePropsType {
  commande: {
    id: number
  }
}

export interface dataHeroType {
  id:number;
  title:string;
  text:string;
  image: string | undefined;
  path:string;
}

