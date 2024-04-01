import { FiShoppingCart } from "react-icons/fi";

export const Cart = () => {
  return (
    <button className="border border-solid border-slate-300 rounded-full h-10 w-10 flex items-center justify-center">
      <span className="text-slate-800 text-sm font-semibold">
        <FiShoppingCart />
      </span>
    </button>
  );
};
