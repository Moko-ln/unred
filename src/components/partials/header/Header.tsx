"use client";

import { Navbar } from "@/components/partials/header/Navbar";
import { WishListItem } from "@/features/shop/components/WishListItem";
import { Brand } from "./Brand";

interface HeaderProps {
  menu?: boolean;
  wishlist?: boolean;
}
export const Header = ({ menu, wishlist }: HeaderProps) => {
  return (
    <header
      className={`items-center justify-center min-h-20 flex w-full z-30 shadow-sm bg-white`}
    >
      <div
        className={`container-root w-full h-full `}
      >
        <div className="wrapper flex items-center lg:flex-nowrap flex-wrap justify-between">
          <Brand />
          {wishlist && <WishListItem />}
          {menu && <Navbar />}
        </div>
      </div>
    </header>
  );
};
