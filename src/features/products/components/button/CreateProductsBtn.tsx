import { montserrat } from "@/fonts/Fonts";
import { useRouter } from "next/navigation";
import { FiPlus } from "react-icons/fi";

export default function CreateProductsBtn() {
  const router = useRouter();

  const handleClick = () => {
    return router.push("produits/creer");
  };

  return (
    <button
      className={` ${montserrat.className} absolute right-0 top-0 bg-blue-500 rounded-full p-4 text-slate-50 font-semibold flex items-center gap-2`}
      onClick={handleClick}
    >
      <span className="text-xl">
        <FiPlus />
      </span>
      Créer
    </button>
  );
}
