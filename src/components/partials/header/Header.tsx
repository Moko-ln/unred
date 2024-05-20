"use client";

import { Navbar } from "@/components/partials/header/Navbar";
import { useAuth } from "@/features/auth/components/AuthProvider";
import { DashButton } from "@/features/auth/components/button/DashButton";
import { WishListItem } from "@/features/shop/components/WishListItem";
import { Brand } from "./Brand";

interface HeaderProps {
  menu?: boolean;
  wishlist?: boolean;
}
export const Header = ({ menu, wishlist }: HeaderProps) => {
  const auth = useAuth();

  return (
    <header
      className={`${auth ? "items-start justify-start flex-col" : "items-center justify-center"} min-h-20 flex w-full z-30 shadow-sm bg-white`}
    >
      <div
        className={`container-root w-full ${auth ? "h-16 flex items-center justify-center" : "h-full"}`}
      >
        <div className="wrapper flex items-center lg:flex-nowrap flex-wrap justify-between">
          <Brand />
          {wishlist && <WishListItem />}
          {menu && <Navbar />}
        </div>
      </div>
      {auth && <DashButton />}
    </header>
  );
};
