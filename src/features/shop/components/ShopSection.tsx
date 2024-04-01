import { montserrat } from "@/fonts/Fonts";
import { ShopList } from "./ShopList";
import { Filter } from "./filter/Filter";
import { FilterModel } from "./filter/FilterModel";

export const ShopSection = () => {
  return (
    <article>
      <div className="container-root">
        <div className="wrapper flex flex-col gap-10">
          <div className="flex justify-between items-start">
            {/* Content */}
            <div className="w-5/12">
              <h2
                className={`${montserrat.className} text-6xl font-extrabold mb-4`}
              >
                Soyer dans le coup!
              </h2>
            </div>

            {/* Filter */}
            <Filter />
          </div>

          {/* Filter by Model */}
          <FilterModel />

          <ShopList />

          <hr className="bg-slate-800 my-10" />
        </div>
      </div>
    </article>
  );
};
