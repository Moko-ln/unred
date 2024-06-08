"use client"

import { CardShoes } from "@/features/shoes/components/CardShoes";
import {useFetchShoes} from "@/hook/useFetchShoes";
import {dataCardShoesType, filterType} from "@/types";

export const ShopList = ({ filter } : filterType) => {
  const { shoesData, isLoading, error } = useFetchShoes();

  return (
    <ul className="grid lg:grid-cols-4 grid-cols-2 gap-8">
      { shoesData?.map(( item: dataCardShoesType ) => (
        <li key={item.id}>
          <CardShoes
            id={item.id}
            title={item.title}
            price={item.price}
            model={item.model}
            image={item.image}
            slug={item.slug}
            variation={item.variation}
          />
        </li>
      )) }
    </ul>
  );
};
