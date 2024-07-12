import { montserrat } from "@/fonts/Fonts";
import { FiPercent, FiShoppingCart, FiTruck } from "react-icons/fi";

export const ListComp = () => {
  return (
    <ul className="flex lg:flex-nowrap flex-wrap items-center justify-center lg:gap-10 gap-4">
      {dataList.map((item) => (
        <li
          key={item.id}
          className="lg:w-2/5 w-full flex flex-col gap-2 border border-solid border-slate-200 p-4 rounded-xl"
        >
          <p
            className={`${montserrat.className} text-lg font-extrabold text-slate-800`}
          >
            <span className="mb-2 p-2 bg-slate-50 border border-solid border-slate-800 text-slate-800 rounded-full w-10 h-10 flex items-center justify-center">
              {item.icon}
            </span>
            {item.title}
          </p>
          <p className="text-slate-500">{item.text}</p>
        </li>
      ))}
    </ul>
  );
};

const dataList = [
  {
    id: 1,
    title: "Commander",
    text: "Sélectionnez vos chaussures préférées et passez commande en quelques clics.",
    icon: <FiShoppingCart />,
  },
  {
    id: 2,
    title: "Livrer",
    text: "Recevez votre commande rapidement avec notre service de livraison fiable.",
    icon: <FiTruck />,
  },
  {
    id: 3,
    title: "Payer",
    text: "Payez facilement à la livraison. Profitez d'un processus sécurisé et pratique, sans tracas.",
    icon: <FiPercent />,
  },
];
