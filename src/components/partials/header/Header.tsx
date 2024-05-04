import { Brand } from "./Brand";
import {Navbar} from "@/components/partials/header/Navbar";
import {WishListItem} from "@/features/shop/components/WishListItem";

interface HeaderProps {
    menu?:boolean;
    wishlist?:boolean;
}
export const Header = ({ menu, wishlist }: HeaderProps) => {
  return (
    <header className="min-h-20 flex items-center justify-center w-full z-30 shadow-sm bg-white py-4 lg:py-0">
      <div className="container-root w-full">
        <div className="wrapper flex items-center lg:flex-nowrap flex-wrap justify-between">
            <Brand />
            { wishlist && <WishListItem />}
            { menu && <Navbar />}
        </div>
      </div>
    </header>
  );
};
