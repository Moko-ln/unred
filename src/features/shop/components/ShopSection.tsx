"use client"

import { montserrat } from "@/fonts/Fonts";
import { ShopList } from "./ShopList";
import { FilterModel } from "./filter/FilterModel";
import {useState} from "react";

export const ShopSection = () => {
  const [filter, setFilter] = useState<object>({});

  return (
    <article id="shop" className="relative overflow-hidden">
      <div className="container-root">
        <div className="wrapper flex flex-col gap-10">
          <div className="flex lg:flex-nowrap flex-wrap justify-between items-start border border-slate-200 rounded-2xl min-h-96">
            {/* Content */}
            <div className="lg:w-5/12 w-full flex gap-2 p-10">

              <div className="lg:w-2/3 w-full lg:grow">
                <h2
                    className={`${montserrat.className} lg:text-6xl text-3xl lg:text-left font-extrabold mb-4`}
                >
                  Soyer dans le coup!
                </h2>
                <p className="text-slate-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus autem exercitationem modi ratione, saepe soluta!
                  <span className="block mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    In inventore, nihil! Aspernatur dolore illum magnam.
                  </span>
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
          <FilterModel setFilter={setFilter}/>

          <ShopList filter={filter}/>

          <hr className="bg-slate-800 my-10"/>
        </div>
      </div>
    </article>
  );
};
