"use client";

import { CardShoes } from "@/features/shoes/components/CardShoes";
import { dataCardShoesType, wishListPropsType } from "@/types";
import { useSelector } from "react-redux";

import { ListComp } from "@/components/ListComp";
import { useFetchShoes } from "@/hook/useFetchShoes";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { GoHeartFill } from "react-icons/go";

export default function WishlistPage() {
  const myItems = useSelector(
    (state: wishListPropsType) => state.wishlist.items
  );
  const { shoesData, isLoading, error } = useFetchShoes();

  const wishList = shoesData?.filter((item: { id: any }) =>
    myItems.includes(item.id)
  );

  return (
    <motion.article
      className="min-h-[700px] flex justify-center lg: pt-10 py-28"
      initial={{ opacity: 0, translateY: -20 }}
      exit={{ opacity: 0, translateY: -20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: "spring", duration: 0.6, ease: "easeIn" }}
    >
      <div className="container-root">
        <div className="wrapper min-h-[700px] flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-2xl">Ma wishlist</h2>
            <Link
              href="./sneakers"
              className="order-first flex items-center gap-2 text-sm text-slate-500 hover:text-blue-500 transition"
            >
              <span>
                <FiArrowLeft />
              </span>{" "}
              Sneakers
            </Link>
            {wishList?.length !== 0 && (
              <span className="text-slate-700">{wishList?.length} Produit</span>
            )}
          </div>

          {/* WishList */}
          {wishList?.length === 0 ? (
            <p className="absolute transform left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 items-center justify-center">
              <span className={`text-5xl text-rose-300`}>
                <GoHeartFill />
              </span>
              <span className="text-slate-500 text-center">
                Votre Wishlist est vide
              </span>
            </p>
          ) : (
            <ul className="grid lg:grid-cols-4 grid-cols-2 gap-8">
              {wishList?.map((item: dataCardShoesType) => (
                <li key={item.id}>
                  <CardShoes
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    model={item.model}
                    image={item.image}
                    slug={item.slug}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>

        <ListComp />
      </div>
    </motion.article>
  );
}
