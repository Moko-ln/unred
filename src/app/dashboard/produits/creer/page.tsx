"use client";

import { montserrat } from "@/fonts/Fonts";
import { motion } from "framer-motion";

export default function Products() {
  return (
    <motion.article
      className="w-3/12 grow py-8 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", duration: 0.5, ease: "easeIn" }}
    >
      <div className="container-root">
        <div className="wrapper flex flex-col gap-10">
          <div className="relative">
            <h2
              className={`${montserrat.className} text-2xl font-bold tracking-wide text-slate-700`}
            >
              Créer
            </h2>
            <p className={`text-slate-500 text-sm`}>
              Voici les dernières nouvelles de votre magasin pour
              aujourd&lsquo;hui !
            </p>
          </div>

          {/* Forms to create product */}
        </div>
      </div>
    </motion.article>
  );
}
