"use client"

import {buttonCartType, wishListPropsType} from "@/types";
import {FiHeart} from "react-icons/fi";

import {useDispatch, useSelector} from 'react-redux';
import { addItem, removeItem } from '@/redux/WishListSlice';
import {GoHeartFill} from "react-icons/go";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";

export const ButtonLike = ({ id }: buttonCartType) => {

  const [isLiked, setIsLiked] = useState(false);

  const wishList = useSelector((state: wishListPropsType) => state.wishlist.items);

  useEffect(() => {
    if (wishList.includes(id)) {
      setIsLiked(true);
    } else {
        setIsLiked(false)
    }
  }, [isLiked, wishList, id])

  const dispatch = useDispatch();

  const handleClick = () => {
      if(!wishList.includes(id)) {
          dispatch(addItem(id));
      } else {
          dispatch(removeItem(id))
      }
  };

  return (
      <motion.button
          className={`p-1 ${isLiked ? 'bg-slate-200 border-slate-300' : 'bg-slate-50 border-slate-200' } rounded-full border z-20`}
          onClick={handleClick}

          whileHover={{ scale: 1.15 }}
          whileTap={{ scale:.925 }}
          transition={{ type: "spring", duration: 0.2, ease: "ease-in" }}
      >
            <span className={`text-xl ${isLiked ? 'text-black' : 'text-slate-400' }`}>
                <GoHeartFill/>
            </span>
      </motion.button>
  );
};
