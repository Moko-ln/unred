import { Cart } from "@/features/shop/components/Cart";
import { montserrat } from "@/fonts/Fonts";
import { Brand } from "./Brand";

export const Header = () => {
  return (
    <header className="h-20 flex items-center justify-center w-full fixed top-0 left-0 z-20">
      <div className="container-root w-full">
        <div className="wrapper flex items-center justify-between">
          <Brand />
          <Cart />
          <ul className="flex items-center justify-center gap-4 order-first">
            <li className="text-slate-800">
              <button
                className={`${montserrat.className} text-slate-800 font-semibold`}
              >
                Homme
              </button>
            </li>
            <li className="text-slate-300 ">
              <button className={`${montserrat.className} text-slate-300`}>
                Femme
              </button>
            </li>
            <li className="text-slate-300 ">
              <button className={`${montserrat.className} text-slate-300`}>
                Promo
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
