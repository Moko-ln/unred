"use client"

import { Brand } from "./Brand";
import {Navbar} from "@/components/partials/header/Navbar";
import {WishListItem} from "@/features/shop/components/WishListItem";
import {useAuth} from "@/features/auth/components/AuthProvider";
import {DashButton} from "@/features/auth/components/button/DashButton";

interface HeaderProps {
    menu?:boolean;
    wishlist?:boolean;
}
export const Header = ({ menu, wishlist }: HeaderProps) => {

    const auth = useAuth();


  return (
    <header className="min-h-20 flex items-center justify-center w-full z-30 shadow-sm bg-white py-4 lg:py-0">
      <div className="container-root w-full">
        <div className="wrapper flex items-center lg:flex-nowrap flex-wrap justify-between">
            <Brand />
            { wishlist && <WishListItem />}
            { menu && <Navbar />}

            { auth && <DashButton />}
        </div>
      </div>
    </header>
  );
};
