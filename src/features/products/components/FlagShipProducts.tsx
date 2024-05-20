import { useFetchShoes } from "@/hook/useFetchShoes";
import { ListProducts } from "./ListProducts";

export const FlagShipProducts = () => {
  const { shoesData, isLoading, error } = useFetchShoes();

  const LimitShoes: any = shoesData?.slice(0, 3);

  return <ListProducts data={LimitShoes} />;
};
