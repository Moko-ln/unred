import data from "@/data/shoesMan.json";
import { CardShoes } from "@/features/shoes/components/CardShoes";

export const ShopList = () => {
  return (
    <ul className="grid grid-cols-4 gap-8">
      {data.shoes.map((item) => (
        <li key={item.id}>
          <CardShoes
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            slug={item.slug}
          />
        </li>
      ))}
    </ul>
  );
};
