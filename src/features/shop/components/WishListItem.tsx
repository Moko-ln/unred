"use client"

import {useRouter} from "next/navigation";
import {useSelector} from "react-redux";
import {GoHeartFill} from "react-icons/go";
import {wishListPropsType} from "@/types";

export const WishListItem = () => {

    const wishList = useSelector((state: wishListPropsType) => state.wishlist.items);
    
    let router = useRouter();

    const handleClick = () => {
        return router.push("/wishlist");
    };

  return (
      <div className="w-2/5 flex justify-end">
          <button
              className={`p-1 relative bg-transparent border-slate-100 rounded-full border`}
              onClick={ handleClick }
          >
            <span className={`text-xl text-slate-500`}>
                <GoHeartFill/>
            </span>

          { wishList.length !== 0 &&
              <span className="absolute -right-2 -top-2 text-[#fafafa] bg-rose-500 rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  {wishList.length}
              </span>
          }
          </button>
      </div>

  );
};
