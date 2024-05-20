"use client";

import { useAuth } from "@/features/auth/components/AuthProvider";
import { ChartComp } from "@/features/auth/components/ChartComp";
import { FlagShipProducts } from "@/features/products/components/FlagShipProducts";
import { montserrat } from "@/fonts/Fonts";
import { AnimatePresence, motion } from "framer-motion";
import { FiActivity, FiChevronDown } from "react-icons/fi";

export default function Dashboard() {
  const auth = useAuth();

  return (
    <AnimatePresence>
      {auth && (
        <motion.article
          className="w-3/12 grow py-8 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "spring", duration: 0.5, ease: "easeIn" }}
        >
          <div className="container-root">
            <div className="wrapper flex flex-col gap-10">
              <div>
                <h2
                  className={`${montserrat.className} text-2xl font-bold tracking-wide`}
                >
                  Dashboard
                </h2>
                <p className={`text-slate-500 text-sm`}>
                  Voici les dernières nouvelles de votre magasin pour
                  aujourd&lsquo;hui !
                </p>
              </div>

              {/* List Box */}
              <div>
                <ul className={` flex items-center justify-start gap-8`}>
                  {listBox.map((item, i) => (
                    <li
                      key={item.id}
                      className={`${item.bgColor} h-32 w-3/5 relative rounded-2xl py-4 px-8`}
                    >
                      <span
                        className={`${montserrat.className} text-4xl font-medium mb-4`}
                      >
                        {item.total}k
                      </span>
                      <p
                        className={`${montserrat.className} text-xs text-slate-500`}
                      >
                        {item.title}
                      </p>
                      <span
                        className={`${item.textColor} text-3xl absolute right-10 bottom-4`}
                      >
                        <FiActivity />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Graphique */}

              <div className="flex gap-10 items-center">
                <div className={` flex flex-col gap-8`}>
                  <div className="flex items-center justify-between">
                    <p
                      className={`${montserrat.className} text-lg font-bold text-blue-500 `}
                    >
                      détails de la vente
                    </p>
                    <button className="border border-slate-200 rounded-full p-2 text-sm flex items-center gap-2 text-slate-500">
                      Par mois
                      <span>
                        <FiChevronDown />
                      </span>
                    </button>
                  </div>

                  <ChartComp line />
                </div>

                <div className={` flex flex-col gap-8`}>
                  <div className="flex items-center justify-between">
                    <p
                      className={`${montserrat.className} text-lg font-bold text-blue-500 `}
                    >
                      détails des commandes
                    </p>
                    <button className="border border-slate-200 rounded-full p-2 text-sm flex items-center gap-2 text-slate-500">
                      Par mois
                      <span>
                        <FiChevronDown />
                      </span>
                    </button>
                  </div>

                  <ChartComp />
                </div>
              </div>

              {/* List  */}

              <div className="flex flex-col gap-4">
                <p
                  className={`${montserrat.className} text-lg font-bold text-blue-500 `}
                >
                  Produit phares
                </p>

                <FlagShipProducts />
              </div>
            </div>
          </div>
        </motion.article>
      )}
    </AnimatePresence>
  );
}

const listBox = [
  {
    id: 1,
    title: "Clients total",
    total: 32,
    bgColor: "bg-indigo-50",
    textColor: "text-indigo-500",
  },
  {
    id: 2,
    title: "Revenue total",
    total: 200,
    bgColor: "bg-lime-50",
    textColor: "text-lime-500",
  },
  {
    id: 3,
    title: "Commande total",
    total: 12,
    bgColor: "bg-sky-50",
    textColor: "text-sky-500",
  },
];
