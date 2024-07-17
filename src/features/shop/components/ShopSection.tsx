"use client"

import { montserrat } from "@/fonts/Fonts";
import { ShopList } from "./ShopList";
import {useState} from "react";

export const ShopSection = () => {
  const [filter] = useState<object>({});

  return (
    <article id="shop" className="relative overflow-hidden py-20">
      <div className="container-root">
        <div className="wrapper flex flex-col gap-10">
          <div className="flex lg:flex-nowrap flex-wrap justify-between items-start border border-slate-200 rounded-2xl min-h-96">
            {/* Content */}
            <div className="lg:w-5/12 w-full flex gap-2 p-10">

              <div className="lg:w-2/3 w-full lg:grow">
                <h2
                    className={`${montserrat.className} lg:text-6xl text-3xl lg:text-left font-extrabold mb-4`}
                >
                  Découvrez nos produits
                </h2>
                <p className="text-slate-500">
                  Des chaussures tendance et confortables pour tous les styles. Nos répliques de bonne qualité chez Unred vous permettent de vous démarquer avec confiance et élégance. Explorez nos nouveautés dès maintenant !
                </p>
              </div>
            </div>

            <div className="lg:order-last order-first lg:w-2/3 w-full min-h-80 bg-gradient-to-br from-black to-[#272727] flex items-center justify-center">
              <p className={`text-slate-100 lg:text-8xl text-6xl ${montserrat.className} font-extrabold`}>Unred</p>
            </div>

            {/* Filter */}
            {/*<Filter />*/}
          </div>

          {/* Filter by Model */}
          {/*<FilterModel setFilter={setFilter}/>*/}

          <ShopList filter={filter} />

          <hr className="bg-slate-800 my-10"/>
        </div>
      </div>
    </article>
  );
};
