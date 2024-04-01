import { buttonCartType } from "@/types";
import { FiShoppingCart } from "react-icons/fi";

export const ButtonCart = ({ id, sm, lg }: buttonCartType) => {
  const handleClick = () => {
    console.log(id);
  };
  return (
    <button
      className={`${sm && "h-10 w-10"} 
      ${
        lg && "h-18 w-18"
      }  p-4 bg-slate-50 text-slate-500 border border-solid border-slate-200 flex items-center justify-center rounded-full z-10`}
      onClick={() => handleClick()}
    >
      <span className={`${sm && "text-sm"} ${lg && "text-2xl"}`}>
        <FiShoppingCart />
      </span>
    </button>
  );
};
